import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { EmberSection } from "@/components/EmberSection";
import { CharacterSection } from "@/components/CharacterSection";
import { MediaSection } from "@/components/MediaSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ReviewsSection />
      <EmberSection />
      <CharacterSection />
      <MediaSection />
      <CommunitySection />
      <Footer />
    </main>
  );
};

export default Index;
