/* codewithharry ex - 9 : 

making a faulty calculator : 



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

       */

       /*  Create a business name generator by combining list of adjectives and shop name and another word  */
       
       function generateBusinessName(){
        //Adjective :
        
           let first = '';
        let Random1 = Math.random();
        if(Random1>=0.0 && Random1<=0.33){
                first = "Crazy";
        }
        else if(Random1>0.33 && Random1<=0.66){
                 first = "Amazing";
        }
        else{
               first = "Fire";
        }

        // Shop name : 
                let second = '';
        let Random2 = Math.random();
  
        if(Random2>=0.0 && Random2<=0.33){
                second = "Engine";
        }
        else if(Random2>0.33 && Random2<=0.66){
                 second = "Food";
        }
        else{
               second = "Garments";
        }
            
        // Another word : 
              let third = "";
             
        let Random3 = Math.random();
    
        if(Random3>=0.0 && Random3<=0.33){
                third = "Bros";
        }
        else if(Random3>0.33 && Random3<=0.66){
                 third = "Limited";
        }
        else{
               third = "Hub";
        }

        console.log(`Your business name is ${first+second+third}`);
       }

