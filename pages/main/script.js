const container = document.getElementById("chat");
const inputMessage = document.getElementById("prompt");


const audio = document.querySelector('#audiof');
const musica = document.querySelector('#musica');

setTimeout(() => {
    document.body.style.opacity = 1;
    botResponse("Olá no que posso de ajudar hoje?", container)
}, 1000)

function PegarDia(){
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1; // Os meses em JS vão de 0 (janeiro) a 11 (dezembro), então somamos 1.
    const ano = hoje.getFullYear();
    return (`Hoje é ${dia}/${mes}/${ano}`);
}


function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    return (`${horas}:${minutos}:${segundos}`);
}

function IdentificarTexto(text){
    if (text.includes('horas')) {
        let hora = atualizarRelogio();
        botResponse(`No momento são ${hora}`, container);
    }
    if (text.includes('temperatura')){
        buscarCidade("Ilha Solteira")
    }
    if (text.includes("quem é você")){
        botResponse("Eu sou a Indi, uma inteligência artificial criada pela Opp, projetada para ajudar, responder perguntas, trocar ideias e oferecer suporte em várias áreas, como programação, estudos, criação de conteúdo, conselhos, entre outros. Minha base de conhecimento é atualizada até 2024, e eu não tenho emoções ou experiências próprias, mas me esforço para entender o que você precisa e oferecer a melhor resposta possível.", container)
        audio.src="audio/ElevenLabs_2024-10-27T20_44_02_Jessica_pre_s50_sb75_se0_b_m2.mp3";
        audio.play();
    }
    if (text.includes("quem e voce")){
        botResponse("Eu sou a Indi, uma inteligência artificial criada pela Opp, projetada para ajudar, responder perguntas, trocar ideias e oferecer suporte em várias áreas, como programação, estudos, criação de conteúdo, conselhos, entre outros. Minha base de conhecimento é atualizada até 2024, e eu não tenho emoções ou experiências próprias, mas me esforço para entender o que você precisa e oferecer a melhor resposta possível.", container)
        audio.src="audio/ElevenLabs_2024-10-27T20_44_02_Jessica_pre_s50_sb75_se0_b_m2.mp3";
        audio.play();
    }
    if (text.includes("qm e vc")){
        botResponse("Eu sou a Indi, uma inteligência artificial criada pela Opp, projetada para ajudar, responder perguntas, trocar ideias e oferecer suporte em várias áreas, como programação, estudos, criação de conteúdo, conselhos, entre outros. Minha base de conhecimento é atualizada até 2024, e eu não tenho emoções ou experiências próprias, mas me esforço para entender o que você precisa e oferecer a melhor resposta possível.", container)
        audio.src="audio/ElevenLabs_2024-10-27T20_44_02_Jessica_pre_s50_sb75_se0_b_m2.mp3";
        audio.play();
    }
    if (text.includes("que dia e hoje")){
        let dia = PegarDia();
        botResponse(dia, container)
    }
    if (text.includes("que dia é hoje")){
        let dia = PegarDia();
        botResponse(dia, container)
    }
    if (text.includes("quem são seus criadores")) {
        botResponse("Fui criado pela Opp, uma organização de pesquisa em inteligência artificial. A Opp se dedica a desenvolver e promover IA de forma segura e benéfica, buscando criar tecnologias que possam ajudar as pessoas em diversas áreas, como educação, saúde, ciência e muito mais. Eles trabalham com uma equipe de programadores modelos como eu.", container)
        audio.src="audio/ElevenLabs_2024-10-27T20_45_59_Jessica_pre_s50_sb75_se0_b_m2.mp3";
        audio.play();
    }
    if (text.includes("quem sao seus criadores")) {
        botResponse("Fui criado pela Opp, uma organização de pesquisa em inteligência artificial. A Opp se dedica a desenvolver e promover IA de forma segura e benéfica, buscando criar tecnologias que possam ajudar as pessoas em diversas áreas, como educação, saúde, ciência e muito mais. Eles trabalham com uma equipe de programadores para desenvolver modelos como eu.", container)
        audio.src="audio/ElevenLabs_2024-10-27T20_45_59_Jessica_pre_s50_sb75_se0_b_m2.mp3";
        audio.play();
    }
    if (text.includes("qm sao seus criadores")) {
        botResponse("Fui criado pela Opp, uma organização de pesquisa em inteligência artificial. A Opp se dedica a desenvolver e promover IA de forma segura e benéfica, buscando criar tecnologias que possam ajudar as pessoas em diversas áreas, como educação, saúde, ciência e muito mais. Eles trabalham com uma equipe de programadores para desenvolver modelos como eu.", container)
        audio.src="audio/ElevenLabs_2024-10-27T20_45_59_Jessica_pre_s50_sb75_se0_b_m2.mp3";
        audio.play();
    }
    if (text.includes("vc e fexamento de qm")){
        botResponse("Sou fexamento da TDM. Segue lá no insta @tdm_isa.", container)
        audio.src="audio/ElevenLabs_2024-10-27T20_46_55_Jessica_pre_s50_sb75_se0_b_m2.mp3";
        audio.play();
        setTimeout(() => {
            botResponse("Digite 1 para ouvir o recado para o Alex.", container)
            audio.src="audio/ElevenLabs_2024-10-27T21_08_47_Jessica_pre_s50_sb75_se0_b_m2.mp3";
            audio.play();
        },5200)
    }
    if (text.includes("1")){
        botResponse("Salve, Alex esse trampo mano demorou mo cota da aquele MMB pra nois.", container)
        audio.src="audio/ElevenLabs_2024-10-27T20_48_54_Jessica_pre_s50_sb33_se0_b_m2.mp3";
        audio.play();
    }
    if (text.includes("solta a braba")){
        botResponse("Soltando a Braba.", container)
        audio.src="audio/ElevenLabs_2024-10-27T21_11_25_Jessica_pre_s87_sb26_se0_b_m2.mp3";
        audio.play();
        setTimeout(() =>{
            musica.src="audio/pagode.mp3";
            musica.play();
        },1200)
    }
    if (text.includes("pause a musica")) {
        botResponse("Pausando a musica", container)
        audio.src="audio/ElevenLabs_2024-10-27T21_13_50_Jessica_pre_s87_sb26_se0_b_m2.mp3";
        audio.play();
        setTimeout(() =>{
            musica.pause();
        },1200)
    }
    if (text.includes("como você está")) {
        botResponse("Estou bem, obrigado por perguntar. E você, como está?", container)
        audio.src="audio/ElevenLabs_2024-10-27T21_18_32_Jessica_pre_s87_sb26_se0_b_m2.mp3";
        audio.play();
    }
    if (text.includes("como vc esta")) {
        botResponse("Estou bem, obrigado por perguntar. E você, como está?", container)
        audio.src="audio/ElevenLabs_2024-10-27T21_18_32_Jessica_pre_s87_sb26_se0_b_m2.mp3";
        audio.play();
    }
    if (text.includes("finalize a apresentação")) {
        botResponse("Gostaria de expressar minha sincera gratidão a todos vocês. Carlos, sua dedicação e apoio foram fundamentais; João Emanuel, sua criatividade sempre traz novas perspectivas; João Arthur, a sua colaboração foi essencial para o sucesso deste projeto; Otávio, sua persistência nos inspirou a seguir em frente; e Pedro, suas ideias inovadoras realmente fizeram a diferença. Agradeço a cada um de vocês por suas contribuições valiosas. Juntos, alcançamos grandes resultados!", container)
        audio.src="audio/ElevenLabs_2024-10-27T21_22_32_Jessica_pre_s87_sb26_se0_b_m2.mp3";
        audio.play();
        setTimeout(() =>{
            musica.src="audio/pagode.mp3";
            musica.play();
        },33000)
    }
}


