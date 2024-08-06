require('dotenv').config();
const { removeAdmin } = require('./utils/setupInitialAdmin');

const emailToRemove = 'admin-to-remove@example.com';

console.log(`Attempting to remove admin privileges from: ${emailToRemove}`);
console.log('Firebase Project ID:', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);

removeAdmin(emailToRemove)
  .then(() => {
    console.log('Admin removal process complete');
    process.exit();
  })
  .catch((error) => {
    console.error('Error in admin removal process:', error);
    process.exit(1);
  });