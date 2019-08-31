let fib = (n)=>{

  let [a, b] = [0, 1];

  while(n>0){

    [a, b] = [b, a+b];
    n--;

  }

  return a;

};


console.log(fib(5));

//Time: O(n)
//Space: O(1)
