"use client";

import React, { useEffect, useState } from "react";
import { fetchStats } from "@/app/api/services";

// Define the type for your stats here. This is a placeholder.
type StatsType = any;

export default function Home() {
  const [stats, setStats] = useState<StatsType | null>(null);

  useEffect(() => {
    fetchStats().then((data) => {
      setStats(data);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {stats ? <p>{JSON.stringify(stats)}</p> : <p>Loading...</p>}
    </main>
  );
}
