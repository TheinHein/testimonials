import "./Title.css";
import vector from "../../assets/images/vector.svg";
export default function Title() {
  return (
    <div className="Title">
      <div className="Title-icon"></div>
      <div className="Title-wrapper">
        <h2 className="Title-text">Testimonials I've left</h2>
        <span className="Title-track-counts">200</span>
      </div>
      <div className="Title-vector">
        <img src={vector} alt="vector" />
      </div>
    </div>
  );
}
