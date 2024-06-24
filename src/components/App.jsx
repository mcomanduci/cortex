import Beneficios from "./Beneficios";
import Clientes from "./Clientes";
import Depoimentos from "./Depoimentos";
import Header from "./Header";
import Helper from "./Helper";
import Hero from "./Hero";
import PreHeader from "./PreHeader";
import Servicos from "./Servicos";

function App() {
  return (
    <>
      <PreHeader />
      <Header />
      <Hero />
      <Servicos />
      <Helper />
      <Beneficios />
      <Clientes />
      <Depoimentos />
    </>
  );
}

export default App;
