import "./Styles.css";

const LeftHeader = () => {
  const lists = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  return (
    <div className="left_header">
      {lists.map((item) => (
        <select className="select">
          <option>{item}</option>
        </select>
      ))}
    </div>
  );
};

export default LeftHeader;
