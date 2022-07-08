import "./about.css"
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
                   <p>I have been learning  React, Redux, CSS  from YouTube videos for two years.</p>
                   <p>I studied documentation and articles on the Internet.</p>
                   <p>Many problems arose along the way.</p>
                   <p>I searched for solutions on the Internet on various resources for programmers.</p>
                   <p>In the process, I acquired new knowledge on React and other areas in programming.</p>
                   <p>I love solving problems in different ways.</p>
                   <p>I like talking to people and asking questions that interest me.</p>
                </p>
            </div>
        </div>
    )
}

export default About
