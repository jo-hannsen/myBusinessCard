import './App.css';
import Image from './components/Image/Image';
import Header from './components/Header/Header';
import Mailing from './components/Mailing/Mailing';
import WebSite from './components/WebSite/WebSite';
import About from './components/About/About';
import Interests from './components/Interests/Interests';

function App() {
  return (
    <div className="App h-screen space-y-2 max-w-md">
      <Image />
      <Header />
      <div className='flex justify-around'>
        <Mailing />
        <WebSite />
      </div>
      <About />
      <Interests />
    </div>
  );
}

export default App;
