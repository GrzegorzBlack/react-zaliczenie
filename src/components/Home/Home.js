import React from "react";
import Container from "../Container/Container";
import ProductBox from "../ProductBox/ProductBox";

import ProductsService from "../../services/products.service";

const Home = () => {
  const desktopProducts = ProductsService.getDesktopProducts();
  const tabletProducts = ProductsService.getTabletProducts();

  return (
    <Container>
      <h1 className="header-big">Welcome to our store</h1>

      <h2 className="header-small">Desktops</h2>
      <div className="products">
        {desktopProducts.slice(0, 4).map(product => (
          <ProductBox
            key={product.id}
            imageUrl={product.image}
            productName={product.name}
            productPrice={product.amount}
            productManufacture={product.manufacture}
          />
        ))}
      </div>

      <h2 className="header-small">Tablets</h2>
      <div className="products">
        {tabletProducts.slice(0, 4).map(product => (
          <ProductBox
            key={product.id}
            imageUrl={product.image}
            productName={product.name}
            productPrice={product.amount}
            productManufacture={product.manufacture}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
