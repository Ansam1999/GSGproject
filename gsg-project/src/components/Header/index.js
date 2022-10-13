import "./Styles.css";
import HeaderContent from "./HeaderContent";
import { HiMenuAlt3 } from "react-icons/hi";
const Header = () => {
  return (
    <div className="header">
      <img src="./assets/matter.png" className="matter_logo" alt="logo" />
      <HeaderContent />
      <HiMenuAlt3 size={24} className="burger_menu" />
    </div>
  );
};

export default Header;
