import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Send, UserCircle, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";

const LiveSupportPage = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isChatActive, setIsChatActive] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isChatActive) {
      setMessages([
        { id: Date.now(), text: "Merhaba! Tatilsana canlı destek hattına hoş geldiniz. Size nasıl yardımcı olabilirim?", sender: "agent" }
      ]);
    }
  }, [isChatActive]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newMessage = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputValue("");

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = { id: Date.now() + 1, text: "Mesajınızı aldım, en kısa sürede yanıtlıyorum...", sender: "agent" };
      setMessages(prevMessages => [...prevMessages, agentResponse]);
      // Further simulate a more detailed response
      setTimeout(() => {
        const detailedResponse = { id: Date.now() + 2, text: "Konuyla ilgili olarak size yardımcı olmaktan mutluluk duyarım. Lütfen sorununuzu biraz daha detaylandırır mısınız?", sender: "agent" };
        setMessages(prevMessages => [...prevMessages, detailedResponse]);
      }, 1500);
    }, 1000);
  };

  const startChat = () => {
    setIsChatActive(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <Headphones className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Canlı Destek</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Anında yardım almak için canlı destek ekibimizle sohbet edin. Sorularınızı yanıtlamak ve size yardımcı olmak için buradayız.
        </p>
      </motion.div>

      {!isChatActive ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button size="lg" onClick={startChat} className="gap-2">
            <MessageSquare className="h-5 w-5" /> Sohbeti Başlat
          </Button>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col h-[70vh]"
        >
          <header className="bg-primary text-white p-4 flex items-center">
            <Headphones className="h-6 w-6 mr-3" />
            <h2 className="text-lg font-semibold">Tatilsana Canlı Destek</h2>
          </header>

          <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex items-end max-w-[70%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
                  <Avatar className={`h-8 w-8 ${msg.sender === "user" ? "ml-2" : "mr-2"}`}>
                    <AvatarImage src={msg.sender === "user" ? (user?.profile?.avatar_url || "") : "/support-avatar.png"} />
                    <AvatarFallback>
                      {msg.sender === "user" ? (user?.profile?.name?.charAt(0) || "S") : "D"}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`px-4 py-2 rounded-xl ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Mesajınızı yazın..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow"
                autoFocus
              />
              <Button type="submit" size="icon" disabled={!inputValue.trim()}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default LiveSupportPage;