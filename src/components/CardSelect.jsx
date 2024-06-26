import PriceCard from "./PriceCard.jsx";

const CardSelect = ({ selectedSubscription }) => {
  const types = [
    {
      id: "standard",
      title: "Standard",
    },
    {
      id: "premium",
      title: "Premium",
    },
    {
      id: "devis",
      title: "Sur Devis",
      icon: "ph:buildings-bold",
    },
  ];

  return (
    <div className="subscription-app__cards">
      {types?.map((type) => (
        <PriceCard
          selectedSubscription={selectedSubscription}
          type={type}
          key={type.id}
        />
      ))}
    </div>
  );
};

export default CardSelect;
