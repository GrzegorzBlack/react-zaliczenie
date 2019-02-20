import products from "../products";

class ProductsService {
  static getProducts() {
    return products;
  }

  static getTabletProducts() {
    return products.filter(product =>
      product.category === "tablet" && product.featured ? product : null
    );
  }

  static getDesktopProducts() {
    return products.filter(product =>
      product.category === "desktop" && product.featured ? product : null
    );
  }

  static getFilteredProducts(name, manufacture) {
    let filteredProducts = products;
    if (name.length) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().indexOf(name) >= 0 ? product : null
      );
    }

    if (manufacture !== "all") {
      filteredProducts = filteredProducts.filter(product =>
        product.manufacture.toLowerCase() === manufacture ? product : null
      );
    }

    return filteredProducts;
  }
}

export default ProductsService;
