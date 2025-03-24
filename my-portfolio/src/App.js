import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import Project from './component/Projects';
import Resume from './component/Resume';
import Skills from './component/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
