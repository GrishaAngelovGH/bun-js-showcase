import { Database } from 'bun:sqlite'

import ProductRepository, { Product } from './ProductRepostory'

class InMemoryProductRepository implements ProductRepository {
  db: Database

  constructor() {
    this.db = new Database(':memory:')

    this.db
      .prepare('CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, price NUMBER)')
      .run()
  }

  create(product: Product): number {
    this.db
      .prepare(
        'INSERT INTO products (name, price) VALUES (?, ?)',
        [product.name, product.price]
      ).run()

    const item = this.db
      .prepare('SELECT last_insert_rowid() AS lastId')
      .get() as { lastId: number }

    return item.lastId
  }

  findById(id: number): Product {
    return this.db
      .prepare(`SELECT name, price FROM products WHERE id = ${id}`)
      .get() as Product
  }

  update(id: number, newProduct: Product): void {
    this.db
      .prepare(
        'UPDATE products SET name = ?, price = ? WHERE id = ?',
        [newProduct.name, newProduct.price, id]
      ).run()
  }

  delete(id: number): void {
    this.db
      .prepare(
        'DELETE FROM products WHERE id = ?',
        [id]
      ).run()
  }
}

export default InMemoryProductRepository