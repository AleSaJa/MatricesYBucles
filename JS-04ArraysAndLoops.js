// Exercise #1
console.log("Exercise #1");

// Part 1
console.log("Part 1");
var peopleBank = new Array("Sofia","David","Juan");
peopleBank.forEach(function(e,i){
    console.log(`Position: ${i+1}  User: ${e}`);
});

// Part 2
console.log("Part 2");
var morePeopleBank = new Array("Sara","Augustin");
peopleBank.shift();
morePeopleBank.forEach(e => peopleBank.push(e));
peopleBank.forEach(function(e,i){
    console.log(`Position: ${i+1}  User: ${e}`);
});

// Part 3
console.log("Part 3");
var temp1=null;
var temp2=null;
temp1=peopleBank.shift();
temp2="Renata";
peopleBank.unshift(temp2);
peopleBank.unshift(temp1);
temp2="Elena";
peopleBank.push(temp2);
peopleBank.forEach(function(e,i){
    console.log(`Position: ${i+1}  User: ${e}`);
});

// Exercise #2
console.log("Exercise #2");
var aux ="";
for(let i=1; i<6; i++){
    for(let j=0; j<1; j++){
        aux+="* ";
        console.log(aux);
    }
}

// Exercise #3
console.log("Exercise #3");

// Part 1
console.log("Part 1");
var xValue = 2;
while(xValue>=0){
    console.log(xValue);
    xValue-=0.5;
}

// Part 2
console.log("Part 2");
var i=1;
do{
    (i%2) != 0 ? console.log(i) : i;
    i++;
}while(i<=100);

// Part 3
console.log("Part 3");
var n=6; i=1;
while(i<n+1){
    console.log("["+i+"]");
    i++;
}

// Part 4
console.log("Part 4");
n=19; xValue=i=0;
while(i<n+1){
    xValue+=i;
    i++;
}
console.log(`n = ${n} sum = ${xValue}`);