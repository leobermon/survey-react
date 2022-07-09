import '../styles/MsnTopHeader.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-plaza.css'
import React from "react";

import { createRoot } from 'react-dom/client';

const container = document.getElementById('targeting');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            odometerValue: 0
        };
    }

    componentDidMount() {
        this.setState({ odometerValue: 31022 });
    }

    render() {
        const { odometerValue } = this.state;
        return (
            <p className='text-center' id='parrafo'>
                <Odometer
                    animation="count"
                    format="d"
                    duration={4000}
                    value={odometerValue}
                />
                <label id='cabeceraText' htmlFor="">Encuestas contestadas hasta el momento</label>
            </p>
        );
    }
}

root.render(<App tab="home" />);

function Carrousel() {
    return ( <div></div> );
}

export default Carrousel;

