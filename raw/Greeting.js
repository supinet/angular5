var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greeting = function () {
        var nome = document.getElementById('nome').value;
        var sobrenome = document.getElementById('sobrenome').value;
        var pessoa = new Pessoa(nome, sobrenome);
        alert("Ol\u00E1 Sr: " + pessoa.nome + " " + pessoa.sobrenome);
        console.log(nome);
        console.log(sobrenome);
        console.log(5);
    };
    return Greeting;
}());
