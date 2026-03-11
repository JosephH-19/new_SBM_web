"use client";
import { useState, useRef, useEffect } from "react";

const INITIAL_MESSAGES = [
  {
    role: "assistant",
    content: "¡Hola! 👋 Soy el asistente virtual de SOFT & BUSINESS MANAGEMENT. Estoy aquí para ayudarte con información sobre nuestros servicios, proyectos y responder tus preguntas. ¿En qué puedo asistirte hoy?",
    replies: [
      { text: "🛠️ Servicios", query: "¿Qué servicios ofrecen?" },
      { text: "💰 Precios", query: "¿Cuánto cuesta un proyecto?" },
      { text: "🚀 Comenzar", query: "¿Cómo inicio un proyecto?" },
      { text: "📂 Portfolio", query: "Ver proyectos anteriores" },
    ],
  },
];

export default function ChatbotDemo() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateResponse = (userMsg: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      let botResponse = "Gracias por tu mensaje. Esta es una **versión demo 100% frontend** diseñada con Next.js y Tailwind CSS. En una aplicación real, aquí se conectaría con la lógica de negocio y APIs reales para responder tu consulta sobre: " + userMsg;
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botResponse, replies: [] },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage, replies: [] }]);
    setInputValue("");
    simulateResponse(userMessage);
  };

  const handleQuickReply = (query: string) => {
    setMessages((prev) => [...prev, { role: "user", content: query, replies: [] }]);
    simulateResponse(query);
  };

  return (
    <section id="chatbot-demo" className="py-32 bg-dark">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            🤖 Demo Interactiva Front-End
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Prueba Nuestro Chatbot</h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Demostración visual de la interfaz de chat desarrollada completamente con componentes de React y Tailwind
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-light rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-primary/30">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-inner">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-lg">Asistente Virtual S&B</h3>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span> En línea
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div 
              ref={chatBodyRef}
              className="h-[500px] bg-dark p-6 overflow-y-auto space-y-6"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-4 animate-fade-in-up ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-gray text-white' : 'bg-gradient-to-br from-primary to-secondary text-white'}`}>
                    {msg.role === 'user' ? '👤' : '🤖'}
                  </div>
                  
                  <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[80%]`}>
                    <div className={`p-4 rounded-2xl text-white leading-relaxed border ${
                      msg.role === 'user' 
                        ? 'bg-white/5 border-white/10 rounded-tr-sm' 
                        : 'bg-primary/10 border-primary/20 rounded-tl-sm'
                    }`}>
                      {msg.content}
                    </div>
                    <span className="text-xs text-gray mt-2 px-2">Ahora</span>

                    {/* Quick Replies */}
                    {msg.replies && msg.replies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {msg.replies.map((reply, i) => (
                          <button
                            key={i}
                            onClick={() => handleQuickReply(reply.query)}
                            className="px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                          >
                            {reply.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-4 animate-fade-in-up">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-primary to-secondary text-white">
                    🤖
                  </div>
                  <div className="bg-primary/10 border-primary/20 border p-4 rounded-2xl rounded-tl-sm flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Footer */}
            <div className="p-6 bg-dark-light border-t border-white/10">
              <div className="flex gap-4">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu mensaje aquí..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                />
                <button 
                  onClick={handleSendMessage}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:scale-105 hover:shadow-[0_4px_15px_rgba(99,102,241,0.4)] transition-all"
                >
                  Enviar →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
