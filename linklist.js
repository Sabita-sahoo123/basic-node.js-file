class Linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){return this.head;

    }
    getSize(return this.size);
    
}
append(data){
    const node=new node(data);
    if(this.isEmpty()){
        this,head=node;
    }else{
        let currr=this.head;
        while(currr.next)curr=curr.next;
        curr.next=node;
    }
    this.size++;
}
print(){
    let curr=this.head,str=++;
    while(curr){
        str += curr.data + '->';
        curr=curr.next;

    }
    console.log(str+'null');
}
list.append(1);
list.append(2);
list.append(3);
list.print();