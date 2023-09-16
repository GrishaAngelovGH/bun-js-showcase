interface Item {
  name: string
  price: number
}

const fruits: Item[] = [
  { name: 'apples', price: 1.99 },
  { name: 'oranges', price: 2.99 },
  { name: 'bananas', price: 3.99 },
]

const vegetables: Item[] = [
  { name: 'potatoes', price: 1.45 },
  { name: 'eggplant', price: 2.18 },
  { name: 'cabbage', price: 3.67 },
]

const products: { [key: string]: Item[] } = {
  '/fruits': fruits,
  '/vegetables': vegetables
}

const server = Bun.serve({
  port: 5000,
  fetch(request) {
    const url = new URL(request.url)
    return Response.json(products[url.pathname])
  }
})

console.log(`server is running on port ${server.port}`)