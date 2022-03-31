import "./Header.css";

import dashboard from "../../assets/images/dashboard.svg";
import alarmBell from "../../assets/images/alarm-bell.svg";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        <div className="Header-logo-icon"></div>
        <div className="Header-logo-text"></div>
      </div>
      <div className="Header-dashboard-text">Dashboard</div>
      <div className="Header-dashboard-icon">
        <img src={dashboard} alt="dashboard symbol" />
      </div>
      <div className="Header-nav">
        <div className="Header-tracks">
          <div className="Header-tracks-icon"></div>
          <div className="Header-tracks-text">Tracks</div>
        </div>
        <div className="Header-mentoring">
          <div className="Header-mentoring-icon"></div>
          <div className="Header-mentoring-text">Mentoring</div>
        </div>
        <div className="Header-contribute">
          <div className="Header-contribute-icon"></div>
          <div className="Header-contribute-text">Contribute</div>
        </div>
      </div>
      <div className="Header-message-icon"></div>
      <div className="Header-message-red-dot"></div>
      <div className="Header-hexagon-icon"></div>
      <div className="Header-hexagon-red-dot"></div>
      <div className="Header-notification-icon">
        <img src={alarmBell} alt="alarm bell symbol" />
      </div>
      <div className="Header-notification-badge"></div>
      <div className="Header-lvl">
        <div className="Header-lvl-icon"></div>
        <div className="Header-lvl-text">300K</div>
      </div>
      <div className="Header-lvl-red-dot"></div>
      <div className="Header-profile-img"></div>
      <div className="Header-menu-icon"></div>
      <div className="Header-line"></div>
    </div>
  );
}
