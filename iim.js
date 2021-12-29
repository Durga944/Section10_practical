(function(){
    console.log('This will never run again');
})();

(()=>{
    console.log('This will run again');
})();

(()=>console.log('This will be run again'))
();