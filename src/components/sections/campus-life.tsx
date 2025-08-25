import Image from 'next/image';
import { Wifi, Home, Users } from 'lucide-react';

const amenities = [
  { icon: Wifi, text: 'Gigabit Wi-Fi campus-wide' },
  { icon: Home, text: '24/7 maker spaces' },
  { icon: Users, text: '7,000+ engineering students' },
];

const campusImages = [
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Students collaborating in an augmented reality lab',
    aiHint: 'students lab',
    className: 'row-span-2 col-span-2'
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Student-built electric go-kart during a race',
    aiHint: 'go-kart race',
    className: 'col-span-1'
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Students installing solar panels on a rooftop',
    aiHint: 'solar panel',
    className: 'col-span-1'
  }
];

export default function CampusLifeSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-headline text-4xl font-bold text-primary">
              Campus Life That Powers Innovation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From 60+ student-led tech clubs to hackathons judged by Fortune 500 engineers, every day here is a build day. Our vibrant community and state-of-the-art facilities provide the perfect ecosystem for you to thrive.
            </p>
            <div className="mt-8 space-y-4">
              {amenities.map((item, index) => (
                <div key={index} className="flex items-center">
                  <item.icon className="h-8 w-8 text-accent" />
                  <span className="ml-4 font-semibold text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[450px]">
              {campusImages.map((img, index) => (
                <div key={index} className={`relative overflow-hidden rounded-lg border-4 border-accent/50 shadow-lg ${img.className}`}>
                  <div className="absolute inset-0 animate-kenburns">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      layout="fill"
                      objectFit="cover"
                      className="scale-110"
                      data-ai-hint={img.aiHint}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
