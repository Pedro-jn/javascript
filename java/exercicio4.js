function Decrescente(){
    const num1 = window.prompt("digite o primeiro valor:")
    const num2 = window.prompt("digite o segundo numero:")
    const num3 = window.prompt("digite o terceiro valor:")
    const num4 = window.prompt("digite o quarto numero:")

    const numero = [num1, num2, num3, num4]
    numeros.sort(
        function(a,b){
            return b-a;

        }
    )
    window.alert(numeros)
}