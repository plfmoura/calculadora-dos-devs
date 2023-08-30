import React, { useState } from 'react'
import { devProfiles } from "../../Data.json";
import './styles.css'

export default function Footer() {
    const [active, setActive] = useState(false);

    return (
        <footer className="footer-align">
            <button className="footer-btn" onClick={() => setActive(!active)}>
                Feita pelos Devs do Club dos Devs
            </button>
            <div className={active ? "name-container active" : "name-container"}>
                {devProfiles.map((profile) => (
                    <a
                        key={profile.github}
                        href={`https://github.com/${profile.github}`}
                        target="blank"
                    >
                        {profile.name}
                    </a>
                ))}
            </div>
            <p>{new Date().toLocaleDateString("pt-BR")}</p>
        </footer>
    )
}
