import Whatsapp from "./Icons/Whatsapp";
import HeaderList from "./helper/HeaderList";
import logo from "/img/original.png";
import logoWhite from "/img/branca.png";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen((state) => !state);
  }

  return (
    <div className="bg-white md:sticky top-0 border-b-2 border-bg-1 relative z-20">
      <header className="max-w-site mx-auto h-24 flex justify-between items-center px-4 md:px-8 2xl:px-0">
        <div
          className={`max-w-[200px] md:max-w-[260px] z-50 ${
            menuOpen ? "fixed" : ""
          }`}
        >
          <a href="/">
            <img src={menuOpen ? logoWhite : logo} alt="Logo da Córtex" />
          </a>
        </div>

        <ul className="lg:flex hidden gap-12 text-primary-2 text-lg font-semibold">
          <HeaderList menu="Home" link="/" />
          <HeaderList menu="Serviços" link="#servicos" />
          <HeaderList menu="Sobre" link="#sobre" />
          <HeaderList menu="News" link="#news" />
          <HeaderList menu="Contato" link="#contato" />
        </ul>

        <div className="hidden sm:flex gap-3 hover:from-[#1AA552] hover:to-[#31C06B] px-6 py-3 rounded-3xl text-white text-center bg-gradient-to-br from-primary-1 to-primary-2 cursor-pointer hover:text-white">
          <p className="font-bold uppercase tracking-wide">Consultas</p>
          <Whatsapp cor="white" />
        </div>

        <button
          onClick={handleClick}
          type="button"
          className={`z-50 block hamburger lg:hidden focus:outline-none ${
            menuOpen ? "open" : ""
          }`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        <ul
          id="menu"
          className={`fixed inset-0 z-1000 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-32 pb-4 tracking-widest font-semibold text-white text-lg gap-12 uppercase divide-y divide-gray-500 opacity-95 bg-primary-2 ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <HeaderList menu="Home" link="/" click={handleClick} />
          <HeaderList menu="Serviços" link="#servicos" click={handleClick} />
          <HeaderList menu="Sobre" link="#sobre" click={handleClick} />
          <HeaderList menu="News" link="#news" click={handleClick} />
          <HeaderList menu="Contato" link="#contato" click={handleClick} />
          <div className="mt-4 flex sm:hidden gap-3 hover:from-[#1AA552] px-6 py-3 rounded-3xl text-primary-2 justify-center bg-white">
            <p className="font-bold uppercase tracking-wide">Consultas</p>
            <Whatsapp cor="green" />
          </div>
        </ul>
      </header>
    </div>
  );
}

export default Header;
