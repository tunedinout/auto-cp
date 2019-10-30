import React from 'react';
import './App.css'
import TopBanner from './components/Banner/TopBanner.js';
// import { Button } from 'primereact/button';
import MenuComponent from './components/Menu/MenuComponent';
import ViewComponent from './components/View/ViewComponent';



export default class App extends React.Component {


    render() {
        return (
            <div>
                <TopBanner />
                <div className="main-container">
                    <MenuComponent />
                    <ViewComponent />
                </div>
            </div>

        )

    }
}