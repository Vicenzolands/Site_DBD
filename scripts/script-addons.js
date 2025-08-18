// script-addons.js
const personagens = [
  //Trapper
  {
    id: 1,
    nome: "Caçador",
    imagem: "../image/killers/Trapper.webp",
    itens: [
      { nome: "Mola ensanguentada", imagem: "../image/addons/Trapper/molaEnsanguentada.webp", qualidade: "bom" },
      {
        nome: "Pedra Iridescente",
        imagem: "../image/addons/Trapper/iridescentStone.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Armadilha de tensão",
        imagem: "../image/addons/Trapper/IconAddon_tensionSpring.webp",
        qualidade: "mediano",
      },
      { nome: "Mola oleosa", imagem: "../image/addons/Trapper/IconAddon_oilyCoil.webp", qualidade: "mediano" },
      { nome: "Pedra de amolar", imagem: "../image/addons/Trapper/IconAddon_honingStone.webp", qualidade: "muito-bom" },
      { nome: "Saco do caçador", imagem: "../image/addons/Trapper/IconAddon_trapperSack.webp", qualidade: "muito-bom" },
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
  //Wraith
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
        qualidade: "muito-bom",
      },
      { nome: "'Vendaval' - Sangue", imagem: "../image/addons/Wraith/vendavalSangue.webp", qualidade: "muito-bom" },
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
      { nome: "'Caça Rápida' - Branco", imagem: "../image/addons/Wraith/caçaRapidaWhite.webp", qualidade: "muito-bom" },
      {
        nome: "'Vendaval' - Branco",
        imagem: "../image/addons/Wraith/vendavalBranco.webp",
        qualidade: "muito-bom",
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
  //HillBilly
  {
    id: 3,
    nome: "Caipira",
    imagem: "../image/killers/TheHillbilly.webp",
    itens: [
      {
        nome: "Marcas Iridescentes",
        imagem: "../image/addons/TheHillbilly/marcasIridescentes.webp",
        qualidade: "muito-bom",
      },
      { nome: "Carburador Tunado", imagem: "../image/addons/TheHillbilly/caburadorTunado.webp", qualidade: "mediano" },
      {
        nome: "Botas Pontiagudas",
        imagem: "../image/addons/TheHillbilly/botasPontiagudas.webp",
        qualidade: "muito-bom",
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
  //Nurse
  {
    id: 4,
    nome: "Enfermeira",
    imagem: "../image/killers/nurse.webp",
    itens: [
      {
        nome: "Marcador de Página Rasgado",
        imagem: "../image/addons/Nurse/marcadoPaginaRasgado.webp",
        qualidade: "muito-bom",
      },
      { nome: "Caixa de Fósforos", imagem: "../image/addons/Nurse/caixaFosforos.webp", qualidade: "ruim" },
      {
        nome: "Último suspiro do 'Homem mau'",
        imagem: "../image/addons/Nurse/ultimoSuspiroHomemMau.webp",
        qualidade: "bom",
      },
      {
        nome: "Último suspiro de Kavavagh",
        imagem: "../image/addons/Nurse/ultimoSuspiroKavanagh.webp",
        qualidade: "mediano",
      },
      {
        nome: "Último suspiro de Jenner",
        imagem: "../image/addons/Nurse/ultimoSuspiroJenner.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Último Sopro de Campbell",
        imagem: "../image/addons/Nurse/ultimoSuspiroCampbell.webp",
        qualidade: "bom",
      },
      {
        nome: "Suspiro Ansioso",
        imagem: "../image/addons/Nurse/suspiroAnsioso.webp",
        qualidade: "ruim",
      },
      {
        nome: "Respiração Ofegante",
        imagem: "../image/addons/Nurse/respiracaoOfegante.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Respiração Espasmódica",
        imagem: "../image/addons/Nurse/respiracaoEspasmodica.webp",
        qualidade: "ruim",
      },
      {
        nome: "Respiração Atáxica",
        imagem: "../image/addons/Nurse/respiracaoAtaxica.webp",
        qualidade: "mediano",
      },
      { nome: "Arfada Frágil", imagem: "../image/addons/Nurse/arfadaFragil.webp", qualidade: "muito-bom" },
      {
        nome: "Tesouro do Garoto Catatônico",
        imagem: "../image/addons/Nurse/tesouroGarotoCatatonico.webp",
        qualidade: "bom",
      },
      {
        nome: "Relógio de Bolso",
        imagem: "../image/addons/Nurse/relogioBolso.webp",
        qualidade: "ruim",
      },
      {
        nome: "Lembrança do Homem Mau",
        imagem: "../image/addons/Nurse/lembrancaHomemMau.webp",
        qualidade: "mediano",
      },
      {
        nome: "Cinto Escuro",
        imagem: "../image/addons/Nurse/cintoEscuro.webp",
        qualidade: "mediano",
      },
      {
        nome: "Bracelete sem Brilho",
        imagem: "../image/addons/Nurse/braceleteSemBrilho.webp",
        qualidade: "ruim",
      },
      {
        nome: "Pente Fino Branco",
        imagem: "../image/addons/Nurse/penteFinoBranco.webp",
        qualidade: "ruim",
      },
      {
        nome: "Flanela Xadrez",
        imagem: "../image/addons/Nurse/flanelaXadres.webp",
        qualidade: "ruim",
      },
      {
        nome: "Colher de Metal",
        imagem: "../image/addons/Nurse/colherMetal.webp",
        qualidade: "mediano",
      },
      { nome: "Cavalo de Madeira", imagem: "../image/addons/Nurse/cavaloMadeira.webp", qualidade: "mediano" },
    ],
  },
  //Myers
  {
    id: 5,
    nome: "Vulto",
    imagem: "../image/killers/Myers.webp",
    itens: [
      {
        nome: "Tufo de Cabelo Perfumado",
        imagem: "../image/addons/Myers/tufoCbeloPerfumado.webp",
        qualidade: "bom",
      },
      { nome: "Lápide de Judith", imagem: "../image/addons/Myers/lapideJudith.webp", qualidade: "mediano" },
      {
        nome: "Mecha de Cabelo",
        imagem: "../image/addons/Myers/mechaCabelo.webp",
        qualidade: "bom",
      },
      {
        nome: "Espelho Arranhado",
        imagem: "../image/addons/Myers/espelhoArranhado.webp",
        qualidade: "ruim",
      },
      {
        nome: "Pedaço de Lápide",
        imagem: "../image/addons/Myers/pedacoLapide.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Espelho de Maquiagem",
        imagem: "../image/addons/Myers/espelhoMaquiagem.webp",
        qualidade: "mediano",
      },
      {
        nome: "Laço de Cabelo",
        imagem: "../image/addons/Myers/lacoCabelo.webp",
        qualidade: "bom",
      },
      {
        nome: "Memorial de J. Myers",
        imagem: "../image/addons/Myers/memorialMyers.webp",
        qualidade: "bom",
      },
      {
        nome: "Caixa de Bijuterias",
        imagem: "../image/addons/Myers/caixaBijuterias.webp",
        qualidade: "ruim",
      },
      {
        nome: "Diário da Judith",
        imagem: "../image/addons/Myers/diaioJudith.webp",
        qualidade: "mediano",
      },
      { nome: "Caco de Espelho", imagem: "../image/addons/Myers/cacoEspelho.webp", qualidade: "mediano" },
      {
        nome: "Coelho Morto",
        imagem: "../image/addons/Myers/coelhoMorto.webp",
        qualidade: "bom",
      },
      {
        nome: "Fragmento de Vidro",
        imagem: "../image/addons/Myers/fragmentoVidro.webp",
        qualidade: "ruim",
      },
      {
        nome: "Escova de Cabelo",
        imagem: "../image/addons/Myers/escovaCabelo.webp",
        qualidade: "ruim",
      },
      {
        nome: "Bijuteria",
        imagem: "../image/addons/Myers/bijuterias.webp",
        qualidade: "ruim",
      },
      {
        nome: "Fragmento Refletivo",
        imagem: "../image/addons/Myers/fragmentoRefletivo.webp",
        qualidade: "mediano",
      },
      {
        nome: "Flor Memorial",
        imagem: "../image/addons/Myers/florMemorial.webp",
        qualidade: "bom",
      },
      {
        nome: "Fio Loiro",
        imagem: "../image/addons/Myers/fioLoiro.webp",
        qualidade: "ruim",
      },
      {
        nome: "Bilhete do Namorado",
        imagem: "../image/addons/Myers/bilheteNamorado.webp",
        qualidade: "ruim",
      },
      { nome: "Brincos Cafonas", imagem: "../image/addons/Myers/brincosCafonas.webp", qualidade: "ruim" },
    ],
  },
  //Hag
  {
    id: 6,
    nome: "Bruxa",
    imagem: "../image/killers/hag.webp",
    itens: [
      {
        nome: "Trapo Cor de Hortelã",
        imagem: "../image/addons/Hag/trapoCorHortela.webp",
        qualidade: "muito-bom",
      },
      { nome: "Sapato Encharcado", imagem: "../image/addons/Hag/sapatoEncharcado.webp", qualidade: "ruim" },
      {
        nome: "Orelha Desfigurada",
        imagem: "../image/addons/Hag/orelhaDesfigurada.webp",
        qualidade: "ruim",
      },
      {
        nome: "Coração da Avó",
        imagem: "../image/addons/Hag/coracaoAvo.webp",
        qualidade: "ruim",
      },
      {
        nome: "Algemas Enferrujadas",
        imagem: "../image/addons/Hag/algemasEnferrujadas.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Mão Cicatrizada",
        imagem: "../image/addons/Hag/maoCicatrizada.webp",
        qualidade: "ruim",
      },
      {
        nome: "Lama Ensanguentada",
        imagem: "../image/addons/Hag/lamaEnsanguentada.webp",
        qualidade: "ruim",
      },
      {
        nome: "Ovo de Tartaruga Quebrado",
        imagem: "../image/addons/Hag/ovoTartarugaQuebrado.webp",
        qualidade: "mediano",
      },
      {
        nome: "Cigarra Seca",
        imagem: "../image/addons/Hag/cigarraSeva.webp",
        qualidade: "bom",
      },
      {
        nome: "Colar de Orquídeas do Pântano",
        imagem: "../image/addons/Hag/colarOrquideasPantano.webp",
        qualidade: "bom",
      },
      { nome: "Grinalda de Salgueiro", imagem: "../image/addons/Hag/grinaldaSalgueiro.webp", qualidade: "muito-bom" },
      {
        nome: "Água Ensanguentada",
        imagem: "../image/addons/Hag/aguaEnsanguentada.webp",
        qualidade: "ruim",
      },
      {
        nome: "Colar de Cipreste",
        imagem: "../image/addons/Hag/colarCipreste.webp",
        qualidade: "bom",
      },
      {
        nome: "Asas de Libélula",
        imagem: "../image/addons/Hag/asasLibelula.webp",
        qualidade: "bom",
      },
      {
        nome: "Casca de Ovo Pela Metade",
        imagem: "../image/addons/Hag/cascaOvoMetade.webp",
        qualidade: "mediano",
      },
      {
        nome: "Salix Caprea",
        imagem: "../image/addons/Hag/salixCaprea.webp",
        qualidade: "bom",
      },
      {
        nome: "Água do Pântano",
        imagem: "../image/addons/Hag/aguaPantano.webp",
        qualidade: "ruim",
      },
      {
        nome: "Mosca Morta",
        imagem: "../image/addons/Hag/moscaMorta.webp",
        qualidade: "bom",
      },
      {
        nome: "Casca de Ovo Cintilante",
        imagem: "../image/addons/Hag/cascaOvoCintilante.webp",
        qualidade: "mediano",
      },
      { nome: "Colar de Corda", imagem: "../image/addons/Hag/colarCorda.webp", qualidade: "mediano" },
    ],
  },
  //Doctor
  {
    id: 7,
    nome: "Doutor",
    imagem: "../image/killers/Doctor.webp",
    itens: [
      {
        nome: "Rainha Iridescente",
        imagem: "../image/addons/Doctor/rainha-iridecente.htm",
        qualidade: "muito-bom",
      },
      { nome: "Rei Iridescente", imagem: "../image/addons/Doctor/rei-iridescente.htm", qualidade: "bom" },
      {
        nome: "'Restrições' - Anotações de Carter",
        imagem: "../image/addons/Doctor/restricoes.htm",
        qualidade: "bom",
      },
      {
        nome: "'Ordem' - Anotações de Carter",
        imagem: "../image/addons/Doctor/ordem.htm",
        qualidade: "ruim",
      },
      {
        nome: "'Disciplina' - Anotações de Carter",
        imagem: "../image/addons/Doctor/disciplina.htm",
        qualidade: "muito-bom",
      },
      {
        nome: "'Calma' - Anotações de Carter",
        imagem: "../image/addons/Doctor/calma.htm",
        qualidade: "mediano",
      },
      {
        nome: "Fita estragada",
        imagem: "../image/addons/Doctor/fita-estragada.htm",
        qualidade: "ruim",
      },
      {
        nome: "Fita de entrevista",
        imagem: "../image/addons/Doctor/fita-entrevista.htm",
        qualidade: "mediano",
      },
      {
        nome: "Eletrodo de estimulo elevado",
        imagem: "../image/addons/Doctor/eletrodo-estimulo-elevado.htm",
        qualidade: "muito-bom",
      },
      {
        nome: "'Restrições' - Classe 3",
        imagem: "../image/addons/Doctor/restricoes-classe3.htm",
        qualidade: "bom",
      },
      {
        nome: "'Disciplina' - Classe 3",
        imagem: "../image/addons/Doctor/disciplina-classe3.htm",
        qualidade: "muito-bom",
      },
      {
        nome: "Eletrodo Polido",
        imagem: "../image/addons/Doctor/eletrodo-polido.htm",
        qualidade: "bom",
      },
      {
        nome: "'Restrições' - Classe 2",
        imagem: "../image/addons/Doctor/restrecoes-classe2.htm",
        qualidade: "mediano",
      },
      {
        nome: "'Ordem' - Classe 2",
        imagem: "../image/addons/Doctor/ordem-classe2.htm",
        qualidade: "ruim",
      },
      {
        nome: "'Disciplina' - Classe 2",
        imagem: "../image/addons/Doctor/disciplina-classe2.htm",
        qualidade: "bom",
      },
      {
        nome: "'Calma' - Classe 2",
        imagem: "../image/addons/Doctor/calma-classe2.htm",
        qualidade: "mediano",
      },
      {
        nome: "Eletrodo Mofado",
        imagem: "../image/addons/Doctor/eletrodo-mofado.htm",
        qualidade: "mediano",
      },
      {
        nome: "Cavaleiro de Bordo",
        imagem: "../image/addons/Doctor/cavaleiro-bordo.htm",
        qualidade: "ruim",
      },
      {
        nome: "'Ordem' - Classe 1",
        imagem: "../image/addons/Doctor/ordem-classe1.htm",
        qualidade: "ruim",
      },
      { nome: "'Calma' - Classe 1", imagem: "../image/addons/Doctor/calma-classe1.htm", qualidade: "mediano" },
    ],
  },
  //Cannibal
  {
    id: 8,
    nome: "Canibal",
    imagem: "../image/killers/bubba.webp",
    itens: [
      {
        nome: "Carne Iridescente",
        imagem: "../image/addons/Bubba/carne-iridescente.webp",
        qualidade: "bom",
      },
      {
        nome: "Guia de aprimoramento de carburador",
        imagem: "../image/addons/Bubba/guia-aprimoramento-carburador.webp",
        qualidade: "ruim",
      },
      {
        nome: "Corrente enferrujada",
        imagem: "../image/addons/Bubba/corrente-enferrujada.webp",
        qualidade: "mediano",
      },
      {
        nome: "Chassi Leve",
        imagem: "../image/addons/Bubba/chassi-leve.webp",
        qualidade: "bom",
      },
      {
        nome: "Ancinho de Profundidade",
        imagem: "../image/addons/Bubba/ancinho-profundidade.webp",
        qualidade: "bom",
      },
      {
        nome: "Chili Premiado",
        imagem: "../image/addons/Bubba/chili-premiado.webp",
        qualidade: "mediano",
      },
      {
        nome: "Graxa",
        imagem: "../image/addons/Bubba/graxa.webp",
        qualidade: "ruim",
      },
      {
        nome: "Marcas de Besta",
        imagem: "../image/addons/Bubba/marcas-besta.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Lumbrificante",
        imagem: "../image/addons/Bubba/lumbrificante.webp",
        qualidade: "ruim",
      },
      {
        nome: "Corrente Terrivel",
        imagem: "../image/addons/Bubba/corrente-terrivel.webp",
        qualidade: "mediano",
      },
      {
        nome: "Corrente Suja",
        imagem: "../image/addons/Bubba/correntes-sujas.webp",
        qualidade: "mediano",
      },
      {
        nome: "Bomba de pressão",
        imagem: "../image/addons/Bubba/bomba-pressão.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Barra de guia longa",
        imagem: "../image/addons/Bubba/barra-guia-longa.webp",
        qualidade: "ruim",
      },
      {
        nome: "Marcas de faca",
        imagem: "../image/addons/Bubba/marcas-faca.webp",
        qualidade: "bom",
      },
      {
        nome: "Silenciador caseiro",
        imagem: "../image/addons/Bubba/silenciador-caseiro.webp",
        qualidade: "ruim",
      },
      {
        nome: "Chili",
        imagem: "../image/addons/Bubba/chili.webp",
        qualidade: "mediano",
      },
      {
        nome: "Óleo Vegetal",
        imagem: "../image/addons/Bubba/oleo-vegetal.webp",
        qualidade: "mediano",
      },
      {
        nome: "Limitador de Velocidade",
        imagem: "../image/addons/Bubba/limitador-velocidade.webp",
        qualidade: "ruim",
      },
      {
        nome: "Vela de Ignição",
        imagem: "../image/addons/Bubba/vela-ignicao.webp",
        qualidade: "bom",
      },
      { nome: "Lixa de Motoserra", imagem: "../image/addons/Bubba/lixa-motoserra.webp", qualidade: "ruim" },
    ],
  },
  //Huntress
  {
    id: 9,
    nome: "Caçadora",
    imagem: "../image/killers/huntress.webp",
    itens: [
      {
        nome: "Grevas de soldado",
        imagem: "../image/addons/Huntress/grevas-soldado.webp",
        qualidade: "ruim",
      },
      {
        nome: "Lamina Iridescente",
        imagem: "../image/addons/Huntress/lamina-iridescente.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Raposa de Madeira",
        imagem: "../image/addons/Huntress/raposa-madeira.webp",
        qualidade: "bom",
      },
      {
        nome: "Cinto de Infantaria",
        imagem: "../image/addons/Huntress/cinto-infantaria.webp",
        qualidade: "ruim",
      },
      {
        nome: "Mistura Brilhante",
        imagem: "../image/addons/Huntress/mistura-brilhante.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Lamina Contaminada",
        imagem: "../image/addons/Huntress/lamina-contaminada.webp",
        qualidade: "mediano",
      },
      {
        nome: "Mistura Venenosa",
        imagem: "../image/addons/Huntress/mistura-venenosa.webp",
        qualidade: "bom",
      },
      {
        nome: "Lamina Enferrujada",
        imagem: "../image/addons/Huntress/lamina-enferujada.webp",
        qualidade: "mediano",
      },
      {
        nome: "Raiz de Rosa",
        imagem: "../image/addons/Huntress/raiz-rosa.webp",
        qualidade: "bom",
      },
      {
        nome: "Lenço de Flores",
        imagem: "../image/addons/Huntress/lenço-flores.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Luvas de Carmuça",
        imagem: "../image/addons/Huntress/luvas-carmuça.webp",
        qualidade: "ruim",
      },
      {
        nome: "Lamina Pesada",
        imagem: "../image/addons/Huntress/lamina-pesada.webp",
        qualidade: "ruim",
      },
      {
        nome: "Ferradura Brilhante",
        imagem: "../image/addons/Huntress/ferradura-brilhante.webp",
        qualidade: "bom",
      },
      {
        nome: "Cabo de Carvalho",
        imagem: "../image/addons/Huntress/cabo-carvalho.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Trança de grama da Maná",
        imagem: "../image/addons/Huntress/trança-grama-maná.webp",
        qualidade: "bom",
      },
      {
        nome: "Laço de Couro",
        imagem: "../image/addons/Huntress/laço-couro.webp",
        qualidade: "ruim",
      },
      {
        nome: "Lenço Amarelado",
        imagem: "../image/addons/Huntress/pano-amarelado.webp",
        qualidade: "ruim",
      },
      {
        nome: "Pedra de amolar",
        imagem: "../image/addons/Huntress/pedra-aspera.webp",
        qualidade: "mediano",
      },
      {
        nome: "Cabo Enfaixado",
        imagem: "../image/addons/Huntress/cabo-enfaixado.webp",
        qualidade: "bom",
      },
      { nome: "Toxina de Amanita", imagem: "../image/addons/Huntress/toxina-amanita.webp", qualidade: "mediano" },
    ],
  },
  //Freddy Krueger
  {
    id: 10,
    nome: "Pesadelo",
    imagem: "../image/killers/Freddy.webp",
    itens: [
      {
        nome: "Pincel Vermelho",
        imagem: "../image/addons/Freddy/pincel-vermelho.webp",
        qualidade: "ruim",
      },
      {
        nome: "Caixa Negra",
        imagem: "../image/addons/Freddy/caixa-preta.webp",
        qualidade: "bom",
      },
      {
        nome: "Corrente de balanço",
        imagem: "../image/addons/Freddy/corrente-balanço.webp",
        qualidade: "bom",
      },
      {
        nome: "Frasco de Comprimido",
        imagem: "../image/addons/Freddy/frasco-comprimido.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Foto da turma",
        imagem: "../image/addons/Freddy/foto-turma.webp",
        qualidade: "bom",
      },
      {
        nome: "Bloco Z",
        imagem: "../image/addons/Freddy/bloco-Z.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Bloco de unicornio",
        imagem: "../image/addons/Freddy/bloco-unicornio.webp",
        qualidade: "mediano",
      },
      {
        nome: "Diluidor de tinta",
        imagem: "../image/addons/Freddy/diluidor-tinta.webp",
        qualidade: "ruim",
      },
      {
        nome: "Obra prima de Nancy",
        imagem: "../image/addons/Freddy/obra-prima-nancy.webp",
        qualidade: "mediano",
      },
      {
        nome: "Corda de pular",
        imagem: "../image/addons/Freddy/corda-pular.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Vestido Azul",
        imagem: "../image/addons/Freddy/vestido-azul.webp",
        qualidade: "ruim",
      },
      {
        nome: "Prototipo de garras",
        imagem: "../image/addons/Freddy/prototio-garras.webp",
        qualidade: "bom",
      },
      {
        nome: "Cordas Resistentes",
        imagem: "../image/addons/Freddy/cordas-resistentes.webp",
        qualidade: "bom",
      },
      {
        nome: "Rascunho da Nancy",
        imagem: "../image/addons/Freddy/rascunho-nancy.webp",
        qualidade: "bom",
      },
      {
        nome: "Vestido Verde",
        imagem: "../image/addons/Freddy/vestido-verde.webp",
        qualidade: "mediano",
      },
      {
        nome: "Bloco de Gato",
        imagem: "../image/addons/Freddy/bloco-gato.webp",
        qualidade: "mediano",
      },
      {
        nome: "Camisa de lã",
        imagem: "../image/addons/Freddy/camisa-lã.webp",
        qualidade: "mediano",
      },
      {
        nome: "Bloco de Ovelha",
        imagem: "../image/addons/Freddy/bloco-ovelhas.webp",
        qualidade: "ruim",
      },
      {
        nome: "Desenho de Criança",
        imagem: "../image/addons/Freddy/desenho-criança.webp",
        qualidade: "ruim",
      },
      { nome: "Ancinho de Jardim", imagem: "../image/addons/Freddy/ancinho-jardim.webp", qualidade: "bom" },
    ],
  },
  //Pig
  {
    id: 11,
    nome: "Pig",
    imagem: "../image/killers/pig.webp",
    itens: [
      {
        nome: "Grevas de soldado",
        imagem: "../image/addons/Huntress/grevas-soldado.webp",
        qualidade: "ruim",
      },
      {
        nome: "Lamina Iridescente",
        imagem: "../image/addons/Huntress/lamina-iridescente.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Raposa de Madeira",
        imagem: "../image/addons/Huntress/raposa-madeira.webp",
        qualidade: "bom",
      },
      {
        nome: "Cinto de Infantaria",
        imagem: "../image/addons/Huntress/cinto-infantaria.webp",
        qualidade: "ruim",
      },
      {
        nome: "Mistura Brilhante",
        imagem: "../image/addons/Huntress/mistura-brilhante.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Lamina Contaminada",
        imagem: "../image/addons/Huntress/lamina-contaminada.webp",
        qualidade: "mediano",
      },
      {
        nome: "Mistura Venenosa",
        imagem: "../image/addons/Huntress/mistura-venenosa.webp",
        qualidade: "bom",
      },
      {
        nome: "Lamina Enferrujada",
        imagem: "../image/addons/Huntress/lamina-enferujada.webp",
        qualidade: "mediano",
      },
      {
        nome: "Raiz de Rosa",
        imagem: "../image/addons/Huntress/raiz-rosa.webp",
        qualidade: "bom",
      },
      {
        nome: "Lenço de Flores",
        imagem: "../image/addons/Huntress/lenço-flores.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Luvas de Carmuça",
        imagem: "../image/addons/Huntress/luvas-carmuça.webp",
        qualidade: "ruim",
      },
      {
        nome: "Lamina Pesada",
        imagem: "../image/addons/Huntress/lamina-pesada.webp",
        qualidade: "ruim",
      },
      {
        nome: "Ferradura Brilhante",
        imagem: "../image/addons/Huntress/ferradura-brilhante.webp",
        qualidade: "bom",
      },
      {
        nome: "Cabo de Carvalho",
        imagem: "../image/addons/Huntress/cabo-carvalho.webp",
        qualidade: "muito-bom",
      },
      {
        nome: "Trança de grama da Maná",
        imagem: "../image/addons/Huntress/trança-grama-maná.webp",
        qualidade: "bom",
      },
      {
        nome: "Laço de Couro",
        imagem: "../image/addons/Huntress/laço-couro.webp",
        qualidade: "ruim",
      },
      {
        nome: "Lenço Amarelado",
        imagem: "../image/addons/Huntress/pano-amarelado.webp",
        qualidade: "ruim",
      },
      {
        nome: "Pedra de amolar",
        imagem: "../image/addons/Huntress/pedra-aspera.webp",
        qualidade: "mediano",
      },
      {
        nome: "Cabo Enfaixado",
        imagem: "../image/addons/Huntress/cabo-enfaixado.webp",
        qualidade: "bom",
      },
      { nome: "Toxina de Amanita", imagem: "../image/addons/Huntress/toxina-amanita.webp", qualidade: "mediano" },
    ],
  },
  // Adicione mais personagens aqui conforme necessário
];

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

  const ordemQualidade = {
    "muito-bom": 1,
    bom: 2,
    mediano: 3,
    ruim: 4,
  };

  const itensOrdenados = [...personagem.itens].sort((a, b) => {
    return ordemQualidade[a.qualidade] - ordemQualidade[b.qualidade];
  });

  const qualidades = [
    { id: "muito-bom", nome: "Muito Bons" },
    { id: "bom", nome: "Bons" },
    { id: "mediano", nome: "Medianos" },
    { id: "ruim", nome: "Ruins" },
  ];

  qualidades.forEach((qualidade) => {
    const itensDaQualidade = itensOrdenados.filter((item) => item.qualidade === qualidade.id);

    if (itensDaQualidade.length > 0) {
      // Adicionar título da seção
      const tituloSecao = document.createElement("h5");
      tituloSecao.className = "secao-qualidade";
      tituloSecao.textContent = qualidade.nome;
      modalItens.appendChild(tituloSecao);

      // Adicionar itens da seção
      itensDaQualidade.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = `item-card item-${item.qualidade}`;

        // Determina o texto de qualidade
        let qualidadeTexto;
        switch (item.qualidade) {
          case "muito-bom":
            qualidadeTexto = "Item Muito Bom";
            break;
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
    }
  });

  const modal = new bootstrap.Modal(document.getElementById("itensModal"));
  modal.show();
}

document.addEventListener("DOMContentLoaded", carregarPersonagens);
