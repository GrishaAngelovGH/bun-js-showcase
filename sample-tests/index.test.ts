import { describe, beforeEach, expect, test } from 'bun:test'

import ArithmeticCalculator from './index'

describe('Arithmetic Calculator', () => {
  let calc: ArithmeticCalculator

  beforeEach(() => {
    calc = new ArithmeticCalculator()
  })

  test('addition', () => {
    calc.add(5)
    calc.add(15)
    calc.add(30)

    expect(calc.result).toBe(50)
  })

  test('subtraction', () => {
    calc.add(5)
    calc.add(15)
    calc.subtract(8)

    expect(calc.result).toBe(12)
  })

  test('multiplication', () => {
    calc.add(5)
    calc.multiply(7)

    expect(calc.result).toBe(35)
  })

  test('division', () => {
    calc.add(3)
    calc.multiply(8)
    calc.divide(2)

    expect(calc.result).toBe(12)
  })
})