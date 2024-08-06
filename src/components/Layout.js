// src/components/Layout.js
'use client';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import useAuth from '../hooks/useAuth';

export default function Layout({ children }) {
  const router = useRouter();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/signin');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Company Directory
          </Typography>
          {user && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
}