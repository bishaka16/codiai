import { GoogleGenAI } from "@google/genai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const Learning = () => {
  const [userRequest, setUserRequest] = useState("");
  const [topic, setTopic] = useState("");
  const [messages, setMessages] = useState([]);

  const handleRequest = async () => {
    if (!topic || !userRequest.trim()) return;

    const currentRequest = userRequest.trim();
    setUserRequest("");

   const prompt = `
You are an expert ${topic} educator with 10+ years of teaching experience.
Respond to this user request: "${currentRequest}"
If the user is making casual conversation or greeting, respond naturally and conversationally.
For educational requests, provide a clear, structured response following this exact format:

OUTPUT FORMAT REQUIREMENTS:
- Return ONLY valid JSON with no additional text outside the JSON structure.
- Output must be an array containing exactly 1 object.

{
  "summary": "A concise 4-word headline summary",
  "answer": "Your complete response"
}

RESPONSE RULES:
"answer" must include sections labeled:
EXPLANATION:
EXAMPLE:
SUMMARY:
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const cleaned = response.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      const parsed = JSON.parse(cleaned)[0];

      setMessages((prev) => [
        ...prev,
        { type: "question", text: currentRequest },
        { type: "answer", summary: parsed.summary, text: parsed.answer },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      {/* PAGE WRAPPER */}
      <div className="min-h-screen bg-zinc-950 text-white">

        {/* SUBJECT BAR */}
        <div className="border-b border-zinc-900 bg-zinc-950">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-sm rounded-xl px-4 py-2.5 
                         focus:border-red-500 outline-none text-white"
            >
              <option value="" disabled>Select Subject</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
          </div>
        </div>

        {/* CHAT AREA */}
        <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`rounded-2xl px-5 py-4 text-sm leading-relaxed whitespace-pre-line
                ${
                  msg.type === "question"
                    ? "bg-white text-black ml-auto max-w-[75%]"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-200 max-w-[75%]"
                }`}
            >
              {msg.type === "answer" && (
                <div className="mb-2 font-bold text-red-400 tracking-wide">
                  {msg.summary}
                </div>
              )}
              {msg.text}
            </div>
          ))}
        </div>

        {/* INPUT BAR */}
        <div className="sticky bottom-0 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto px-6 py-4 flex gap-3">
            <textarea
              value={userRequest}
              onChange={(e) => setUserRequest(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                !e.shiftKey &&
                (e.preventDefault(), handleRequest())
              }
              placeholder="Ask a technical question..."
              rows={1}
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl
                         px-5 py-4 text-sm text-white placeholder-zinc-500
                         focus:border-red-500 outline-none resize-none"
            />
            <button
              onClick={handleRequest}
              className="bg-zinc-100 text-black px-8 rounded-2xl font-bold text-xs 
                         uppercase tracking-widest hover:bg-red-600 hover:text-white
                         transition-all"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Learning;
