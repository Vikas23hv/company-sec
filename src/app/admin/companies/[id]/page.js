// src/app/admin/companies/[id]/page.js
'use client';

import React from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { withAdminProtection } from '../../../../components/withAdminProtection';
import Layout from '../../../../components/Layout';
import CompanyForm from '../../../../components/CompanyForm';

function EditCompanyPage() {
  const { id } = useParams();

  return (
    <Layout>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Company
        </Typography>
        <CompanyForm companyId={id} />
      </Container>
    </Layout>
  );
}

export default withAdminProtection(EditCompanyPage);
