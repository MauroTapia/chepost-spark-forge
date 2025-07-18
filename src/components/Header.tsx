import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const location = useLocation();
  const isPreviewPage = location.pathname === "/preview";

  return (
    <header className={`w-full border-b ${isPreviewPage ? 'bg-background border-border' : 'bg-background/5 border-white/10 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-foreground">
          chepost
        </Link>
        
        {!isPreviewPage ? (
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>2/5 posts usados</span>
            </div>
          </div>
        )}
        
        <div className="flex items-center space-x-4">
          {isPreviewPage && (
            <Button variant="default" size="default">
              Nuevo Post
            </Button>
          )}
          {!isPreviewPage && (
            <Link to="/preview">
              <Button variant="glow" size="lg">
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};