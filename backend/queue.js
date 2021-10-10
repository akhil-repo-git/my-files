class Queue{
    constructor(size)
    {
        this.array=new Array(size);
        this.front=-1;
        this.rear=-1;

    }





    isEmpty(){
        return (this.rear==-1 && this.front==-1);
    }


    isFull(){
        //console.log("rear"+this.rear);
        return this.rear==this.array.length-1;
    }


    enqueue(x)
    {

            if(this.isFull())
             {
                 console.log("Overflow");
             }   
            else{

                if(this.rear==-1 && this.front==-1)
                {
                    this.rear=0;
                    this.front=0;
                    this.array[this.rear]=x;
                }
                else{
                    this.rear++;
                    this.array[this.rear]=x;
                }

            } 


    }



    dequeue(){
            if(this.isEmpty()){
                console.log("Underflow");
            }
            else if(this.rear!=this.front){
                    this.array.splice(this.front,1);
                    //this.front++;                    
                    //console.log(this.array.length);
                    this.rear--;
            }
            else{
                
                this.array.splice(this.front,1);                                    
                this.front=this.rear=-1;
            }
    }


    peek(){
        if(this.isEmpty())
        {
            console.log("no elements to peek");
        }
        else{
            console.log(this.array[this.array.length-1]);
        }
    }

}

let q= new Queue(1);
q.enqueue(1);

q.peek();
console.log(q);