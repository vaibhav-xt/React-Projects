import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProgressBar />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
