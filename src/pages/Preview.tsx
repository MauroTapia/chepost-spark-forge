import { useState } from "react";
import { Header } from "@/components/Header";
import { ChatComponent } from "@/components/ChatComponent";
import { PostCard } from "@/components/PostCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Grid3X3, List, Plus } from "lucide-react";

const Preview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Posts</h1>
            <p className="text-muted-foreground">Crea y gestiona tus posts generados con IA</p>
          </div>
          <Button variant="default" size="lg" className="mt-4 lg:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Post
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
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

          {/* Sidebar with Chat */}
          <div className="lg:col-span-1">
            <ChatComponent className="h-fit" isSticky />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;