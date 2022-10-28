import "./Styles.css";

const Slider = ({ changeCover }) => {
  return (
    <div className="slider" onClick={changeCover}>
      <text className="arrow">❯</text>
    </div>
  );
};

export default Slider;
