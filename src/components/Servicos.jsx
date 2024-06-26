import ServicosCard from "./helper/ServicosCard";
import SwipperServicos from "./helper/SwipperServicos";

function Servicos() {
  return (
    <section className="max-w-site mx-auto mt-8 lg:mt-16 px-4 md:px-8 2xl:px-0">
      <h2
        id="servicos"
        className="text-3xl md:text-4xl text-primary-2 font-semibold text-center"
      >
        Conheça nossos serviços
      </h2>
      <p className="text-[#355575] font-roboto max-w-[840px] mt-4 mb-20 text-center mx-auto">
        Quis hendrerit dolor magna eget est lorem ipsum. Erat pellentesque
        adipiscing commodo elit at. Pretium fusce id velit ut tortor pretium
        viverra suspendisse potenti.
      </p>
      <div className="md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 lg:gap-16 mb-16 overflow-x-auto lg:px-20 hidden lg:grid">
        <ServicosCard />
        <ServicosCard />
        <ServicosCard />
        <ServicosCard />
        <ServicosCard />
        <ServicosCard />
      </div>
      <div className="max-w-site mx-auto my-16 flex lg:px-8 2xl:px-0 lg:hidden">
        <SwipperServicos />
      </div>
    </section>
  );
}

export default Servicos;
