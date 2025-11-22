interface RoadmapPhase {
  phase: string;
  topics: string[];
}

interface Props {
  data: { roadmap: RoadmapPhase[] } | null;
}

export default function CareerRoadmap({ data }: Props) {
  if (!data || !data.roadmap || data.roadmap.length === 0) {
    return (
      <div className="p-4 border rounded bg-white">
        <h2 className="font-semibold text-lg mb-2">Career Roadmap</h2>
        <p className="text-gray-600 text-sm">No roadmap available</p>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded bg-white">
      <h2 className="font-semibold text-xl mb-4">Career Roadmap</h2>

      <div className="space-y-4">
        {data.roadmap.map((phase, index) => (
          <div key={index} className="p-3 border rounded">
            <h3 className="font-medium mb-2">{phase.phase}</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {phase.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Follow the phases in order for best results.
      </p>
    </div>
  );
}
