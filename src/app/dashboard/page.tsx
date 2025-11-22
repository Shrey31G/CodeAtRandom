'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SkillGapResults from '../components/SkillGapResults';
import CareerRoadmap from '../components/CareerRoadmap';
import TechNews from '../components/TechNews';
import Loader from '../components/ui/Loader';

export default function Dashboard() {
  const [skillGap, setSkillGap] = useState(null);
  const [roadmap, setRoadmap] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = JSON.parse(sessionStorage.getItem('analysisData') || '{}');
      
      // here I'm doing all api calling at once to make UI response faster 
      try {
        const [skillGapRes, roadmapRes, newsRes] = await Promise.all([
          axios.post('/api/skill-gap', data),
          axios.post('/api/roadmap', { targetRole: data.targetRole }),
          axios.get('/api/hackernews')
        ]);

        setSkillGap(skillGapRes.data);
        setRoadmap(roadmapRes.data);
        setNews(newsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className='flex h-screen justify-center items-center bg-white text-black'>
    <Loader />
  </div>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 pb-4 pt-2 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black pb-2">Career Analysis</h1>
    
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <SkillGapResults data={skillGap} />
          <CareerRoadmap data={roadmap} />
        </div>

        <TechNews stories={news} />
      </div>
    </div>
  );
}