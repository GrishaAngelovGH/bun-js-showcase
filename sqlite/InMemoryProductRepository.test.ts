import { describe, beforeEach, expect, test } from 'bun:test'

import InMemoryProductRepository from './InMemoryProductRepostiory'
import ProductItem from './ProductItem'

describe('Product Repository', () => {
  let productRepository: InMemoryProductRepository

  beforeEach(() => {
    productRepository = new InMemoryProductRepository()
  })

  test('create new product', () => {
    const product = new ProductItem('apples', 1.99)
    const id = productRepository.create(product)
    expect(id).toBe(1)
  })
})