class ArithmeticCalculator {
  result: number

  constructor() {
    this.result = 0
  }

  add(value: number) {
    this.result += value
  }

  subtract(value: number) {
    this.result -= value
  }

  multiply(value: number) {
    this.result *= value
  }

  divide(value: number) {
    this.result /= value
  }
}

export default ArithmeticCalculator