const lowercaselettres = "abcdefghijklmnopqrstuvwxyz";
const uppercaseletters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()<>?/";

const lengthel = document.getElementById("length");


const lowercaseel = document.getElementById("lowercase");
const upercaseel = document.getElementById("uppercase");
const numbersel = document.getElementById("numbers");
const symbolsel = document.getElementById("symbols");

const generatebtn = document.getElementById("generatePassword");

const passwordel = document.getElementById("password");

generatebtn.addEventListener("click", function() {
    const length = lengthel.value;
    let characters = "";
    let password = "";

    if (lowercaseel.checked) {
        characters += lowercaselettres;
    }
    if (upercaseel.checked) {
        characters += uppercaseletters;
    }
    if (numbersel.checked) {
        characters += numbers;
    }
    if (symbolsel.checked) {
        characters += symbols;
        
            if (characters.length < length) {
                alert("Please select at least one type of character");
                return;
                }
            }            for (let i = 0; i < length; i++) {
                password += characters.charAt(Math.floor(Math.random() * characters.length));
            
            passwordel.value = password;
        };

});



