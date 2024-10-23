"use client"

import { useState } from "react";
import ChatInput from "@/components/ChatInput";
import ChatResponse from "@/components/ChatResponse";
import { getPredefinedResponse, getGPTResponse } from "@/services/chatbotService";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);

  const handleQuestionSubmit = async (question) => {
    const predefinedResponse = await getPredefinedResponse(question);
    
    if (predefinedResponse) {
      setMessages((prev) => [...prev, { user: question, bot: predefinedResponse }]);
    } else {
      const gptResponse = await getGPTResponse(question);
      setMessages((prev) => [...prev, { user: question, bot: gptResponse }]);
    }
  };

  return (
    <div>
      <h1>Chat with Our Bot</h1>
      <ChatResponse messages={messages} />
      <ChatInput onSubmit={handleQuestionSubmit} />
    </div>
  );
};

export default ChatbotPage;
