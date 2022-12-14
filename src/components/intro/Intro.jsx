import "./intro.css"
import Me from "./../../img/me.jpg"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello My name is</h2>
                    <h1 className="i-name">Dmitry Grabovsky</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">React Developer</div>
                            <div className="i-title-item">Redux Developer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    I specialize in creating stylish, modern websites, web applications.                    </p>
                </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro





