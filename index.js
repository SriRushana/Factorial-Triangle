//1
let age=18;
if (age>18){
    console.log("You are eligible to vote");
}

//2
let num=27;
if (num%2==1){
    console.log("odd")
}
else {
    console.log("even")
}

//3
let num1=10;
let num2=2;
if (num1>num2){
    console.log("{num1} is large than {num2}");
}

//4
let year=2024;
if (year%400==0)or(year%4==0)&(year%100!=0)
{
    console.log("{year} is leap year");
}

//5
let alphabet="a";
switch (alphabet){
    case"a":
    case"e":
    case"i":
    case"o":
    case"u":console.log("vowel")
    break;
    default:console.log("consonent");
}

//6
sum=0;
for(let a=1; a<11; a++){
    if (a<11){
        sum=sum+a;
    }
} 
console.log(sum);

// 7
// const rows = 5;
// for (let i = 1; i <= rows; i++){
//     let pattern = "";
//     for(let j = 1; j <= rows -i; j++){
//         pattern+=" ";
//     }
//     for(let k=1; k<=2*i-1; k++){
//         pattern+="*";
//     }
//     console.log(pattern);
// }
// for(let i=rows-1; i>=1; i--){
//     let pattern="";
//     for(let j=rows-1; i>=1; j++){
//         pattern+=" ";
//     }
//     for(let k=1; k<=2*i-1; k++){
//         pattern+="*";
//     }
//     console.log(pattern);
// }

const rows = 5;
for (let i = 1; i <= rows; i++){
    let pattern = "";
    for(let j = 1; j <= rows -i; j++){
        pattern+=" ";
    }
    for(let k=1; k<=2*i-1; k++){
        pattern+="*";
    }
    console.log(pattern);
}
for(let i=rows-1; i>=1; i--){
    let pattern="";
    for(let j = 1; j <= rows -i; j++){
        pattern+=" ";
    }
    for(let k=1; k<=2*i-1; k++){
        pattern+="*";
    }
    console.log(pattern);
}
        
for(let i = 0; i<5; i++){
    let str = "";
    for(let j = 0; j<= 8; j++){
        if(i == 4){
            str += "*";
        }else{
            if(i+j==4|| j-1 == 4){
                str += "*";
            }else{
                str += " ";
            }
        }
    }
    console.log(str);
}