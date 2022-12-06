var i = 0;
const sayilar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const idarray = ["butc","butsil","butx","butbolu","buteksi","butarti","butae","butvrgl","butesit"];
const deger = ["C","--","X","/","-","+","+/-",".","="];
const sayino = ["but1","but2","but3","but4","but5","but6","but7","but8","but9","but0"]

 deger.forEach((deger,index)=>{
   var btn= document.createElement("input");
   btn.innerHTML=deger;
  while(i < idarray.length) {
    btn.setAttribute("id",idarray[i]);
    btn.setAttribute("type","button");
    btn.setAttribute("value",deger);
    btn.setAttribute("onclick","isaretyaz(this.value)")
    break;
    }
    i = i + 1;
    butonlar.appendChild(btn); 
}) 

var index = 0;
sayilar.forEach(sayi=>{
 var btn = document.createElement("input");
 btn.innerHTML=sayi;
 if(index%3==0){
    butonlar.appendChild(document.createElement("br"))
   }
 while(i < sayino.length) {
    btn.setAttribute("id",sayino[index]);
    btn.setAttribute("type","button");
    btn.setAttribute("value",sayi);
    btn.setAttribute("onclick","sayiyaz(this.value)")
    break;
    }
    index = index + 1;
    btnsayilar.appendChild(btn);
})


