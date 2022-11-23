
    //synchronous callback 
    function printImmediately(print) {
        print();
    }
    printImmediately(() => console.log('hello'));

    //Asynchronous callback
    function printWithDelay(print, timeout){
        setTimeout(print, timeout);
    }
    
    console.log('1');
    setTimeout(()=> console.log('2'),1000);
    console.log('3');
    printWithDelay(()=> console.log('async callback'), 2000);

  