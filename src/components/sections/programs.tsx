import ProgramCard from '@/components/program-card';

const programs = [
  {
    title: 'Computer Science & AI',
    description: 'Pioneering intelligent systems and next-gen software.',
    imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1350&q=80',
    aiHint: 'server racks',
    link: '#',
  },
  {
    title: 'Mechanical & Robotics Engineering',
    description: 'Building the machines and autonomous systems of tomorrow.',
    imageUrl: 'https://images.unsplash.com/photo-1581092916375-2422872e485a?auto=format&fit=crop&w=1350&q=80',
    aiHint: 'robotic arm',
    link: '#',
  },
  {
    title: 'Civil & Sustainable Infrastructure',
    description: 'Designing resilient, eco-friendly cities and structures.',
    imageUrl: 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?auto=format&fit=crop&w=1350&q=80',
    aiHint: 'smart city',
    link: '#',
  },
  {
    title: 'Electrical & Quantum Tech',
    description: 'Harnessing electricity and quantum mechanics to power the future.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1350&q=80',
    aiHint: 'quantum chip',
    link: '#',
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary">
            Top-Ranked Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our world-class engineering disciplines.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
