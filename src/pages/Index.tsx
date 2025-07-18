import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { ChatComponent } from "@/components/ChatComponent";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-neon-purple/5"></div>
        <div className="relative container mx-auto px-6 pt-20 pb-16">
          {/* Trust Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/30 backdrop-blur-sm border border-white/10 rounded-full text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-primary fill-current" />
              Trusted by 14k+ users
            </div>
          </div>
          
          {/* Main Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Donde tus ideas se convierten en{" "}
              <span className="bg-gradient-purple bg-clip-text text-transparent">
                posts virales
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Convierte tu web y redes en contenido que genera interacción real, 
              con IA y análisis de competencia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/preview">
                <Button variant="glow" size="xl">
                  Get Started
                </Button>
              </Link>
              <Button variant="outline-glow" size="xl">
                Más info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Genera contenido con IA en segundos
            </h2>
            <ChatComponent isSticky />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Company Logos */}
      <section className="py-16 bg-card/10">
        <div className="container mx-auto px-6">
          <p className="text-center text-muted-foreground mb-12">
            Trusted by thousands of companies
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {["MailChimp", "Airtable", "Evernote", "Microsoft"].map((company) => (
              <div key={company} className="text-xl font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
