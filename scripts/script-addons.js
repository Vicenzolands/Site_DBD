// script-addons.js

const personagens = [
  {
    id: 1,
    nome: "Caçador",
    imagem: "/image/killers/Trapper.webp",
    itens: [
      { nome: "Mola ensanguentada", imagem: "../image/addons/molaEnsanguentada.webp", qualidade: "bom" },
      {
        nome: "Pedra Iridescente",
        imagem: "/image/addons/iridescentStone.webp",
        qualidade: "bom",
      },
      { nome: "Armadilha de tensão", imagem: "../image/addons/IconAddon_tensionSpring.webp", qualidade: "mediano" },
      { nome: "Mola oleosa", imagem: "../image/addons/IconAddon_oilyCoil.webp", qualidade: "mediano" },
      { nome: "Pedra de amolar", imagem: "../image/addons/IconAddon_honingStone.webp", qualidade: "bom" },
      { nome: "Saco do caçador", imagem: "../image/addons/IconAddon_trapperSack.webp", qualidade: "bom" },
      { nome: "Ferramenta de fixação", imagem: "../image/addons/IconAddon_fasteningTools.webp", qualidade: "bom" },
      { nome: "Mola secundária", imagem: "../image/addons/IconAddon_secondaryCoil.webp", qualidade: "bom" },
      { nome: "Garrafa de alcatrão", imagem: "../image/addons/IconAddon_tarBottle.webp", qualidade: "ruim" },
      { nome: "Mandibulas enferrujadas", imagem: "../image/addons/IconAddon_rustedJaws.webp", qualidade: "ruim" },
      { nome: "Mochila do caçador", imagem: "../image/addons/IconAddon_trapperBag.webp", qualidade: "bom" },
      { nome: "Tijolo de cera", imagem: "../image/addons/IconAddon_honingStone.webp", qualidade: "ruim" },
      { nome: "Mandibulas serrilhadas", imagem: "../image/addons/IconAddon_serratedJaws.webp", qualidade: "ruim" },
      { nome: "Mandíbulas de alongadas", imagem: "../image/addons/IconAddon_lengthenedJaws.webp", qualidade: "ruim" },
      { nome: "Borras de café", imagem: "../image/addons/IconAddon_coffeeGrounds.webp", qualidade: "mediano" },
      {
        nome: "Kit de 4 molas espirais",
        imagem: "../image/addons/IconAddon_4-coilSpringKit.webp",
        qualidade: "mediano",
      },
      { nome: "Tijolo de cera", imagem: "../image/addons/IconAddon_waxBrick.webp", qualidade: "ruim" },
      { nome: "Luvas de caçador", imagem: "../image/addons/IconAddon_trapperGloves.webp", qualidade: "mediano" },
      { nome: "Mandíbulas acolchoadas", imagem: "../image/addons/IconAddon_paddedJaws.webp", qualidade: "ruim" },
      { nome: "Coberta improvisada", imagem: "../image/addons/IconAddon_makeshiftWrap.webp", qualidade: "bom" },
      { nome: "Óleo de urso", imagem: "../image/addons/IconAddon_bearOil.webp", qualidade: "ruim" },
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
