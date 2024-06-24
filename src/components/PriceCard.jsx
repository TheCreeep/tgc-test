import featuresList from "../constants/features.json";
import "../styles/PriceCard.scss";
import { Icon } from "@iconify/react";

const PriceCard = ({ mode, type }) => {
  return (
    <div className={"price-card " + type.id}>
      <h1 className="price-card__title ">{type.title}</h1>

      {type.id === "devis" ? (
        <Icon icon={type.price} />
      ) : (
        <h2 className="price-card__price"> {type.price} </h2>
      )}

      <div className="price-card__list">
        {featuresList[type.id].map((feature) => {
          return (
            <div className="price-card__list__item">
              <Icon icon={feature.icon} color={feature.color} fontSize={24} />
              <p>{feature.text}</p>
            </div>
          );
        })}
      </div>

      <button className="price-card__button">
        {type.id === "devis"
          ? "Demander un Devis"
          : "Je sélectionne cette offre"}
      </button>
    </div>
  );
};

export default PriceCard;
