confirm("Hi! Ready for a gameee?");
let ans;
let flag=0;
ans=prompt("What is always in front of you but can't see?");
while(flag==0){
if(ans=="future"){
    flag=1;
    alert("Correct");
}
else{
    ans=prompt("Try Again");
}
}