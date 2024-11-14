import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

/**
 * Fetch a single document by its collection and document ID.
 * @param {string} collectionName - Name of the collection.
 * @param {string} docId - ID of the document.
 * @returns {Promise<Object>} - The document data.
 */
export const fetchDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(firestore, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error("No document found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
};

/**
 * Fetch all documents from a collection.
 * @param {string} collectionName - Name of the collection.
 * @returns {Promise<Array>} - Array of document data.
 */
export const fetchCollection = async (collectionName) => {
  try {
    const collectionRef = collection(firestore, collectionName);
    const querySnapshot = await getDocs(collectionRef);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error fetching collection:", error);
    throw error;
  }
};
