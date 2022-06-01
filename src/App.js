import './App.css';
import TablaVet from './tablavet/TablaVet';
import Cabecera from './tablavet/Cabecera';
import Footer from './tablavet/Footer';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <TablaVet />
      <Footer />
    </div>
  );
}

export default App;
