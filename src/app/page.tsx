'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [targetRole, setTargetRole] = useState('');
  const [currentSkills, setCurrentSkills] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // this here like converts the skills string from user into an array 
      const skillsArray = currentSkills
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);

        // storing the input but other methods like a global store could be used or with auth can be stored in DB
      localStorage.setItem('analysisData', JSON.stringify({
        targetRole,
        currentSkills: skillsArray
      }));

      router.push('/dashboard');
    } catch (error) {
      alert('Error processing request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 text-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative">
        <h1 className="text-2xl font-bold mb-6">Career Path Analyzer</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Target Role</label>
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full border rounded p-2"
              required
            >
              <option value="">Select a role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Data Analyst">Data Analyst</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Current Skills (comma-separated)
            </label>
            <input
              type="text"
              value={currentSkills}
              onChange={(e) => setCurrentSkills(e.target.value)}
              placeholder="e.g., JavaScript, Excel, SQL"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-[50%] block mx-auto bg-[#00bfff] text-white py-2 rounded cursor-pointer duration-300 hover:bg-[#02a7de] disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Analyze '}
          </button>
        </form>
      </div>
    </div>
  );
}