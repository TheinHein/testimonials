import { useState, createRef } from "react";

import TrackMenu from "../TrackMenu/TrackMenu";

import useStateToggler from "../../hooks/useStateToggler";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

import "./Menu.css";

export default function Menu(props) {
  const {
    filteredTracks,
    trackCounts,
    handleTrack,
    exerciseInput,
    handleFilter,
    handleOrder,
    selectedTrack,
  } = props;

  const [sort, setSort] = useState("Sort by Oldest");

  const [trackMenu, toggleTrackMenu] = useStateToggler();
  const [sortMenu, toggleSortMenu] = useStateToggler();

  const trackMenuAlertRef = createRef(null);
  const sortMenuAlertRef = createRef(null);

  useOutsideAlerter(trackMenuAlertRef, toggleTrackMenu);
  useOutsideAlerter(sortMenuAlertRef, toggleSortMenu);

  function filterByTrack(e) {
    handleTrack(e.target.value);
    toggleTrackMenu();
  }

  function handleSort(e) {
    const by = ["Sort by Most Recent", "Sort by Oldest"];
    handleOrder(e.target.id);
    if (e.target.id === "newest_first") setSort(by[0]);
    else setSort(by[1]);
  }
  return (
    <div className="Menu">
      {trackMenu && (
        <TrackMenu
          filteredTracks={filteredTracks}
          trackCounts={trackCounts}
          filterByTrack={filterByTrack}
          selectedTrack={selectedTrack}
          ref={trackMenuAlertRef}
        />
      )}
      <div className="Menu-logo"></div>
      <button className="Menu-button" onClick={toggleTrackMenu}></button>
      <div className="Menu-filter">
        <div className="Menu-search-icon"></div>
        <input
          className="Menu-filter-input"
          type="text"
          placeholder="Filter by exercise title"
          ref={exerciseInput}
          onKeyDown={handleFilter}
        ></input>
      </div>
      <div className="Menu-sort" onClick={toggleSortMenu}>
        <div className="Menu-sort-input">{sort}</div>
        <div className="Menu-sort-icon"></div>
        {sortMenu && (
          <div className="Menu-sort-menu" ref={sortMenuAlertRef}>
            <div onClick={handleSort} id="newest_first">
              Sort by Most Recent
              {sort === "Sort by Most Recent" && (
                <span className="Menu-checked">✔️</span>
              )}
            </div>
            <div onClick={handleSort} id="oldest_first">
              Sort by Oldest
              {sort === "Sort by Oldest" && (
                <span className="Menu-checked">✔️</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
