import { useState } from "react";
import { Play, X } from "lucide-react";

const mediaItems = [
  {
    type: "video",
    title: "Launch Trailer",
    thumbnail: "https://img.youtube.com/vi/ghQBj6Gfn10/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/ghQBj6Gfn10",
  },
  {
    type: "video",
    title: "Vanquisher Trailer",
    thumbnail: "https://img.youtube.com/vi/sXNzJ9KYlWw/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/sXNzJ9KYlWw",
  },
  {
    type: "video",
    title: "Alchemist Trailer",
    thumbnail: "https://img.youtube.com/vi/huLl5Xzu2Aw/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/huLl5Xzu2Aw",
  },
];

export function MediaSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="media" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Media Gallery
        </h2>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {mediaItems.map((item) => (
            <button
              key={item.title}
              onClick={() => setSelectedVideo(item.url)}
              className="group relative aspect-video rounded-lg overflow-hidden bg-card border border-border/30 hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                </div>
                <span className="mt-3 font-display text-sm uppercase tracking-wider text-foreground">
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl mx-4 aspect-video">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={`${selectedVideo}?autoplay=1`}
              title="Video Player"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
