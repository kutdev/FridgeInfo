var storageNameIndex = localStorage.getItem("name");
const storageStart = localStorage.getItem("entered");
const meatInput = document.getElementById("meatProduct");
const meatAmount = document.getElementById("meatAmount");
const meatRoot = document.getElementById("meatMenu");
var meatNumber = 0;
const fishInput = document.getElementById("fishProduct");
const fishAmount = document.getElementById("fishAmount");
const fishRoot = document.getElementById("fishMenu");
var fishNumber = 0;
const vegeInput = document.getElementById("vegeProduct");
const vegeAmount = document.getElementById("vegeAmount");
const vegeRoot = document.getElementById("vegeMenu");
var vegeNumber = 0;
const frutInput = document.getElementById("frutProduct");
const frutAmount = document.getElementById("frutAmount");
const frutRoot = document.getElementById("frutMenu");
var frutNumber = 0;
const stufInput = document.getElementById("stufProduct");
const stufAmount = document.getElementById("stufAmount");
const stufRoot = document.getElementById("stufMenu");
var stufNumber = 0;
document.getElementById("welcomeText").innerHTML = storageNameIndex + "'s Fridge";
var fishOpened = 0;
var meatOpened = 0;
var vegeOpened = 0;
var frutOpened = 0;
var stufOpened = 0;
const languagePref = localStorage.getItem("language");
var pcs = "pcs.";


let i = 0;
let a = 0;
let f = 0;
let x = 0;
let y = 0;
//LANGUAGE SYSTEM
if (storageStart != 1) {
    window.location = "/index.html";
}
if (languagePref == "tr") {
    document.getElementById("welcomeText").innerHTML = storageNameIndex + "'in Buzdolabı";
    document.getElementById("meatTitle").innerHTML = "Et";
    document.getElementById("fishTitle").innerHTML = "Balık";
    document.getElementById("vegeTitle").innerHTML = "Sebze";
    document.getElementById("frutTitle").innerHTML = "Meyve";
    document.getElementById("stufTitle").innerHTML = "Diğer Ürünler";
    document.getElementById("meatMTitle").innerHTML ="Et";
    document.getElementById("fishMTitle").innerHTML ="Balık";
    document.getElementById("vegeMTitle").innerHTML ="Sebze";
    document.getElementById("frutMTitle").innerHTML ="Meyve";
    document.getElementById("stufMTitle").innerHTML ="Diğer Ürünler";
    document.getElementById("meatProduct").placeholder ="Ürün girin";
    document.getElementById("fishProduct").placeholder ="Ürün girin";
    document.getElementById("vegeProduct").placeholder ="Ürün girin";
    document.getElementById("frutProduct").placeholder ="Ürün girin";
    document.getElementById("stufProduct").placeholder ="Ürün girin";
    document.getElementById("stufAmount").placeholder ="adet";
    pcs = "adet";
    

}
if (languagePref == "de") {
    document.getElementById("welcomeText").innerHTML = storageNameIndex + "s Kühlschrank";
    document.getElementById("meatTitle").innerHTML = "Fleisch";
    document.getElementById("fishTitle").innerHTML = "Fisch";
    document.getElementById("vegeTitle").innerHTML = "Gemüse";
    document.getElementById("frutTitle").innerHTML = "Obst";
    document.getElementById("stufTitle").innerHTML = "Andere Sachen";
    document.getElementById("meatMTitle").innerHTML ="Fleisch";
    document.getElementById("fishMTitle").innerHTML ="Fisch";
    document.getElementById("vegeMTitle").innerHTML ="Gemüse";
    document.getElementById("frutMTitle").innerHTML ="Obst";
    document.getElementById("stufMTitle").innerHTML ="Andere Sachen";
    document.getElementById("meatProduct").placeholder ="Produkt eingeben";
    document.getElementById("fishProduct").placeholder ="Produkt eingeben";
    document.getElementById("vegeProduct").placeholder ="Produkt eingeben";
    document.getElementById("frutProduct").placeholder ="Produkt eingeben";
    document.getElementById("stufProduct").placeholder ="Produkt eingeben";
    document.getElementById("stufAmount").placeholder ="stck";
    pcs = "adet";
    

}

//MEAT CONTROLS


