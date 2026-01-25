import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#020202]">
      {/* 1. Navbar Global */}
      <Navbar />

      {/* 2. El hueco donde se cargará el contenido de cada página */}
      <main className="flex-grow pt-32 pb-20 px-6 font-sans">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-p:text-white/60 prose-headings:text-white hover:prose-a:text-primary transition-colors">
            {children}
          </div>
        </div>
      </main>

      {/* 3. Footer Global */}
      <Footer />
    </div>
  );
}