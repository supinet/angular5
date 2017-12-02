var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Pessoa.prototype.greeting = function () {
        var nome = document.getElementById('nome').value;
        var sobrenome = document.getElementById('sobrenome').value;
        var pessoa = new Pessoa(this.nome, this.sobrenome);
        alert("Ol\u00E1 Sr: " + pessoa.nome + " " + pessoa.sobrenome);
        console.log(pessoa.nome);
        console.log(pessoa.sobrenome);
        console.log(1);
    };
    return Pessoa;
}());
