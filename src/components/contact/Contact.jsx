import "./contact.css"
import Phone from "./../../img/phone.png"
import Email from "./../../img/email.png"
import Address from "./../../img/address.jpg"

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon"/>
                            +1 1234 556 75
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon"/>
                            contact@dimon.dev
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon"/>
                            245 King Street, Touterie Victoria 8520 Australia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always  
                        freelancing if the right project comes along.
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
