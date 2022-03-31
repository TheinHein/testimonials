import { forwardRef } from "react";

import uniqid from "uniqid";

import "./TrackMenu.css";

export default forwardRef(function TrackMenu(props, ref) {
  const { filteredTracks, trackCounts, filterByTrack, selectedTrack } = props;

  return (
    <div className="TrackMenu" ref={ref}>
      {filteredTracks.map((track) => (
        <label
          className={
            selectedTrack === track.slug
              ? "TrackMenu-label TrackMenu-selected"
              : "TrackMenu-label"
          }
          htmlFor={track.slug}
          key={uniqid()}
        >
          <input
            className="TrackMenu-radio"
            type="radio"
            id={track.slug}
            name="track"
            value={track.slug}
            onChange={filterByTrack}
            disabled={selectedTrack === track.slug && true}
          />
          <div className="TrackMenu-icon">
            <img src={track.icon_url} alt={track.slug} />
          </div>
          <div className="TrackMenu-title">{track.title}</div>
          <div className="TrackMenu-counts">
            <div>
              {track.total_tracks
                ? track.total_tracks
                : trackCounts[track.slug]}
            </div>
          </div>
        </label>
      ))}
    </div>
  );
});
