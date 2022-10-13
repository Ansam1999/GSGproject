import "./Styles.css";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      url: "./assets/img2.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img3.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img4.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img5.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: false,
    },
    {
      url: "./assets/img6.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img7.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: false,
    },
    {
      url: "./assets/img8.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img9.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: false,
    },
  ];
  return (
    <div className="featured_products">
      {featuredProducts.map((item) => (
        <div className="featured_item">
          <img src={item.url} className="item_img" alt={item.name} />
          <text className="item_description">{item.name}</text>
          <text className="item_description">{item.price}</text>
          <text className={item.new === true ? "new_item" : "old_item"}>
            new
          </text>
          <button className="view_button">Quick View</button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
