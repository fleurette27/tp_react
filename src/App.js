import logo from './logo.svg';
import './App.css';
import HeroHome from './Components/HeroHome';
import 'tailwindcss/tailwind.css';
import Compagny from './Components/Compagny';
import CategorieJob from './Components/CategorieJob';
import CTA from './Components/CTA';
import FeaturedJob from './Components/FeaturedJob';
import LatestJob from './Components/LatestJob';
import Footer from './Components/Footer';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <HeroHome/>
      <Compagny/>
      <CategorieJob/>
      <CTA/>
      <FeaturedJob/>
      <LatestJob/>
      <Footer/>
    </>
  );
}

export default App;
