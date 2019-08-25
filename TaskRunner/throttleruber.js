let taskArray = [];
let createTaskArray = ()=>{
    for(let i=0; i<10; i++){
        taskArray.push((done)=>{
            console.log(`Start task ${i}`);
            setTimeout(()=>{
              console.log(`Finished task ${i}`);
              done();
            }, 1000*((Math.random()*10-1)+1));
          });
    }
}

createTaskArray();


//usage signature
let runner = new TaskThrottling(3);
    runner.pushArray(taskArray);
