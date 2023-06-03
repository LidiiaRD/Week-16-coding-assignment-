import "./aboutMe.css";
import Award from "../../image/diploma.jpg";

const AboutMe = () => {
   return (
      <div className="a-container">
         <div className="title">
            <h1>About Me</h1>
            <p className="sub">
               It is a long established fact that a reader will be distracted by the
               readable content.
            </p>
            <p className="desc">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
            </p>
            <div className="award">
               <img src={Award} alt="" className="a-award-img" />
               <div className="award-texts">
                  <h4 className="award-title">International Design Awards 2021</h4>
                  <p className="award-desc">
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                     and fugit.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
};

export default AboutMe;