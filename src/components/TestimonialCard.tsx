
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </CardHeader>
      <CardContent>
        <p className="mb-4 italic text-gray-600">{text}</p>
        <p className="font-playfair font-semibold">{name}</p>
      </CardContent>
    </Card>
  );
}
