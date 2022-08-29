import React from "react";

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper teal px1">
            <a href="/" className="brand-logo">React+Typescript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                 <li><a href="/">Список дел</a></li>
             </ul>
        </div>
    </nav>
)
