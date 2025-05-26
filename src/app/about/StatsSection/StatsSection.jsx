// components/StatsSection.jsx
import { FaThumbsUp, FaUserFriends, FaRegSmile } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { BsCalendar3 } from "react-icons/bs";
import './StatsSections.css';

const stats = [
  { icon: <FaThumbsUp />, value: "100%", label: "Quality" },
  { icon: <GiRibbonMedal />, value: "2480", label: "Health Departments" },
  { icon: <FaUserFriends />, value: "26", label: "People working" },
  { icon: <BsCalendar3 />, value: "38", label: "Years of experience" },
  { icon: <FaRegSmile />, value: "7856", label: "Happy Smiles" },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div key={index} className="stat-item">
            <div className="icon">{item.icon}</div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
