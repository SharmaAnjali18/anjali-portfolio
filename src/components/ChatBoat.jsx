import React, { useState, useRef, useEffect } from "react";
import "../assets/css/ChatBot.css";
import { sendMessageToAI } from "../api/chatbot";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm Anjali's Portfolio Assistant.\nHow can I help you?",
    },
  ]);
  const [input, setInput] = useState("");

  // For Auto Scroll
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
  const userMessage = input.trim();

  if (!userMessage) return;

  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: userMessage,
    },
  ]);

  setInput("");

  setLoading(true);

  const reply = await sendMessageToAI(userMessage);

  setLoading(false);

  setMessages((prev) => [
    ...prev,
    {
      sender: "bot",
      text: reply,
    },
  ]);
};

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const handleScroll = () => {
    setIsScrolling(true);

    clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button className="chat-btn" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Portfolio Assistant 🤖</span>

            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div
            className={`chat-body ${isScrolling ? "scrolling" : ""}`}
            onScroll={handleScroll}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "bot" ? "bot-msg" : "user-msg"}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="bot-msg">Typing...</div>}
            <div ref={messagesEndRef}></div>
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
