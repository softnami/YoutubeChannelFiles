let arr = [1, 3,4, 5, 4, 4, 245, 56, 34,4, 0];
let moddArr = (arry) =>{

    if(arry && Array.isArray(arry)){

      arry =   arry.map((item)=>{
           return item*Math.PI;
        });

      return arry;
    }


};


console.log(moddArr(arr));