function meatControl(){
    
   while (i < 17) {
    i += 1;
    console.log(i);
        var newMeat = localStorage.getItem("meatProduct"+i);
        if (newMeat != null) {
            
        
        meatNumber += 1;
        const product = document.createElement("p");
        product.innerHTML = newMeat +'<i onclick="deleteMeat('+meatNumber+','+i+')" class="fa-solid fa-minus"></i>' ;
        product.setAttribute("id","meatP"+meatNumber)
        meatRoot.appendChild(product);
        return meatNumber, i
        }
   }
    
    
   
        

}

setInterval(meatControl, 1)

function meatOpen(){
    if (meatOpened == 0) {
        meatOpened = 1;
        document.getElementById("meatMenu").style.visibility = "visible";
        return meatOpened
    }
    if (meatOpened == 1) {
        meatOpened = 0;
        document.getElementById("meatMenu").style.visibility = "hidden";
        return meatOpened
    }
    
}
function enterMeat(){
        meatNumber += 1;
        const product = document.createElement("p");
        product.innerHTML = meatInput.value +" "+meatAmount.value +"kg"+'<i onclick="deleteMeat('+meatNumber+')" class="fa-solid fa-minus"></i>' ;
        product.setAttribute("id","meatP"+meatNumber)
        meatRoot.appendChild(product);
        localStorage.setItem("meatProduct"+meatNumber, meatInput.value + " " + meatAmount.value+"kg");
        return meatNumber
        
}
function deleteMeat(mNumber, lNumber){
    const product = document.getElementById("meatP"+mNumber)
    meatRoot.removeChild(product);
    localStorage.removeItem("meatProduct"+lNumber);
}

//FISH CONTROLS


function fishControl(){
    
    while (a < 17) {
     a += 1;
     console.log(a);
         var newFish = localStorage.getItem("fishProduct"+a);
         if (newFish != null) {
             
         
         fishNumber += 1;
         const product = document.createElement("p");
         product.innerHTML = newFish +'<i onclick="deleteFish('+fishNumber+','+a+')" class="fa-solid fa-minus"></i>' ;
         product.setAttribute("id","fishP"+fishNumber)
         fishRoot.appendChild(product);
         return fishNumber, a
         }
    }
     
     
    
         
 
 }
 
 setInterval(fishControl, 1)
 
 function fishOpen(){
     if (fishOpened == 0) {
         fishOpened = 1;
         document.getElementById("fishMenu").style.visibility = "visible";
         return fishOpened
     }
     if (fishOpened == 1) {
         fishOpened = 0;
         document.getElementById("fishMenu").style.visibility = "hidden";
         return fishOpened
     }
     
 }
 function enterFish(){
         fishNumber += 1;
         const product = document.createElement("p");
         product.innerHTML = fishInput.value +" "+fishAmount.value +"kg"+'<i onclick="deleteFish('+fishNumber+')" class="fa-solid fa-minus"></i>' ;
         product.setAttribute("id","fishP"+fishNumber)
         fishRoot.appendChild(product);
         localStorage.setItem("fishProduct"+fishNumber, fishInput.value + " " + fishAmount.value+"kg");
         return fishNumber
         
 }
 function deleteFish(fNumber, lfNumber){
     const product = document.getElementById("fishP"+fNumber)
     fishRoot.removeChild(product);
     localStorage.removeItem("fishProduct"+lfNumber);
 }



 //VEGETABLE CONTROLS


function vegeControl(){
    
    while (f < 17) {
     f += 1;
     console.log(f);
         var newVege = localStorage.getItem("vegeProduct"+f);
         if (newVege != null) {
             
         
         vegeNumber += 1;
         const product = document.createElement("p");
         product.innerHTML = newVege +'<i onclick="deleteVege('+vegeNumber+','+f+')" class="fa-solid fa-minus"></i>' ;
         product.setAttribute("id","vegeP"+vegeNumber)
         vegeRoot.appendChild(product);
         return vegeNumber, f
         }
    }
     
     
    
         
 
 }
 
 setInterval(vegeControl, 1)
 
 function vegeOpen(){
     if (vegeOpened == 0) {
         vegeOpened = 1;
         document.getElementById("vegeMenu").style.visibility = "visible";
         return vegeOpened
     }
     if (vegeOpened == 1) {
         vegeOpened = 0;
         document.getElementById("vegeMenu").style.visibility = "hidden";
         return vegeOpened
     }
     
 }
 function enterVege(){
         vegeNumber += 1;
         const product = document.createElement("p");
         product.innerHTML = vegeInput.value +" "+vegeAmount.value +"kg"+'<i onclick="deleteVege('+vegeNumber+')" class="fa-solid fa-minus"></i>' ;
         product.setAttribute("id","vegeP"+vegeNumber)
         vegeRoot.appendChild(product);
         localStorage.setItem("vegeProduct"+vegeNumber, vegeInput.value + " " + vegeAmount.value+"kg");
         return vegeNumber
         
 }
 function deleteVege(vNumber, lvNumber){
     const product = document.getElementById("vegeP"+vNumber)
     vegeRoot.removeChild(product);
     localStorage.removeItem("vegeProduct"+lvNumber);
 }


 //FRUIT CONTROLS


