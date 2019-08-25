let BFS = (node=document.body) => {

      let queue = [];
      queue.push(node);

      while(queue.length>0){

          let currentNode = queue.shift();

          //log or find target
          console.log(currentNode);

          if(currentNode.childNodes && currentNode.childNodes.length>0){
              for(let i = 0; i<currentNode.childNodes.length; i++){
                queue.push(currentNode.childNodes[i]);
              }
          }
      }
};

BFS();

//Time: O(n)
//Space: O(n)
