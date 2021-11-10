import "./about.css"
import Award from "../../img/award.png"
import Work from "./../../img/work.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src={Work}
                        alt="" 
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established fact that a reader will be 
                    dreadable content
                </p>
                <p className="a-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Felis eget nunc lobortis mattis aliquam. 
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design Awords 2021</h4>
                        <p className="a-award-desc">
                        Arcu ac tortor dignissim convallis aenean et. Aliquet bibendum enim facilisis gravida neque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
