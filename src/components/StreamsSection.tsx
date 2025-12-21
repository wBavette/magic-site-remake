import StreamSection from "./StreamSection";

const STREAM_THUMBNAIL = "https://media.discordapp.net/attachments/1433273779022463058/1450527603344670832/merutv_logo.jpg?ex=6948229a&is=6946d11a&hm=5f3a9eda2ba3d79f38f4943136c2a1d05bfb11a357e191809b1c2396eee22a0a&=&format=webp";

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
      url: "https://youtube.com",
      thumbnail: STREAM_THUMBNAIL,
    },
    {
      id: "2", 
      title: "Événement Spécial",
      category: "Divertissement",
      viewers: 856,
      isLive: true,
      url: "https://twitch.tv",
      thumbnail: STREAM_THUMBNAIL,
    },
    {
      id: "3",
      title: "Stream Gaming",
      category: "Gaming",
      viewers: 423,
      isLive: false,
      url: "https://dailymotion.com",
      thumbnail: STREAM_THUMBNAIL,
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
