import React from "react";
import { useProxy } from "valtio";

import store, { addCity } from "../store";

export default () => {
  const snapshot = useProxy(store);

  return (
    <div className="search">
      <div>
        <input
          placeholder="City"
          value={snapshot.city}
          onChange={e => (store.city = e.target.value)}
        />
      </div>
      <div>
        <button onClick={addCity}>Add City</button>
      </div>
    </div>
  );
};
