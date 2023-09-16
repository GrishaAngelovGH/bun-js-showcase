const items = [
  { name: 'apples', price: 1.99 },
  { name: 'oranges', price: 2.99 },
  { name: 'bananas', price: 3.99 },
]

const server = Bun.serve({
  port: 5000,
  fetch(request) {
    return Response.json(items)
  }
})

console.log(`server is running on port ${server.port}`)