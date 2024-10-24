

import { db } from '../firebase';
import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const COMPANIES_COLLECTION = 'companies';

export const getCompanies = async () => {
  const companiesCollection = collection(db, COMPANIES_COLLECTION);
  const companiesSnapshot = await getDocs(companiesCollection);
  return companiesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getCompanyById = async (id) => {
  const companyDoc = await getDoc(doc(db, COMPANIES_COLLECTION, id));
  if (companyDoc.exists()) {
    return { id: companyDoc.id, ...companyDoc.data() };
  }
  return null;
};

export const addCompany = async (companyData) => {
  const docRef = await addDoc(collection(db, COMPANIES_COLLECTION), companyData);
  return docRef.id;
};

export const updateCompany = async (id, companyData) => {
  const companyRef = doc(db, COMPANIES_COLLECTION, id);
  await updateDoc(companyRef, companyData);
};

export const deleteCompany = async (id) => {
  const companyRef = doc(db, COMPANIES_COLLECTION, id);
  await deleteDoc(companyRef);
};