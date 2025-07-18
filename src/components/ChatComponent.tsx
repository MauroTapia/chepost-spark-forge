import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatComponentProps {
  className?: string;
  isSticky?: boolean;
}

export const ChatComponent = ({ className, isSticky = false }: ChatComponentProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "¡Hola! Soy tu asistente de contenido. Cuéntame sobre tu web o perfil de redes sociales y te ayudo a crear posts virales.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Perfecto! Basándome en tu información, puedo crear contenido optimizado para generar engagement. ¿Qué tipo de post te interesa más: educativo, inspiracional o promocional?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className={cn(
      "flex flex-col bg-card border border-border rounded-xl shadow-lg overflow-hidden",
      isSticky && "sticky top-24",
      className
    )}>
      {/* Chat Header */}
      <div className="p-4 border-b border-border bg-muted/30">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Bot className="w-5 h-5 text-primary" />
          Generador de Posts IA
        </h3>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 max-h-96 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              message.isUser ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
              message.isUser ? "bg-chat-bubble-user" : "bg-muted"
            )}>
              {message.isUser ? (
                <User className="w-4 h-4 text-white" />
              ) : (
                <Bot className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
            <div className={cn(
              "max-w-[80%] p-3 rounded-lg",
              message.isUser 
                ? "bg-chat-bubble-user text-white" 
                : "bg-muted text-foreground"
            )}>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-background/50">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe tu web o perfil..."
            className="flex-1"
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Mic className="w-4 h-4" />
          </Button>
          <Button onClick={sendMessage} size="icon" variant="default">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};