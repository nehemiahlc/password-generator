const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pw1Text = document.getElementById("pw-btn1-txt")
let pw2Text = document.getElementById("pw-btn2-txt")
let password = ""
let password2 = ""

let pwBtn1 = document.getElementById("copy-btn1-txt")
let pwBtn2 = document.getElementById("copy-btn2-txt")
let copyMSG = document.getElementById("copied-pw")


pwBtn1.addEventListener("click", () => {
    copyMSG.textContent = ""
    let copiedPW1 = pw1Text.textContent
    navigator.clipboard.writeText(copiedPW1)
    copyMSG.textContent = "Copied password one."
    
})

pwBtn2.addEventListener("click", () => {
    copyMSG.textContent = ""
    let copiedPW2 = pw2Text.textContent
    navigator.clipboard.writeText(copiedPW2)
    copyMSG.textContent = "Copied password two."
})

function generatePW() {
    clearPW()
    for (let i = 0; i < 16; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length)
    let randomIndex2 = Math.floor(Math.random() * characters.length)
    let value1 = characters[randomIndex1]
    let value2 = characters[randomIndex2]
    password += value1
    password2 += value2
    } 
    pw1Text.textContent = password
    pw2Text.textContent = password2
        
}

function clearPW() {
    pw1Text.textContent = ""
    pw2Text.textContent = ""
    password = ""
    password2 = ""
    copyMSG.textContent = ""

}


 


