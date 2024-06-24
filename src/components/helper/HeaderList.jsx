function HeaderList({ menu, link, click }) {
  return (
    <li
      className="w-full py-3 text-center md:py-0 md:relative md:after:block md:after:w-0 md:hover:after:w-full md:after:h-0.5 md:after:bg-primary-2 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:transition-all md:hover:duration-300"
      onClick={click}
    >
      <a href={link}>{menu}</a>
    </li>
  );
}

export default HeaderList;
