// ============================================================
// AROMA — Catálogo de productos
// Editar aquí precios, descripciones o agregar productos.
// ============================================================

const PRODUCTS = [
  // ---------------- INFUSIONES (9 sabores) ----------------
  {
    id: "sabor-brisa-de-frutos-rojos",
    category: "infusiones",
    name: "Brisa de Frutos Rojos",
    tag: "Familia Frutal · Frasco de 10 unidades",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    image: "assets/img/foto-brisa-de-frutos-rojos.jpg",
    description:
      "Cereza, arándano, fresa y un toque de canela y clavo. Dulce, roja y reconfortante.",
    includes: [],
    footnote: "Infusionar 5–8 min · Frasco de borosilicato con tapa de bambú",
  },
  {
    id: "sabor-tropical-dorado",
    category: "infusiones",
    name: "Tropical Dorado",
    tag: "Familia Frutal · Frasco de 10 unidades",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    image: "assets/img/foto-tropical-dorado.jpg",
    description:
      "Piña, mango, naranja y cúrcuma. Soleada, jugosa y llena de vitalidad.",
    includes: [],
    footnote: "Infusionar 5–8 min · Frasco de borosilicato con tapa de bambú",
  },
  {
    id: "sabor-abrazo-citrico",
    category: "infusiones",
    name: "Abrazo Cítrico",
    tag: "Familia Frutal · Frasco de 10 unidades",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    image: "assets/img/foto-abrazo-citrico.jpg",
    description:
      "Naranja, limón, manzana y kión. Fresca, cítrica y revitalizante.",
    includes: [],
    footnote: "Infusionar 5–8 min · Frasco de borosilicato con tapa de bambú",
  },
  {
    id: "sabor-dulce-armonia",
    category: "infusiones",
    name: "Dulce Armonía",
    tag: "Familia Herbal · Frasco de 10 unidades",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    image: "assets/img/foto-dulce-armonia.jpg",
    description:
      "Hierba luisa, piña, manzana, canela y clavo. Suave, dulce y aromática.",
    includes: [],
    footnote: "Infusionar 5–8 min · Frasco de borosilicato con tapa de bambú",
  },
  {
    id: "sabor-equilibrio-andino",
    category: "infusiones",
    name: "Equilibrio Andino",
    tag: "Familia Herbal · Frasco de 10 unidades",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    image: "assets/img/foto-equilibrio-andino.jpg",
    description:
      "Cedrón, muña, limón y cúrcuma. Herbal andina, digestiva y equilibrada.",
    includes: [],
    footnote: "Infusionar 5–8 min · Frasco de borosilicato con tapa de bambú",
  },
  {
    id: "sabor-vitalidad-roja",
    category: "infusiones",
    name: "Vitalidad Roja",
    tag: "Familia Herbal · Frasco de 10 unidades",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    image: "assets/img/foto-vitalidad-roja.jpg",
    description:
      "Hibisco, naranja, canela y clavo. Intensa, floral y de color rubí.",
    includes: [],
    footnote: "Infusionar 5–8 min · Frasco de borosilicato con tapa de bambú",
  },
  {
    id: "sabor-sol-vital",
    category: "infusiones",
    name: "Sol Vital",
    tag: "Ritual de Calma · Frasco de 10 unidades",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    image: "assets/img/foto-sol-vital.jpg",
    description:
      "Manzanilla, hierba luisa, cedrón y manzana. Serena y reconfortante para tu día.",
    includes: [],
    footnote: "Infusionar 5–8 min · Frasco de borosilicato con tapa de bambú",
  },
  {
    id: "sabor-estrella-dorada",
    category: "infusiones",
    name: "Estrella Dorada",
    tag: "Ritual de Calma · Frasco de 10 unidades",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    image: "assets/img/foto-estrella-dorada.jpg",
    description:
      "Menta, cedrón, anís, cúrcuma y piña. Fresca y aromática para despejar la mente.",
    includes: [],
    footnote: "Infusionar 5–8 min · Frasco de borosilicato con tapa de bambú",
  },
  {
    id: "sabor-luna-serena",
    category: "infusiones",
    name: "Luna Serena",
    tag: "Ritual de Calma · Frasco de 10 unidades",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    image: "assets/img/foto-luna-serena.jpg",
    description:
      "Valeriana, cedrón, toronjil, manzanilla, naranja y manzana. Relajante para la noche.",
    includes: [],
    footnote: "Infusionar 5–8 min · Frasco de borosilicato con tapa de bambú",
  },

  // ---------------- PROMOCIONES · frascos de mezcla ----------------
  {
    id: "inf-frutas-silvestres",
    category: "promos",
    name: "Frutas Silvestres",
    tag: "Promoción · Mezcla frutal",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    promo: true,
    promoNote: "3 sabores frutales en un frasco",
    image: "assets/img/frasco-frutas-silvestres.jpg",
    description:
      "Un frasco con lo mejor de nuestra familia frutal: tres sabores surtidos, 10 bolsitas, al mismo precio.",
    includes: [],
    blends: [
      {
        name: "Brisa de Frutos Rojos",
        units: 4,
        ingredients: "Cereza · Arándano · Fresa · Canela y clavo",
        image: "assets/img/foto-brisa-de-frutos-rojos.jpg",
      },
      {
        name: "Tropical Dorado",
        units: 3,
        ingredients: "Piña · Mango · Naranja · Cúrcuma",
        image: "assets/img/foto-tropical-dorado.jpg",
      },
      {
        name: "Abrazo Cítrico",
        units: 3,
        ingredients: "Naranja · Limón · Manzana · Kión",
        image: "assets/img/foto-abrazo-citrico.jpg",
      },
    ],
    footnote: "Infusionar 5–8 min · 10 unidades surtidas (4 + 3 + 3)",
  },
  {
    id: "inf-hierbas-del-campo",
    category: "promos",
    name: "Hierbas del Campo",
    tag: "Promoción · Mezcla herbal",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    promo: true,
    promoNote: "3 sabores herbales en un frasco",
    image: "assets/img/frasco-hierbas-del-campo.jpg",
    description:
      "Un frasco con lo mejor de nuestra familia herbal: tres sabores surtidos, 10 bolsitas, al mismo precio.",
    includes: [],
    blends: [
      {
        name: "Dulce Armonía",
        units: 4,
        ingredients: "Hierba luisa · Piña · Manzana · Canela y clavo",
        image: "assets/img/foto-dulce-armonia.jpg",
      },
      {
        name: "Equilibrio Andino",
        units: 3,
        ingredients: "Cedrón · Muña · Limón · Cúrcuma",
        image: "assets/img/foto-equilibrio-andino.jpg",
      },
      {
        name: "Vitalidad Roja",
        units: 3,
        ingredients: "Hibisco · Naranja · Canela y clavo",
        image: "assets/img/foto-vitalidad-roja.jpg",
      },
    ],
    footnote: "Infusionar 5–8 min · 10 unidades surtidas (4 + 3 + 3)",
  },
  {
    id: "inf-ritual-de-calma",
    category: "promos",
    name: "Ritual de Calma",
    tag: "Promoción · Mezcla relajante",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    promo: true,
    promoNote: "3 sabores relajantes en un frasco",
    image: "assets/img/frasco-coleccion.jpg",
    description:
      "Un frasco que conecta con el ritmo del sol, la luna y las estrellas: tres mezclas suaves para tu momento de calma.",
    includes: [],
    blends: [
      {
        name: "Sol Vital",
        units: 4,
        ingredients: "Manzanilla · Hierba luisa · Cedrón · Manzana",
        image: "assets/img/foto-sol-vital.jpg",
      },
      {
        name: "Estrella Dorada",
        units: 3,
        ingredients: "Menta · Cedrón · Anís · Cúrcuma · Piña",
        image: "assets/img/foto-estrella-dorada.jpg",
      },
      {
        name: "Luna Serena",
        units: 3,
        ingredients: "Valeriana · Cedrón · Toronjil · Manzanilla · Naranja y manzana",
        image: "assets/img/foto-luna-serena.jpg",
      },
    ],
    footnote: "Infusionar 5–8 min · 10 unidades surtidas (4 + 3 + 3)",
  },
  {
    id: "inf-bosque-de-sabores",
    category: "promos",
    name: "Bosque de Sabores",
    tag: "Promoción · Selección especial",
    price: 20,
    priceNote: "el frasco · 10 unidades",
    promo: true,
    promoNote: "5 frutales + 5 herbales",
    image: "assets/img/frasco-bosque-de-sabores.jpg",
    description:
      "Profunda y envolvente, con notas frescas y cálidas que se integran de forma armoniosa. Lo mejor de las dos familias: 5 frutales + 5 herbales.",
    includes: [
      "Brisa de Frutos Rojos (2 unid.): cereza, fresa, arándano, manzanilla, canela y clavo",
      "Tropical Dorado (2 unid.): mango, piña, naranja, cúrcuma, canela",
      "Abrazo Cítrico (1 unid.): limón, naranja, manzana, kión",
      "Dulce Armonía (1 unid.): hierba luisa, piña, manzana, canela y clavo",
      "Equilibrio Andino (2 unid.): cedrón, limón, muña, cúrcuma",
      "Vitalidad Roja (2 unid.): hibisco, naranja, canela y clavo",
    ],
    footnote: "Infusionar 5–8 min · 5 frutales + 5 herbales",
  },

  // ---------------- BOXES DÍA DEL PADRE ----------------
  {
    id: "box-caballero-aroma",
    category: "boxes",
    name: "Caballero Aroma",
    tag: "Box 01 · Colección Día del Padre",
    price: 59,
    image: "assets/img/box-caballero-aroma.jpg",
    description: "Elegancia serena para el papá de gustos clásicos.",
    includes: [
      "Frasco de infusión Aroma",
      "Peluche osito con corbatín",
      "Barra de chocolate Milky de 50 g La Ibérica",
      "Detalle botánico decorativo",
      "Tarjeta para papá",
    ],
    footnote: "Presentación: caja artesanal y diseño de corazón con lazo decorativo",
  },
  {
    id: "box-pausa-de-papa",
    category: "boxes",
    name: "Pausa de Papá",
    tag: "Box 02 · Colección Día del Padre",
    price: 69,
    image: "assets/img/box-pausa-de-papa.jpg",
    description: "Una pausa natural, dulce y reconfortante.",
    includes: [
      "Frasco de infusión artesanal Aroma",
      "Bebida natural Bio Amayu (arándano, aguaymanto o camu camu)",
      "Peluche osito Abrazo (I love you)",
      "Chocolate extra cremoso Hershey's",
      "Detalle botánico decorativo + tarjeta para papá",
    ],
    footnote: "Presentación: caja kraft de regalo con lazo",
  },
  {
    id: "box-mi-super-papa",
    category: "boxes",
    name: "Mi Súper Papá",
    tag: "Box 03 · Colección Día del Padre",
    price: 79,
    image: "assets/img/box-mi-super-papa.jpg",
    description: "Su mañana favorita, servida con cariño.",
    includes: [
      "Taza cerámica «Feliz Día Papá»",
      "Frasco de infusión artesanal Aroma",
      "Peluche osito Abrazo «I love you»",
      "Chocolate Vizzio Bitter + cucharita dorada",
      "Detalle botánico decorativo",
      "Tarjeta para papá",
    ],
    footnote: "Presentación: jaba artesanal de pino natural reutilizable y lazo",
  },
  {
    id: "box-el-numero-uno",
    category: "boxes",
    name: "El Número Uno",
    tag: "Box 04 · Colección Día del Padre",
    price: 79,
    image: "assets/img/box-el-numero-uno.jpg",
    description: "El reconocimiento que se merece, en un detalle premium.",
    includes: [
      "Termo de acero inoxidable con infusor «Papá el número uno»",
      "Frasco de infusión Aroma",
      "Galletas artesanales de chocochip",
      "Chocolate mini Milky La Ibérica",
      "Detalle botánico decorativo + tarjeta para papá",
    ],
    footnote: "Presentación: canasta de madera de pino con agarradera y lazo",
  },
  {
    id: "box-manana-de-papa",
    category: "boxes",
    name: "Mañana de Papá",
    tag: "Box 05 · Colección Día del Padre",
    price: 79,
    image: "assets/img/box-manana-de-papa.jpg",
    description: "Un desayuno con calma para empezar su día.",
    includes: [
      "Peluche osito caballero, vestido con chaleco y camisa",
      "Frasco de infusión artesanal Aroma",
      "Bebida natural Bio Amayu",
      "Galletas artesanales chocochip (cacao)",
      "Detalle botánico decorativo",
    ],
    footnote: "Presentación: canasta de madera de pino con agarradera y lazo",
  },
  {
    id: "box-papa-heroe",
    category: "boxes",
    name: "Papá Héroe",
    tag: "Box 06 · Colección Día del Padre",
    price: 85,
    image: "assets/img/box-papa-heroe.jpg",
    description: "Porque para ti siempre será el héroe de la casa.",
    includes: [
      "Copa cervecera grabada «Mi papá es mi héroe»",
      "Frasco de infusión Aroma",
      "Cerveza artesanal Candelaria · Indi Lager",
      "Cabanossi gourmet + snack crujiente Inka Corn",
      "Bombón Ferrero Rocher",
      "Detalle botánico decorativo",
    ],
    footnote: "Presentación: caja de regalo de madera de pino con lazo",
  },
  {
    id: "box-papa-sommelier",
    category: "boxes",
    name: "Papá Sommelier",
    tag: "Box 07 · Colección Día del Padre",
    price: 85,
    image: "assets/img/box-papa-sommelier.jpg",
    description: "Para el papá que disfruta una buena copa con calma.",
    includes: [
      "Set sommelier de vino (sacacorchos y accesorios)",
      "Frasco de infusión Aroma",
      "Chocolate gourmet extra cremoso Hershey's",
      "Cabanossi gourmet",
      "Detalle botánico decorativo + tarjeta para papá",
    ],
    footnote: "Presentación: canasta de madera de pino con agarradera y lazo",
  },
  {
    id: "box-papa-aventurero",
    category: "boxes",
    name: "Papá Aventurero",
    tag: "Box 08 · Colección Día del Padre",
    price: 105,
    image: "assets/img/box-papa-aventurero.jpg",
    description: "Para el papá que no para: lo lleva a todos lados.",
    includes: [
      "Termo blanco «Súper Papá»",
      "Frasco de infusión Aroma",
      "Galletas artesanales con cacao 70 % (bolsa kraft)",
      "Chocolate extra cremoso Hershey's",
      "Muñeco de peluche Schnauzer (con sonido)",
      "Detalle botánico decorativo",
    ],
    footnote: "Presentación: jaba de madera de pino con lazo",
  },
  {
    id: "box-de-tal-palo",
    category: "boxes",
    name: "De Tal Palo",
    tag: "Box 09 · Colección Día del Padre",
    price: 105,
    image: "assets/img/box-de-tal-palo.jpg",
    description: "Un brindis entre los que se parecen… de tal palo, tal astilla.",
    includes: [
      "Chopp de vidrio «De tal palo…»",
      "Frasco de infusión Aroma",
      "Cerveza artesanal Candelaria · Indi Lager",
      "Cabanossi gourmet seleccionado",
      "Peluche osito Abrazo «I love you»",
      "Detalle botánico decorativo + tarjeta para papá",
    ],
    footnote: "Presentación: jaba de madera de pino tamaño grande con lazo",
  },
  {
    id: "box-papa-consentido",
    category: "boxes",
    name: "Papá Consentido",
    tag: "Box 11 · Colección Día del Padre",
    price: 115,
    image: "assets/img/box-papa-consentido.jpg",
    description: "El consentido de la casa merece lo mejor.",
    includes: [
      "Tomatodo térmico de acero inoxidable celeste, edición especial",
      "Frasco de infusión Aroma",
      "Peluche osito con corbatín",
      "Cabanossi gourmet + snack crujiente Inca Corn",
      "Detalle botánico decorativo",
    ],
    footnote: "Presentación: jaba grande de madera de pino con lazo azul",
  },
  {
    id: "box-el-mejor-del-mundo",
    category: "boxes",
    name: "El Mejor del Mundo",
    tag: "Box 10 · Colección Día del Padre",
    price: 119,
    image: "assets/img/box-el-mejor-del-mundo.jpg",
    description: "Un clásico chopero para el mejor papá del mundo.",
    includes: [
      "Chopp cervecero de cristal «El mejor papá»",
      "Frasco de infusión Aroma",
      "Cerveza artesanal Candelaria · Indi Lager",
      "Peluche de pingüino premium de gran formato",
      "Cabanossi gourmet + snack crujiente Inca Corn",
      "Bombones Ferrero Rocher (3 unidades)",
      "Detalle botánico decorativo",
    ],
    footnote: "Presentación: caja grande de madera de pino natural con lazo",
  },

  // ---------------- BOXES ROMÁNTICOS (Día de la Madre · San Valentín) ----------------
  {
    id: "rom-aroma-que-abraza",
    category: "romanticos",
    name: "Aroma que Abraza",
    tag: "Box 01 · Colección Romántica",
    price: 69,
    image: "assets/img/rom-aroma-que-abraza.png",
    description:
      "El abrazo de un peluche y el aroma de una infusión artesanal para pausar el día.",
    includes: [
      "1 frasco de infusiones artesanales Aroma",
      "Cajita de trupán decorada con lazo (rosa o negro)",
      "1 osito de peluche",
      "1 ramito de flores secas",
      "Bombones Ferrero Rocher (3 unid.)",
      "Tarjeta con dedicatoria personalizada",
    ],
    footnote:
      "A elegir un frasco de infusión: Bosque de Sabores, Hierbas del Campo o Frutas Silvestres",
  },
  {
    id: "rom-esencia-eterna",
    category: "romanticos",
    name: "Esencia Eterna",
    tag: "Box 02 · Colección Romántica",
    price: 99,
    image: "assets/img/rom-esencia-eterna.png",
    description:
      "Un corazón de madera lleno de detalles que florecen con cada taza.",
    includes: [
      "1 frasco de infusiones artesanales Aroma",
      "Box de madera de pino en forma de corazón y lazo de tela",
      "1 osita de peluche",
      "1 ramito de flores secas",
      "1 caja de bombones Ferrero Rocher (4 unid.)",
      "1 globito de corazón",
      "1 suculenta de efecto natural",
      "Tarjeta con dedicatoria personalizada",
    ],
    footnote:
      "A elegir un frasco de infusión: Bosque de Sabores, Hierbas del Campo o Frutas Silvestres",
  },
  {
    id: "rom-ritual-romantico",
    category: "romanticos",
    name: "Ritual Romántico",
    tag: "Box 03 · Colección Romántica",
    price: 99,
    image: "assets/img/rom-ritual-romantico.png",
    description:
      "Luz de vela, flores y una infusión para brindar por el amor.",
    includes: [
      "1 frasco de infusiones artesanales Aroma",
      "Box de madera de pino en forma de corazón y lazo de tela",
      "1 osito de peluche",
      "1 ramito de flores secas",
      "1 caja de bombones Ferrero Rocher (4 unid.)",
      "1 globito de corazón",
      "1 vela decorativa",
      "Tarjeta con dedicatoria personalizada",
    ],
    footnote:
      "A elegir un frasco de infusión: Bosque de Sabores, Hierbas del Campo o Frutas Silvestres",
  },
  {
    id: "rom-ritual-de-ternura",
    category: "romanticos",
    name: "Ritual de Ternura",
    tag: "Box 04 · Colección Romántica",
    price: 109,
    image: "assets/img/rom-ritual-de-ternura.png",
    description:
      "Ternura en cada detalle: peluche, flores y una taza rosa para su momento de calma.",
    includes: [
      "1 frasco de infusiones artesanales Aroma",
      "Box de madera de pino en forma de corazón y lazo de tela",
      "1 osita de peluche",
      "1 ramito de flores secas",
      "1 caja de bombones Ferrero Rocher (4 unid.)",
      "1 globito de corazón",
      "1 taza de cerámica rosa",
      "Tarjeta con dedicatoria personalizada",
    ],
    footnote:
      "A elegir un frasco de infusión: Bosque de Sabores, Hierbas del Campo o Frutas Silvestres",
  },

  // ---------------- COLECCIÓN DE PASCUA ----------------
  {
    id: "pascua-conejita",
    category: "pascua",
    name: "Box Pascua Alegre",
    tag: "Colección Especial de Pascua",
    price: 59,
    image: "assets/img/pascua-1.png",
    description:
      "Detalles delicados que combinan infusiones naturales, flores secas y pequeños símbolos de renovación y alegría.",
    includes: [
      "1 frasco de infusiones artesanales Aroma",
      "Conejita de peluche con flores",
      "Huevos de chocolate",
      "Ramito de flores secas",
      "Caja de madera de pino con lazo",
    ],
    footnote: "Pensado para regalar bienestar y un momento especial para compartir",
  },
  {
    id: "pascua-conejito",
    category: "pascua",
    name: "Box Pascua Renacer",
    tag: "Colección Especial de Pascua",
    price: 109,
    image: "assets/img/pascua-2.png",
    description:
      "Un box de Pascua tierno y luminoso: conejito de peluche, chocolates y flores secas junto a tu infusión favorita.",
    includes: [
      "1 frasco de infusiones artesanales Aroma",
      "Conejito de peluche con sombrero",
      "Chocolates seleccionados",
      "Ramito de flores secas y mariposa decorativa",
      "Caja de madera de pino con lazo",
    ],
    footnote: "Pensado para regalar bienestar y un momento especial para compartir",
  },

  // ---------------- ACCESORIOS ----------------
  {
    id: "tetera-vidrio",
    category: "accesorios",
    name: "Tetera de vidrio",
    tag: "Tetera infusora · Tapa de vidrio",
    price: 49,
    image: "assets/img/tetera-vidrio.png",
    description:
      "Todo vidrio con infusor interno. Pureza y elegancia para resaltar el color de cada infusión. Borosilicato resistente a altas temperaturas.",
    includes: [],
    footnote: "Borosilicato premium · Infusor interno",
  },
  {
    id: "tetera-bambu",
    category: "accesorios",
    name: "Tetera asa de bambú",
    tag: "Tetera infusora · Asa de bambú",
    price: 49,
    image: "assets/img/tetera-bambu.png",
    description:
      "Asa de bambú e infusor interno. Calidez natural y agarre cómodo y seguro. Borosilicato resistente a altas temperaturas.",
    includes: [],
    footnote: "Borosilicato premium · Infusor interno",
  },
  {
    id: "tetera-cuero",
    category: "accesorios",
    name: "Tetera asa de cuero",
    tag: "Tetera infusora · Asa recubierta",
    price: 59,
    image: "assets/img/tetera-cuero.png",
    description:
      "Asa recubierta en biocuero, resistente a altas temperaturas. Un detalle sobrio y duradero.",
    includes: [],
    footnote: "Borosilicato premium · Infusor interno",
  },
  {
    id: "pack-esencial",
    category: "accesorios",
    name: "Pack Esencial",
    tag: "Pack 1 · Suma un pack",
    price: 39,
    image: "assets/img/pack-esencial.png",
    description: "Para empezar tu ritual con lo justo y necesario.",
    includes: [
      "Frasco de infusión a elección",
      "1 taza doble fondo de borosilicato",
    ],
    footnote: "Complementa cualquier box — o regálalo solo",
  },
  {
    id: "pack-ritual",
    category: "accesorios",
    name: "Pack Ritual",
    tag: "Pack 2 · Suma un pack",
    price: 69,
    image: "assets/img/pack-ritual.png",
    description: "El ritual completo de la infusión, con calidez natural.",
    includes: [
      "Frasco de infusión a elección",
      "Tetera de borosilicato con asa de bambú e infusor interno",
    ],
    footnote: "Complementa cualquier box — o regálalo solo",
  },
  {
    id: "pack-encuentro",
    category: "accesorios",
    name: "Pack Encuentro",
    tag: "Pack 3 · Suma un pack",
    price: 95,
    image: "assets/img/pack-encuentro.png",
    description: "Un encuentro sobrio y elegante alrededor de una taza.",
    includes: [
      "Frasco de infusión a elección",
      "Tetera con asa de bambú en biocuero",
      "1 taza de borosilicato asa cuadrada y platito",
    ],
    footnote: "Complementa cualquier box — o regálalo solo",
  },
  {
    id: "pack-duo",
    category: "accesorios",
    name: "Pack Dúo",
    tag: "Pack 4 · Para compartir",
    price: 79,
    image: "assets/img/pack-duo.png",
    description: "Para disfrutar de a dos, sin apuros.",
    includes: [
      "Frasco de infusión a elección",
      "Tetera todo vidrio con infusor interno",
      "1 taza doble fondo con asa de borosilicato",
    ],
    footnote: "Todos los packs incluyen frasco de infusión a elección",
  },
  {
    id: "pack-reunion",
    category: "accesorios",
    name: "Pack Reunión",
    tag: "Pack 6 · Para compartir",
    price: 109,
    image: "assets/img/pack-reunion.png",
    description: "Para disfrutar en familia, alrededor de la mesa.",
    includes: [
      "Frasco de infusión a elección",
      "Tetera con asa de bambú e infusor interno",
      "4 tazas asa redonda (90 ml)",
    ],
    footnote: "Todos los packs incluyen frasco de infusión a elección",
  },
  {
    id: "pack-mesa-de-papa",
    category: "accesorios",
    name: "Pack Mesa de Papá",
    tag: "Pack 5 · Para compartir",
    price: 149,
    image: "assets/img/pack-mesa-de-papa.png",
    description: "La mesa completa para consentir a papá y a toda la familia.",
    includes: [
      "Frasco de infusión a elección",
      "Tetera de borosilicato con infusor interno",
      "4 tazas doble fondo",
      "Mielera de vidrio con palito mielero",
    ],
    footnote: "Todos los packs incluyen frasco de infusión a elección",
  },
  {
    id: "mielera",
    category: "accesorios",
    name: "Mielera de vidrio",
    tag: "Adicional",
    price: 29,
    image: "assets/img/mielera.png",
    description:
      "Mielera de vidrio + palito mielero. Agranda tu pack con un accesorio adicional. El toque final para cualquier mesa.",
    includes: [],
    footnote: "Adicional para cualquier pack o box",
  },
];

