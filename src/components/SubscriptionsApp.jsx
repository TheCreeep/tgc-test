import SelectSubscription from "./SelectSubscription";
import CardSelect from "./CardSelect";

import "../styles/SubscriptionsApp.scss";

const SubscriptionsApp = () => {
  return (
    <div className="subscription-app">
      <SelectSubscription></SelectSubscription>
      <CardSelect></CardSelect>
    </div>
  );
};

export default SubscriptionsApp;
