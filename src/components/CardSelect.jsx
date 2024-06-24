import PriceCard from "./PriceCard.jsx";

const CardSelect = () => {
  const types = [
    {
      id: "standard",
      title: "Standard",
      price: "169€",
    },
    {
      id: "premium",
      title: "Premium",
      price: "199€",
    },
    {
      id: "devis",
      title: "Sur Devis",
      price: "ph:buildings-bold",
    },
  ];

  return (
    <div className="subscription-app__cards">
      {types?.map((type) => (
        <PriceCard mode={1} type={type} />
      ))}
    </div>
  );
};

export default CardSelect;
