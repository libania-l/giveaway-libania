document.addEventListener('DOMContentLoaded',function(){
  const sections = [
    {id:'1',title:'1. Organização',content:'O presente passatempo é promovido pela página de Facebook @libania.pt, adiante designada por “Organizadora”.'},
    {id:'2',title:'2. Âmbito e Objetivo',content:'O passatempo decorre exclusivamente na plataforma Facebook e tem como objetivo assinalar o Mês da Mulher, onde se oferece um conjunto no valor comercial de 35€.\n\nEste passatempo não é patrocinado, administrado ou associado ao Facebook.'},
    {id:'3',title:'3. Período de Participação',content:'O passatempo tem início no dia 05 de março e termina às 23h59 do dia 29 de março. Participações efetuadas fora deste período não serão consideradas.'},
    {id:'4',title:'4. Condições de Participação',content:'Para participar validamente, cada participante deve:\n\n• Fazer “Gosto” na página de Facebook @libania.pt\n• Partilhar a publicação oficial do passatempo no seu perfil pessoal de forma pública\n• Identificar 1 amiga nos comentários da publicação oficial\n\nOs participantes podem participar as vezes que desejarem, desde que identifiquem sempre pessoas diferentes em cada comentário.\n\nPerfis falsos, exclusivamente criados para passatempos ou que apresentem atividade suspeita poderão ser excluídos.'},
    {id:'5',title:'5. Elegibilidade',content:'O passatempo destina-se a pessoas singulares, maiores de 18 anos, residentes em Portugal.\nA Organizadora reserva-se o direito de solicitar comprovativo de idade, caso considere necessário.'},
    {id:'6',title:'6. Seleção do Vencedor',content:'O vencedor será escolhido através de sorteio aleatório realizado em direto na página oficial de Facebook, no dia 31 de março, às 17h.\n\nO resultado anunciado durante o direto será considerado definitivo.'},
    {id:'7',title:'7. Prémio',content:'Será atribuído 1 prémio, correspondente a um conjunto no valor comercial de 35€.\nO prémio não é convertível em dinheiro, nem poderá ser trocado por outro artigo.'},
    {id:'8',title:'8. Divulgação do Vencedor',content:'O nome do vencedor será divulgado durante o direto do dia 31 de março pelas 17h e poderá posteriormente ser mencionado numa publicação na página.\nO vencedor deverá enviar mensagem privada para a página no prazo máximo de 72 horas após o anúncio, para efeitos de validação e envio do prémio.\n\nCaso não exista resposta dentro do prazo indicado, será realizado novo sorteio.'},
    {id:'9',title:'9. Entrega do Prémio',content:'O prémio será enviado por correio para a morada indicada pelo vencedor.\nA Organizadora não se responsabiliza por atrasos, extravios ou danos causados pelos serviços de transporte.'},
    {id:'10',title:'10. Direitos de Imagem e Conteúdo',content:'Ao participar, os participantes autorizam a utilização do seu nome de perfil para efeitos de divulgação do resultado do passatempo.'},
    {id:'11',title:'11. Proteção de Dados',content:'Os dados pessoais recolhidos serão utilizados exclusivamente para efeitos de gestão do passatempo e envio do prémio, não sendo utilizados para outros fins sem consentimento prévio.'},
    {id:'12',title:'12. Disposições Finais',content:'A Organizadora reserva-se o direito de alterar, suspender ou cancelar o passatempo em caso de força maior ou sempre que ocorram circunstâncias que comprometam o seu normal funcionamento.\n\nA participação no passatempo implica a aceitação integral do presente regulamento.'}
  ];

  const openBtn = document.getElementById('open-regulamento');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const menu = document.getElementById('modal-menu');
  const content = document.getElementById('modal-content');

  function showModal(){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    // build menu
    menu.innerHTML = '';
    sections.forEach((s,idx)=>{
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = s.title;
      if(idx===0) btn.classList.add('active');
      btn.addEventListener('click', ()=>{
        Array.from(menu.children).forEach(c=>c.classList.remove('active'));
        btn.classList.add('active');
        renderSection(s);
      });
      menu.appendChild(btn);
    });
    renderSection(sections[0]);
  }

  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  }

  function renderSection(s){
    // simple newline -> paragraph conversion
    const html = s.content.split('\n\n').map(p=>'<p>'+p.replace(/\n/g,'<br>')+'</p>').join('');
    content.innerHTML = '<h3>'+s.title+'</h3>'+html;
  }

  openBtn.addEventListener('click', showModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });
});
