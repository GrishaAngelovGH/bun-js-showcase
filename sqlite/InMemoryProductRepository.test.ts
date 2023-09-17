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

  test('find product by id', () => {
    const product = new ProductItem('apples', 1.99)
    const id = productRepository.create(product)
    const actual = productRepository.findById(id)

    expect(actual).toEqual(product)
  })

  test('update product', () => {
    const product = new ProductItem('apples', 1.99)
    const updatedProduct = new ProductItem('apples', 1.50)

    const id = productRepository.create(product)
    productRepository.update(id, updatedProduct)
    const actual = productRepository.findById(id)

    expect(actual).toEqual(updatedProduct)
  })
})