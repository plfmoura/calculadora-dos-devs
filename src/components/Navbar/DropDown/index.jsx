import React, { useState } from "react";
import "./styles.css";

export default function DropDown({ icon, data }) {
  const [active, setActive] = useState(false);

  const styles = {
    dropdown_icon: {
      backgroundColor: active ? "#fe0000" : "transparent"
    },
  };

  return (
    <div className="dropdown-align">
      <div style={styles.dropdown_icon} className="icon-container"
        onMouseOut={() => setActive(false)}
        onMouseEnter={() => setActive(true)}
      >
        {icon}
      </div>
      {active && (
        <ul onMouseOut={() => setActive(false)} onMouseEnter={() => setActive(true)} className="dropdown-container">
          <li className="drop-item">Calculadoras</li>
          <li className="drop-item">Colaboração</li>
          <li className="drop-item">Desenvolvedores</li>
        </ul>
      )}
    </div>
  );
}

