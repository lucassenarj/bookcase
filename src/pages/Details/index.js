import React from "react";
import Layout from "./../../components/Layout";
import Book from "./../../components/Book";
import { useLocation } from "react-router-dom";
import "./style.css";

function DetailsPage() {
  const { state: { book } } = useLocation();
  return (
    <Layout>
      <Book book={book} />
    </Layout>
  );
}

export default DetailsPage;
