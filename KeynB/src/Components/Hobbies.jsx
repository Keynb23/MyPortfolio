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

export const Hobbies = () => {
    return (

        <div className="HobbiesWrapper">
            <img source={DistordedPF} alt='PF'></img>
            <img source={djangoChain} alt='PF'></img>
            <img source={HollywoodHeads} alt='PF'></img>
            <img source={KB1Purple} alt='PF'></img>
            <img source={KB1Yellow} alt='PF'></img>
            <img source={KB2Grave} alt='PF'></img>
            <img source={RDOil} alt='PF'></img>
            <img source={Twist} alt='PF'></img>
            <img source={TwistRed} alt='PF'></img>
            <img source={WhiteBastards} alt='PF'></img>
        </div>
    )
}