
function verificar() {
    var data = new Date;
    var ano = data.getFullYear();
    var fano = document.querySelector('#txtano');
    var res = document.getElementById('res');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    img.setAttribute('height', '400px')

    if (fano.value == 0 || fano.value == ano) {
        res.innerHTML = `[ERRO] Verifique o ano e tente novamente`
    } else {

        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gen = " ";

        if (fsex[1].checked) {
            gen = 'mulher'
            //menina
            if (idade < 10) {
                img.setAttribute('src', 'menina.jpg');
            }
            //garota
            else if (idade > 10 && idade < 20) {
                img.setAttribute('src', 'garota.jpg');
            }
            //mulher
            else if (idade > 20 && idade < 50) {
                img.setAttribute('src', 'mulher.jpg');
            }
            //veia
            else if (idade > 50) {
                img.setAttribute('src', 'veia.jpg');
            }

        }
        //MASCULINO

        else if (fsex[0].checked) {
            gen = 'homem'
            //menino
            if (idade < 10) {
                img.setAttribute('src', 'menino.jpeg');
            }
            //garoto
            else if (idade > 10 && idade < 20) {
                img.setAttribute('src', 'garoto.png');
            }
            //homem
            else if (idade > 20 && idade < 50) {
                img.setAttribute('src', 'homem.avif');
            }
            //veio
            else if (idade > 50) {
                img.setAttribute('src', 'veio.jpg');
            }
        } else if (fsex[2].checked) {
            gen = 'alguma coisa'
            img.setAttribute('src', 'outro.jpg')
        }
        res.innerHTML = `você é ${gen} e tem ${idade} anos`;
        res.style.textAlign = "center";
        res.appendChild(img)



    }


}
