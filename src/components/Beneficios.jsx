import BeneficiosCard from "./helper/BeneficiosCard";

function Beneficios() {
  return (
    <section className="max-w-site mx-auto my-8 lg:my-16 px-4 md:px-8 2xl:px-0 space-y-4 lg:space-y-8">
      <h2
        id="servicos"
        className="text-3xl lg:text-4xl text-primary-2 font-semibold text-center"
      >
        Benefícios da Fisioterapia
      </h2>
      {/* <p className="text-[#355575] font-roboto max-w-[840px] mt-4 mb-20 text-center mx-auto">
        Our team of experienced and compassionate dentists is committed to
        delivering personalized treatment plans to meet your unique needs. From
        routine cleanings and fillings to advanced cosmetic and restorative
        procedures
      </p> */}
      <div className="">
        <BeneficiosCard />
        <BeneficiosCard left />
        <BeneficiosCard />
        <BeneficiosCard left />
        <BeneficiosCard />
        <BeneficiosCard left />
      </div>
    </section>
  );
}

export default Beneficios;
