interface HackerNewsStory {
  id: number;
  title: string;
  url?: string;
  score: number;
  time: number;
  type: string;
  by: string;
}

interface Props {
  stories: HackerNewsStory[];
}

export default function TechNews({ stories }: Props) {
  const formatTime = (t: number) => {
    const diff = Date.now() - t * 1000;
    const hrs = Math.floor(diff / (1000 * 60 * 60));
    if (hrs < 1) return "Just now";
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  };

  const getDomain = (url?: string) => {
    if (!url) return "";
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return "";
    }
  };

  return (
    <div className="p-4 border rounded bg-white">
      <h2 className="font-semibold text-xl mb-4">Top 5 Latest Tech News</h2>

      <div className="space-y-3">
        {stories.map((story) => (
          <div key={story.id} className="p-3 border rounded text-sm">
            <a
              href={story.url}
              target="_blank"
              className="font-medium mb-1 text-lg text-blue-600"
            >
              {story.title}
            </a>

            <div className="text-gray-600 mt-1 space-x-3 text-sm">
              <span>Score: {story.score}</span>
              <span>By: {story.by}</span>
              <span>{formatTime(story.time)}</span>
              {story.url && <span>{getDomain(story.url)}</span>}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-600 mt-4">
        Data from HackerNews API.
      </p>
    </div>
  );
}