function sayiyaz(yaz) {
    if (document.getElementById("lbl1").innerHTML) {
        let text = document.getElementById("lbl1").innerHTML;
    document.getElementById("lbl1").innerHTML += yaz;
    }
    else {
        let text = document.getElementById("lbl1").innerHTML;
        document.getElementById("lbl1").innerHTML = yaz;
    }
}

    function isaretyaz(yaz) {
//   let text;
//   switch (yaz) {
//     case "1":
//       text = document.getElementById("lbl1").innerHTML;
//       document.getElementById("lbl1").innerHTML = text + "1";
//       break;
//     case "2":
//       text = document.getElementById("lbl1").innerHTML;
//       document.getElementById("lbl1").innerHTML = text + "2";
//       break;
//     case "3":
//       text = document.getElementById("lbl1").innerHTML;
//       document.getElementById("lbl1").innerHTML = text + "3";
//       break;
//     case "4":
//       text = document.getElementById("lbl1").innerHTML;
//       document.getElementById("lbl1").innerHTML = text + "4";
//       break;
//     case "5":
//       text = document.getElementById("lbl1").innerHTML;
//       document.getElementById("lbl1").innerHTML = text + "5";
//       break;
//     case "6":
//       text = document.getElementById("lbl1").innerHTML;
//       document.getElementById("lbl1").innerHTML = text + "6";
//       break;
//     case "7":
//       text = document.getElementById("lbl1").innerHTML;
//       document.getElementById("lbl1").innerHTML = text + "7";
//       break;
//     case "8":
//       text = document.getElementById("lbl1").innerHTML;
//       document.getElementById("lbl1").innerHTML = text + "8";
//       break;
//     case "9":
//       text = document.getElementById("lbl1").innerHTML;
//       document.getElementById("lbl1").innerHTML = text + "9";
//       break;
//     case "0":
//       text = document.getElementById("lbl1").innerHTML;
//       document.getElementById("lbl1").innerHTML = text + "0";
//       break;
//   }


  if (yaz == "+") {
    let text = document.getElementById("lbl1").innerHTML;
    let leng = text.length - 1;

    if (
      text.charAt(leng) == "" ||
      text.charAt(leng) == "+" ||
      text.charAt(leng) == "-" ||
      text.charAt(leng) == "x" ||
      text.charAt(leng) == "/" ||
      text.charAt(leng) == "."
    ) {
      if (text.charAt(leng) !== "+") {
        text = text.slice(0, -1);
        document.getElementById("lbl1").innerHTML = text + "+";
      }
    } else {
      document.getElementById("lbl1").innerHTML = text + "+";
    }
  } else if (yaz == "-") {
    let text = document.getElementById("lbl1").innerHTML;
    let leng = text.length - 1;

    if (
      text.charAt(leng) == "" ||
      text.charAt(leng) == "+" ||
      text.charAt(leng) == "-" ||
      text.charAt(leng) == "x" ||
      text.charAt(leng) == "/" ||
      text.charAt(leng) == "."
    ) {
      if (text.charAt(leng) !== "-") {
        text = text.slice(0, -1);
        document.getElementById("lbl1").innerHTML = text + "-";
      }
    } else {
      document.getElementById("lbl1").innerHTML = text + "-";
    }
  } else if (yaz == "X") {
    let text = document.getElementById("lbl1").innerHTML;
    let leng = text.length - 1;

    if (
      text.charAt(leng) == "" ||
      text.charAt(leng) == "+" ||
      text.charAt(leng) == "-" ||
      text.charAt(leng) == "x" ||
      text.charAt(leng) == "/" ||
      text.charAt(leng) == "."
    ) {
      if (text.charAt(leng) !== "x") {
        text = text.slice(0, -1);
        document.getElementById("lbl1").innerHTML = text + "x";
      }
    } else {
      document.getElementById("lbl1").innerHTML = text + "x";
    }
  } else if (yaz == "/") {
    let text = document.getElementById("lbl1").innerHTML;
    let leng = text.length - 1;

    if (
      text.charAt(leng) == "" ||
      text.charAt(leng) == "+" ||
      text.charAt(leng) == "-" ||
      text.charAt(leng) == "x" ||
      text.charAt(leng) == "/" ||
      text.charAt(leng) == "."
    ) {
      if (text.charAt(leng) !== "/") {
        text = text.slice(0, -1);
        document.getElementById("lbl1").innerHTML = text + "/";
      }
    } else {
      document.getElementById("lbl1").innerHTML = text + "/";
    }
  } else if (yaz == ".") {
    let text = document.getElementById("lbl1").innerHTML;
    let leng = text.length - 1;
    if (text.charAt(leng) == "") {
      document.getElementById("lbl1").innerHTML = text + "0.";
    }
    if (
      text.charAt(leng) == "" ||
      text.charAt(leng) == "+" ||
      text.charAt(leng) == "-" ||
      text.charAt(leng) == "x" ||
      text.charAt(leng) == "/" ||
      text.charAt(leng) == "."
    ) {
    } else {
      document.getElementById("lbl1").innerHTML = text + ".";
      /*   let textkontrol = text.split("");
        let flag;
    function virgulkontrol(virgul) {
        return virgul == ".";
                                   }                               
    if(textkontrol.find(virgulkontrol) == ".") {flag = true} 
    if(flag !== true) {document.getElementById("lbl1").innerHTML = text + ".";}
      */
    }
  } else if (yaz == "C") {
    document.getElementById("lbl1").innerHTML = "";
  } // labelin içini sildi.
  else if (yaz == "--") {
    let text = document.getElementById("lbl1").innerHTML;
    text = text.slice(0, -1); //son karakteri siler.
    document.getElementById("lbl1").innerHTML = text;
  }

  if (yaz == "=") {
    let text = document.getElementById("lbl1").innerHTML;
    let textarray = text.split("");
    var sayi1 = "";
    var sayi2 = "";
    let operator = "?";
    let sonuc;

    for (var i = 0; i < textarray.length; i++) {
      if (
        textarray[i] == "+" ||
        textarray[i] == "-" ||
        textarray[i] == "x" ||
        textarray[i] == "/"
      ) {
        operator = textarray[i];
        continue;
      }

      if (operator !== "?") {
        sayi2 = "" + sayi2 + textarray[i]; //string sayı int'e çevrilir.
      } else {
        sayi1 = "" + sayi1 + textarray[i];
      }
    }
    sayi1 = parseFloat(sayi1);
    sayi2 = parseFloat(sayi2);

    switch (operator) {
      case "+":
        sonuc = sayi1 + sayi2;
        break;
      case "-":
        sonuc = sayi1 - sayi2;
        break;
      case "x":
        sonuc = sayi1 * sayi2;
        break;
      case "/":
        sonuc = sayi1 / sayi2;
        break;
      default:
        break;
    }

    if (sonuc == undefined || isNaN(sonuc))   {
        sonuc = 0;
      document.getElementById("lbl1").innerHTML = "0";
      document.getElementById("div3").innerHTML =
        div3text + text + " = " + "0" + "<br>";
    } else {
      
        div3text = document.getElementById("div3").innerHTML;
      document.getElementById("lbl1").innerHTML = sonuc;
      document.getElementById("div3").innerHTML =
        div3text + text + " = " + sonuc + "<br>";
    }
  }

}
