function cadastrar() {

    let formulario = [];

    let nome = validaNome(document.getElementById('nome').value);
    formulario.push(nome);

    let fone = document.getElementById('fone').value;
    formulario.push(fone);

    let cidade = document.getElementById('cidade').value;
    formulario.push(cidade);

    let sexo = '';
    if (document.getElementById('masc').checked) {
        sexo = 'Masculino';
    } else if (document.getElementById('fem').checked) {
        sexo = 'Feminino';
    } else {
        sexo = 'Prefiro não comentar';
    }
    formulario.push(sexo);

    console.log(formulario);

    limparFormulario();

}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('fone').value = '';
    document.getElementById('cidade').value = 'Natal';
    document.getElementById('masc').checked = true;
    document.getElementById('nome').focus();
}

function validaNome(nome) {
    let texto = nome.trim().toUpperCase();
    for (let i = 0; i < texto.length; i++) {
        if (ehNumero(texto[i])) {
            return false;
        }
    }
    return texto;
}
