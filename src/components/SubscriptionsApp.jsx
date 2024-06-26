import SelectSubscription from "./SelectSubscription";
import CardSelect from "./CardSelect";
import { useState } from "react";

import "../styles/SubscriptionsApp.scss";

const SubscriptionsApp = () => {
  const [selectedSubscription, setSelectedSubscription] = useState(4);

  return (
    <div className="subscription-app">
      <SelectSubscription
        changeSelectedSub={setSelectedSubscription}
        selectedSubscription={selectedSubscription}
      ></SelectSubscription>
      <CardSelect selectedSubscription={selectedSubscription}></CardSelect>
    </div>
  );
};

export default SubscriptionsApp;
