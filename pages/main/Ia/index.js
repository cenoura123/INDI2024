// Função para fazer a requisição POST com um prompt personalizado
async function generateResponseFromText(text) {

    const url = "http://127.0.0.1:1234/v1/completions";  // Verifique se essa é a URL correta
    // Define o payload usando o texto passado como argumento
    const payload = {
        prompt: text,        // Prompt de entrada
        max_tokens: 100,     // Número máximo de tokens para a resposta
        temperature: 0.7     // Nível de criatividade da resposta
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload) // Converte o payload para JSON
        });

        // Verifica se a resposta foi bem-sucedida
        if (response.ok) {
            const data = await response.json();

            // Tenta acessar o texto com base em diferentes estruturas possíveis
            let modelResponse;
            if (data.text) {
                modelResponse = data.text;
            } else if (data.choices && data.choices.length > 0 && data.choices[0].text) {
                modelResponse = data.choices[0].text;
            } else {
                modelResponse = "Não foi possível encontrar o campo 'text' na resposta.";
            }

            console.log("Resposta do modelo:", data); // Imprime a resposta do modelo
            return modelResponse; // Retorna a resposta
        } else {
            console.log("Erro na requisição:", response.status, response.statusText);
        }
    } catch (error) {
        console.log("Erro ao fazer a requisição:", error);
    }
}

generateResponseFromText("Meu nome é Otavio")