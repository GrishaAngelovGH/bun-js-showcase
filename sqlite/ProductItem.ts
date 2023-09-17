import { Product } from './ProductRepostory'

class ProductItem implements Product {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
}

export default ProductItem