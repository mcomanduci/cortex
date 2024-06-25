import beneficios from "/img/beneficios.png";

function BeneficiosCard() {
  return (
    <div className="bg-blue-50 max-w-[404px] max-h-[595px] pt-[35px] px-[34px] flex flex-col items-center rounded-3xl text-primary-2">
      <div className="w-[250px] mb-12">
        <img src={beneficios} alt="Icone" />
      </div>
      <h3 className="text-2xl font-bold text-center mb-8">Alívio da Dor</h3>
      <p className="font-roboto text-center">
        Técnicas como massagem terapêutica, exercícios de alongamento e
        fortalecimento, eletroterapia, ultrassom e calor ajudam a reduzir a dor
        em condições agudas e crônicas.
      </p>
    </div>
  );
}

export default BeneficiosCard;
