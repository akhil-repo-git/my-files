let rpn =["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

//rpn=rpn.split(" ");


let x,y;
let stack=[];
for(let i=0;i<rpn.length;i++) {


        
    //console.log(rpn[i]);
   
            let op=String(rpn[i]);
            //console.log(op);
            

            switch(op){
                case "+":
                    let x=Number(stack.pop());
                    let y= Number(stack.pop());

                    
                    stack.push(x+y);
                 break;   
                 case "-":
                    let k=Number(stack.pop());
                    let l= Number(stack.pop()); 
                    stack.push(k-l);
                 break;    
                 case "*":
                    let r=Number(stack.pop());
                    let t= Number(stack.pop());
                    stack.push(r*t);
                 break; 
                 case "/":
                    let w=Number(stack.pop());
                    let q= Number(stack.pop());
                    stack.push(q/w);
                 break;     
                 default:
                     stack.push(op);
                     break;
            }
            

    

    



}


console.log(Math.round(stack.pop()));