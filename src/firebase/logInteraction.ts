// src/firebase/logInteraction.ts
import { db } from './index';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const logAIInteraction = async (prompt: string, response: string, tokenAmount: number) => {
  await addDoc(collection(db, 'ai_logs'), {
    prompt,
    response,
    tokens: tokenAmount,
    createdAt: serverTimestamp(),
  });
};
