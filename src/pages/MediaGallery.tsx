import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, X, ArrowLeft, Image, Film, Music, Download, ExternalLink, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

type MediaType = "all" | "videos" | "screenshots" | "artwork" | "music";
type ViewMode = "grid" | "list";

interface MediaItem {
  id: string;
  type: "video" | "screenshot" | "artwork" | "music";
  title: string;
  description: string;
  thumbnail: string;
  url?: string;
  date: string;
  tags: string[];
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    type: "video",
    title: "Launch Trailer",
    description: "Experience the epic launch trailer showcasing the world of Torchlight and its heroes.",
    thumbnail: "https://img.youtube.com/vi/ghQBj6Gfn10/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/ghQBj6Gfn10",
    date: "2024-01-15",
    tags: ["trailer", "cinematic", "launch"],
  },
  {
    id: "2",
    type: "video",
    title: "Vanquisher Trailer",
    description: "Meet the Vanquisher - master of ranged combat and deadly traps.",
    thumbnail: "https://img.youtube.com/vi/sXNzJ9KYlWw/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/sXNzJ9KYlWw",
    date: "2024-01-10",
    tags: ["trailer", "character", "vanquisher"],
  },
  {
    id: "3",
    type: "video",
    title: "Alchemist Trailer",
    description: "Discover the Alchemist - wielder of arcane magic and elemental destruction.",
    thumbnail: "https://img.youtube.com/vi/huLl5Xzu2Aw/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/huLl5Xzu2Aw",
    date: "2024-01-05",
    tags: ["trailer", "character", "alchemist"],
  },
  {
    id: "4",
    type: "screenshot",
    title: "Ember Mines",
    description: "Deep within the Ember Mines, adventurers face countless dangers.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    date: "2024-02-20",
    tags: ["environment", "dungeon", "mines"],
  },
  {
    id: "5",
    type: "screenshot",
    title: "Boss Battle",
    description: "An epic confrontation with one of Torchlight's fearsome bosses.",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    date: "2024-02-18",
    tags: ["combat", "boss", "action"],
  },
  {
    id: "6",
    type: "screenshot",
    title: "Town of Torchlight",
    description: "The bustling hub where adventurers gather and prepare for their journeys.",
    thumbnail: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    date: "2024-02-15",
    tags: ["town", "environment", "hub"],
  },
  {
    id: "7",
    type: "artwork",
    title: "Alchemist Concept Art",
    description: "Original concept artwork for the Alchemist class.",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    date: "2024-03-01",
    tags: ["concept", "character", "alchemist"],
  },
  {
    id: "8",
    type: "artwork",
    title: "Dungeon Environment",
    description: "Atmospheric concept art depicting the depths of the Ember Mines.",
    thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    date: "2024-02-28",
    tags: ["concept", "environment", "dungeon"],
  },
  {
    id: "9",
    type: "artwork",
    title: "Creature Designs",
    description: "Concept sketches of the various creatures inhabiting Torchlight.",
    thumbnail: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&q=80",
    date: "2024-02-25",
    tags: ["concept", "creatures", "enemies"],
  },
  {
    id: "10",
    type: "music",
    title: "Main Theme",
    description: "The iconic main theme of Torchlight, composed by Matt Uelmen.",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    date: "2024-01-01",
    tags: ["soundtrack", "theme", "orchestral"],
  },
  {
    id: "11",
    type: "music",
    title: "Ember Mines Ambience",
    description: "Atmospheric music from the depths of the Ember Mines.",
    thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
    date: "2024-01-01",
    tags: ["soundtrack", "ambient", "dungeon"],
  },
  {
    id: "12",
    type: "music",
    title: "Battle Theme",
    description: "Epic combat music that accompanies intense boss battles.",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    date: "2024-01-01",
    tags: ["soundtrack", "combat", "epic"],
  },
];

const filterTabs: { label: string; value: MediaType; icon: React.ReactNode }[] = [
  { label: "All", value: "all", icon: <Grid className="w-4 h-4" /> },
  { label: "Videos", value: "videos", icon: <Film className="w-4 h-4" /> },
  { label: "Screenshots", value: "screenshots", icon: <Image className="w-4 h-4" /> },
  { label: "Artwork", value: "artwork", icon: <Image className="w-4 h-4" /> },
  { label: "Music", value: "music", icon: <Music className="w-4 h-4" /> },
];

