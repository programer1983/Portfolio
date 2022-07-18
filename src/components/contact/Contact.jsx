import "./contact.css"
import Phone from "./../../img/telefon.png"
import Email from "./../../img/email.png"
import Address from "./../../img/location.png"
import Lincedin from "./../../img/lincedin.png"
import Facebook from "./../../img/facebook.png"
import GitHub from "./../../img/git.png"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { useContext } from "react";
import {ThemeContext} from "./../../context"

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_58zmuin', 
            'template_neckv1k', 
            formRef.current, 
            'user_RyWBgBRflyUzGSWbQ6rhV'
        )
        .then(
          (result) => {
          console.log(result.text);
          setDone(true)
        }, 
          (error) => {
          console.log(error.text);
        });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">My Сontacts.</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon"/>
                            +38 096 445 19 20
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon"/>
                            mitucha1983@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon"/>
                            Ukraine
                        </div>
                        <a href="https://www.linkedin.com/in/dmitriy-g-6bb321216/" style={{color: !darkMode && "black"}}>
                            <div className="c-info-item">
                                <img src={Lincedin} alt="" className="c-icon"/>
                                Lincedin
                            </div>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100009216974269" style={{color: !darkMode && "black"}}>
                            <div className="c-info-item">
                                <img src={Facebook} alt="" className="c-icon"/>
                                Facebook
                            </div>
                        </a>
                        <a href="https://github.com/programer1983" style={{color: !darkMode && "black"}}>
                            <div className="c-info-item">
                                <img src={GitHub} alt="" className="c-icon"/>
                                GitHub
                            </div>
                        </a>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Get in touch.</b> 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode &&  "#333", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}}  type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}}  type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
