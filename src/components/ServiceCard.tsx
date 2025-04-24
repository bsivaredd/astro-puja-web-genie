
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
}

export function ServiceCard({ title, description, price }: ServiceCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        <Star className="h-8 w-8 text-primary" />
        <CardTitle className="font-playfair">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-600">{description}</p>
        <p className="text-lg font-semibold text-primary">{price}</p>
      </CardContent>
    </Card>
  );
}
