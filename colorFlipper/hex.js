const hex = [0 , 1 , 2 , 3, 4 , 5 , 6 , 7 , 8 , 9 ,"A", "B", "C", "D", "E", "F"]

//element seçme
const btn2=document.getElementById('btn2')
const color2=document.querySelector(".color2")
const hexbg=document.querySelector(".hexbg")

//event
// rastgele bir hexadecimal renk kodu oluşturma ve bu rengin kodunu göstergesine ,
// sayfanın arka planına uygulama.
btn2.addEventListener("click", () =>{
    let hexColor ="#"

    // Her döngü indeksinde hex dizisinden rastgele bir eleman seçilerek 
    //hexColor değişkenine ekleme
    for(let i=0 ; i<6 ; i++){
        const randomNumber=getRandomNumber()
        hexColor += hex[randomNumber ]
    }
    console.log(hexColor)
    // böylece altı haneli renk kodu oluştur

    color2.textContent = hexColor
    hexbg.style.backgroundColor = hexColor
})

// Math.random() işlevini kullanarak 0 ile hex dizisinin uzunluğu arasında
// rastgele bir tam sayı döndürme
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}





