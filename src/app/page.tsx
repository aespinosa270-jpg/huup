import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import TechFoundation from "@/components/TechFoundation";
import Methodology from "@/components/Methodology";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background relative min-h-screen w-full">
      <Navbar />
      
      <Hero />
      
      <TechStack />
      
      <Services />
      
      <TechFoundation />

      <Methodology />
      
      <Work />
      
      <Footer />
      
    </main>
  );
}