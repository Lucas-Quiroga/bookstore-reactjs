import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/Store";

const Index = () => {
  //llamamos al contexto
  const store = useAppContext();
  return (
    <div>
      <Link to="/create">Create</Link>
      {store.items.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default Index;
