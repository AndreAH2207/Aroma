// ============================================================
// AROMA — Lógica del sitio: catálogo, carrito y pedido por WhatsApp
// ============================================================

const fmt = (n) => `S/ ${n % 1 === 0 ? n : n.toFixed(2)}`;

// Escapa texto antes de insertarlo en el HTML (navegación segura: evita inyección
// de código si alguna descripción llegara a incluir < > & " ').
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

// ---------- Estado del carrito (persistente) ----------
let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("aroma-cart")) || [];
} catch (_) {
  cart = [];
}

function saveCart() {
  localStorage.setItem("aroma-cart", JSON.stringify(cart));
}

// ---------- Render de categorías ----------
function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  grid.innerHTML = CATEGORIES.map(
    (c) => `
    <a class="category-card" href="#${encodeURIComponent(c.id)}">
      <img src="${esc(c.image)}" alt="${esc(c.name)}" loading="lazy" />
      <div class="cat-overlay">
        <h3>${esc(c.name)}</h3>
        <p>${esc(c.subtitle)}</p>
      </div>
    </a>`
  ).join("");
}

// ---------- Card de producto (reutilizable) ----------
function productCard(p) {
  return `
      <article class="product-card">
        <div class="product-img${p.promo ? " product-img-frasco" : ""}" onclick="openModal('${esc(p.id)}')">
          ${p.promo ? `<span class="product-ribbon">Promoción</span>` : ""}
          <img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" />
        </div>
        <div class="product-info">
          <span class="product-tag">${esc(p.tag)}</span>
          <h3 class="product-name" onclick="openModal('${esc(p.id)}')">${esc(p.name)}</h3>
          ${p.promoNote ? `<p class="promo-note">◆ ${esc(p.promoNote)}</p>` : ""}
          <p class="product-desc">${esc(p.description)}</p>
          ${
            p.blends
              ? `<button class="detail-link" onclick="openModal('${esc(p.id)}')">Ver las ${p.blends.length} mezclas ↗</button>`
              : p.includes.length
              ? `<button class="detail-link" onclick="openModal('${esc(p.id)}')">Ver qué incluye ↗</button>`
              : ""
          }
          <div class="product-bottom">
            <span class="product-price">${fmt(p.price)}${
              p.priceNote ? `<small class="price-note">${esc(p.priceNote)}</small>` : ""
            }</span>
            <button class="add-btn" onclick="addToCart('${esc(p.id)}')">Agregar</button>
          </div>
        </div>
      </article>`;
}

// ---------- Render de productos ----------
function renderProducts() {
  document.querySelectorAll(".product-grid[data-category]").forEach((grid) => {
    const cat = grid.dataset.category;
    const items = PRODUCTS.filter((p) => p.category === cat);
    grid.innerHTML = items.map(productCard).join("");
  });
}

// ---------- Colección de temporada (banner dinámico) ----------
function renderFeatured() {
  const section = document.getElementById("temporada");
  const block = document.getElementById("featuredBlock");
  if (!section || !block) return;
  if (typeof FEATURED === "undefined" || !FEATURED.active) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  const target = /^#[\w-]+$/.test(FEATURED.ctaTarget || "") ? FEATURED.ctaTarget : "#boxes";
  block.innerHTML = `
    <div class="featured-media">
      <img src="${esc(FEATURED.image)}" alt="${esc(FEATURED.title)}" loading="lazy" />
    </div>
    <div class="featured-text">
      <p class="eyebrow">${esc(FEATURED.eyebrow)}</p>
      <h2>${esc(FEATURED.title)}</h2>
      <p class="featured-desc">${esc(FEATURED.text)}</p>
      <a class="btn btn-primary" href="${esc(target)}">${esc(FEATURED.ctaLabel)}</a>
    </div>`;
}

// ---------- Favoritos / destacados ----------
function renderHighlights() {
  const section = document.getElementById("favoritos");
  const grid = document.getElementById("highlightsGrid");
  if (!section || !grid) return;
  const ids = typeof HIGHLIGHT_IDS !== "undefined" ? HIGHLIGHT_IDS : [];
  const items = ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  if (!items.length) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  grid.innerHTML = items.map(productCard).join("");
}

// ---------- Reseñas de clientes ----------
function renderTestimonials() {
  const section = document.getElementById("resenas");
  const grid = document.getElementById("testimonialsGrid");
  if (!section || !grid) return;
  const items = typeof TESTIMONIALS !== "undefined" ? TESTIMONIALS : [];
  if (!items.length) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  grid.innerHTML = items
    .map(
      (t) => `
      <figure class="testi-card">
        <div class="testi-stars" aria-hidden="true">★★★★★</div>
        <blockquote>${esc(t.text)}</blockquote>
        <figcaption>
          <span class="testi-author">${esc(t.author)}</span>
          ${t.detail ? `<span class="testi-detail">${esc(t.detail)}</span>` : ""}
        </figcaption>
      </figure>`
    )
    .join("");
}

