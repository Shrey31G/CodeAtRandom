"use client";

export const dynamic = "force-dynamic"; 

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import SkillGapResults from "../components/SkillGapResults";
import CareerRoadmap from "../components/CareerRoadmap";
import TechNews from "../components/TechNews";
import Loader from "../components/ui/Loader";

export default function Dashboard() {
  const router = useRouter();
  const [skillGap, setSkillGap] = useState(null);
  const [roadmap, setRoadmap] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = typeof window !== "undefined"
      ? localStorage.getItem("analysisData")
      : null;

    if (!raw) {
      setLoading(false);
      router.push("/");
      return;
    }

    const data = JSON.parse(raw);

    if (!data.targetRole) {
      setLoading(false);
      router.push("/");
      return;
    }

    const fetchData = async () => {
      try {
        const [skillGapRes, roadmapRes, newsRes] = await Promise.all([
          axios.post("/api/skill-gap", data),
          axios.post("/api/roadmap", { targetRole: data.targetRole }),
          axios.get("/api/hackernews")
        ]);

        setSkillGap(skillGapRes.data);
        setRoadmap(roadmapRes.data);
        setNews(newsRes.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <div>
      <SkillGapResults data={skillGap} />
      <CareerRoadmap data={roadmap} />
      <TechNews stories={news} />
    </div>
  );
}
