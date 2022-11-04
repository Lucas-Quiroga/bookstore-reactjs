import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

const View = () => {
  const [item, setItem] = useState({});
  //useParams me devuelve las rutas que están identificadas
  const params = useParams();

  const store = useAppContext();

  useEffect(() => {
    //me devuelve todo el elemento
    const book = store.getItems(params.bookId);
    setItem(book);
  }, []);

  return <Layout>View</Layout>;
};

export default View;
