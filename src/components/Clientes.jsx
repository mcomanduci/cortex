import clientesImg from "/img/clientes.jpg";

function Clientes() {
  return (
    <div className="bg-bg-1 py-8 lg:py-16">
      <section className="max-w-site mx-auto lg:space-x-24 lg:flex px-4 md:px-8 2xl:px-0">
        <div className="mx-auto lg:mx-0 lg:max-w-[601px]">
          <img src={clientesImg} alt="" />
        </div>
        <div className="max-w-[524px] space-y-4 lg:mt-20">
          <h2 className="text-3xl lg:text-4xl text-primary-2 font-semibold lg:mt-0 mt-6">
            Nossos Clientes São Nossa Prioridade
          </h2>
          <p className="text-[#355575] font-roboto max-w-[473px]">
            A qualidade dos serviços e a satisfação dos clientes são nossas
            prioridades. Leia os depoimentos de pacientes que destacam nossa
            eficiência e cuidado, mostrando como nossos tratamentos
            transformaram suas vidas.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Clientes;
