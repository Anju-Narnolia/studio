'use client';

import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1950&q=80',
    alt: 'Scientists working in a modern laboratory',
    aiHint: 'scientists laboratory',
  },
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1950&q=80',
    alt: 'Graduation ceremony with students throwing caps in the air',
    aiHint: 'student graduation',
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1950&q=80',
    alt: 'Students collaborating on a project in a workshop',
    aiHint: 'students workshop',
  },
  {
    url: 'https://images.unsplash.com/photo-1616587896649-7ca25a7c3a7c?auto=format&fit=crop&w=1950&q=80',
    alt: 'Close-up of a high-tech circuit board',
    aiHint: 'circuit board',
  },
  {
    url: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&w=1950&q=80',
    alt: 'Modern university campus building at dusk',
    aiHint: 'university campus',
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      <Carousel
        className="h-full w-full"
        plugins={[
          Autoplay({
            delay: 6000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen w-full">
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-50"
                  priority={index === 0}
                  data-ai-hint={slide.aiHint}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          <CarouselPrevious className="relative left-[-10px] translate-y-0" />
          <CarouselNext className="relative right-[-10px] translate-y-0" />
        </div>
      </Carousel>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center text-primary-foreground">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <h1 className="font-headline text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Shaping Future-Ready Engineers
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/90 md:text-xl">
              Where academic excellence meets hands-on innovation. Our industry-aligned curriculum and world-class labs empower you to build the future.
            </p>
            <div className="pointer-events-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base font-bold bg-accent text-accent-foreground hover:bg-accent/90 cta-fill-hover">
                <Link href="#">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-white/50 bg-transparent px-6 text-base font-bold text-white hover:bg-white hover:text-primary"
              >
                <Link href="#programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
