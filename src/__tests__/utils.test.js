import axios from "axios";

import {
  getTracks,
  getUserTracks,
  TRACKS_URL,
  TESTIMONIALS_URL,
} from "../utils/utils";

jest.mock("axios");

describe("getTracks", () => {
  describe("when API call is successful", () => {
    it("should return tracks list", async () => {
      const tracks = [];

      axios.get.mockResolvedValueOnce(tracks);

      const result = await getTracks(TRACKS_URL);

      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith(TRACKS_URL);
      expect(result).toEqual(tracks);
    });
  });

  describe("when API call fails", () => {
    it("should return empty tracks list", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await getTracks(TRACKS_URL);

      expect(axios.get).toHaveBeenCalledWith(TRACKS_URL);
      expect(result).toEqual([]);
    });
  });
});

describe("getUserTracks", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      const tracks = [];

      axios.get.mockResolvedValueOnce(tracks);

      const params = {};
      const result = await getUserTracks(params);

      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith(TESTIMONIALS_URL, params);
      expect(result).toEqual(tracks);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const params = {};

      const result = await getUserTracks(params);

      expect(axios.get).toHaveBeenCalledWith(TESTIMONIALS_URL, params);
      expect(result).toEqual([]);
    });
  });
});
