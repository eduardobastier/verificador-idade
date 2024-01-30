function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formAno = document.getElementById('txtano');
    let res = document.querySelector('div#res'); // faz o mesmo que o de cima, porem mais moderno.
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(formAno.value);
        let genero = ''
        let img = document.createElement('img') // cria uma tag img de forma dinamica
        img.setAttribute('id', 'foto') // cria um id com valor de foto
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'img/crianca-masc.png');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-masc.png');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-masc.png');
            } else {
                // idoso
                img.setAttribute('src', 'img/idoso-masc.png');
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'img/crianca-fem.png');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-fem.png');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-fem.png');
            } else {
                // idoso
                img.setAttribute('src', 'img/idoso-fem.png');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}