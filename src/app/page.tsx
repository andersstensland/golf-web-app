import React from "react";
import { fetchStats } from "@/app/api/services";

export default function Home() {
  const [stats, setStats] = React.useState(null);

  // call method for fetching stats
  React.useEffect(() => {
    fetchStats().then((data: any) => setStats(data));
  }, []);

  // render stats
  if (stats) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>{stats}</p>
      </main>
    );
  }
}
