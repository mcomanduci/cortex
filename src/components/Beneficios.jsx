import BeneficiosCard from "./helper/BeneficiosCard";

function Beneficios() {
  return (
    <section className="max-w-site mx-auto my-16">
      <h2
        id="servicos"
        className="text-4xl text-primary-2 font-semibold text-center"
      >
        Benefícios da Fisioterapia
      </h2>
      <p className="text-[#355575] font-roboto max-w-[840px] mt-4 mb-20 text-center mx-auto">
        Our team of experienced and compassionate dentists is committed to
        delivering personalized treatment plans to meet your unique needs. From
        routine cleanings and fillings to advanced cosmetic and restorative
        procedures
      </p>
      <div className="grid grid-cols-3 gap-y-10 overflow-x-auto">
        <BeneficiosCard />
        <BeneficiosCard />
        <BeneficiosCard />
        <BeneficiosCard />
        <BeneficiosCard />
        <BeneficiosCard />
      </div>
    </section>
  );
}

export default Beneficios;
