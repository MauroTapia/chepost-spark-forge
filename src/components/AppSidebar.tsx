import { useState } from "react";
import { 
  Home, 
  FileText, 
  BarChart3, 
  Settings, 
  HelpCircle,
  MessageSquare,
  Zap,
  Crown,
  User
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Resumen", url: "/", icon: Home },
  { title: "Posts", url: "/preview", icon: FileText },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Chat IA", url: "/chat", icon: MessageSquare },
];

const toolsItems = [
  { title: "Generador", url: "/generator", icon: Zap },
  { title: "Configuración", url: "/settings", icon: Settings },
  { title: "Ayuda", url: "/help", icon: HelpCircle },
];

export const AppSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          {!isCollapsed && (
            <span className="text-sidebar-foreground font-semibold text-lg">chepost</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6 px-3 space-y-8">
        {/* Main Navigation */}
        <div>
          {!isCollapsed && (
            <p className="text-sidebar-muted text-xs font-medium uppercase tracking-wider mb-3 px-3">
              Principal
            </p>
          )}
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span>{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Tools */}
        <div>
          {!isCollapsed && (
            <p className="text-sidebar-muted text-xs font-medium uppercase tracking-wider mb-3 px-3">
              Herramientas
            </p>
          )}
          <nav className="space-y-1">
            {toolsItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span>{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Upgrade Section */}
      <div className="p-3 border-t border-sidebar-border">
        {!isCollapsed && (
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-sidebar-foreground font-medium text-sm">Mejora tu plan</span>
            </div>
            <p className="text-sidebar-muted text-xs mb-3">
              Más poder, más control, más libertad en tus finanzas.
            </p>
            <Button variant="glow" size="sm" className="w-full">
              Quiero ser Pro
            </Button>
          </div>
        )}
        
        {/* User Profile */}
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sidebar-foreground text-sm font-medium truncate">Nicolás Romero</p>
              <p className="text-sidebar-muted text-xs truncate">nicolas@example.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};