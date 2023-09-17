export interface Product {
  name: string
  price: number
}

interface ProductRepository {
  create(product: Product): number
  findById(id: number): Product
  update(id: number, newProduct: Product): void
  delete(id: number): void
}

export default ProductRepository