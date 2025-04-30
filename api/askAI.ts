import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const config = {
  runtime: "edge"
};

export default async function handler(req: Request) {
  if (!openai.apiKey) {
    return new Response(JSON.stringify({ error: "Missing OPENAI_API_KEY" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const body = await req.json();
    const messages = body.messages;

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
      model: "gpt-4",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    });

    const reply = response.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("API Error:", err);
    return new Response(JSON.stringify({ error: "A server error occurred" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
