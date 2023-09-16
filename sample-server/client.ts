fetch('localhost:5000')
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