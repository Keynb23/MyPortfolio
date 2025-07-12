// Import all necessary assets
import DistordedPF from "../assets/movies/DistordedPF.jpg";
import djangoChain from "../assets/movies/djangoChain.jpg";
import HollywoodHeads from "../assets/movies/HollywoodHeads.jpg";
import KB1Purple from "../assets/movies/KB1Purple.jfif";
import KB1Yellow from "../assets/movies/KB1Yellow.jfif";
import KB2Grave from "../assets/movies/KB2Grave.jpg";
import RDOil from "../assets/movies/RD-Oil.jfif";
import Twist from "../assets/movies/Twist.jfif";
import TwistRed from "../assets/movies/TwistRed.png";
import WhiteBastards from "../assets/movies/WhiteBastards.jfif";
import Larry from "../assets/hobbies/Larry.jpg";
import nba from "../assets/bball/nba.jpg";
import lbj from "../assets/bball/lbMiami.jpg";
import leYellow from "../assets/bball/leYellow.jpg";
import code from "../assets/hobbies/code.webp";
import shawty from "../assets/hobbies/shawty.jpg";
import popcorn from "../assets/hobbies/popcorn.webp";
import qt from "../assets/hobbies/qt.webp";
import Misirlou from "../assets/Misirlou.mp3";
import pie from '../assets/hobbies/pie.png';
import mj from '../assets/bball/MJ.jpg';
import sky from '../assets/hobbies/Skylar.avif';

// Define the content for the narrative experience
export const hobbyContent = [
  { type: "image", text: "Listen...", textColor: "var(--yellow)", },
  { type: "image", text: "I like to code", code, textColor: "var(--yellow)" },
  { type: "image", text: "It's stimulating", textColor: "var(--yellow)" },
  {
    type: "text",
    text: '"stimulating" sounds a little weird lol',
    textColor: "var(--yellow)",
  },
  {
    type: "", text: 'Need a break from the ads?', textColor: 'rgb(65, 255, 156)'
  },
  {
    type: "", text: 'What? No?', textColor: 'var(--yellow)'
  },
  {
    type: "", text: 'Well, Yeah actually', textColor: 'var(--yellow)'
  },
  {
    type: "image", text: '', image: pie
  },
  {
    type: "", text: 'Kidding hehe', textColor: 'rgb(65, 255, 156)'
  },
  {
    type: "",
    text: "Code-burnout=GYM",
    textColor: "var(--yellow)",
  },
  {
    type: 'image', image: Larry
  },
  {
    type: "",
    text: "I was shredded at one point",
    textColor: "var(--yellow)",
  },
  {
    type: "image",
    text: "then I met my girlfriend",
    image: shawty,
    textColor: "var(--yellow)",
  },
  {
    type: '', text: 'Hang in there. Almost done', textColor: 'var(--yellow)'
  },
  { type: "image", text: "Big MJ fan", image: mj, textColor: "var(--w-light)" },
  { type: "", text: "SIKE", textColor: "var(--redGlow)" },
  { type: "image", text: "LeGoat bahahahaha", image: nba, textColor: "var(--yellow)" },
  { type: "image", text: "LeGoat bahahahaha", image: lbj, textColor: "var(--w-light)" },
  {
    type: "image",
    text: "LeGoat bahahahaha",
    image: leYellow,
    textColor: "var(--w-flash)",
  },
  {
    type: '',
    text: "Favorite passtime?",
    textColor: "var(--yellow)",
  },
  { type: "image", text: "A cinematic escape", image: popcorn, textColor: "var(--yellow)" },
  {
    type: '',
    text: "Hate that I said I left that in lol",
    textColor: "var(--yellow)",
  },
  { type: "image", text: "PEAK CINEMA", image: sky, textColor: "var(--yellow)" },
  {
    type: "audio-visual-qt", // Custom type for specific QT behavior
    text: "", // HERE
    image: qt,
    audio: Misirlou,
    audioStart: 0,
    initialDisplayDuration: 60000, 
    textColor: "var(--yellow)",
  },
  // Images that were part of imageCycle, now individual slides
  { type: "image", text: null, image: djangoChain, textColor: "white" },
  { type: "image", text: null, image: HollywoodHeads, textColor: "white" },
  { type: "image", text: null, image: KB1Purple, textColor: "white" },
  { type: "image", text: null, image: KB1Yellow, textColor: "white" },
  { type: "image", text: null, image: KB2Grave, textColor: "white" },
  { type: "image", text: null, image: RDOil, textColor: "white" },
  { type: "image", text: null, image: Twist, textColor: "white" },
  { type: "image", text: null, image: TwistRed, textColor: "white" },
  { type: "image", text: null, image: WhiteBastards, textColor: "white" },
  {
    type: "text",
    text: "Designed and Developed by",
    image: null,
    textColor: "var(--yellow)",
  }, // HERE NOW - This is a text-only slide
  {
    text: "Key'n Brosdahl",
    textColor: "var(--yellow)",
  },
];
