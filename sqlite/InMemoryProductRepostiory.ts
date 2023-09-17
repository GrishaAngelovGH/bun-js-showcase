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
    throw new Error('Method not implemented.')
  }

  update(id: number, newProduct: Product): void {
    throw new Error('Method not implemented.')
  }

  delete(id: number): void {
    throw new Error('Method not implemented.')
  }
}

export default InMemoryProductRepository