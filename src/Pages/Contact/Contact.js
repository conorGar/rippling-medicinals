import React from 'react'
import './Contact.css'

// class Contact extends React.Component{
//     render(){
//     return(
//         <div className='contact-holder'>
//             <h1>Contact</h1>
//         </div>
//     )
//     }
// }

function Contact() {
    return (
        <div className='contact-holder'>
            <div className='contact-banner'>
                <h2 className="copy-text">Wish to know more? Reach out!</h2>
            </div>
            <h2 className='form-title'> - Contact -</h2>
            <h5 className='form-subtitle'>Email: shannon@shannon.com</h5>
            <h5 className='form-subtitle'>Phone: xxx-xxx-xxx </h5>

            <form method="POST" action="https://formspree.io/conorgar@gmail.com" className='contact-form'>
                <input className='input-email' type="email" name="email" placeholder="Your email" />
                <textarea className='input-message' name="message" placeholder="Message"></textarea>
                <button className='submit-button' type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;