// ---------- Modal de producto ----------
function openModal(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  document.getElementById("modalBody").innerHTML = `
    <div class="modal-img${p.promo ? " modal-img-frasco" : ""}"><img src="${esc(p.photo || p.image)}" alt="${esc(p.name)}" /></div>
    <div class="modal-info">
      <span class="product-tag">${esc(p.tag)}</span>
      <h3>${esc(p.name)}</h3>
      <p class="modal-desc">${esc(p.description)}</p>
      ${
        p.blends
          ? `<p class="modal-includes-title">Las ${p.blends.length} mezclas de este frasco</p>
             <div class="blend-list">${p.blends
               .map(
                 (b) => `
               <div class="blend-card">
                 <img src="${esc(b.image)}" alt="${esc(b.name)}" loading="lazy" />
                 <div class="blend-info">
                   <p class="blend-name">${esc(b.name)} <span class="blend-units">${esc(b.units)} unid.</span></p>
                   <p class="blend-ingredients">${esc(b.ingredients)}</p>
                 </div>
               </div>`
               )
               .join("")}</div>`
          : p.includes.length
          ? `<p class="modal-includes-title">Incluye</p>
             <ul class="modal-includes">${p.includes
               .map((i) => `<li>${esc(i)}</li>`)
               .join("")}</ul>`
          : ""
      }
      <p class="modal-footnote">${esc(p.footnote)}</p>
      <div class="modal-price-row">
        <span class="modal-price">${fmt(p.price)}${
          p.priceNote ? `<small class="price-note">${esc(p.priceNote)}</small>` : ""
        }</span>
        <button class="btn btn-teal" onclick="addToCart('${esc(p.id)}'); closeModal();">Agregar al pedido</button>
      </div>
    </div>`;
  document.getElementById("productModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("productModal").classList.remove("open");
  document.body.style.overflow = "";
}

// ---------- Carrito ----------
function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  renderCart();
  const p = PRODUCTS.find((x) => x.id === id);
  showToast(`${p.name} agregado al pedido ◆`);
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}

function cartTotal() {
  return cart.reduce((sum, i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
}

function renderCart() {
  const box = document.getElementById("cartItems");
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = fmt(cartTotal());

  if (!cart.length) {
    box.innerHTML = `<p class="cart-empty">Tu pedido está vacío.<br />Explora nuestros boxes e infusiones</p>`;
    return;
  }

  box.innerHTML = cart
    .map((i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      if (!p) return "";
      return `
      <div class="cart-item">
        <img src="${esc(p.image)}" alt="${esc(p.name)}" />
        <div>
          <p class="cart-item-name">${esc(p.name)}</p>
          <p class="cart-item-price">${fmt(p.price)} c/u</p>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeQty('${esc(p.id)}', -1)" aria-label="Quitar uno">−</button>
            <span class="qty-num">${i.qty}</span>
            <button class="qty-btn" onclick="changeQty('${esc(p.id)}', 1)" aria-label="Agregar uno">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="removeItem('${esc(p.id)}')" aria-label="Eliminar del pedido">✕</button>
      </div>`;
    })
    .join("");
}

// ---------- Checkout por WhatsApp ----------
function checkout() {
  if (!cart.length) {
    showToast("Tu pedido está vacío — agrega un producto primero");
    return;
  }
  const lines = cart.map((i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return `▪ ${i.qty} x ${p.name} — ${fmt(p.price * i.qty)}`;
  });
  const msg = [
    "¡Hola Aroma! 🌿 Quiero hacer este pedido:",
    "",
    ...lines,
    "",
    `*Total: ${fmt(cartTotal())}*`,
    "",
    "Mi distrito de entrega es: ",
  ].join("\n");

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}

// ---------- Drawer del carrito ----------
function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

// ---------- Toast ----------
let toastTimer;
function showToast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

// ---------- Enlaces de WhatsApp e Instagram ----------
function setupLinks() {
  const greeting = encodeURIComponent(
    "¡Hola Aroma! 🌿 Quiero más información sobre sus productos."
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${greeting}`;
  document.getElementById("whatsappFloat").href = waUrl;
  document.getElementById("footerWhatsapp").href = waUrl;
  document.getElementById("footerInstagram").href = INSTAGRAM_URL;

  const advisory = document.getElementById("advisoryWhatsapp");
  if (advisory) {
    const ask = encodeURIComponent(
      "¡Hola Aroma! 🌿 Quiero ayuda para elegir un box de regalo. Es para: "
    );
    advisory.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${ask}`;
  }
}

// ---------- Animación: revelado al hacer scroll ----------
function setupReveal() {
  // Respeta la preferencia de "reducir movimiento" del sistema.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll(
    ".section-head, .featured, .advisory, .about, .category-card, " +
      ".product-card, .value-card, .step, .testi-card, .payment-card, .faq-item"
  );

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
    // Escalonado suave dentro de cada grilla (columnas)
    const grid = el.closest(".product-grid, .categories, .values, .steps, .testimonials");
    if (grid) {
      const i = [...grid.children].indexOf(el);
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
    }
  });
}

// ---------- Eventos ----------
document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("overlay").addEventListener("click", closeCart);
document.getElementById("checkoutBtn").addEventListener("click", checkout);
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("productModal").addEventListener("click", (e) => {
  if (e.target.id === "productModal") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeCart();
  }
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
function setMenu(open) {
  mainNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
}
menuToggle.addEventListener("click", () =>
  setMenu(!mainNav.classList.contains("open"))
);
mainNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => setMenu(false))
);

// ---------- Init ----------
renderCategories();
renderProducts();
renderFeatured();
renderHighlights();
renderTestimonials();
renderCart();
setupLinks();
setupReveal();
