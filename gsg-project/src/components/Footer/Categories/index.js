import "./../../Shared/Styles.css";

const Categories = () => {
  const categories = [
    "About us",
    "Testimonials",
    "Contact",
    "Journal",
    "Privacy Policy",
  ];
  return (
    <div className="footer_col">
      <span className="footer_title">Categories</span>
      <div className="footer_section">
        {categories.map((category) => (
          <span className="footer_content">{category}</span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
