import { useState } from "react";
import PopUp from "../../PopUp";
import "./Styles.css";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      url: "./assets/img2.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
      id: 1,
    },
    {
      url: "./assets/img3.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
      id: 2,
    },
    {
      url: "./assets/img4.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
      id: 3,
    },
    {
      url: "./assets/img5.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: false,
      id: 4,
    },
    {
      url: "./assets/img6.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
      id: 5,
    },
    {
      url: "./assets/img7.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: false,
      id: 6,
    },
    {
      url: "./assets/img8.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
      id: 7,
    },
    {
      url: "./assets/img9.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: false,
      id: 8,
    },
  ];
  console.log("featured", featuredProducts);
  const [trigger, setTrigger] = useState(false);
  const [id, setId] = useState("");

  const handleQuickButton = (id) => {
    setTrigger(!trigger);
    setId(id);
  };
  const closePopUp = () => {
    setTrigger(false);
    document.body.style.overflow = "unset";
  };
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
          <button
            className="view_button"
            onClick={() => handleQuickButton(item.id)}
          >
            Quick View
          </button>
          <PopUp trigger={trigger} id={id} handleClose={closePopUp} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
