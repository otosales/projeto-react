import './App.css';
import Header from "./components/Header"
import ListaProdutos from './components/ListaProdutos';

import NavBar from './components/NavBar';



function App() {

  

  return (
    <div className="App">
     <NavBar 
     tituloHeader = "Esse é um titulo"
     />
    <Header />     

    <h2>Conteúdo</h2>

    
    <ListaProdutos>
      <p>Feito por Oto</p>

    </ListaProdutos>

    </div>
  );
}

export default App;
