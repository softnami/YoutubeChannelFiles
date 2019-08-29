const throttle = (callback, time)=>{
    let isThrottling;

    return function(){
      let context = this;//button elem
      let args = arguments;//event object

      if(!isThrottling){
          callback.apply(context, args);
          isThrottling = true;
          setTimeout(()=>{ isThrottling = false; }, time);
      }else{

          console.log('Not executing callback');

      }

    }
};

const debounce = (callback, time)=>{

    let isDebouncing;

    return function(){

        let context = this;
        let args = arguments;

        if(isDebouncing===null || isDebouncing===undefined){
            console.log('Not executing callback');
        }

        clearTimeout(isDebouncing);
        isDebouncing = setTimeout(()=>{ callback.apply(context, args); isDebouncing = null;  }, time);

    }

};

export { throttle, debounce};
