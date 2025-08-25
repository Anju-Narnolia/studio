import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ProgramsSection from '@/components/sections/programs';
import CampusLifeSection from '@/components/sections/campus-life';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProgramsSection />
        <CampusLifeSection />
      </main>
      <Footer />
    </div>
  );
}
