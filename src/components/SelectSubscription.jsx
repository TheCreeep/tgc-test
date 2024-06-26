import subscriptionList from "../constants/subscriptions.json";

const SelectSubscription = ({ changeSelectedSub, selectedSubscription }) => {
  return (
    <div className="subscription-app__options">
      {subscriptionList.map((subscription, index) => {
        return (
          <div
            className={
              "subscription-app__options__item" +
              (selectedSubscription === index ? "--selected" : "")
            }
            key={index}
            onClick={() => changeSelectedSub(index)}
          >
            <h1 className="subscription-app__options__item__title">
              {subscription.id + " Mois"}
            </h1>
            {subscription.sale > 0 && (
              <p className="subscription-app__options__item__sale">
                <span className="frequency">{`-${subscription.sale}% `}</span>
                /mois
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SelectSubscription;
