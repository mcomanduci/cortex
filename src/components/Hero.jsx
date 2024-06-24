import heroPic from "/img/hero.jpg";

function Hero() {
  return (
    <div className="bg-bg-1">
      <div
        id="hero"
        className="max-w-site mx-auto lg:flex lg:flex-row-reverse justify-between pb-8 lg:pb-0 px-4 md:px-8 2xl:px-0"
      >
        <div className="mr-10 max-w-[597px]">
          <img src={heroPic} alt="" />
        </div>

        <div className="max-w-[700px] self-center space-y-6 md:space-y-12">
          <h1 className="text-3xl mt-8 lg:mt-0 md:text-5xl text-primary-2 font-extrabold">
            Recupere Seu Movimento. Restaure Sua Vida.
          </h1>
          <p className="md:text-lg text-[#355575] font-roboto">
            Na Córtex Fisioterapia, estamos comprometidos em ajudá-lo a alcançar
            a recuperação completa e o bem-estar através de tratamentos
            personalizados de fisioterapia. Nossos especialistas dedicados
            utilizam técnicas avançadas e uma abordagem compassiva para aliviar
            sua dor e restaurar sua mobilidade. Agende sua consulta hoje e dê o
            primeiro passo para uma vida mais saudável e ativa
          </p>
          <button className="md:text-2xl font-semibold text-white px-6 py-3 bg-gradient-to-br from-primary-1 to-primary-2 rounded-3xl hover:bg-gradient-to-br hover:from-primary-1 hover:to-primary-1 tracking-wide">
            AGENDE UMA CONSULTA
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
