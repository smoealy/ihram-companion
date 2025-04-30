import { db } from './firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const logAIInteraction = async (
  prompt: string,
  response: string,
  tokenAmount: number
) => {
  try {
    await addDoc(collection(db, 'ai_logs'), {
      prompt,
      response,
      tokens: tokenAmount,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error logging AI interaction:', error);
  }
};
