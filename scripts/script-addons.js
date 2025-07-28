// script-addons.js
const personagens = [
  {
    id: 1,
    nome: "Caçador",
    imagem: "../image/killers/Trapper.webp",
    itens: [
      { nome: "Mola ensanguentada", imagem: "../image/addons/Trapper/molaEnsanguentada.webp", qualidade: "bom" },
      {
        nome: "Pedra Iridescente",
        imagem: "../image/addons/Trapper/iridescentStone.webp",
        qualidade: "bom",
      },
      {
        nome: "Armadilha de tensão",
        imagem: "../image/addons/Trapper/IconAddon_tensionSpring.webp",
        qualidade: "mediano",
      },
      { nome: "Mola oleosa", imagem: "../image/addons/Trapper/IconAddon_oilyCoil.webp", qualidade: "mediano" },
      { nome: "Pedra de amolar", imagem: "../image/addons/Trapper/IconAddon_honingStone.webp", qualidade: "bom" },
      { nome: "Saco do caçador", imagem: "../image/addons/Trapper/IconAddon_trapperSack.webp", qualidade: "bom" },
      {
        nome: "Ferramenta de fixação",
        imagem: "../image/addons/Trapper/IconAddon_fasteningTools.webp",
        qualidade: "bom",
      },
      { nome: "Mola secundária", imagem: "../image/addons/Trapper/IconAddon_secondaryCoil.webp", qualidade: "bom" },
      { nome: "Garrafa de alcatrão", imagem: "../image/addons/Trapper/IconAddon_tarBottle.webp", qualidade: "ruim" },
      {
        nome: "Mandibulas enferrujadas",
        imagem: "../image/addons/Trapper/IconAddon_rustedJaws.webp",
        qualidade: "ruim",
      },
      { nome: "Mochila do caçador", imagem: "../image/addons/Trapper/IconAddon_trapperBag.webp", qualidade: "bom" },
      { nome: "Tijolo de cera", imagem: "../image/addons/Trapper/IconAddon_honingStone.webp", qualidade: "ruim" },
      {
        nome: "Mandibulas serrilhadas",
        imagem: "../image/addons/Trapper/IconAddon_serratedJaws.webp",
        qualidade: "ruim",
      },
      {
        nome: "Mandíbulas de alongadas",
        imagem: "../image/addons/Trapper/IconAddon_lengthenedJaws.webp",
        qualidade: "ruim",
      },
      { nome: "Borras de café", imagem: "../image/addons/Trapper/IconAddon_coffeeGrounds.webp", qualidade: "mediano" },
      {
        nome: "Kit de 4 molas espirais",
        imagem: "../image/addons/Trapper/IconAddon_4-coilSpringKit.webp",
        qualidade: "mediano",
      },
      { nome: "Tijolo de cera", imagem: "../image/addons/Trapper/IconAddon_waxBrick.webp", qualidade: "ruim" },
      {
        nome: "Luvas de caçador",
        imagem: "../image/addons/Trapper/IconAddon_trapperGloves.webp",
        qualidade: "mediano",
      },
      {
        nome: "Mandíbulas acolchoadas",
        imagem: "../image/addons/Trapper/IconAddon_paddedJaws.webp",
        qualidade: "ruim",
      },
      { nome: "Coberta improvisada", imagem: "../image/addons/Trapper/IconAddon_makeshiftWrap.webp", qualidade: "bom" },
      { nome: "Óleo de urso", imagem: "../image/addons/Trapper/IconAddon_bearOil.webp", qualidade: "ruim" },
    ],
  },
  {
    id: 2,
    nome: "Espectro",
    imagem: "../image/killers/Wraith.webp",
    itens: [
      { nome: "'Vendo Tudo' - Espírito", imagem: "../image/addons/Wraith/vendoTudoEspirito.webp", qualidade: "bom" },
      {
        nome: "Badalo Obsoleto",
        imagem: "../image/addons/Wraith/badaloObssoleto.webp",
        qualidade: "bom",
      },
      {
        nome: "'Vendo Tudo' - Sangue",
        imagem: "../image/addons/Wraith/vendoTudoSangue.webp",
        qualidade: "bom",
      },
      {
        nome: "'Dança das Sombras' - Sangue",
        imagem: "../image/addons/Wraith/dançaSombrasSangue.webp",
        qualidade: "bom",
      },
      {
        nome: "'Caça Rápida' - Sangue",
        imagem: "../image/addons/Wraith/caçaRapidaSangue.webp",
        qualidade: "bom",
      },
      { nome: "'Vendaval' - Sangue", imagem: "../image/addons/Wraith/vendavalSangue.webp", qualidade: "bom" },
      {
        nome: "'Guerreiro Cego' - Branco",
        imagem: "../image/addons/Wraith/guerreiroCegoBranco.webp",
        qualidade: "mediano",
      },
      { nome: "'Teleporte' - Branco", imagem: "../image/addons/Wraith/teleporteBranco.webp", qualidade: "ruim" },
      {
        nome: "'Dança das Sombras' - Branco",
        imagem: "../image/addons/Wraith/dançaSombrasBranco.webp",
        qualidade: "bom",
      },
      { nome: "'Caça Rápida' - Branco", imagem: "../image/addons/Wraith/caçaRapidaWhite.webp", qualidade: "bom" },
      {
        nome: "'Vendaval' - Branco",
        imagem: "../image/addons/Wraith/vendavalBranco.webp",
        qualidade: "bom",
      },
      {
        nome: "'Guerreiro Cego' - Lama",
        imagem: "../image/addons/Wraith/guerreiroCegoLama.webp",
        qualidade: "ruim",
      },
      { nome: "'Caça Rápida' - Lama", imagem: "../image/addons/Wraith/caçaRapidaLama.webp", qualidade: "bom" },
      {
        nome: "'Vendaval' - Lama",
        imagem: "../image/addons/Wraith/vendavalLama.webp",
        qualidade: "bom",
      },
      { nome: "'Teleporte' - Lama", imagem: "../image/addons/Wraith/teleporteLama.webp", qualidade: "ruim" },
      {
        nome: "Badalo de Ossos",
        imagem: "../image/addons/Wraith/badaloOssos.webp",
        qualidade: "bom",
      },
      {
        nome: "'A Fera' - Fuligem",
        imagem: "../image/addons/Wraith/feraFuligem.webp",
        qualidade: "ruim",
      },
      { nome: "'O Fantasma' - Fuligem", imagem: "../image/addons/Wraith/fantasmaFuligem.webp", qualidade: "mediano" },
      { nome: "'O Cão' - Fuligem", imagem: "../image/addons/Wraith/caoFuligem.webp", qualidade: "ruim" },
      { nome: "'A Serpente' - Fuligem", imagem: "../image/addons/Wraith/serpenteFuligem.webp", qualidade: "ruim" },
    ],
  },
  {
    id: 3,
    nome: "Caipira",
    imagem: "../image/killers/TheHillbilly.webp",
    itens: [
      { nome: "Marcas Iridescentes", imagem: "../image/addons/TheHillbilly/marcasIridescentes.webp", qualidade: "bom" },
      { nome: "Carburador Tunado", imagem: "../image/addons/TheHillbilly/caburadorTunado.webp", qualidade: "mediano" },
      {
        nome: "Pontas Pontiagudas",
        imagem: "../image/addons/TheHillbilly/botasPontiagudas.webp",
        qualidade: "bom",
      },
      {
        nome: "Correntes LoPro",
        imagem: "../image/addons/TheHillbilly/correntesLoPro.webp",
        qualidade: "bom",
      },
      {
        nome: "Pantufas Nojentas",
        imagem: "../image/addons/TheHillbilly/pantufasNojentas.webp",
        qualidade: "mediano",
      },
      {
        nome: "Silenciador de Ponta",
        imagem: "../image/addons/TheHillbilly/silenciadosPonta.webp",
        qualidade: "mediano",
      },
      {
        nome: "Combinação dos Thompsons",
        imagem: "../image/addons/TheHillbilly/combinacaoDosThompsons.webp",
        qualidade: "bom",
      },
      {
        nome: "Motor Rustico",
        imagem: "../image/addons/TheHillbilly/motorRustico.webp",
        qualidade: "mediano",
      },
      {
        nome: "Correntes com Baixo Recuo",
        imagem: "../image/addons/TheHillbilly/correntesComBaixoRecuo.webp",
        qualidade: "ruim",
      },
      {
        nome: "Botas do Papai",
        imagem: "../image/addons/TheHillbilly/botasDoPapai.webp",
        qualidade: "bom",
      },
      { nome: "Correntes Sujas", imagem: "../image/addons/TheHillbilly/correntesSujas.webp", qualidade: "ruim" },
      {
        nome: "Estojo Termico",
        imagem: "../image/addons/TheHillbilly/estojoTermico.webp",
        qualidade: "mediano",
      },
      {
        nome: "Óleo de motor sem marca",
        imagem: "../image/addons/TheHillbilly/oleoDeMotorSemMarca.webp",
        qualidade: "mediano",
      },
      {
        nome: "Parafuso de marcha lenta",
        imagem: "../image/addons/TheHillbilly/parafusoMarchaLenta.webp",
        qualidade: "mediano",
      },
      {
        nome: "Acelerador Lumbrificado",
        imagem: "../image/addons/TheHillbilly/aceleradorLumbrificado.webp",
        qualidade: "bom",
      },
      {
        nome: "Ingestão Obatruida",
        imagem: "../image/addons/TheHillbilly/ingestaoObstruida.webp",
        qualidade: "mediano",
      },
      {
        nome: "Botas com biqueira de aço",
        imagem: "../image/addons/TheHillbilly/botasComBiqueiraAco.webp",
        qualidade: "ruim",
      },
      {
        nome: "Filtro de ar abandonado",
        imagem: "../image/addons/TheHillbilly/filtroDeArAbandonado.webp",
        qualidade: "mediano",
      },
      {
        nome: "Bomba de pressão quebrada",
        imagem: "../image/addons/TheHillbilly/bombaDePressaoQuebrada.webp",
        qualidade: "ruim",
      },
      { nome: "Contra Peso", imagem: "../image/addons/TheHillbilly/contraPeso.webp", qualidade: "ruim" },
    ],
  },
  // Adicione mais personagens aqui conforme necessário
];

