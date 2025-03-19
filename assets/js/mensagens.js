// Script para exibir mensagens no textarea

const messages = {
  "suporte a equipamentos": `Prezado,

Obrigado por entrar em contato.

Sua solicitação não pôde ser atendida. Para essa demanda, pedimos que abra um incidente utilizando o caminho correto no link abaixo:

🔗 https://yduqs.service-now.com/esc?id=sc_cat_item&sys_id=76dcc6fc1bfbd5d0362e2f80f54bcb22

Em FILTRO DE CATEGORIA, selecione "APOIO LOCAL"
Em SERVIÇO, escolha "DESKTOPS / NOTEBOOKS"
Agradecemos sua compreensão.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "tarefas ou incidentes": `Prezados,

Por favor, verifiquem o equipamento da colaborador. Após análise, não identificamos nenhum problema em sua conta (conforme anexo).

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "cancelamento adp": `Prezado Cliente,

Sua solicitação não foi atendida, se faz necessário a abertura de uma requisição no caminho correto:

CSC > Gente

🔗 Link para acesso: https://yduqs.service-now.com/esc?id=emp_taxonomy_topic&topic_id=6aceb9c61bd91210d7bedc60fa4bcb34

Marque a opção desejada para atendimento.

Atenciosamente,
Equipe de Segurança da Informação - Diretoria de Tecnologia`,

  "desbloqueio desligado": `Prezado(a),

Para dar prosseguimento à sua solicitação, é necessário seguir o fluxo abaixo. Por favor, envie:

Um e-mail para Controle Interno (grci@yduqs.com.br)
Um e-mail para Compliance (compliance@yduqs.com.br)
Ambos e-mails devem solicitar a aprovação das áreas e incluir as seguintes informações:

1. Nome do colaborador desligado:
2. Matrícula:
3. E-mail:
4. Tipo de acesso a ser liberado: (SharePoint, e-mail ou OneDrive)
5. Palavra-chave para busca: (ex.: docente, Projeto X)
6. Período de pesquisa: (de/até)
7. Motivo:
8. Gestor que receberá o acesso:
9. Tempo de acesso para o gestor:

Atenção: O chamado só poderá ser aberto após anexar os e-mails com as autorizações dos setores responsáveis.

O caminho no sistema é:
Tecnologia > Apoio local > Apoio administrativo / acadêmico > Serviços de e-mail > Acesso temporário à conta de colaborador desligado

Foi um prazer atendê-lo(a)!

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "acesso-sia": `Prezado Cliente,

Sua solicitação não pôde ser atendida, pois é necessário abrir uma requisição pelo caminho correto. Para isso, acesse o link abaixo e siga as instruções:

🔗 https://yduqs.service-now.com/esc?id=sc_cat_item_guide&sys_id=73f33e501b16f1d0ff94404be54bcb57

Caminho: Tecnologia > Acessos e Segurança > Acessos a Sistemas
Selecione a opção SIA Administrativo

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "cancelamento a pedido do solicitante": `Prezado(a),

Agradecemos seu contato.

Recebemos sua solicitação de cancelamento e estamos finalizando o atendimento conforme solicitado.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  andamento: `Prezado(a),

Agradecemos por entrar em contato conosco.

Informamos que sua solicitação foi recebida e está sendo analisada. O atendimento será priorizado com base na ordem de abertura e na criticidade do caso. 
Contudo, reforçamos nosso compromisso em atendê-lo no menor tempo possível.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "chamado finalizado": `Prezado(a),

Agradecemos o seu contato.

Informamos que sua solicitação foi devidamente atendida. Pedimos que aguarde um prazo de até 1 hora para que as atualizações sejam replicadas nos servidores.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  transferencia: `Prezado,

Agradecemos o contato. Informamos que esta solicitação não se enquadra no escopo de atendimento do Controle de Acessos. Pedimos, por gentileza, que prossiga com o direcionamento adequado para o atendimento da demanda.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "licença aplicada": `Prezado(a),

Agradecemos o seu contato!

Informamos que a sua solicitação foi atendida e a licença foi aplicada com sucesso. Pedimos que aguarde até 1 hora para que a atualização seja replicada nos servidores. Após esse período, por gentileza, procure a equipe de Suporte Local (FIELD) para ativar o Office em seu equipamento.

Estamos à disposição e foi um prazer atendê-lo(a)!

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "reset-sia": `Prezado,

Agradecemos por entrar em contato.

O ajuste foi realizado, e o e-mail   (E-MAIL DO COLABORADOR)   foi cadastrado para o recebimento do token.

Após a atualização, siga os passos abaixo para redefinir sua senha:

01- Acesse o SIA.
02- Insira sua MATRÍCULA em caso de funcionário ou CPF em caso de terceiro e clique em "Enviar".
03- Na tela seguinte, clique em "Esqueci a senha" e preencha os dados solicitados.
04- No Outlook, pesquise pelo assunto "dados para acesso" para localizar o e-mail com o código enviado pelo SIA.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "desbloqueio-revisão": `Prezado(a),

Informamos que seu usuário foi bloqueado no sistema e todos os perfis associados foram removidos devido à pendência de revisão de acessos no período vigente, que deveria ter sido realizada pelo seu gestor imediato.

Dessa forma, o chamado atual será cancelado. Para regularizar sua situação, solicitamos que siga os passos abaixo:

1- Envie um e-mail ao seu gestor informando os perfis necessários para o acesso.
2- Anexe esse e-mail a uma nova requisição no sistema.

Orientações para abertura de nova requisição:

1- Acesse o caminho:
ServiceNow > Tecnologia > Acessos e Segurança > Bloqueios e Liberações > Bloqueio e Desbloqueio de Usuários
2- No tipo de solicitação, selecione a opção "Desbloqueio".
3- No motivo do desbloqueio, escolha "Revisão de Acessos".

Caso tenha dúvidas ou precise de suporte, nossa equipe está à disposição.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "configuração vpn": `Prezado(a),

Agradecemos pelo seu contato.

Informamos que não foi possível atender à sua solicitação, pois o acesso à VPN é liberado automaticamente após a criação da conta.
Recomendamos aguardar a conclusão do processo de criação da conta da colaboradora para que o acesso seja disponibilizado.

Estamos à disposição para quaisquer esclarecimentos.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "cancelamento de mfa": `Prezado(a),

Agradecemos por entrar em contato conosco.

Informamos que sua solicitação não pôde ser atendida. Este sistema foi projetado para proteger os eventos de entrada dos usuários contra ataques e acessos indevidos. Sua principal função é elevar o nível de segurança em acessos às plataformas e, por esse motivo, não pode ser desativado.

Estamos à disposição para esclarecer quaisquer dúvidas ou fornecer suporte

Atenciosamente,
Gerência de Segurança da Informação
Diretoria de Tecnologia`,

  "mfa sms aplicativo": `Prezado(a),

Agradecemos por entrar em contato.

Informamos que sua solicitação não pôde ser atendida, pois a Microsoft desativou a funcionalidade de envio de códigos de acesso por e-mail. Em

Estamos à disposição para quaisquer dúvidas ou suporte adicional.

Atenciosamente,
Gerência de Segurança da Informação
Diretoria de Tecnologia`,

  "cancelamento mfa": `Prezado,

A sua solicitação não poderá ser atendida por este canal. Ficaremos felizes em atendê-la através de uma requisição, no caminho:

🔗 https://yduqs.service-now.com/esc?id=sc_cat_item_guide&sys_id=73f33e501b16f1d0ff94404be54bcb57

Preencha o formulário e selecione a opção de sistema: Login de Rede/Serviços de E-mail
Na categoria "Selecione o tipo de serviço desejado" selecione a opção: Cadastro de Dados no MFA.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "cancelamento reset de senha": `Prezado Cliente,

A sua solicitação não poderá ser atendida por este canal.
Ficaremos felizes em atendê-la através de uma requisição, no caminho: 

🔗 https://yduqs.service-now.com/esc?id=sc_cat_item&sys_id=246e881a1ba94a50ff94404be54bcb66
(SERVICE NOW> TECNOLOGIA> ACESSOS E SEGURANÇA > BLOQUEIOS E LIBERAÇÕES > RESET DE SENHA)

Nesta fila, poderemos lhe prover os acessos necessários para acessar sua conta.
Quando abrir essa requisição, não esqueça de selecionar o sistema para o qual deseja atendimento ao preencher a solicitação.

Atenciosamente,
Equipe de Segurança da Informação - Diretoria de Tecnologia`,

  "cancelamento bloqueio/desbloqueio de usuários": `Prezado Cliente,

Agradecemos o seu contato! 
Informamos que, para que sua solicitação seja atendida corretamente, é necessário abrir uma nova requisição seguindo o caminho abaixo:

Tecnologia > Acessos e Segurança > Bloqueios e Liberações > Bloqueio/Desbloqueio de Usuários

Não se esqueça de selecionar o sistema para o qual deseja atendimento ao preencher a solicitação.

Estamos à disposição para qualquer dúvida e prontos para ajudar no que for necessário.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "cancelamento bloqueio/desbloqueio de usuários - licença": `Prezado Colaborador,

As solicitações de bloqueio e desbloqueio de acesso para colaboradores que retornam de afastamentos médicos ou licença-maternidade são enviadas diretamente pela Medicina do Trabalho.

Para solicitar o desbloqueio, pedimos que entre em contato diretamente com a equipe pelo e-mail medicina.trabalho@yduqs.com.br.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "vpn liberada": `Prezado(a),

Conforme sua solicitação, o acesso à VPN foi liberado. Para utilizá-la, basta inserir o mesmo login e senha da rede/e-mail.

Caso necessite de suporte para a instalação, entre em contato com a equipe de de Suporte Local (FIELD) e solicite a instalação da VPN.

Estamos à disposição para auxiliar no que for necessário.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "atualização de cargo": `Prezado,

Agradecemos por entrar em contato.

Informamos que sua solicitação foi atendida. Apenas reforçamos que as atualizações não ocorrem de imediato:

No e-mail, a atualização pode levar de 40 minutos a 1 hora;
Na lista de endereços, o prazo varia entre 3 a 7 dias;
No Teams, a atualização é concluída em até 7 dias.
Caso necessite de mais informações, estamos à disposição.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "licença não aplicada": `Prezado(a),

Agradecemos seu contato.

Informamos que sua solicitação não pôde ser atendida. Conforme as novas regras de licenciamento da Microsoft, colaboradores das unidades, polos e todos os terceiros não possuem mais acesso a licenças para ativação do Pacote Office local.
Para atender às suas necessidades, recomendamos o uso do Microsoft 365 na Web, que oferece todas as funcionalidades necessárias para criação e edição de documentos.

Para mais informações, consulte o Manual de Utilização do Office Online (Web) (anexo) ou entre em contato com a equipe de Suporte de TI da sua unidade.

Estamos à disposição para auxiliá-lo(a) no que for necessário.

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "acesso-colaborador": `Prezado(a),

Sua conta no Salesforce já está ativa.

Para acessar, utilize o seguinte link: https://yduqs2020.my.salesforce.com/
Na tela inicial, clique na opção "Faça login com e-mail corporativo".

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,

  "acesso-polo": `Prezado(a),

Sua conta no Salesforce já está ativa.

Para acessar, utilize o seguinte link: https://yduqs2020.my.site.com/PolosSite/s/login/?ec=302&startURL=%2FPolosSite%2Fs%2F
Na tela inicial, clique na opção "Faça login com e-mail corporativo".

Atenciosamente,
Equipe de Segurança da Informação
Diretoria de Tecnologia`,
};

// Referências aos elementos HTML
const selectBox = document.getElementById("messageSelector");
const textarea = document.getElementById("messageTextarea");
const copyButton = document.getElementById("copyButton");
const copyFeedback = document.getElementById("copyFeedback");

// Função para ajustar a altura do textarea dinamicamente
function ajustarAlturaTextarea(textarea) {
  textarea.style.height = "auto"; // Redefine a altura para calcular o tamanho correto
  textarea.style.height = textarea.scrollHeight + "px"; // Define a altura com base no conteúdo
}

// Evento para atualizar a mensagem no textarea e ajustar a altura
selectBox.addEventListener("change", function () {
  const selectedValue = selectBox.value;
  if (messages[selectedValue]) {
    textarea.value = messages[selectedValue]; // Atualiza o textarea com a mensagem correspondente
    ajustarAlturaTextarea(textarea); // Ajusta a altura dinamicamente
    copyFeedback.style.display = "none"; // Esconde feedback ao alterar a mensagem
  } else {
    textarea.value = ""; // Limpa o textarea se nenhum valor válido for selecionado
    ajustarAlturaTextarea(textarea); // Ajusta a altura para ficar mínima
  }
});

// Evento para copiar a mensagem ao clicar no botão
copyButton.addEventListener("click", function () {
  // Verifica se há mensagem para copiar
  if (textarea.value.trim() !== "") {
    textarea.select(); // Seleciona o texto no textarea
    document.execCommand("copy"); // Copia o texto para a área de transferência
    // Exibe feedback de sucesso
    //alert("Mensagem copiada com sucesso!");
    copyFeedback.style.display = "block";
    setTimeout(() => {
      copyFeedback.style.display = "none"; // Esconde feedback após 3 segundos
    }, 3000);
  } else {
    alert("Nenhuma mensagem disponível para copiar!"); // Alerta caso o textarea esteja vazio
  }
});
