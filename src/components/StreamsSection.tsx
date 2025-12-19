import StreamSection from "./StreamSection";

const StreamsSection = () => {
  // Sample data
  const mainStreams: any[] = [];
  
  const backupStreams = [
    {
      id: "1",
      title: "Match Live",
      category: "Sport",
      viewers: 1247,
      isLive: true,
    },
    {
      id: "2", 
      title: "Événement Spécial",
      category: "Divertissement",
      viewers: 856,
      isLive: true,
    },
    {
      id: "3",
      title: "Stream Gaming",
      category: "Gaming",
      viewers: 423,
      isLive: false,
    },
  ];

  return (
    <div className="bg-background border-t border-border/30">
      <div className="container mx-auto px-6 py-12">
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
      </div>
    </div>
  );
};

export default StreamsSection;
