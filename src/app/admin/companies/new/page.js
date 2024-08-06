'use client';

import React from 'react';
import { Container, Typography } from '@mui/material';
import { withAdminProtection } from '../../../../components/withAdminProtection';
import Layout from '../../../../components/Layout';
import CompanyForm from '../../../../components/CompanyForm';

function AddCompanyPage() {
  return (
    <Layout>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Company
        </Typography>
        <CompanyForm />
      </Container>
    </Layout>
  );
}

export default withAdminProtection(AddCompanyPage);