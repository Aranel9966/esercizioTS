/////////////////*******//////trascrizione in ts dell app psia 
let arrayName: string[]=[];
let luoghi:string[] = ["bosco", "mare", "cielo"];
let button:any  = document.getElementById("prova");
let start:any  = document.getElementById("start");
let preGame:any  = document.getElementById("preGame");
let scopri:any  = document.getElementById("scopri");
let ruolo:any  = document.getElementById("ruolo");
let test:any = document.getElementById("test");
let Rluoghi:number = Math.floor(Math.random() * luoghi.length);
let i:number = 0;
let controllo:boolean = true;
let spia:number;
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
    } else {
      if (controllo == true) {
        ruolo.innerHTML = arrayName[i];
        controllo = false;
        // console.log(arrayName[i]);
      } else {
        console.log(spia);
        // console.log(arrayName[spia]);
        // console.log(arrayName[i]);
  
        if (arrayName[i] == arrayName[spia]) {
          ruolo.innerHTML = "spia";
        } else {
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
    let name:any = document.getElementById("name");
    if (name.value == "" || name.value == " ") {
      alert("inserire nome");
    } else {
      // console.log(name.value);
      arrayName.push(name.value);
      name.value = "";
      // console.log(arrayName);
    }
    stampa();
  });

  function stampa() {
    let list:any = document.getElementById("listaNomi");
    list.innerHTML = "";
  
    arrayName.forEach((element) => {
      list.innerHTML += "<li>" + element + "</li>";
      // console.log(element);
    });
  }
////////////////////////////////////////////////////////////
//COMANDI DA TERMINALE
//PER INSTALLARE TYPESCRIPT->  npm i -g typescript
//PER AVVIARE LA COMPILAZIONE IN JS->  tsc app.ts


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



  


  