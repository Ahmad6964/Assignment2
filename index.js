class myPromise {
    constructor(handlerFun) {
      this.state = "pending";
      this.value = null;
  
      const resolve = (result) => {
        if (this.state === "pending") {
          this.state = "fulfilled";
          this.value = result;
        }
      };
  
      const reject = (result) => {
        if (this.state === "pending") {
          this.state = "rejected";
          this.value = result;
        }
      };
      handlerFun(resolve, reject);
  
      this.then = function (succesCb) {
        if (this.state === "fulfilled") {
          succesCb(this.value);
        }
      };
  
      this.catch = function (failureCb) {
        if (this.state === "rejected") {
          failureCb(this.value);
        }
      };
    }
  }

  // Testing -------------------------------------------------->
  
  function myfun(){
    const userNam = document.getElementById('uname').value
    const time = document.getElementById('alarm').value
    console.log(userNam, time)
   
    //  console.log(userNam , time);
    customAlarm(userNam , time ).then(()=>{
      resolve(res);
 })?.catch(()=>{
  reject(err);
 })
  }
  
  function customAlarm(userNam , time){
   return new myPromise((resolve, reject) => {
    setTimeout(() => {
      if(time>999){
        let result = (document.getElementById('label').innerHTML =` Wakeup ${userNam}`)
        resolve(result)
      }
      else{
        reject("Error")
      }
    }, time);
          
   })
  }
  
  // 
  
  
  // Code Testing
  
//   setTimeout(() => {
//     const test1 = new myPromise((resolve, reject) => {
//       resolve('resolved');
//     });
//     test1.then((res) => {
//       console.log(res);
//     });
//     test1.catch((err) => {
//       console.log(err);
//     });
//   }, 2000);
  
//   setTimeout(() => {
//     const test2 = new myPromise((resolve, reject) => {
//       reject("rejected");
//     });
  
//     test2.then((res) => {
//       console.log(res);
//     });
//     test2.catch((err) => {
//       console.log(err);
//     });
//   }, 4000);