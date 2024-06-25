import Teste from "../Icons/Teste";
import img from "/img/clientes.jpg";

function ServicosCard() {
  return (
    <div className="p-5 max-w-[400px] border-blue-100 bg-bg-1 border-2 rounded-3xl flex flex-col justify-between items-center hover:bg-primary-1 group shadow-md">
      {/* <Teste /> */}
      <div className="shadow-md">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col items-center gap-4 mt-4 lg:mt-6">
        <h3 className="lg:text-2xl text-center text-primary-2 font-bold group-hover:text-white">
          Fisioterapia Desportiva
        </h3>
        <p className="font-roboto text-center text-[#355575] group-hover:text-white pb-10">
          Lorem ipsum dolor sit amet consectetur. Ultricies vel feugiat at velit
          lectus quam. Etiam morbi turpis senectus vitae
        </p>
      </div>
      {/* <div className="text-primary-2 font-semibold cursor-pointer group-hover:text-white">Saiba Mais</div> */}
    </div>
  );
}

export default ServicosCard;
