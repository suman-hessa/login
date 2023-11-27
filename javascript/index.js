/* codewithharry ex - 9 : 

making a faulty calculator : 

*/

    let a = prompt("Enter first number");
    let op = prompt("operation");
    let b = prompt("Enter second number");
   

    let random = Math.random();
       if(random<0.1){
        switch(op){
            case '+':
                console.log(a-b);
                break;
            case '-':
                console.log(a/b);
                break;

            case '*':
                console.log(a+b);
                break;
            case '/':
                console.log(a**b);
                break;
       }
    }
       else
       {
    switch(op){
        case '+':
            result = a+b;
            console.log(result);
            break;
        case '-':
            console.log(a-b);
            break;
        case '*':
            console.log(a*b);
            break;
        case '/':
            console.log(a/b);
            break;
    }
       }

