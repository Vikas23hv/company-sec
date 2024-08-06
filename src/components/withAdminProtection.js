'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '../hooks/useAuth';
import { CircularProgress, Container } from '@mui/material';

export function withAdminProtection(WrappedComponent) {
  return function AdminProtectedRoute(props) {
    const { user, loading, isAdmin } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !isAdmin) {
        router.push('/');
      }
    }, [loading, isAdmin, router]);

    if (loading) {
      return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Container>
      );
    }

    if (!isAdmin) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}