
// const fetchData = callback => {
//     setTimeout(()=>{
//         callback('Done!');
//     }, 1500);
// }

// promise usage
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    });
    return promise;
  };
    
// asynchronous code (callback function)
// setTimeout(()=>{
//     console.log('Time is done!');
//     fetchData(text=>{
//         console.log(text);
//     });
// }, 2000);


setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
      .then(text => {
        console.log(text);
        console.log('step.1');
        return fetchData();
      })
      .then(text2 => {
        console.log(text2);
        console.log('step.2');
      });
  }, 2000);
    

// synchronous code
console.log('Hello');
console.log('Hi!');