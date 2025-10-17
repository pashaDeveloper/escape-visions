import { useState } from "react";

const stories = [
  { id: 1, name: "Bali", category: "Beach" },
  { id: 2, name: "Paris", category: "City" },
  { id: 3, name: "Iceland", category: "Nature" },
  { id: 4, name: "Tokyo", category: "Urban" },
  { id: 5, name: "Safari", category: "Wildlife" },
  { id: 6, name: "Greece", category: "Islands" },
];

const TravelStories = () => {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  return (
    <section className="py-8 bg-muted">
      <div className="container mx-auto px-6">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin">
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex-shrink-0 group cursor-pointer"
              onMouseEnter={() => setActiveStory(story.id)}
              onMouseLeave={() => setActiveStory(null)}
            >
              <div
                className={`relative w-24 h-24 rounded-full overflow-hidden transition-smooth ${
                  activeStory === story.id ? "scale-110 ring-4 ring-primary" : "ring-2 ring-primary/30"
                }`}
              >
                <img
                  src={`/lovable-uploads/story-${story.id}.jpg`}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              </div>
              <div className="text-center mt-3">
                <p className="font-medium text-sm text-foreground">{story.name}</p>
                <p className="text-xs text-muted-foreground">{story.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelStories;
