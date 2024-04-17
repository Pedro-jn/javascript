function par() {
    let par = parseInt(prompt("Digite um número"))
    if (par % 2 == 0){
        par = par - 1;
        window.alert('O numero era par, transformei ele em impar agora: ' + par)
    } else {
        par = par + 1;
        window.alert('O numero era impar, transformei em par: ' + par)
    }
    

}
