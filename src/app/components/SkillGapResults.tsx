import React from "react";

interface SkillGapResultsProps {
  data: {
    matchedSkills: string[];
    missingSkills: string[];
    recommendations: string;
    suggestedLearningOrder: string[];
  } | null;
}

export default function SkillGapResults({ data }: SkillGapResultsProps) {
  if (!data) {
    return (
      <div className="p-4 border rounded bg-white">
        <h2 className="font-semibold text-lg mb-2">Skill Gap Analysis</h2>
        <p className="text-gray-600 text-sm">No data available</p>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded bg-white">
      <h2 className="font-semibold text-xl mb-4">Skill Gap Analysis</h2>

      {/* Matched Skills */}
      <div className="mb-4">
        <h3 className="font-medium mb-1">Matched Skills ({data.matchedSkills.length})</h3>
        {data.matchedSkills.length === 0 ? (
          <p className="text-gray-600 text-sm">No matching skills found</p>
        ) : (
          <ul className="list-disc list-inside text-sm text-gray-700">
            {data.matchedSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Missing Skills */}
      <div className="mb-4">
        <h3 className="font-medium mb-1">Missing Skills ({data.missingSkills.length})</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {data.missingSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Recommendations */}
      <div className="mb-4 p-3 border-l-4 border-blue-500 bg-blue-50">
        <h3 className="font-medium text-sm mb-1">Recommendations</h3>
        <p className="text-sm text-gray-700">{data.recommendations}</p>
      </div>

      {/* Suggested Order */}
      <div>
        <h3 className="font-medium text-sm mb-1">Suggested Learning Order:</h3>
        <ol className="list-decimal list-inside text-sm text-gray-700">
          {data.suggestedLearningOrder.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
