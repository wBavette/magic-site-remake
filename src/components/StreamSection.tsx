import StreamCard from "./StreamCard";

interface Stream {
  id: string;
  title: string;
  category: string;
  thumbnail?: string;
  viewers: number;
  isLive?: boolean;
}

interface StreamSectionProps {
  title: string;
  streams: Stream[];
  type: "main" | "backup";
}

const StreamSection = ({ title, streams, type }: StreamSectionProps) => {
  const isEmpty = streams.length === 0;

  return (
    <section className="py-6">
      <div className="flex items-center gap-3 mb-6">
        <span className={type === "main" ? "section-dot" : "section-dot-blue"} />
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>

      {isEmpty ? (
        <p className="text-muted-foreground text-center py-8">
          Aucun stream {type === "main" ? "principal" : "backup"} actif
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {streams.map((stream) => (
            <StreamCard
              key={stream.id}
              title={stream.title}
              category={stream.category}
              thumbnail={stream.thumbnail}
              viewers={stream.viewers}
              isLive={stream.isLive}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default StreamSection;
