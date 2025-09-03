import * as admin from 'firebase-admin';
const globalForAdmin = global as unknown as { _firebaseAdmin?: admin.app.App };

export function gerAdminApp(){
  if (!globalForAdmin._firebaseAdmin) {
    globalForAdmin._firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID, 
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }
  return globalForAdmin._firebaseAdmin;
}

export const adminApp = gerAdminApp();
export const db = admin.firestore(adminApp);
export const fieldValue = admin.firestore.FieldValue;
export const Timestamp = admin.firestore.Timestamp;
