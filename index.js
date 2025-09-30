/*==============================
    EXIBIR A HORA DO MOMENTO ATUAL
================================*/

function atualizarRelogio(){
    const agora = new Date(); //cria um objeto que guarda o tempo real 
    const horas = String(agora.getHours()).padStart(2, '0'); //pega a hora atual, converte em letra e garante que tenho dois digito e que o da frente sejá o zero quando for de 0->9
    const minutos = String(agora.getMinutes()).padStart(2, '0'); //pega o minuto atual, converte em letra e garante que tenho dois digito e que o da frente sejá o zero quando for de 0->9 
    const segundos = String(agora.getSeconds()).padStart(2, '0');// pega o segundo atual, converte em letra e garante que tenho dois digito e que o da frente sejá o zero quando for de 0->9

    const horarioAtualizado = `${horas}:${minutos}:${segundos}`; // Junta tudo no formato HH:MM:SS.
    document.getElementById("relogio").textContent= horarioAtualizado; //pega o elemento e joga o formato de hora dentro dele via ID
}

setInterval(atualizarRelogio, 1000) //permite que a hora atualize a cada segundo sem atraso

atualizarRelogio(); //execulta a função de inicio para evitar atraso de 1s

/*==============================
    EXIBIR A DATA DO MOMENTO ATUAL
================================*/

function dataAtualizada(){ //função que exibe a data
    const dataAtual = new Date(); //pega a data do momento atual em tempo real
    document.getElementById("data").innerHTML = dataAtual.toLocaleDateString(); //toLocaleDateString retorna a data local no formato 00/00/0000
}

setInterval(dataAtualizada, 1000); //repete o intervalo a cada segundo