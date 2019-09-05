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

let preordertraversal = (rootNode)=>{

    if(rootNode===undefined){
        return;
    }

    let stack = [];
    let output = "";

    stack.push(rootNode);

    while(stack.length>0){

      let currentNode = stack.pop();

      output = `${output}${currentNode.value}`;

      if(currentNode.right!==null){

          stack.push(currentNode.right);

      }

      if(currentNode.left!==null){

          stack.push(currentNode.left);

      }
    }

    console.log(output);

};

preordertraversal(root);
