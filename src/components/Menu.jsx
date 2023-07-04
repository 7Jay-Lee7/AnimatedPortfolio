import About from "../assets/About.png";
import Contact from "../assets/Contact.png";
import Projects from "../assets/Projects.png";
import Skills from "../assets/Skills.png";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-[#450606] w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="About" imageSrc={About} onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" imageSrc={Skills} onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" imageSrc={Projects} onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" imageSrc={Contact} onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, imageSrc, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-950 transition-colors flex items-center"
    >
      <img src={imageSrc} alt={label} className="mr-2 h-8 w-8" />
      <span>{label}</span>
    </button>
  );
};
