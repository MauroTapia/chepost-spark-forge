import { Button } from "@/components/ui/button";
import { MoreHorizontal, Calendar } from "lucide-react";

interface PostCardProps {
  title: string;
  date: string;
  id: string;
}

export const PostCard = ({ title, date, id }: PostCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200 group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-primary/20 rounded"></div>
        </div>
        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-medium text-foreground line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center gap-2 pt-2">
          <Button variant="default" size="sm">
            Ver
          </Button>
        </div>
      </div>
    </div>
  );
};