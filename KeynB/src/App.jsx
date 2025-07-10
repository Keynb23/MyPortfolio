import { xpCards as XpCards } from "./components/xpCards";
import { Hobbies } from "./Components/Hobbies";


const App = () => {
    return (
        <>
        <h1>Key'n Brosdahl</h1>
        <h2>Software Engineer</h2>
        <h3>Front End Developer</h3>
        <h4>UX/UI Designer</h4>
        <h5>Game Dev</h5>

        <XpCards />

        <h6>Stay New</h6>
        <p>Hi, welcome. you know, words words filler words. type shit</p>
        <ul>NavLinks</ul>
        <li>Also navlinks</li>
        <Hobbies/>
        </>
    )
}

export default App;