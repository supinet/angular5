 function greeting() {
    let nome = (document.getElementById('nome') as HTMLInputElement).value;
    let sobrenome = (document.getElementById('sobrenome') as HTMLInputElement).value;
    alert(`Olá Sr: ${nome} ${sobrenome}`);
    console.log(nome);
    console.log(sobrenome);
    console.log(5);
}