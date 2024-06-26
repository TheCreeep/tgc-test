import featuresList from "../constants/features.json";
import subscriptionList from "../constants/subscriptions.json";

import "../styles/PriceCard.scss";
import { Icon } from "@iconify/react";

const PriceCard = ({ selectedSubscription, type }) => {
  return (
    <div className={"price-card " + type.id}>
      <div className="price-card__header">
        <h1 className="price-card__header__title ">{type.title}</h1>

        {type.id === "devis" ? (
          <Icon icon={type.icon} />
        ) : (
          <h2 className="price-card__header__price">
            {`${
              subscriptionList[selectedSubscription][
                type.id === "premium" ? "pricePremium" : "price"
              ]
            }€`}
            <span className="frequency">
              {selectedSubscription === 1 ? "" : "/mois"}
            </span>
          </h2>
        )}

        {selectedSubscription !== 1 && type.id !== "devis" && (
          <p className="price-card__header__sale">
            {`${
              subscriptionList[1][
                type.id === "premium" ? "pricePremium" : "price"
              ]
            }€/mois`}
          </p>
        )}
      </div>

      <div className="price-card__list">
        {featuresList[type.id].map((feature, index) => {
          return (
            <div className="price-card__list__item" key={index}>
              <Icon icon={feature.icon} color={feature.color} fontSize={24} />
              <p>{feature.text}</p>
            </div>
          );
        })}
      </div>
      {type.id === "devis" && (
        <p className="price-card__devistext">
          Un devis sur mesure est nécessaire pour répondre avec précision aux
          besoins spécifiques de votre réseau d'établissements et assurer une
          intégration harmonieuse.
        </p>
      )}

      <button className="price-card__button">
        {type.id === "devis"
          ? "Demander un Devis"
          : "Je sélectionne cette offre"}
      </button>
    </div>
  );
};

export default PriceCard;
