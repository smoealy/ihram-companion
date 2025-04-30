import { db } from './firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const logAIInteraction = async (prompt, response, tokenAmount) => {
  await addDoc(collection(db, 'ai_logs'), {
    prompt,
    response,
    tokens: tokenAmount,
    createdAt: serverTimestamp(),
  });
};
