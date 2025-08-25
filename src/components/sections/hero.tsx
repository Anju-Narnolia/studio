import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid min-h-screen items-center lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <div className="z-10 pt-24 pb-12 text-center text-primary-foreground lg:pt-0 lg:pb-0 lg:text-left">
            <h1 className="font-headline text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shaping Future-Ready Engineers
            </h1>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 font-body text-lg leading-relaxed md:text-xl text-primary-foreground/90">
              Where academic excellence meets hands-on innovation. Our industry-aligned curriculum and world-class labs empower you to build the future.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base font-bold bg-accent text-accent-foreground hover:bg-accent/90 cta-fill-hover">
                <Link href="#">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-12 px-6 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                 <Link href="#programs">
                  Explore Programs
                </Link>
              </Button>
            </div>
          </div>
          {/* Image Content - Hidden on small screens, revealed on large */}
          <div className="relative hidden h-full w-full lg:block">
             <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&w=1350&q=80"
                    alt="Aurora’s award-winning engineering complex at twilight"
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    priority
                    data-ai-hint="modern engineering campus"
                    className="rounded-l-2xl"
                />
             </div>
          </div>
        </div>
      </div>
       {/* Full-bleed background image for mobile */}
       <div className="absolute inset-0 z-0 lg:hidden">
            <Image
                src="https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&w=1350&q=80"
                alt="Aurora’s award-winning engineering complex at twilight"
                layout="fill"
                objectFit="cover"
                quality={80}
                priority
                data-ai-hint="modern engineering campus"
            />
            <div className="absolute inset-0 bg-primary/70"></div>
        </div>
    </section>
  );
}
