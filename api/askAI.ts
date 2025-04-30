import { OpenAI } from "openai";
import { logAIInteraction } from "@/firebase/logInteraction";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Missing OPENAI_API_KEY" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { messages } = await req.json();

    const systemPrompt = `
You are Ihram AI, a respectful and warm assistant that helps Muslims plan and prepare for Hajj and Umrah.
Keep answers concise, spiritual, and simple.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    });

    const reply = completion.choices[0].message.content;

    await logAIInteraction(messages[messages.length - 1].content, reply, 0);

    return new Response(
      JSON.stringify({ reply }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("askAI error:", err.message || err);
    return new Response(
      JSON.stringify({ error: "A server error occurred. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
