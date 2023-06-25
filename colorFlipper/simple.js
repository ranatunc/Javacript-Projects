const colors=["#808080","#FFFFFF","#FFC0CB",
"#FFA500","#FFFF00","#008000",
"#0000FF","#B71C1C","#000000"]
const selectedColors = [];

//element seçme
const btn1 = document.getElementById("btn")
const color1 = document.querySelector(".color")
const simplebg = document.querySelector(".simplebg")

//event
btn1.addEventListener("click", function() {
     // rastgele bir sayı alma ve randomNumber değişkenine atama
    let randomNumber = getRandomNumber();
    
    // tüm renkler seçilmediği sürece döngü devam eder
    while (selectedColors.length < colors.length) {
        if (!selectedColors.includes(randomNumber)) {
          selectedColors.push(randomNumber);
          break;
        }
    
        randomNumber = getRandomNumber();
    }
    // Tüm renkler seçildiyse seçilen renkleri sıfırlama
    if (selectedColors.length === colors.length) {
        selectedColors.length = 0; 
    }
    // randomNumber geçersiz bir indeksi (undefined) verirse, if koşulu sağlanmaz
    if(colors[randomNumber] != undefined) {
        console.log(colors[randomNumber]);
        simplebg.style.backgroundColor = colors[randomNumber];
        color1.textContent = colors[randomNumber];
    }

    
  

});

// Math.random() işlevini kullanarak 0 ile hex dizisinin uzunluğu
// arasında rastgele bir tam sayı döndürme
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
