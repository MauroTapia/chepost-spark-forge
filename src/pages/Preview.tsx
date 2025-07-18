import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { ChatComponent } from "@/components/ChatComponent";
import { PostCard } from "@/components/PostCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Grid3X3, List, Plus, Menu } from "lucide-react";

const Preview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data for posts
  const posts = [
    {
      id: "1",
      title: "5 estrategias de marketing digital que revolucionarán tu startup en 2024",
      date: "Hoy",
    },
    {
      id: "2", 
      title: "¿Por qué tu competencia está ganando? Análisis completo de mercado",
      date: "Ayer",
    },
    {
      id: "3",
      title: "El secreto detrás de los posts que se vuelven virales: Una guía completa",
      date: "2 días",
    },
    {
      id: "4",
      title: "Automatización inteligente: Cómo ahorrar 15 horas semanales en contenido",
      date: "3 días",
    },
    {
      id: "5",
      title: "ROI de contenido: Métricas que realmente importan para tu negocio",
      date: "1 semana",
    },
    {
      id: "6",
      title: "LinkedIn vs Twitter: Dónde publicar cada tipo de contenido para máximo impacto",
      date: "1 semana",
    },
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <AppSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-foreground">Posts</h1>
          </div>
          <Button variant="default" size="default">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Post
          </Button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat Component Centered */}
            <div className="mb-8">
              <ChatComponent className="max-w-2xl mx-auto" />
            </div>

            {/* Posts Grid */}
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
                : "space-y-4"
            }>
              {filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  id={post.id}
                />
              ))}
            </div>

            {/* Usage Stats */}
            <div className="mt-12 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {filteredPosts.length} posts generados
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    2/5 posts usados este mes
                  </p>
                </div>
                <Button variant="outline">
                  Upgrade for unlimited
                </Button>
              </div>
              <div className="mt-4 bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-2/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;