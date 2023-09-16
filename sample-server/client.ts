fetch('localhost:5000/fruits')
  .then(res => res.json())
  .then(data => {
    console.log('Received JSON')
    console.log(data)
    // [
    //   {
    //     name: "apples",
    //     price: 1.99
    //   }, {
    //     name: "oranges",
    //     price: 2.99
    //   }, {
    //     name: "bananas",
    //     price: 3.99
    //   }
    // ]    
  })

fetch('localhost:5000/vegetables')
  .then(res => res.json())
  .then(data => {
    console.log('Received JSON')
    console.log(data)
    // [
    //   {
    //     name: "potatoes",
    //     price: 1.45
    //   }, {
    //     name: "eggplant",
    //     price: 2.18
    //   }, {
    //     name: "cabbage",
    //     price: 3.67
    //   }
    // ]
  })