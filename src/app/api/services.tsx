const axios = require("axios");

const options = {
  method: "GET",
  url: "https://live-golf-data.p.rapidapi.com/players",
  params: {
    lastName: "Viktor",
    firstName: "Hovland",
  },
  headers: {
    "X-RapidAPI-Key": "adfea91896msh0af00b7e7101767p18d825jsn55c0cb201e2e",
    "X-RapidAPI-Host": "live-golf-data.p.rapidapi.com",
  },
};

export async function fetchStats() {
  try {
    const response = await axios.request(options);
    return response.data; // This automatically gets the JSON response body
  } catch (error) {
    console.error(error);
  }
}
