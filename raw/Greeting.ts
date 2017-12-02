class Greeting {
  
    constructor() {}

    public greeting() {

        let nome = (document.getElementById('nome') as HTMLInputElement).value;
        let sobrenome = (document.getElementById('sobrenome') as HTMLInputElement).value;

        let pessoa: Pessoa = new Pessoa(nome, sobrenome);
       
        alert(`Olá Sr: ${pessoa.nome} ${pessoa.sobrenome}`);
        console.log(nome);
        console.log(sobrenome);
        console.log(5);
    }
}