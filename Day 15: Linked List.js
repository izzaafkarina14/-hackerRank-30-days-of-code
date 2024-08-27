process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

	this.insert=function(head,data){
          //complete this method
          let newNode = new Node(data); // membuat node baru dgn data yg diberikan
          
          if (!head) { // jika linked list kosong, kalo kosong berarti NULL
              return newNode; // node baru menjadi head
          }
          
          let current = head; // tambahkan node baru di akhir
          while (current.next) { // menelusuri hingga node terakhir
              current = current.next;
          }
          
          current.next = newNode; // menambahkan node baru di akhir
          return head; // mengembalikan head dari linked list
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}	
