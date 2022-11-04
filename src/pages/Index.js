import React from "react";
import Book from "../components/Book";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

const Index = () => {
  //llamamos al contexto
  const store = useAppContext();
  return (
    <Layout>
      {store.items.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </Layout>
  );
};

export default Index;
