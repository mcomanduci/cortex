import Whatsapp from "./Icons/Whatsapp";
import logo from "/img/original.png";

function Header() {
  return (
    <div className="bg-white sticky top-0 border-b-2 border-bg-1">
      <header className="max-w-site mx-auto h-24 flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="Logo da Córtex" className="w-[260px] h-[60px]" />
        </a>
        <ul className="flex gap-12 text-primary-2 text-lg font-semibold">
          <li className="relative after:block after:w-0 hover:after:w-full after:h-0.5 after:bg-primary-2 after:absolute after:bottom-0 after:left-0 after:transition-all hover:duration-300">
            <a href="/">Home</a>
          </li>
          <li className="relative after:block after:w-0 hover:after:w-full after:h-0.5 after:bg-primary-2 after:absolute after:bottom-0 after:left-0 after:transition-all hover:duration-300">
            <a href="#servicos">Serviços</a>
          </li>
          <li className="relative after:block after:w-0 hover:after:w-full after:h-0.5 after:bg-primary-2 after:absolute after:bottom-0 after:left-0 after:transition-all hover:duration-300">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="relative after:block after:w-0 hover:after:w-full after:h-0.5 after:bg-primary-2 after:absolute after:bottom-0 after:left-0 after:transition-all hover:duration-300">
            <a href="#sobre">News</a>
          </li>
          <li className="relative after:block after:w-0 hover:after:w-full after:h-0.5 after:bg-primary-2 after:absolute after:bottom-0 after:left-0 after:transition-all hover:duration-300">
            <a href="#contato">Contato</a>
          </li>
        </ul>
        <div className="flex gap-3 hover:from-[#1AA552] hover:to-[#31C06B] px-6 py-3 rounded-3xl text-white text-center bg-gradient-to-br from-primary-1 to-primary-2 cursor-pointer hover:text-white">
          <p className="font-bold uppercase tracking-wide">Consultas</p>
          <Whatsapp />
        </div>
      </header>
    </div>
  );
}

export default Header;
