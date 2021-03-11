import React, { Component } from 'react';
import './InfoBox.css'
import './Screen.css'

class InfoBox extends Component {
    render() {
        return (
            <div id="info-box" className="flex-row">
                <div className="count-box">
                    <h5>JUMLAH PERGURUAN TINGGI YANG TERCATAT</h5>
                    <p>2.136</p>
                </div>
                <div className="count-box">
                    <h5>JUMLAH PROGRAM STUDI YANG TERCATAT</h5>
                    <p>5.728</p>
                </div>
            </div>
        );
    }
}

export default InfoBox;