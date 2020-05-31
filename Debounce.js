function getData() {
  //Gets Data
  console.log("Fetching Data ....");
}

const doSomeMagic = function(callback, delay){
      let timer;
      return function () {
        let context = this
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          callback.apply(context, arguments);
          } , delay)
      }
}

const betterFunction = doSomeMagic(getData, 300);
