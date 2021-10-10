let arr=[6,2,5,4,5,1,6];


let stack=[];
let ans=[];
let ryt=[];
for(let i=0;i<arr.length;i++){


        while(stack.length!=0 && stack[stack.length-1] >=arr[i] )
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


stack=[];
for(let i=arr.length-1;i>=0;i--){


    while(stack.length!=0 && stack[stack.length-1] >=arr[i] )
    {
        stack.pop();
    }



    if(stack.length==0){    
        ryt.push(-1);
    }
    else
    {
        ryt.push(stack[stack.length-1]);
    }


    stack.push(arr[i]);

}


ans=ans.map((el)=>{
    if(el==-1) 
        return 0;
    else
        return arr.indexOf(el);

})

ryt=ryt.map((el)=>{
    if(el==-1) 
        return arr.length-1;    
    else
        return arr.indexOf(el);
});

ryt=ryt.reverse();
//console.log(ans);
//console.log(ryt);


let diff = ryt.map((el,index)=>{

        return el-ans[index];
})

//console.log(diff);


let max=0;

for(let i=0;i<arr.length;i++)
{

    let diff = ryt[i]-ans[i]-1;
    //console.log(diff*arr[i]);;
    max=Math.max(diff*arr[i],max);
}

console.log(max);