alert("this my menu drink  =  coffee , soda , tea ")
let usercoffee = prompt("whats your favorit drink")

switch (true) {
    case usercoffee == "coffee":
        alert("the price of this coffee is = $10")
        confirm("do you want order coffee")
        break;
        case usercoffee == "tea":
            alert("the price of this tea is = $8")
            confirm("do you want order tea")
            break;
            case usercoffee == "soda":
        alert("the price of this soda is = $12")
        confirm("do you want order soda")
        break;
    default:
        alert("we dont habe this drink")
        break;
}

confirm("do you want order " + usercoffee)

 alert("this is my menu cake  =  bananacake , apple cake , notela cake")

let usercake = prompt("say me your decide cake")


switch (true) {
    case usercake == "apple cake":
        alert("the price of apple cake is = $5")
        confirm("do you want order this cake")
        break;
        case usercake == "banana cake":
            alert("the price of banan cake is = $15")
            confirm("do you want order this cake")
            break;
            case usercake == "notela cake":
        alert("the price of notela cake is = $9")
        confirm("do you want order this cake")
        break;

    default:
        alert("we dont have this cake")
        break;
}