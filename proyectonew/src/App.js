import Header from "./componentes/header";
import ComponenteUno from "./componentes/componenteuno";
import ComponenteDos from "./componentes/componentedos";
import Componentenuevo from "./componentes/componentenuevo";
import ComponenteCuatro from "./componentes/componentecuatro";
import Quinto from "./componentes/componentequinto";

function App() {
  return (
    <div className="App">
      <Header appName = 'Cinema app' />
      <ComponenteUno />
      <ComponenteDos />
      <Componentenuevo />
      <ComponenteCuatro />
      <Quinto />
      
    </div>
  );
}

export default App;
