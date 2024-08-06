'use client';

import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { withAdminProtection } from '../../../components/withAdminProtection';
import Layout from '../../../components/Layout';

function AdminDashboard() {
  const router = useRouter();

  return (
    <Layout>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => router.push('/admin/companies')}
          sx={{ marginRight: 2 }}
        >
          Manage Companies
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => router.push('/admin/users')}
        >
          Manage Users
        </Button>
      </Container>
    </Layout>
  );
}

export default withAdminProtection(AdminDashboard);