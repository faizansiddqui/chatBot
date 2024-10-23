import { Configuration, OpenAIApi } from "openai";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

// Initialize OpenAI API with the API key from environment variables
const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Use environment variable
  })
);

// Function to fetch predefined responses from Firestore
export const getPredefinedResponse = async (question) => {
  const q = query(
    collection(db, "predefinedQuestions"),
    where("question", "==", question.toLowerCase())
  );
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const response = querySnapshot.docs[0].data().answer;
    return response;
  }
  return null;
};

// Function to get IT-specific answers using GPT
export const getGPTResponse = async (question) => {
  const categories = ["software", "hardware", "cloud", "AI", "IT sector"];
  const prompt = `Check if this question is related to the following categories: ${categories.join(", ")}. If yes, answer it, otherwise say "I don't know this question's answer".\n\nQuestion: ${question}`;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 150,
  });

  return response.data.choices[0].text.trim();
};
