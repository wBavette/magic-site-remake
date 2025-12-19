import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroLogo from "@/components/HeroLogo";
import AlertModal from "@/components/AlertModal";
import StreamSection from "@/components/StreamSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after a short delay
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Sample data - you can replace with real data
  const mainStreams = [];
  
  const backupStreams = [
    {
      id: "1",
      title: "test",
      category: "Sport",
      viewers: 0,
      isLive: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4">
        <HeroLogo />
        
        <StreamSection 
          title="Streams principaux"
          streams={mainStreams}
          type="main"
        />
        
        <StreamSection 
          title="Streams backups"
          streams={backupStreams}
          type="backup"
        />
      </main>

      <Footer />

      <AlertModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
};

export default Index;
