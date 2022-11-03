//store va a tener toda la informacion para manejar de manera global

import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const Store = ({ children }) => {
  return <div>{children}</div>;
};

export default Store;
