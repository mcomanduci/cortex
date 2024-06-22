import Check from "./Icons/Check";
import helperImg from "/img/helper.jpg";

function Helper() {
  return (
    <div className="bg-bg-1 py-16">
      <section className="max-w-site mx-auto flex">
        <div className="max-w-[735px]">
          <img src={helperImg} alt="" />
        </div>
        <div className="ml-24 max-w-[607px] space-y-20">
          <div className="space-y-4">
            <h2 className="text-4xl text-primary-2 font-semibold">
              Nós podemos te ajudar a ter uma boa recuperação
            </h2>
            <p className="text-[#355575] font-roboto">
              Quis hendrerit dolor magna eget est lorem ipsum. Erat pellentesque
              adipiscing commodo elit at. Pretium fusce id velit ut tortor
              pretium viverra suspendisse potenti. Diam maecenas sed enim ut sem
              viverra aliquet eget sit. Tincidunt lobortis feugiat vivamus at
              augue eget.
            </p>
          </div>

          <ul className="font-roboto text-primary-2 text-lg space-y-4">
            <li className="flex items-center gap-2">
              <Check /> Fisioterapeutas Profissionais
            </li>
            <li className="flex items-center gap-2">
              <Check /> Qualidade Garantida
            </li>
            <li className="flex items-center gap-2">
              <Check /> Tratamento Personalizado
            </li>
          </ul>

          <button className="bg-primary-2 text-white py-3 px-8 rounded-lg">Entre em contato</button>
        </div>
      </section>
    </div>
  );
}

export default Helper;
