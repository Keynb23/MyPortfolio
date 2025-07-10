import './CompStyles.css'; // Import the component-specific styles

import DistordedPF from '../assets/movies/DistordedPF.jpg';
import djangoChain from '../assets/movies/djangoChain.jpg';
import HollywoodHeads from '../assets/movies/HollywoodHeads.jpg';
import KB1Purple from '../assets/movies/KB1Purple.jfif';
import KB1Yellow from '../assets/movies/KB1Yellow.jfif';
import KB2Grave from '../assets/movies/KB2Grave.jpg';
import RDOil from '../assets/movies/RD-Oil.jfif';
import Twist from '../assets/movies/Twist.jfif';
import TwistRed from '../assets/movies/TwistRed.png';
import WhiteBastards from '../assets/movies/WhiteBastards.jfif';

// Hobbies component to add a personal touch
const Hobbies = () => {
    return (
        <section id="hobbies" className="hobbies-section">
            <div className="hobbies-container">
                <h2 className="hobbies-heading">Beyond the Code</h2>
                <p className="hobbies-text">
                    While I'm passionate about crafting clean code and intuitive user interfaces, my interests extend beyond the screen.
                    I enjoy diving into the creative worlds of UI/UX design and exploring web animations to bring digital experiences to life.
                    Outside of development, I'm fascinated by 3D modeling with tools like Blender and game development using Unreal Engine,
                    which fuels my creative problem-solving and attention to detail.
                </p>
                <p className="hobbies-text hobbies-text-mt">
                    I believe that a well-rounded perspective, honed through diverse experiences and hobbies,
                    contributes to building more thoughtful and user-centric software.
                </p>

                <div className="hobbies-image-wrapper">
                    <img src={DistordedPF} alt='PF' className="hobby-image"></img>
                    <img src={djangoChain} alt='PF' className="hobby-image"></img>
                    <img src={HollywoodHeads} alt='PF' className="hobby-image"></img>
                    <img src={KB1Purple} alt='PF' className="hobby-image"></img>
                    <img src={KB1Yellow} alt='PF' className="hobby-image"></img>
                    <img src={KB2Grave} alt='PF' className="hobby-image"></img>
                    <img src={RDOil} alt='PF' className="hobby-image"></img>
                    <img src={Twist} alt='PF' className="hobby-image"></img>
                    <img src={TwistRed} alt='PF' className="hobby-image"></img>
                    <img src={WhiteBastards} alt='PF' className="hobby-image"></img>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
