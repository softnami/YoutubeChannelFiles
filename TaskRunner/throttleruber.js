class TaskThrottling {
  constructor(maxCount) {
    this.maxCount = maxCount;
    this.taskQueue = [];
    this.taskCount = 1;
  }

  pushArray(taskArray){
      if(taskArray && Array.isArray(taskArray)){
        for(let i =0; i<taskArray.length; i++){
            this.push(taskArray[i]);
        }
      }
  }

  push(task) {
    this.taskQueue.push(task);
    this.run();
  }

  run() {
    if (this.taskCount <= this.maxCount) {
      if (this.taskQueue.length > 0) {
        let task = this.taskQueue.shift();
        this.taskCount++;
        task(()=>{
          this.taskCount--;
          this.run();
        });
      }
    }
  }
}


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
