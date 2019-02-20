import React from "react";
import Container from "../Container/Container";

import ProductsService from "../../services/products.service";
import ProductBox from "../ProductBox/ProductBox";

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = {
      products: ProductsService.getProducts(),
      filterName: "",
      filterManufacturer: "all"
    };
  }

  handleSearchChange = event => {
    const value = event.target.value;
    this.setState({
      filterName: value,
      products: ProductsService.getProductService(
        value,
        this.state.filterManufacturer
      )
    });
  };

  handleManufactureChange = event => {
    const value = event.target.value;
    this.setState({
      filterManufacturer: value,
      products: ProductsService.getProductService(this.state.filterName, value)
    });
  };

  handleClearClick = () => {
    this.setState({
      products: ProductsService.getProducts(),
      filterName: "",
      filterManufacturer: "all"
    });
  };

  render() {
    return (
      <Container>
        <h1 className="header-big">Catalog</h1>

        <div className="catalog">
          <div className="column-left">
            <div className="filter">
              <div className="filter-header">
                <h4>Search</h4>
                <a href="" className="clear" onClick={this.handleClearClick}>
                  Clear
                </a>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="search..."
                  onChange={this.handleSearchChange}
                  value={this.state.filterName}
                />
              </div>
              <h4>Manufacturer</h4>
              <div>
                <div>
                  <input
                    type="radio"
                    name="manufacturere"
                    id="all"
                    value="all"
                    checked={this.state.filterManufacturer === "all"}
                    onChange={this.handleManufactureChange}
                  />
                  <label htmlFor="all">All</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="manufacturere"
                    id="apple"
                    value="apple"
                    checked={this.state.filterManufacturer === "apple"}
                    onChange={this.handleManufactureChange}
                  />
                  <label htmlFor="apple">Apple</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="manufacturere"
                    id="dell"
                    value="dell"
                    checked={this.state.filterManufacturer === "dell"}
                    onChange={this.handleManufactureChange}
                  />
                  <label htmlFor="dell">Dell</label>
                </div>
              </div>
            </div>
          </div>

          <div className="column-right">
            <div className="products">
              {this.state.products.map(element => (
                <ProductBox
                  key={element.id}
                  imageUrl={element.image}
                  productName={element.name}
                  productPrice={element.amount}
                  productManufacture={element.manufacture}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Catalog;
