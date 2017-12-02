class Pessoa {
    public nome: string;
    public sobrenome: string;

    public constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    public greeting(): void {

        let nome:string = (document.getElementById('nome') as HTMLInputElement).value;
        let sobrenome: string = (document.getElementById('sobrenome') as HTMLInputElement).value;

        let pessoa: Pessoa = new Pessoa(this.nome, this.sobrenome);
       
        alert(`Olá Sr: ${pessoa.nome} ${pessoa.sobrenome}`);
        console.log(pessoa.nome);
        console.log(pessoa.sobrenome);
        console.log(1);
    }
}
