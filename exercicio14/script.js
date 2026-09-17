/* 
 Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso 
contrário escrever NÃO É MAIOR QUE 10! 
*/

alert("Idenficar se é maior ou menor que 10")

valor = parseInt(prompt("Digite um valor: "))
if (valor < 10) {
    alert("É menor que 10!")
}
else
    if (valor == 10) {
        alert("É igual a 10!")
    }
    else {
        alert("É maior que 10!")
    }
