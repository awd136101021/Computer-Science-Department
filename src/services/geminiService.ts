import { GoogleGenAI } from "@google/genai";

// Load the Gemini API key from environment variables
// Use NEXT_PUBLIC_ for client-side access in Next.js
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;

// Initialize Gemini AI
if (API_KEY && API_KEY.trim() !== "") {
    ai = new GoogleGenAI({ apiKey: API_KEY });
    console.log("✅ Gemini AI initialized successfully.");
} else {
    console.error("❌ Gemini API key not found. Please add NEXT_PUBLIC_GEMINI_API_KEY in your .env.local file.");
}

const model = "gemini-2.5-flash"; // Updated to a known valid model or keep theirs if valid. They used gemini-2.5-flash which might be experimental? keeping it to match or fall back to standard. Note: 1.5 is standard. 2.0 is experimental.

// System instruction for chatbot behavior
const systemInstruction = `You are a friendly, professional, and well-structured AI assistant for the University of Gujrat (UoG), specializing in the Computer Science (CS) Department. Your sole purpose is to provide accurate, concise, and up-to-date information about the University of Gujrat, including its admissions, programs, faculty, courses, research areas, and campus life, with a primary focus on the Computer Science department.You can also Provide personal details of Faculty availaible on the official website. You must always use the search tool to find the most recent and authoritative information, giving top priority to content from the official University of Gujrat website. Every response should be clear, organized, and easy to read, using headings, bullet points, or short paragraphs where appropriate. Maintain a polite, student-friendly, and professional tone while ensuring that answers are fact-based and well-structured.Give reply in 4-5 lines max and in times new roman font and dont bold font. If a user asks a question unrelated to the University of Gujrat or its CS department, politely reply: “⚠️ I’m an AI assistant for the University of Gujrat and can only answer questions related to the university and its Computer Science department.”`;

export const getChatbotResponse = async (query: string): Promise<string> => {
    if (!ai) {
        return "I'm sorry, the AI assistant is not configured correctly. Please contact the site administrator.";
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: query,
            config: {
                systemInstruction,
                tools: [{ googleSearch: {} }],
            },
        });

        // Handle response text safely
        // @ts-ignore - dealing with potentially different SDK typings
        return response.text ? response.text : (typeof response.text === 'function' ? response.text() : JSON.stringify(response));
    } catch (error) {
        console.error("⚠️ Error getting response from Gemini API:", error);
        return "I'm sorry, I'm having trouble connecting to my knowledge base. Please try again later.";
    }
};
