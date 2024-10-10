import React, { useState } from "react";
import "./contact.css"
import Headercom from "./Header";
import Footer from "./Footer";


const Contact =()=>

{
  const [namee, setnamee] = useState("");
  const [email,setemail]= useState("");
  const [message, setmessage] = useState("")

    const changename=(e)=>
    {
        setnamee(e.target.vlaue)
    }

    const changeemail=(e)=>
    {
        setemail(e.target.vlaue)
    }

    const changemessage=(e)=>
    {
        setmessage(e.target.vlaue)
    }

    const clearfields=()=>
    {
        alert("Your Form is submitted successfully")
        setnamee("");
        setemail("");
        setmessage("")
    }



    return (

        <div>
            <div>
                <Headercom/>
            </div>
        <div className="Contactmaindiv">
           <div> <h1>Contact Form</h1> </div> 
           <div className="contactmap">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616.104886826179!2d73.03712773190324!3d31.440945052333326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39224255d30261b5%3A0x6cda1baa8d91cfa6!2sGhulam%20Muhammad%20Abad%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1679667990554!5m2!1sen!2s" 
           width="100%"
            height="450"
             style={{border :"0", width:"100%"}}
             allowFullScreen="" 
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"></iframe>

           </div>
            
            <div className="contactform">
            <form action="https://formspree.io/f/xpzejkok" method="POST">
               <div className="inp1"> <input onChange={changename} type="text" placeholder="Enter name" name="NAME" /></div>
               <div className="inp1"> <input onChange={changeemail} type="email" placeholder="Enter email" name="Email" /></div>
               <div className="textinp"> <textarea onChange={changemessage} cols={30} rows={10} placeholder="Enter message" name ="Message"/></div>
               <div className="inpbutton"><input onClick={clearfields} type="submit" value="Send"/></div>
            </form>
            </div>

        </div>
        <div>
            <Footer/>
        </div>
        </div>
    )
}

export default Contact;
