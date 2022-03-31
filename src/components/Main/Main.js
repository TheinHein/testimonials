import { useEffect, useState, useRef } from "react";
import uniqid from "uniqid";

import Menu from "../Menu/Menu";
import Testimonial from "../Testimonial/Testimonial";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";

import getFilteredTracks from "../../utils/getFilteredTracks";
import useTestimonialsGetter from "../../hooks/useTestimonialsGetter";

import logo1 from "../../assets/images/logo1.svg";

import "./Main.css";

export default function Main(props) {
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [page, setPage] = useState(1);
  const [track, setTrack] = useState(undefined);
  const [exercise, setExercise] = useState(undefined);
  const [order, setOrder] = useState("oldest_first");
  const { results, pagination, trackCounts, loading } = useTestimonialsGetter(
    page,
    track,
    exercise,
    order
  );
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedTrack, setSelectedTrack] = useState("all");

  const exerciseInput = useRef(null);

  useEffect(() => {
    getFilteredTracks().then((tracks) => {
      const all = {
        slug: "all",
        title: "All",
        icon_url: logo1,
        total_tracks:
          trackCounts && Object.values(trackCounts).reduce((x, y) => x + y, 0),
      };
      setFilteredTracks([all, ...tracks]);
    });
  }, [trackCounts]);

  function handleTrack(track) {
    setPage(1);
    setSelectedPage(1);
    setSelectedTrack(track);
    if (track === "all") {
      setTrack(undefined);
    } else {
      setTrack(track);
    }
  }

  function handlePage(pageId) {
    setPage(pageId);
    setSelectedPage(parseInt(pageId));
  }

  function handleExercise(e) {
    setExercise(e.target.value);
  }

  let filterTimeOut = 0;
  function handleFilter(e) {
    if (filterTimeOut !== undefined) clearTimeout(filterTimeOut);
    filterTimeOut = setTimeout(() => handleExercise(e), 1500);
  }

  function handleOrder(order) {
    setOrder(order);
  }

  return (
    <main className="Main">
      <Menu
        filteredTracks={filteredTracks}
        trackCounts={trackCounts}
        handleTrack={handleTrack}
        exerciseInput={exerciseInput}
        handleFilter={handleFilter}
        handleOrder={handleOrder}
        selectedTrack={selectedTrack}
      />
      {!loading ? (
        <div className="Main-scrollable">
          {results.map((result) => (
            <Testimonial key={uniqid()} result={result} />
          ))}
        </div>
      ) : (
        <>
          <Loading />
          {results ? (
            <div className="Main-scrollable">
              {results.map((result) => (
                <Testimonial key={uniqid()} result={result} />
              ))}
            </div>
          ) : (
            <div className="Main-blank-loading" />
          )}
        </>
      )}
      <Pagination
        pagination={pagination}
        loading={loading}
        handlePage={handlePage}
        selectedPage={selectedPage}
      />
    </main>
  );
}
