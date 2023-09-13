/////////////////*******//////trascrizione in ts dell app psia 
var arrayName = [];
var luoghi = ["bosco", "mare", "cielo"];
var button = document.getElementById("prova");
var start = document.getElementById("start");
var preGame = document.getElementById("preGame");
var scopri = document.getElementById("scopri");
var ruolo = document.getElementById("ruolo");
var test = document.getElementById("test");
var Rluoghi = Math.floor(Math.random() * luoghi.length);
var i = 0;
var controllo = true;
var spia;
test.style.display = "none";
start.addEventListener("click", function () {
    // console.log(arrayName);
    spia = Math.floor(Math.random() * arrayName.length);
    console.log(spia);
    preGame.style.display = "none";
    test.style.display = "block";
});
scopri.addEventListener("click", function () {
    if (i > arrayName.length - 1) {
        alert("START GAME");
    }
    else {
        if (controllo == true) {
            ruolo.innerHTML = arrayName[i];
            controllo = false;
            // console.log(arrayName[i]);
        }
        else {
            console.log(spia);
            // console.log(arrayName[spia]);
            // console.log(arrayName[i]);
            if (arrayName[i] == arrayName[spia]) {
                ruolo.innerHTML = "spia";
            }
            else {
                // console.log(luoghi);
                ruolo.innerHTML = luoghi[Rluoghi];
            }
            i++;
            controllo = true;
        }
    }
    console.log(controllo);
});
button.addEventListener("click", function () {
    var name = document.getElementById("name");
    if (name.value == "" || name.value == " ") {
        alert("inserire nome");
    }
    else {
        // console.log(name.value);
        arrayName.push(name.value);
        name.value = "";
        // console.log(arrayName);
    }
    stampa();
});
function stampa() {
    var list = document.getElementById("listaNomi");
    list.innerHTML = "";
    arrayName.forEach(function (element) {
        list.innerHTML += "<li>" + element + "</li>";
        // console.log(element);
    });
}
////////////////////////////////////////////////////////////
// function studioTs(){
//     let prova: string
//     prova='cioa'
//     // let prova2: string
//     // prova2=0
//     // oggetti \\\\\\\\\\\\\\\
//     let persona:{
//         nome:string
//         cognome:string
//         eta:number
//     }
//     persona :{
//         nome:'angelo'
//         cognome:'di re'
//         eta:24
//     };
//     // funzioni \\\\\\\\\\\\\\
//     function getData(data:{id:number, name:string,password:string}){
//         console.log(data.id)
//     }
//     const data ={id:1, name:'angelo', password:'ciao'};
//     getData(data)
//     //array /////////////////////////
//     const array: any[]=['',2,{}];
//     //errore test
//     // const array2:string[]=['','',2]
//     //tuple (lunghezzaa fissa)  //////////////////
//     const arrgh:number[]=[1,2,3]
//     const tupla: [number,number] = [1,2]
// }    
