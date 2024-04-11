export default async function Home() {
  const url =
    "https://live-golf-data.p.rapidapi.com/stats?year=2023&statId=186";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "adfea91896msh0af00b7e7101767p18d825jsn55c0cb201e2e",
      "X-RapidAPI-Host": "live-golf-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p></p>
    </main>
  );
}
