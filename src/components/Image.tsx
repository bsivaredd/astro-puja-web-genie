
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: number;
  className?: string;
}

export function Image({
  aspectRatio = 16 / 9,
  className,
  alt = "Astrology image",
  ...props
}: ImageProps) {
  return (
    <AspectRatio ratio={aspectRatio} className="overflow-hidden rounded-lg">
      <img
        className={cn("object-cover w-full h-full", className)}
        alt={alt}
        {...props}
      />
    </AspectRatio>
  );
}
