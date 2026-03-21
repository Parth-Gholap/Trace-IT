"use client";

import { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm TraceIT's support assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickResponses = [
    "How do I report a lost item?",
    "What should I do if I found something?",
    "How does the matching work?",
    "I can't log in to my account",
    "Contact support team"
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: text.trim(),
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, newUserMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(text.trim()),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("lost") || lowerMessage.includes("report")) {
      return "To report a lost item, go to the home page and click 'Report Lost Item'. Fill in the details including description, location, and your contact information. Our system will automatically search for matches.";
    }
    if (lowerMessage.includes("found")) {
      return "Great that you found something! Click 'Report Found Item' and provide details about the item, where you found it, and when. This helps us match it with lost reports.";
    }
    if (lowerMessage.includes("match") || lowerMessage.includes("matching")) {
      return "Our AI-powered matching system analyzes item descriptions, locations, and timing to find potential matches automatically. You'll receive notifications when matches are found.";
    }
    if (lowerMessage.includes("login") || lowerMessage.includes("account")) {
      return "If you're having trouble logging in, try resetting your password using the 'Forgot Password' link. If that doesn't work, contact our support team for assistance.";
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("support")) {
      return "You can reach our support team at parthgholap18@gmail.com or call +91 70586 87058 during business hours (Mon-Fri, 9AM-6PM).";
    }
    return "I understand you need help with TraceIT. Could you provide more details about your question? You can also check our FAQ page or contact our support team directly.";
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        <header className="bg-gray-900 border-b border-gray-800 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg">
              💬
            </div>
            <div>
              <h1 className="text-xl font-semibold">TraceIT Support Chat</h1>
              <p className="text-sm text-gray-400">Always here to help</p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-xs lg:max-w-md flex items-start space-x-2 ${
                message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
              }`}>
                <div className={`p-2 rounded-lg ${
                  message.sender === "user" 
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black" 
                    : "bg-gray-800 text-white"
                }`}>
                  {message.sender === "bot" ? "🤖" : "👤"}
                </div>
                <div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === "user" 
                      ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black" 
                      : "bg-gray-800 text-white"
                  }`}>
                    {message.text}
                  </div>
                  <div className="flex items-center space-x-1 mt-1 text-xs text-gray-400">
                    🕐
                    <span>{formatTime(message.timestamp)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="p-2 bg-gray-800 rounded-lg">
                  🤖
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-800 p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {quickResponses.map((response) => (
              <button
                key={response}
                onClick={() => handleSendMessage(response)}
                className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                {response}
              </button>
            ))}
          </div>
          
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputText)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              disabled={isTyping}
            />
            <button
              onClick={() => handleSendMessage(inputText)}
              disabled={isTyping || !inputText.trim()}
              className="px-4 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
