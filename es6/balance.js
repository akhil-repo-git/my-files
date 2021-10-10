


function isValid(str) {
    let stack=[];
for(let i=0;i<exp.length;i++) {


    if(exp[i]=="(" || exp[i]=="{" || exp[i]=="[")
    {
            stack.push(exp[i]);
            continue;
    }
    else
    {
        if(stack.length==0)
        {
            return false;
        }
        else
        {
            switch(exp[i]){
                case ")":
                    let x = stack.pop();
                    if(x!="(")
                    return false;
                break;    

                case "}":
                    let y = stack.pop();
                    if(y!="{")
                    return false;
                break;   
                
                case "]":
                    let z = stack.pop();
                    if(z!="[")
                    return false;
                break;    
            }

        }

    }

}
return (stack.length==0);
}





let exp="[()]{}{[()()]()}";

console.log(isValid(exp));
