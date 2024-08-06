'use client';

import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import useAuth from '../../hooks/useAuth';
import Layout from '../../components/Layout';
import { getCompanies } from '../../services/firebaseService';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AdminDashboard() {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();
  const [companies, setCompanies] = useState([]);
  const [companiesLoading, setCompaniesLoading] = useState(true);

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push('/');
    }
  }, [loading, isAdmin, router]);

  useEffect(() => {
    const fetchCompanies = async () => {
      if (isAdmin) {
        setCompaniesLoading(true);
        const companiesData = await getCompanies();
        setCompanies(companiesData);
        setCompaniesLoading(false);
      }
    };

    fetchCompanies();
  }, [isAdmin]);

  if (loading || companiesLoading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <Layout>
      <Container sx={{ backgroundColor: '#1E1E1E', minHeight: '100vh', padding: '20px', color: '#FFFFFF' }}>
        <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
          Admin Dashboard
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => router.push('/admin/company/new')}
          sx={{ marginBottom: '20px' }}
        >
          Add New Company
        </Button>
        <List>
          {companies.map((company) => (
            <ListItem key={company.id} sx={{ backgroundColor: '#121212', marginBottom: '10px', borderRadius: '4px' }}>
              <ListItemText primary={company.name} secondary={company.description} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => router.push(`/admin/company/edit/${company.id}`)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(company.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  );
}