function frutControl(){
    
    while (x < 17) {
     x += 1;
     console.log(x);
         var newFrut = localStorage.getItem("frutProduct"+x);
         if (newFrut != null) {
             
         
         frutNumber += 1;
         const product = document.createElement("p");
         product.innerHTML = newFrut +'<i onclick="deleteFrut('+frutNumber+','+x+')" class="fa-solid fa-minus"></i>' ;
         product.setAttribute("id","frutP"+frutNumber)
         frutRoot.appendChild(product);
         return frutNumber, x
         }
    }
     
     
    
         
 
 }
 
 setInterval(frutControl, 1)
 
 function frutOpen(){
     if (frutOpened == 0) {
         frutOpened = 1;
         document.getElementById("frutMenu").style.visibility = "visible";
         return frutOpened
     }
     if (frutOpened == 1) {
         frutOpened = 0;
         document.getElementById("frutMenu").style.visibility = "hidden";
         return frutOpened
     }
     
 }
 function enterFrut(){
         frutNumber += 1;
         const product = document.createElement("p");
         product.innerHTML = frutInput.value +" "+frutAmount.value +"kg"+'<i onclick="deleteFrut('+frutNumber+')" class="fa-solid fa-minus"></i>' ;
         product.setAttribute("id","frutP"+frutNumber)
         frutRoot.appendChild(product);
         localStorage.setItem("frutProduct"+frutNumber, frutInput.value + " " + frutAmount.value+"kg");
         return frutNumber
         
 }
 function deleteFrut(frNumber, lfrNumber){
     const product = document.getElementById("frutP"+frNumber)
     frutRoot.removeChild(product);
     localStorage.removeItem("frutProduct"+lfrNumber);
 }


 //OTHER STUFFS CONTROLS


function stufControl(){
    
    while (y < 17) {
     y += 1;
     console.log(y);
         var newStuf = localStorage.getItem("stufProduct"+y);
         if (newStuf != null) {
             
         
         stufNumber += 1;
         const product = document.createElement("p");
         product.innerHTML = newStuf +'<i onclick="deleteStuf('+stufNumber+','+y+')" class="fa-solid fa-minus"></i>' ;
         product.setAttribute("id","stufP"+stufNumber)
         stufRoot.appendChild(product);
         return stufNumber, y
         }
    }
     
     
    
         
 
 }
 
 setInterval(stufControl, 1)
 
 function stufOpen(){
     if (stufOpened == 0) {
         stufOpened = 1;
         document.getElementById("stufMenu").style.visibility = "visible";
         return stufOpened
     }
     if (stufOpened == 1) {
         stufOpened = 0;
         document.getElementById("stufMenu").style.visibility = "hidden";
         return stufOpened
     }
     
 }
 function enterStuf(){
         stufNumber += 1;
         const product = document.createElement("p");
         product.innerHTML = stufInput.value +" "+stufAmount.value +pcs+'<i onclick="deleteStuf('+stufNumber+')" class="fa-solid fa-minus"></i>' ;
         product.setAttribute("id","stufP"+stufNumber)
         stufRoot.appendChild(product);
         localStorage.setItem("stufProduct"+stufNumber, stufInput.value + " " + stufAmount.value+pcs);
         return stufNumber
         
 }
 function deleteStuf(sNumber, lsNumber){
     const product = document.getElementById("stufP"+sNumber)
     stufRoot.removeChild(product);
     localStorage.removeItem("stufProduct"+lsNumber);
 }