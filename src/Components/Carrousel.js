
import styles from '../styles/Carrousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SuggestedQuestions2 from './SuggestedQuestions2';


function Carrousel() {

    return (
        <div className="Carrousel">

            <Carousel
                autoFocus={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={10000}
                transitionTime={1000}
                useKeyboardArrows
                className="presentation-mode">
                <div key="content-0" className="my-slide primary">
                    <div className="containerFake" id='target'>
                        <SuggestedQuestions2 />
                    </div>
                </div>
                <div key="content-1" className="my-slide secondary">
                    <div className="containerFake" id='target'>
                        <SuggestedQuestions2 />
                    </div>
                </div>
            </Carousel>

        </div>
    );
}

export default Carrousel;