// Categorías permanentes del inicio (no estacionales).
// Las colecciones de temporada (Día del Padre, Románticos, Pascua) viven
// DENTRO de "Boxes de regalo", no en el menú principal.
const CATEGORIES = [
  {
    id: "boxes",
    name: "Boxes de regalo",
    subtitle: "Para papá, para el amor, para Pascua… desde S/ 59",
    image: "assets/img/cat-boxes.png",
  },
  {
    id: "infusiones",
    name: "Infusiones",
    subtitle: "Frutas y hierbas 100 % deshidratadas · S/ 20 el frasco",
    image: "assets/img/cat-infusiones.png",
  },
  {
    id: "accesorios",
    name: "Accesorios",
    subtitle: "Teteras, packs y adicionales en borosilicato premium",
    image: "assets/img/cat-accesorios.png",
  },
];

// ============================================================
// COLECCIÓN DE TEMPORADA (banner dinámico del inicio)
// Edita este bloque cada campaña. Así el menú NUNCA envejece:
// solo cambias aquí la ocasión vigente. Pon active:false para ocultarlo.
// ============================================================
const FEATURED = {
  active: true,
  eyebrow: "Colección destacada",
  title: "Regala un momento, no solo un objeto",
  text: "Cada box de Aroma combina una infusión artesanal con detalles elegidos a mano. El regalo perfecto para esa persona especial — en cualquier fecha del año.",
  ctaLabel: "Ver boxes de regalo",
  ctaTarget: "#boxes",
  image: "assets/img/box-el-mejor-del-mundo.jpg",
};

