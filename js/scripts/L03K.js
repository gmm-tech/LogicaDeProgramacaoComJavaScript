/*
    Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.
*/

export function L03K() {
    alert(`Enunciado: Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.`)

    let areaTotal = 0
    let continuar = "SIM"

    while(continuar.toUpperCase() !== "NAO") {
        let nome = prompt("Digite o nome do cômodo:")
        let largura = Number(prompt("Digite a largura:"))
        let comprimento = Number(prompt("Digite o comprimento:"))

        let area = largura * comprimento

        areaTotal += area

        alert(`Cômodo: ${nome}\nÁrea: ${area} m²`)

        continuar = prompt("Deseja continuar calculando novos cômodos? (SIM/NÃO)")
    }

    alert(`Área total da residência: ${areaTotal} m²`)
}