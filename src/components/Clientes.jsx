import clientesImg from "/img/clientes.jpg";

function Clientes() {
  return (
    <div className="bg-bg-1">
      <section className="max-w-site mx-auto py-16 flex gap-28">
        <div className="max-w-[660px]">
          <img src={clientesImg} alt="" />
        </div>
        <div className="max-w-[524px] space-y-6 pt-16">
          <h2 className="text-4xl text-primary-2 font-semibold">
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
