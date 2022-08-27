import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import lft from './assets/lft.jpeg'
import carbike from './assets/carbike.jpeg'
import rgt from './assets/rgt.jpeg'
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    
   <div className='App'>
    
    <Navbar/>
    <figcaption>
      BUY
    </figcaption>
    <figcaption1>
      the
    </figcaption1>
    <figcaption2>
      Product
    </figcaption2>
    <figcaption3>
      for you!
    </figcaption3>
    <figcaption4>
      SELL
    </figcaption4>
    <figcaption5>
      Your
    </figcaption5>
    <figcaption6>
      Product
    </figcaption6>
    <figcaption7>
      !
    </figcaption7>
    <Button/>
    
    <figcaption8>
    Lorem Ipsum is simply dummy text of the
    </figcaption8>
    <figcaption9>
    printing and typesetting industry.
    </figcaption9>
    <img src={lft} height={500} width={500} />
    <img src={carbike} height={300} width={300} />
    <img src={rgt} height={500} width={500} />
    
   </div>
  );
}

export default App;
