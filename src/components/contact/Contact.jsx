import "./contact.css";
import Phone from "../../image/phone.jpg";
import Email from "../../image/email.jpg";
import Address from "../../image/address.jpg";


const Contact = () => {



   return (
      <div className="c">
         <div className="c-bg"></div>
         <div className="c-wrapper">
            <div className="c-left">
               <h1 className="c-title">Let's discuss your project</h1>
               <div className="c-info">
                  <div className="c-info-item">
                     <img src={Phone} alt="" className="c-icon" />
                     +1 208 556 7845
                  </div>
                  <div className="c-info-item">
                     <img className="c-icon" src={Email} alt="" />
                     contact@helena.com
                  </div>
                  <div className="c-info-item">
                     <img className="c-icon" src={Address} alt="" />
                     125 S Main Street, Boise Idaho 83669 USA
                  </div>
               </div>
            </div>
            <div className="c-right">
               <p className="c-desc">
                  <b>What’s your story?</b> Get in touch. Always available for
                  freelancing if the right project comes along. me.
               </p>
               <form>
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Subject" />
                  <input type="text" placeholder="Email" />
                  <textarea rows="5" placeholder="Message" />
                  <button>Submit</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;