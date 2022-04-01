import axios from "axios";

export const TRACKS_URL = "https://exercism.org/api/v2/tracks";
export const TESTIMONIALS_URL =
  "https://exercism.org/api/v2/hiring/testimonials";

async function getTracks() {
  try {
    return await axios.get(TRACKS_URL);
  } catch (e) {
    console.log(e);
    return [];
  }
}

async function getUserTracks(params) {
  try {
    return await axios.get(TESTIMONIALS_URL, params);
  } catch (e) {
    console.log(e);
    return [];
  }
}

async function getFilteredTracks() {
  const tracks = await getTracks().then((response) => {
    return response.data.tracks;
  });
  const userTracks = await getUserTracks().then((response) => {
    return response.data.testimonials.tracks;
  });
  const filtered = await tracks.filter((track) => {
    return userTracks.includes(track.slug);
  });
  return filtered;
}

export { getTracks, getUserTracks, getFilteredTracks };
