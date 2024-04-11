import React, { useEffect, useState } from "react";
import { fetchStats } from "@/app/api/services";

// Define the type for your stats here. This is a placeholder.
// Adjust according to the actual structure of your stats object.
type StatsType = any;

export default function Home() {
  const [stats, setStats] = useState<StatsType | null>(null);

  useEffect(() => {
    fetchStats().then((data) => {
      setStats(data);
    });
  }, []);

  // It's a good practice to handle potential null or undefined values.
  // Especially important if `stats` could be an object, array, etc.
  // The following is a simple rendering example.
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {stats ? <p>{JSON.stringify(stats)}</p> : <p>Loading...</p>}
    </main>
  );
}
