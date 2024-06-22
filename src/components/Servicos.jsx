import ServicosCard from "./helper/ServicosCard";

function Servicos() {
  return (
    <section className="max-w-site mx-auto mt-16">
      <h2 id="servicos" className="text-4xl text-primary-2 font-semibold text-center">
        Conheça nossos serviços
      </h2>
      <p className="text-[#355575] font-roboto max-w-[840px] mt-4 mb-20 text-center mx-auto">
        Quis hendrerit dolor magna eget est lorem ipsum. Erat pellentesque
        adipiscing commodo elit at. Pretium fusce id velit ut tortor pretium
        viverra suspendisse potenti.
      </p>
      <div className="grid grid-cols-3 gap-y-16 mb-16">
        <ServicosCard />
        <ServicosCard />
        <ServicosCard />
        <ServicosCard />
        <ServicosCard />
        <ServicosCard />
      </div>
    </section>
  );
}

export default Servicos;
