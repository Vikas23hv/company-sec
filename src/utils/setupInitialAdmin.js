const admin = require('firebase-admin');

function initializeFirebase() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
  }
}

async function setupInitialAdmin(email) {
  try {
    initializeFirebase();

    // Check if the user already exists
    const user = await admin.auth().getUserByEmail(email).catch(() => null);

    if (user) {
      // If the user exists, set custom claims
      await admin.auth().setCustomUserClaims(user.uid, { admin: true });
      console.log(`Admin privileges granted to existing user: ${email}`);
    } else {
      // If the user doesn't exist, create a new user and set custom claims
      const newUser = await admin.auth().createUser({ email });
      await admin.auth().setCustomUserClaims(newUser.uid, { admin: true });
      console.log(`New admin user created: ${email}`);
    }
  } catch (error) {
    console.error('Error setting up admin:', error);
    throw error;
  }
}

async function removeAdmin(email) {
  try {
    initializeFirebase();

    // Check if the user exists
    const user = await admin.auth().getUserByEmail(email).catch(() => null);

    if (user) {
      // Remove admin custom claim
      await admin.auth().setCustomUserClaims(user.uid, { admin: null });
      console.log(`Admin privileges removed from user: ${email}`);
    } else {
      console.log(`User not found: ${email}. No action taken.`);
    }
  } catch (error) {
    console.error('Error removing admin privileges:', error);
    throw error;
  }
}

module.exports = { setupInitialAdmin, removeAdmin };