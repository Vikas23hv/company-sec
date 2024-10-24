
'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Typography, Box, Container, CircularProgress, Link as MuiLink, Paper } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Layout from '../../../components/Layout';
import { getCompanyById } from '../../../services/firebaseService';

export default function CompanyDetail() {
  const { id } = useParams();
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isClientReady, setIsClientReady] = useState(false);
  const [company, setCompany] = useState(null);
  const [companyLoading, setCompanyLoading] = useState(true);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  useEffect(() => {
    if (isClientReady && !loading && !user) {
      router.push('/signin');
    }
  }, [user, loading, router, isClientReady]);

  useEffect(() => {
    const fetchCompany = async () => {
      if (user && id) {
        setCompanyLoading(true);
        const companyData = await getCompanyById(id);
        setCompany(companyData);
        setCompanyLoading(false);
      }
    };

    fetchCompany();
  }, [user, id]);

  if (!isClientReady || loading || companyLoading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!user) {
    return null;
  }

  if (!company) return <p>Company not found.</p>;

  return (
    <Layout>
      <Container sx={{ backgroundColor: '#1E1E1E', minHeight: '100vh', padding: '20px', color: '#FFFFFF' }}>
        <Box 
          component="img" 
          src={company.image} 
          alt={company.name} 
          sx={{ 
            width: '100%',
            maxHeight: '300px',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            marginBottom: '20px'
          }} 
        />
        <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
          {company.name}
        </Typography>
        <Paper elevation={3} sx={{ padding: '15px', marginBottom: '20px', backgroundColor: '#2A2A2A' }}>
          <Typography variant="h6" sx={{ marginBottom: '10px' }}>
            Company Link
          </Typography>
          <MuiLink href={company.link} target="_blank" rel="noopener noreferrer" sx={{ color: '#4FC3F7' }}>
            {company.link}
          </MuiLink>
        </Paper>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {company.description}
        </Typography>
      </Container>
    </Layout>
  );
}