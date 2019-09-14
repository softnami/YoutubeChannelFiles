class TreeNode{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

let root = new TreeNode(2);
    root.left = new TreeNode(7);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(6);
    root.left.right.left = new TreeNode(5);
    root.left.right.right = new TreeNode(11);

    root.right = new TreeNode(5);
    root.right.right = new TreeNode(9);
    root.right.right.left = new TreeNode(4);

let postorder = (rootNode)=>{

    if(rootNode===undefined){
        return;
    }

    let stack = [];
    let currentNode = rootNode;

    while(true){


          if(currentNode!==null){

              if(currentNode.right!==null){
                  stack.push(currentNode.right);
              }
              stack.push(currentNode);
              currentNode = currentNode.left;
              continue;
          }

          if(stack.length===0){
              break;
          }

          currentNode = stack.pop();

          if(currentNode.right!==null && stack.length>0 && stack[stack.length-1]===currentNode.right){
                stack.pop();
                stack.push(currentNode);
                currentNode = currentNode.right;

          }else{
              //output for postorder traversal
              console.log(currentNode.value);
              currentNode = null;
          }



    }

};


postorder(root);
