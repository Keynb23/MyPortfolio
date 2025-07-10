import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import XpCards from './Components/xpCards';
import Projects from './Components/Projects';
import Edu from './Components/Edu';
import Hobbies from './Components/Hobbies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <XpCards />
        <Projects />
        <Edu />
        <Hobbies />
      </main>
        <Footer/>
    </div>
  );
}

export default App;
