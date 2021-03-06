import { useState, useEffect } from "react";

import { getUserTracks } from "../utils/utils";

export default function useTestimonialsGetter(page, track, exercise, order) {
  const [results, setResults] = useState();
  const [pagination, setPagination] = useState();
  const [trackCounts, setTrackCounts] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUserTracks({
      params: {
        page,
        track,
        exercise,
        order,
      },
    }).then((response) => {
      setResults(response.data.testimonials.results);
      setPagination(response.data.testimonials.pagination);
      setTrackCounts(response.data.testimonials.track_counts);
      setLoading(false);
    });
  }, [page, track, exercise, order]);

  return {
    results,
    pagination,
    trackCounts,
    loading,
  };
}
