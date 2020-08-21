import React, { useEffect } from 'react';
import axios from 'axios';

function Home({ products }) {
  console.log(products);
  // console.log(props);
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const url = 'http://localhost:3000/api/products';
  //   const response = await axios.get(url);
  //   console.log(response);
  // }
  return <>home</>;
}

Home.getInitialProps = async () => {
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
};

export default Home;
