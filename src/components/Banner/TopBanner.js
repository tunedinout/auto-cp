import React from 'react';
import './index.css'

export default class TopBanner extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="banner-heading-primary">
                    AutoCIP
                </div>
                <div className="copyright">
                    &copy; by
                <a href="https://www.matsci.ai/" target="_blank" className="copyright-link"> MatSci AI</a>
                </div>

            </div>
        );
    }
} 