function Picole() {
    var picoles = [['chocolate', 1.50], ['morango', 2.50], ['creme', 2.50], ['manga', 3.20], ['melancia', 3.40], ['vanilla ice', 3.00], ['ceu azul', 3.60], ['brownie', 4.00], ['hawaiano', 5.00]]
    let soma = 0;

    for (soma = 0; soma < picoles.length; soma++){
        console.log(picoles[soma][0] + " - " + picoles[soma][1]);
    }

    var sabor = prompt("Qual sabor você escolhe?")

    switch (sabor) {
        case 'chocolate':
            console.log("chocolate 1.50");
            break;
        case 'morango':
            console.log ("morango 2.50");
            break;
        case 'creme':
            console.log ("creme 2.50");
            break;
        case 'manga':
            console.log ("manga 3.20");
            break;
        case 'melancia':
            console.log ("melancia 3.40");
            break;
        case 'vanilla ice':
            console.log ("vanilla ice 3.00");
            break;
        case 'ceu azul':
            console.log ("ceu azul 3.60");
            break;
        case 'brownie':
            console.log ("brownie 4.00");
            break;
        case 'hawaiano':
            console.log ("hawaiano 5.00");
            break;
        default:
            "Sabor inválido";
    }
}