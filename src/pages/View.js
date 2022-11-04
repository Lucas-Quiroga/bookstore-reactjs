import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

const View = () => {
  const [item, setItem] = useState(null);
  //useParams me devuelve las rutas que están identificadas
  const params = useParams();

  const store = useAppContext();

  useEffect(() => {
    //me devuelve todo el elemento
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  const itemStyles = {
    container: {
      display: "flex",
      gap: "20px",
      color: "white",
      width: "800px",
      margin: "0 auto",
    },
  };

  if (!item) {
    return <Layout>item not found</Layout>;
  }

  return (
    <Layout>
      <div style={itemStyles.container}>
        <div>
          <div>{item?.cover ? <img src={item.cover} width="400px" /> : ""}</div>
        </div>
        <div>
          <h2>{item?.title}</h2>
          <div>{item?.author}</div>
          <div>{item?.intro}</div>
          <div>{item?.completed ? "Leido" : "Por terminar"}</div>
          <div>{item?.review}</div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
