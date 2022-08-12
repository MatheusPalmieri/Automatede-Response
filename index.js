'use strict'

// Print Loading
console.log("======================")
console.log("Extensão em atividade!")
console.log("======================")

// Button
var buttonRepost = document.querySelector("#helpdesk > div.contentContainer.normalization > div.column-content.border-top.border-color-ccc > div.content-modulo.floated.padding-half > div > div.panel.panel-default.chamado > div.panel-body > div > div.col-sm-8 > div > a.btn.btn-info.margin-bottom-xs")

// Exec Function
buttonRepost.addEventListener('click', () => {
    setTimeout(() => {
        // Campo de resposta
        var notepadRepost = document.querySelector("#reply > form > div.panel-body.clearfix > div.row.padding-horizontal.padding-top > div > div.clearfix > div:nth-child(2) > div > div.note-editing-area > div.note-editable")

        // Resposta
        notepadRepost.innerHTML = `
            <p>Boa tarde ${nameRepost}!</p><p><br></p>

            <!--  --> 

            ${answerChamado}

            <!--  -->
            
            <p>Qualquer dúvida estamos à disposição.</p>
        `
        // Tempo para ser executado
    }, 2000)
})

var nameRepost = captureName()

function captureName() {
    // Nome do Solicitante
    var nameRepost = document.querySelector("#helpdesk > div.contentContainer.normalization > div.column-content.border-top.border-color-ccc > div.content-modulo.floated.padding-half > div > div.remove-padding-half > div.col-md-9.padding-half > div.conversa.helpdesk-interacoes > ul > li.panel.panel-default.mensagem.mensagem-remetente > div.panel-heading > div > div > div.remetente > div.remetente-info.float-left > p:nth-child(1)").innerText.replace('FG / ', '')

    // Capturar Espaço
    var captureFirstName = nameRepost.search(' ')
    
    // Return Resolução
    return nameRepost.slice(0, captureFirstName)
}

var answerChamado = answerAutomate()

function answerAutomate() {
    // Tipo do chamado Selecionado
    var typeChamado = document.querySelector("#helpdesk > div.contentContainer.normalization > div.column-content.border-top.border-color-ccc > div.content-modulo.floated.padding-half > div > div.remove-padding-half > div.col-md-3.padding-half > div > div > form > div.panel-body > div > div > div:nth-child(4) > div.clearfix > div:nth-child(2) > select").value

    var answer

    switch(typeChamado) {
        case typeChamado === 4:
            answer = 'pasta';
            break
        case typeChamado === 168:
            answer = 'telefone'
            break
        case typeChamado === 28:
            answer = 'outros'
            break
        default:
            console.log('nada')
    }

    return answer
}
