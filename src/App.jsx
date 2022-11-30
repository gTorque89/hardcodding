import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App container-fluid">
      <div >
        <Navbar/>
      </div>
      <div>
        <ItemListContainer greeting={"No se encontraron productos!"}/>
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
