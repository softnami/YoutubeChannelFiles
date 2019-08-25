let input = [1, [2, [ [3, 4], 5], 6]];
let result = [];

let flatten = (item) =>{

    //recursive
    if(Array.isArray(item)){
      item.forEach(flatten);
    }else{
      //base
      result.push(item);
    }

  return result;
};

console.log(flatten(input));
