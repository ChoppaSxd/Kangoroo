import logo from './images/Main photo.png';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <img src={logo}></img>
      <Footer />
    </div>
  );
}

export default App;
