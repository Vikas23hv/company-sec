// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
// import { useRouter } from 'next/navigation';
// import { withAdminProtection } from '../../../components/withAdminProtection';
// import Layout from '../../../components/Layout';
// import { getCompanies } from '../../../services/firebaseService';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// function AdminCompanyList() {
//   const router = useRouter();
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       const companiesData = await getCompanies();
//       setCompanies(companiesData);
//     };

//     fetchCompanies();
//   }, []);

//   return (
//     <Layout>
//       <Container>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Company Management
//         </Typography>
//         <Button 
//           variant="contained" 
//           color="primary" 
//           onClick={() => router.push('/admin/companies/new')}
//           sx={{ marginBottom: '20px' }}
//         >
//           Add New Company
//         </Button>
//         <List>
//           {companies.map((company) => (
//             <ListItem key={company.id}>
//               <ListItemText primary={company.name} secondary={company.description} />
//               <ListItemSecondaryAction>
//                 <IconButton edge="end" aria-label="edit" onClick={() => router.push(`/admin/companies/${company.id}`)}>
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(company.id)}>
//                   <DeleteIcon />
//                 </IconButton>
//               </ListItemSecondaryAction>
//             </ListItem>
//           ))}
//         </List>
//       </Container>
//     </Layout>
//   );
// }

// export default withAdminProtection(AdminCompanyList);

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Button, List, ListItem, Grid, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
// import { useRouter } from 'next/navigation';
// import { withAdminProtection } from '../../../components/withAdminProtection';
// import Layout from '../../../components/Layout';
// import { getCompanies, deleteCompany } from '../../../services/firebaseService';

// function AdminCompanyList() {
//   const router = useRouter();
//   const [companies, setCompanies] = useState([]);
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
//   const [companyToDelete, setCompanyToDelete] = useState(null);

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   const fetchCompanies = async () => {
//     try {
//       const companiesData = await getCompanies();
//       setCompanies(companiesData);
//     } catch (error) {
//       console.error('Error fetching companies:', error);
//     }
//   };

//   const handleEdit = (companyId) => {
//     router.push(`/admin/companies/${companyId}`);
//   };

//   const handleDeleteClick = (company) => {
//     setCompanyToDelete(company);
//     setDeleteDialogOpen(true);
//   };

//   const handleDeleteConfirm = async () => {
//     if (companyToDelete) {
//       await deleteCompany(companyToDelete.id);
//       setDeleteDialogOpen(false);
//       setCompanyToDelete(null);
//       fetchCompanies();
//     }
//   };

//   const handleDeleteCancel = () => {
//     setDeleteDialogOpen(false);
//     setCompanyToDelete(null);
//   };

//   return (
//     <Layout>
//       <Container>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Company Management
//         </Typography>
//         <Button 
//           variant="contained" 
//           color="primary" 
//           onClick={() => router.push('/admin/companies/new')}
//           sx={{ marginBottom: '20px' }}
//         >
//           Add New Company
//         </Button>
//         <List>
//           {companies.map((company) => (
//             <ListItem key={company.id} disablePadding>
//               <Paper elevation={3} sx={{ width: '100%', mb: 2, p: 2 }}>
//                 <Grid container spacing={2} alignItems="center">
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="h6">{company.name}</Typography>
//                     <Typography variant="body2">{company.description}</Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={6} container justifyContent="flex-end" spacing={1}>
//                     <Grid item>
//                       <Button
//                         variant="outlined"
//                         color="primary"
//                         onClick={() => handleEdit(company.id)}
//                       >
//                         Edit
//                       </Button>
//                     </Grid>
//                     <Grid item>
//                       <Button
//                         variant="outlined"
//                         color="error"
//                         onClick={() => handleDeleteClick(company)}
//                       >
//                         Delete
//                       </Button>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Paper>
//             </ListItem>
//           ))}
//         </List>
//         <Dialog
//           open={deleteDialogOpen}
//           onClose={handleDeleteCancel}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               Are you sure you want to delete {companyToDelete?.name}? This action cannot be undone.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleDeleteCancel}>Cancel</Button>
//             <Button onClick={handleDeleteConfirm} color="error" autoFocus>
//               Delete
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Container>
//     </Layout>
//   );
// }

// export default withAdminProtection(AdminCompanyList);

'use client';

import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useRouter } from 'next/navigation';
import { withAdminProtection } from '../../../components/withAdminProtection';
import Layout from '../../../components/Layout';
import { getCompanies, deleteCompany } from '../../../services/firebaseService';

function AdminCompanyList() {
  const router = useRouter();
  const [companies, setCompanies] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [companyToDelete, setCompanyToDelete] = useState(null);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const companiesData = await getCompanies();
      setCompanies(companiesData);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const handleEdit = (companyId) => {
    router.push(`/admin/companies/${companyId}`);
  };

  const handleDeleteClick = (company) => {
    setCompanyToDelete(company);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (companyToDelete) {
      await deleteCompany(companyToDelete.id);
      setDeleteDialogOpen(false);
      setCompanyToDelete(null);
      fetchCompanies();
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setCompanyToDelete(null);
  };

  return (
    <Layout>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Company Management
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => router.push('/admin/companies/new')}
          sx={{ marginBottom: '20px' }}
        >
          Add New Company
        </Button>
        <Grid container spacing={3}>
          {companies.map((company) => (
            <Grid item xs={12} sm={6} md={4} key={company.id}>
              <Card>
                {company.image && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={company.image}
                    alt={company.name}
                  />
                )}
                <CardContent>
                  <Typography variant="h6">{company.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {company.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleEdit(company.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDeleteClick(company)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog
          open={deleteDialogOpen}
          onClose={handleDeleteCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete {companyToDelete?.name}? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCancel}>Cancel</Button>
            <Button onClick={handleDeleteConfirm} color="error" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Layout>
  );
}

export default withAdminProtection(AdminCompanyList);
