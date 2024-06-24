import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";

function PreHeader() {
  return (
    <div className="h-8 bg-gradient-to-br from-primary-1 to-primary-2">
      <div
        id="pre-header"
        className="max-w-site h-full mx-auto flex justify-between items-center px-4 md:px-8 2xl:px-0"
      >
        <p className="text-xs text-white md:text-base">Horários: Seg à Sex, de 10h às 18h</p>
        <div>
          <p className="text-white flex gap-8 items-center md:mr-6">
            <a href=""><Instagram /></a>
            <a href=""><Facebook /></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PreHeader;