function MediaCard({ item, onClick }: { item: MediaItem; onClick: () => void }) {
  const typeIcon = {
    video: <Film className="w-4 h-4" />,
    screenshot: <Image className="w-4 h-4" />,
    artwork: <Image className="w-4 h-4" />,
    music: <Music className="w-4 h-4" />,
  };

  const typeColor = {
    video: "bg-red-500/20 text-red-400 border-red-500/30",
    screenshot: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    artwork: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    music: "bg-green-500/20 text-green-400 border-green-500/30",
  };

  return (
    <button
      onClick={onClick}
      className="group relative rounded-xl overflow-hidden bg-card border border-border/30 hover:border-primary/50 transition-all duration-500 text-left"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Play overlay for videos */}
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-xl">
              <Play className="w-7 h-7 text-primary-foreground ml-1" />
            </div>
          </div>
        )}

        {/* Type badge */}
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 ${typeColor[item.type]}`}>
          {typeIcon[item.type]}
          <span className="capitalize">{item.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {new Date(item.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </span>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      </div>
    </button>
  );
}

function MediaListItem({ item, onClick }: { item: MediaItem; onClick: () => void }) {
  const typeIcon = {
    video: <Film className="w-5 h-5" />,
    screenshot: <Image className="w-5 h-5" />,
    artwork: <Image className="w-5 h-5" />,
    music: <Music className="w-5 h-5" />,
  };

  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border/30 hover:border-primary/50 transition-all duration-300 text-left w-full"
    >
      {/* Thumbnail */}
      <div className="relative w-40 aspect-video rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/30">
            <Play className="w-8 h-8 text-primary" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-primary">{typeIcon[item.type]}</span>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {item.title}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
          {item.description}
        </p>
        <div className="flex items-center gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-xs text-muted-foreground">
          {new Date(item.date).toLocaleDateString()}
        </span>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </button>
  );
}

export default function MediaGallery() {
  const [activeFilter, setActiveFilter] = useState<MediaType>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filteredItems = mediaItems.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "videos") return item.type === "video";
    if (activeFilter === "screenshots") return item.type === "screenshot";
    if (activeFilter === "artwork") return item.type === "artwork";
    if (activeFilter === "music") return item.type === "music";
    return true;
  });

  const stats = {
    videos: mediaItems.filter((i) => i.type === "video").length,
    screenshots: mediaItems.filter((i) => i.type === "screenshot").length,
    artwork: mediaItems.filter((i) => i.type === "artwork").length,
    music: mediaItems.filter((i) => i.type === "music").length,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back navigation */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display text-sm uppercase tracking-wider">Back to Home</span>
          </Link>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Media <span className="text-primary ember-text">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Explore trailers, screenshots, concept artwork, and music from the world of Torchlight.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-red-400" />
              <span className="text-foreground font-medium">{stats.videos} Videos</span>
            </div>
            <div className="flex items-center gap-2">
              <Image className="w-5 h-5 text-blue-400" />
              <span className="text-foreground font-medium">{stats.screenshots} Screenshots</span>
            </div>
            <div className="flex items-center gap-2">
              <Image className="w-5 h-5 text-purple-400" />
              <span className="text-foreground font-medium">{stats.artwork} Artworks</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-green-400" />
              <span className="text-foreground font-medium">{stats.music} Tracks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Controls */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-display text-sm uppercase tracking-wider transition-all duration-300 ${
                    activeFilter === tab.value
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border/30"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-card rounded-full p-1 border border-border/30">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-12">
        {viewMode === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MediaCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {filteredItems.map((item) => (
              <MediaListItem key={item.id} item={item} onClick={() => setSelectedItem(item)} />
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No media found for this category.</p>
          </div>
        )}
      </div>

      {/* Media Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-card rounded-2xl overflow-hidden border border-border/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 text-foreground hover:text-primary hover:bg-background transition-colors flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media content */}
            {selectedItem.type === "video" && selectedItem.url ? (
              <div className="aspect-video">
                <iframe
                  src={`${selectedItem.url}?autoplay=1`}
                  title={selectedItem.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative">
                <img
                  src={selectedItem.thumbnail}
                  alt={selectedItem.title}
                  className="w-full max-h-[60vh] object-contain bg-black/50"
                />
              </div>
            )}

            {/* Details */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    {selectedItem.title}
                  </h2>
                  <p className="text-muted-foreground">{selectedItem.description}</p>
                </div>
                {selectedItem.type !== "video" && (
                  <Button variant="outline" size="sm" className="flex-shrink-0">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-auto">
                  {new Date(selectedItem.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
