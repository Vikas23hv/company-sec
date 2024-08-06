// setupAdmin.js
require('dotenv').config();
const { setupInitialAdmin } = require('./utils/setupInitialAdmin');

setupInitialAdmin('vikashv2316@gmail.com')
  .then(() => {
    console.log('Admin setup complete');
    process.exit();
  })
  .catch((error) => {
    console.error('Error setting up admin:', error);
    process.exit(1);
  });