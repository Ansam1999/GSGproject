import "./Styles.css";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

const HeaderContent = () => {
  return (
    <div className="header_content">
      <LeftHeader />
      <RightHeader />
    </div>
  );
};

export default HeaderContent;