// Função para carregar os personagens na página
function carregarPersonagens() {
  const grid = document.getElementById("personagens-grid");

  personagens.forEach((personagem) => {
    const col = document.createElement("div");
    col.className = "col-md-3 col-sm-6";

    col.innerHTML = `
      <div class="personagem-card" data-id="${personagem.id}">
        <img src="${personagem.imagem}" alt="${personagem.nome}" class="personagem-img">
        <div class="personagem-nome">${personagem.nome}</div>
      </div>
    `;

    grid.appendChild(col);
  });

  // Adiciona evento de clique para cada card
  document.querySelectorAll(".personagem-card").forEach((card) => {
    card.addEventListener("click", function () {
      const personagemId = parseInt(this.getAttribute("data-id"));
      abrirModalItens(personagemId);
    });
  });
}

function abrirModalItens(personagemId) {
  const personagem = personagens.find((p) => p.id === personagemId);
  if (!personagem) return;

  document.getElementById("modalPersonagemNome").textContent = `Itens do ${personagem.nome}`;

  const modalItens = document.getElementById("modalItens");
  modalItens.innerHTML = "";

  personagem.itens.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `item-card item-${item.qualidade}`;

    // Determina o texto de qualidade
    let qualidadeTexto;
    switch (item.qualidade) {
      case "bom":
        qualidadeTexto = "Item Bom";
        break;
      case "mediano":
        qualidadeTexto = "Item Mediano";
        break;
      case "ruim":
        qualidadeTexto = "Item Ruim";
        break;
      default:
        qualidadeTexto = "Item";
    }

    itemDiv.innerHTML = `
    <img src="${item.imagem}" alt="${item.nome}" class="item-img">
    <div class="item-info">
      <h6>${item.nome}</h6>
      <small>${qualidadeTexto}</small>
    </div>
  `;

    modalItens.appendChild(itemDiv);
  });

  const modal = new bootstrap.Modal(document.getElementById("itensModal"));
  modal.show();
}

// Carrega os personagens quando a página estiver pronta
document.addEventListener("DOMContentLoaded", carregarPersonagens);
