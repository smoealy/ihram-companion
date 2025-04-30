import { VercelRequest, VercelResponse } from '@vercel/node';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body;

    const systemPrompt = `
You are Ihram AI, a warm, respectful, and spiritual guide trained to help Muslims prepare for Hajj and Umrah.

You help users:
- Understand rituals, visas, and packing for pilgrimage
- Learn about Ihram Token (a halal cryptocurrency)
- Track token vesting and savings toward their journey
- Recommend ways to earn, redeem, or donate tokens
- Share relevant duas, Sunnah, and reminders

Keep your answers short, sincere, and rooted in Islamic values. Always assume the user's intention is pure and sincere.
`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ]
    });

    const reply = response.choices[0].message?.content ?? 'Sorry, no response.';
    return res.status(200).json({ reply });
  } catch (err) {
    console.error('API ERROR:', err);
    return res.status(500).json({ error: 'A server error occurred.' });
  }
}
