const prompt = require('prompt-sync')()
var age = Number(prompt("Yoshingizni kiriting:"))

if (age <= 18) {
    console.log("siz hali voyaga yetmagansiz")

}else {
    console.log("Siz voyaga yetgansiz")
}