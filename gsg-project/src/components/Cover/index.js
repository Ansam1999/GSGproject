import "./Styles.css";
import Slider from "./Slider.js";
import Content from "./Content";
const Cover = () => {
  return (
    <div className="cover_section">
      <img src="./././assets/img1.png" className="cover" alt="Cover Image" />
      <Content />
      <Slider />
    </div>
  );
};

export default Cover;
