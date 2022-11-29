import React, {Component} from 'react';

class SatelliteList extends Component {
    render() {
        return (
            <div className="point-list-box">
                <div className="btn-container">
                    <button
                        className="sat-list-btn"
                    >Show on map</button>
                </div>
                <hr/>
                <div>data</div>
            </div>
        );
    }
}

export default SatelliteList;