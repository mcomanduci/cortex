import Seta from "./Icons/Seta";
import SetaR from "./Icons/SetaR";
import DepoimentoCard from "./helper/DepoimentoCard";
// import SimpleSlider from "./helper/SimpleSlider";

function Depoimentos() {
  return (
    <div className="max-w-site mx-auto my-16">
      <div className="flex justify-between items-center">
        {/* <SimpleSlider /> */}
        <Seta />
        <DepoimentoCard />
        <DepoimentoCard />
        <DepoimentoCard />
        <SetaR />
      </div>
    </div>
  );
}

export default Depoimentos;
