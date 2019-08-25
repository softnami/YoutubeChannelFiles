let promisesArr = [];

for(let i = 0; i<10; i++){
  promisesArr.push(new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('Softnami');
      }, 1000 *Math.floor(Math.random()*10-1)+1);
  }));
}

let parallelExe = (promArr) =>{

  if(promArr && Array.isArray(promArr)){

    Promise.all(promArr).then((data)=>{
        console.log('Completed: ', data);
    });

  }

};


parallelExe(promisesArr);
