import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import mysql from "../assets/img/mysql.png";
import react from "../assets/img/react.png";
import cloud from "../assets/img/cloud.png";
import c from "../assets/img/c.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={java} width="150" alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={python} width="150" alt="Image" />
                                <h5>PYTHON</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} width="150" alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={react} width="150" alt="Image" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={c} width="150" alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={cloud} width="150" alt="Image" />
                                <h5>CLOUD COMPUTING</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
