let a = 10;
let b = 5;
let c = 20;
let d = 15;

console.log(a >= b ? c > 15 ? b+a : a : "Falso");
// vou deixar isso aqui pra vcs compararem o if else com o ternário
if (a >= b) {
    if (c > 15) {
        console.log(b+a);
    }else{
        console.log(a);
    }
}else {
    console.log("Falso!");
}