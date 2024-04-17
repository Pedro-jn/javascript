function EmpresaMawer(){
    let meses = 13;
    let bruto = 0;
    let gastos = 0;
    var total_ganho = 0;
    var total_gasto = 0;
        for( meses < 13; meses++;){
            ganho = parseFloat(prompt("Qual foi o preço bruto?"));
            gasto = parseFloat(prompt("Qual foi os gastos da empresa?"));

            total_gasto = total_gasto + gastos
            total_ganho = total_ganho + bruto
            let lucro = total_gasto - total_ganho

            if(lucro < 0){
                alert("Esse foi seu Gasto total: " + total_gasto)
                alert("Esse foi seu Ganho anual: " + total_ganho)
                alert("E você ficou no prejuízo: " + lucro)
            } else { 
                if( lucro > 0){
                    alert("Esse foi seu Gasto total: " + total_gasto)
                    alert("Esse foi seu Ganho anual: " + total_ganho)
                    alert("E você ficou no lucro: " + lucro)
                } else {
                    alert("Esse foi seu Gasto total: " + total_gasto)
                    alert("Esse foi seu Ganho anual: " + total_ganho)
                    alert("E você nem ficou no prejuízo e no lucro: " + lucro)
                }
                
            }
        }
}

