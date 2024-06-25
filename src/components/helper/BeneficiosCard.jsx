import img from "/img/bene.jpg";

function BeneficiosCard({ left }) {
  return (
    <div
      className={`flex max-w-[1000px] mx-auto ${
        left
          ? "flex-row-reverse bg-gradient-to-br from-primary-1 to-primary-2"
          : "flex-row"
      }`}
    >
      <div className="max-w-[50%] hidden lg:block">
        <img src={img} alt="Icone" />
      </div>
      <div className={`p-4 ${left ? "text-right" : "text-left"}`}>
        <h3 className={`text-xl lg:text-2xl font-bold mb-2 ${left ? 'text-white' : 'text-primary-2'}`}>
          Alívio da Dor
        </h3>
        <p className={`text-sm lg:text-base font-roboto ${left ? 'text-gray-100' : 'text-[#355575]'}`}>
          Técnicas como massagem terapêutica, exercícios de alongamento e
          fortalecimento, eletroterapia, ultrassom e calor ajudam a reduzir a
          dor em condições agudas e crônicas.
        </p>
      </div>
    </div>
  );
}

export default BeneficiosCard;
