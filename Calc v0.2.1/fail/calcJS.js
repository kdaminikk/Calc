const ansUser = prompt("What u want?","");

switch(ansUser) {
    case "+" :

        const FunPlus = (num1 , num2) => {
            let ans = num1 + num2;

            if (ans == 666) {
                alert("u want go to dyrka?")
            } else if (ans == 69) {
                alert("if u want sex with me pls write to my email. sportparus@hotmail.com"); 
            } else 
            alert(ans);

        
        }
        let PlusA1 = Number(prompt("write number one",""));
        let PlusA2 = Number(prompt("write number two",""));

        FunPlus(PlusA1,PlusA2) ;
        
        break;

    case  "-" :

        const FunMinus = (num1 , num2) => {
            let ans = num1 - num2;
            if (ans == 666) {
                alert("u want go to dyrka?")
            } else if (ans == 69) {
                alert("if u want sex with me pls write to my email. sportparus@hotmail.com"); 
            } else 
            
            alert(ans);
        
        }
        let MinusA1 = Number(prompt("write number one",""));
        let MinusA2 = Number(prompt("write number two",""));

        FunMinus(MinusA1,MinusA2);

        break;

        case  "*" :

        const FunMult = (num1 , num2) => {
            let ans = num1 * num2;
            if (ans == 666) {
                alert("u want go to dyrka?")
            } else if (ans == 69) {
                alert("if u want sex with me pls write to my email. sportparus@hotmail.com"); 
            }
            else
            alert(ans);
        
        }
        let MultA1 = Number(prompt("write number one",""));
        let MultA2 = Number(prompt("write number two",""));

        FunMult(MultA1,MultA2);

        break;

        case  "/" :

        const FunDivis = (num1 , num2) => {
            if (num2 == 0) {
                alert("u stupid retard and i fuck ur mother");
            } else {
                let ans = num1 / num2;
                if (ans == 666) {
                    alert("u want go to dyrka?")
                } else if (ans == 69) {
                    alert("if u want sex with me pls write to my email. sportparus@hotmail.com");
                } else
                alert(ans);
            }
        
        }
        let DivisA1 = Number(prompt("write number one",""));
        let DivisA2 = Number(prompt("write number two",""));

       FunDivis(DivisA1,DivisA2);

        break;

        

        default: 
            alert("if u have 89 old and u can`t know my calc v0.2.1 or u found problem, pls write me to my email. This is sportparus@hotmail.com")

    
    

}