'use client';

import React, { useState, useEffect } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { addCompany, updateCompany, getCompanyById } from '../services/firebaseService';

export default function CompanyForm({ companyId }) {
  const router = useRouter();
  const [company, setCompany] = useState({ name: '', description: '', image: '', link: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchCompany = async () => {
      if (companyId) {
        const companyData = await getCompanyById(companyId);
        if (companyData) {
          setCompany(companyData);
        }
      }
    };

    fetchCompany();
  }, [companyId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (companyId) {
        await updateCompany(companyId, company);
      } else {
        await addCompany(company);
      }
      router.push('/admin/companies');
    } catch (error) {
      console.error('Error saving company: ', error);
    }
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Company Name"
        name="name"
        value={company.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={company.description}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
      />
      <TextField
        fullWidth
        label="Image URL"
        name="image"
        value={company.image}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Company Link"
        name="link"
        value={company.link}
        onChange={handleChange}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
        {isSubmitting ? <CircularProgress size={24} /> : (companyId ? 'Update Company' : 'Add Company')}
      </Button>
    </form>
  );
}