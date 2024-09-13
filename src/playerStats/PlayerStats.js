import React, { Component } from 'react'
import "../styles/playerStats.css"

const PlayerStats = () => {
    return (
        <div id="playerStats">
            <h1>WILLEY ZHOU, 21</h1>
            <div id="playerStats_lines">
                <span id="playerStats_lines_thick"></span>
                <span id="playerStats_lines_thin"></span>
            </div>
            <h2>Software Engineer</h2>
        </div>
    );
};

export default PlayerStats;
