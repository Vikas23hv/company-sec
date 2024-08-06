// // src/app/companies/page.js
// 'use client';
// import React from 'react';
// import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
// import Link from 'next/link';
// import useAuth from '../../hooks/useAuth';
// import Layout from '../../components/Layout';

// const companies = [
//   { id: 1, name: 'Company A', image: '/images/company-a.jpg' },
//   { id: 2, name: 'Company B', image: '/images/company-b.jpg' },
//   { id: 3, name: 'Google', image: '/abc.jpg' },
//   // Add more companies as needed
// ];

// export default function CompanyList() {
//   const { user } = useAuth();

//   if (!user) return null;

//   return (
//     <Layout>
//       <Grid container spacing={4}>
//         {companies.map((company) => (
//           <Grid item xs={12} sm={6} md={3} key={company.id}>
//             <Link href={`/companies/${company.id}`} passHref>
//               <Card sx={{ cursor: 'pointer' }}>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={company.image}
//                   alt={company.name}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {company.name}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Link>
//           </Grid>
//         ))}
//       </Grid>
//     </Layout>
//   );
// }

// src/app/companies/page.js
// src/app/companies/page.js
// 'use client';
// import React from 'react';
// import { Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';
// import Link from 'next/link';
// import useAuth from '../../hooks/useAuth';
// import Layout from '../../components/Layout';

// const companies = [
//   { id: 1, name: 'Company A', image: '/images/company-a.jpg' },
//   { id: 2, name: 'Company B', image: '/images/company-b.jpg' },
//   { id: 3, name: 'Google', image: '/abc.jpg' },
//   // Add more companies as needed
// ];

// export default function CompanyList() {
//   const { user } = useAuth();

//   if (!user) return null;

//   return (
//     <Layout>
//       <Container sx={{ backgroundColor: ' #1E1E1E', minHeight: '100vh', padding: '20px' }}>
//         <Grid container spacing={4}>
//           {companies.map((company) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
//               <Link href={`/companies/${company.id}`} passHref>
//                 <Card
//                   sx={{
//                     cursor: 'pointer',
//                     backgroundColor: '#121212',
//                     color: '#FFFFFF',
//                     transition: 'transform 0.2s, box-shadow 0.2s',
//                     '&:hover': {
//                       transform: 'scale(1.05)',
//                       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="140"
//                     image={company.image}
//                     alt={company.name}
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h6" component="div">
//                       {company.name}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Layout>
//   );
// }
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Grid, Card, CardMedia, CardContent, Typography, Container, CircularProgress } from '@mui/material';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import useAuth from '../../hooks/useAuth';
// import Layout from '../../components/Layout';
// import { getCompanies } from '../../firebaseService';

// export default function CompanyList() {
//   const { user, loading } = useAuth();
//   const router = useRouter();
//   const [isClientReady, setIsClientReady] = useState(false);
//   const [companies, setCompanies] = useState([]);
//   const [companiesLoading, setCompaniesLoading] = useState(true);

//   useEffect(() => {
//     setIsClientReady(true);
//   }, []);

//   useEffect(() => {
//     if (isClientReady && !loading && !user) {
//       router.push('/signin');
//     }
//   }, [user, loading, router, isClientReady]);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       if (user) {
//         setCompaniesLoading(true);
//         const companiesData = await getCompanies();
//         setCompanies(companiesData);
//         setCompaniesLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, [user]);

//   if (!isClientReady || loading || companiesLoading) {
//     return (
//       <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//       </Container>
//     );
//   }

//   if (!user) {
//     return null;
//   }

//   return (
//     <Layout>
//       <Container sx={{ backgroundColor: '#1E1E1E', minHeight: '100vh', padding: '20px' }}>
//         <Typography variant="h4" component="h1" sx={{ color: '#FFFFFF', marginBottom: '20px' }}>
//           Companies
//         </Typography>
//         <Grid container spacing={4}>
//           {companies.map((company) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
//               <Link href={`/companies/${company.id}`} passHref style={{ textDecoration: 'none' }}>
//                 <Card
//                   sx={{
//                     cursor: 'pointer',
//                     backgroundColor: '#121212',
//                     color: '#FFFFFF',
//                     transition: 'transform 0.2s, box-shadow 0.2s',
//                     '&:hover': {
//                       transform: 'scale(1.05)',
//                       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="140"
//                     image={company.image}
//                     alt={company.name}
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h6" component="div">
//                       {company.name}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Layout>
//   );
// }

// src/app/companies/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container, CircularProgress } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useAuth from '../../hooks/useAuth';
import Layout from '../../components/Layout';
import { getCompanies } from '../../services/firebaseService';

export default function CompanyList() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isClientReady, setIsClientReady] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [companiesLoading, setCompaniesLoading] = useState(true);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  useEffect(() => {
    if (isClientReady && !loading && !user) {
      router.push('/signin');
    }
  }, [user, loading, router, isClientReady]);

  useEffect(() => {
    const fetchCompanies = async () => {
      if (user) {
        setCompaniesLoading(true);
        const companiesData = await getCompanies();
        setCompanies(companiesData);
        setCompaniesLoading(false);
      }
    };

    fetchCompanies();
  }, [user]);

  if (!isClientReady || loading || companiesLoading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <Container sx={{ backgroundColor: '#1E1E1E', minHeight: '100vh', padding: '20px' }}>
        <Typography variant="h4" component="h1" sx={{ color: '#FFFFFF', marginBottom: '20px' }}>
          Companies
        </Typography>
        <Grid container spacing={4}>
          {companies.map((company) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
              <Link href={`/companies/${company.id}`} passHref style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: '#121212',
                    color: '#FFFFFF',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={company.image}
                    alt={company.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {company.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}