import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

type ProgramCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  aiHint: string;
  link: string;
};

export default function ProgramCard({ title, description, imageUrl, aiHint, link }: ProgramCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-accent/50 hover:shadow-accent/10">
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Image for ${title} program`}
          width={600}
          height={400}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={aiHint}
          loading="lazy"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-headline text-xl font-semibold text-primary">{title}</h3>
        <p className="mt-2 font-body text-muted-foreground">{description}</p>
        <Link
          href={link}
          className="mt-4 inline-flex items-center font-semibold text-accent group-hover:underline"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
