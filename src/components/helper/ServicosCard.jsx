import Teste from "../Icons/Teste";

function ServicosCard() {
  return (
    <div className="p-10 w-[403px] h-[386px] border-green-100 border-2 rounded-3xl flex flex-col justify-between items-center hover:bg-primary-1 group">
      <Teste />
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl text-primary-2 font-bold group-hover:text-white">
          Fisioterapia Desportiva
        </h3>
        <p className="font-roboto text-center text-[#355575] group-hover:text-white">
          Lorem ipsum dolor sit amet consectetur. Ultricies vel feugiat at velit
          lectus quam. Etiam morbi turpis senectus vitae
        </p>
      </div>
      <div className="text-primary-2 font-semibold cursor-pointer group-hover:text-white">Saiba Mais</div>
    </div>
  );
}

export default ServicosCard;