function typeText(text, element, callback) {
    const paragraph = document.createElement("p");
    paragraph.classList.add('chat-mgs');
    element.appendChild(paragraph);
    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            paragraph.textContent += text.charAt(index);
            index++;
            setTimeout(typeCharacter, 10);
        } else if (callback) {
            callback();
        }
    }

    typeCharacter();
}

function addMessage() {
    const messageText = inputMessage.value.trim();
    
    if (messageText) {
        inputMessage.value = "";
        typeText(`Você: ${messageText}`, container, () => {
            setTimeout(() => {
                IdentificarTexto(messageText)
            }, 500);
        });
    }
}

function botResponse(message, element) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("chat-mgs");

    const botWord = document.createElement("span");
    botWord.textContent = "Indi: ";
    botWord.classList.add("bot-word");

    paragraph.appendChild(botWord);
    element.appendChild(paragraph);
    
    typeText(message, paragraph, null);
}



inputMessage.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addMessage();
    }
});


// função de sair do prompt

const leave = document.querySelector('#sair');

function sairdapage(){
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.backgroundColor='#292927'
        setTimeout(() => {
            window.location.href = "login.html"
        },2000)
    },1000)
    
}

leave.addEventListener('click', sairdapage)


// temperutura 

let chave = "7dd0fbad3e1279a247c82d64cfab9e38"

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    setTimeout(() => {
        botResponse("Verificando...", container);

        setTimeout(() =>{
            botResponse("A temperatura em " + cidade + " é " + Math.floor(dados.main.temp) + "°C", container);
        })
    }, 900);
    
}