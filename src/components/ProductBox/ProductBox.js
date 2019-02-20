import React from "react";
import PropTypes from "prop-types";

const ProductBox = ({
  imageUrl,
  productName,
  productPrice,
  productManufacture
}) => (
  <div className="product">
    <img src={imageUrl} alt={`${productManufacture} ${productName}`} />
    <p className="price">{`$${productPrice}`}</p>
    <h3>{productName}</h3>
  </div>
);

ProductBox.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
  productManufacture: PropTypes.string.isRequired
};

export default ProductBox;
