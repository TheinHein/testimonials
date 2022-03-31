import moment from "moment";

import "./Testimonial.css";

export default function Testimonial(props) {
  const { result } = props;

  return (
    <div className="Testimonial">
      <a className="Testimonial-link" href={`#${result.track.slug}`}>
        <div>
          <div className="Testimonial-icon">
            <img src={result.track.icon_url} alt={result.track.slug} />
          </div>
        </div>
        <div>
          <div className="Testimonial-avatar">
            <img src={result.mentor.avatar_url} alt={result.mentor.handle} />
          </div>
        </div>
        <div>
          <div className="Testimonial-name">{result.mentor.handle}</div>
          <div className="Testimonial-place">{`on ${result.exercise.title} in ${result.track.title}`}</div>
        </div>
        <div>
          <div className="Testimonial-content">
            {result.content.length > 64
              ? result.content.slice(0, 64).concat("...")
              : result.content}
          </div>
        </div>
        <div>
          <div className="Testimonial-time">
            {moment(result.created_at).from()}
          </div>
        </div>
        <div>
          <div className="Testimonial-arrow"></div>
        </div>
      </a>
    </div>
  );
}
