// var m;
// var n;

function Ackerman(m,n){
  if(m==0){
    return n+1;
  }
  else if(n==0){
    return Ackerman(m-1,1);
  }
  else{
    return Ackerman(m-1,Ackerman(m,n-1));
  }
}


console.log(Ackerman(3,3));