// ============================================================
// FAVORITOS (fila de destacados en el inicio)
// Lista de IDs de producto que quieres resaltar arriba para compra rápida.
// Reordénalos o cámbialos cuando quieras. Déjalo vacío [] para ocultar la fila.
// ============================================================
const HIGHLIGHT_IDS = [
  "box-mi-super-papa",
  "sabor-luna-serena",
  "rom-esencia-eterna",
  "pack-ritual",
];

// ============================================================
// RESEÑAS DE CLIENTES (testimonios)
// ⚠️ EJEMPLOS DE MUESTRA — reemplázalos por reseñas REALES de tus clientes
// antes de publicar. No publiques testimonios inventados como si fueran reales.
// Deja el arreglo vacío [] si aún no tienes reseñas y la sección no se mostrará.
// ============================================================
const TESTIMONIALS = [
  {
    text: "Ejemplo: pedí un box para el cumpleaños de mi mamá y llegó precioso, con la dedicatoria y todo. Se emocionó muchísimo.",
    author: "Reseña de ejemplo",
    detail: "Reemplázala por una reseña real",
  },
  {
    text: "Ejemplo: las infusiones son riquísimas y naturales. Mi favorita es Luna Serena para la noche.",
    author: "Reseña de ejemplo",
    detail: "Reemplázala por una reseña real",
  },
  {
    text: "Ejemplo: la atención por WhatsApp fue rápida y me ayudaron a elegir el box ideal. Volveré a comprar.",
    author: "Reseña de ejemplo",
    detail: "Reemplázala por una reseña real",
  },
];

const WHATSAPP_NUMBER = "51998570380"; // Pedidos y Yape/Plin: 998 570 380
const INSTAGRAM_URL =
  "https://www.instagram.com/aroma.infusiones.artesanales";
