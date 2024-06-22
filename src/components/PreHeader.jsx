import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import Twitter from "./Icons/twitter";

function PreHeader() {
  return (
    <div className="h-8 bg-gradient-to-br from-primary-1 to-primary-2">
      <div
        id="pre-header"
        className="max-w-site h-full mx-auto flex justify-between items-center"
      >
        <p className="text-white">Horários: Seg à Sex, de 10h às 18h</p>
        <div>
          <p className="text-white flex gap-8 items-center mr-6">
            <a href=""><Twitter /></a>
            <a href=""><Instagram /></a>
            <a href=""><Facebook /></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PreHeader;
