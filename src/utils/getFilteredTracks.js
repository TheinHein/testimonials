const axios = require("axios");

function getTracks() {
  return axios.get("https://exercism.org/api/v2/tracks").then((response) => {
    return response.data.tracks;
  });
}

function getUserTracks() {
  return axios
    .get("https://exercism.org/api/v2/hiring/testimonials")
    .then((response) => {
      return response.data.testimonials.tracks;
    });
}

async function getFilteredTracks() {
  const tracks = await getTracks();
  const userTracks = await getUserTracks();
  const filtered = tracks.filter((track) => {
    return userTracks.includes(track.slug);
  });
  return filtered;
}

export default getFilteredTracks;
