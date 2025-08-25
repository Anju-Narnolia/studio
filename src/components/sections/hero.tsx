import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] md:h-[70vh] lg:h-screen w-full flex items-center">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=1350&q=80"
          alt="Aurora’s award-winning engineering complex at twilight"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          data-ai-hint="engineering building"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 text-white">
        <div className="max-w-3xl lg:max-w-[60%]">
          <h1 className="font-headline text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-primary-foreground">
            Engineering the Next 100 Years.
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed md:text-xl text-primary-foreground/90">
            Cutting-edge labs, industry-backed research, and a curriculum that evolves as fast as technology.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
              size="lg"
              className="h-12 px-8 text-base font-bold bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 px-6 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <PlayCircle className="mr-2 h-5 w-5" /> Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
