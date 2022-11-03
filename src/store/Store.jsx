//store va a tener toda la informacion para manejar de manera global
import React, { createContext, useContext, useEffect, useState } from "react";

// contexto
const AppContext = createContext({
  //   dentro del contexto definimos la estructura del estado que queremos manejar
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

const Store = ({ children }) => {
  const [items, setItems] = useState([]);

  const createItem = (item) => {
    const temp = [...items];
    temp.push(item);

    setItems(temp);
  };

  const getItem = (id) => {
    const item = items.find((item) => item.id === id);

    return item;
  };

  const updateItem = (item) => {
    const index = items.findIndex((i) => i.id === item.id);
    const temp = [...items];

    temp[index] = { ...item };
  };

  // todo lo que esté adentro del provider tendra acceso al contexto
  return (
    <AppContext.Provider value={{ items, createItem, getItem, updateItem }}>
      {children}
    </AppContext.Provider>
  );
};

export default Store;
