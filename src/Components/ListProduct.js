import React, { useState, useEffect } from 'react';

const ListProduct = () => {
  const [dados, setDados] = useState([]);

  const request = async () => {
    const response = await fetch(
      'https://api.mercadolibre.com/sites/MLA/search?q=%3Aquery'
    );
    const json = await response.json();
    setDados(json.results);
  };

  useEffect(() => {
    request();
  }, []);

  const Products = dados.map((product) => (
    <li key={product.id}>
      <p>Title: {product.title}</p>
      <p>Preço: {product.price}</p>
      <p>State: {product.address.state_name}</p>
    </li>
  ));

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>{Products}</ul>
    </div>
  );
};

export default ListProduct;
