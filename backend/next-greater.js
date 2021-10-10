let arr=[234,234,234,234,23,4,324,324,32,432,4,234,32,4,324];

let stack=[];

let ans=[];

for(i=arr.length-1;i>=0;i--){


        while(stack.length!=0 && stack[stack.length-1]>=arr[i])
        {
            stack.pop();
        }


        if(stack.length==0){
            ans.push(-1); 
            
        }
        else
        {
            ans.push(stack[stack.length-1]);
        }


        stack.push(arr[i]);



}



console.log(ans.reverse());