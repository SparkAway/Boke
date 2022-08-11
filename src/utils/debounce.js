function debounce(fn,delay){
   let timer = null;
   return function(e){
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{fn(e)}, delay);
   }
}
export default debounce