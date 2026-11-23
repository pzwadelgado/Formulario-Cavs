// === [SECCIÓN JS 1: CONFIGURACIÓN MICROSOFT (SHAREPOINT / POWER AUTOMATE)] ===
const CONFIG_MICROSOFT = {
  powerAutomateUrl: "https://07ab455229acef3aa55c6fad98a14b.e7.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/28/workflows/2a463faf0d7e4f92b3011e0c9da7ca41/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lcvrV9MmqnTUqkYYoGd3KsHjLcvsw9BYAtAlq-bXov8",
  modoSimulacionLocal: false,
  storageKey: "cavs_inspeccion_borrador_v1",
  maxFileSizeMB: 15
};

// Sanitización y diagnóstico preventivo de DNS/URL
CONFIG_MICROSOFT.powerAutomateUrl = CONFIG_MICROSOFT.powerAutomateUrl.replace(/\s+/g, "");
try {
  const urlObj = new URL(CONFIG_MICROSOFT.powerAutomateUrl);
  console.log("🌐 Endpoint Power Automate verificado:", urlObj.hostname);
  if (!CONFIG_MICROSOFT.modoSimulacionLocal && !urlObj.searchParams.has("sig")) {
    console.warn("⚠️ Falta el parámetro de seguridad 'sig=' en la URL.");
  }
} catch (e) {
  console.error("❌ La URL pegada en SECCIÓN JS 1 tiene un formato inválido:", CONFIG_MICROSOFT.powerAutomateUrl);
}

// === [SECCIÓN JS 2: CATÁLOGO DE INSPECCIÓN (55 PUNTOS + BOTIQUÍN OFICIAL)] ===
const datosFormulario = [
  {
    tituloCorto: "1. Datos",
    titulo: "Información General",
    icono: "📋",
    permiteAprobacionMasiva: false,
    items: [
      {
        id: "Quien reporta",
        desc: "Seleccione el responsable que ejecuta la inspección del gimnasio.",
        tipo: "select",
        opciones: ["Pablo Rodriguez", "Josué Camacho"]
      }
    ]
  },
  {
    tituloCorto: "2. Máquinas",
    titulo: "Máquinas",
    icono: "🏋️",
    permiteAprobacionMasiva: true,
    items: [
      { id: "Caminadoras", desc: "Validar encendido, paro de emergencia, bandas y costados" },
      { id: "Elíptica", desc: "Revisión de movimiento fluido, pedales y consola" },
      { id: "Smith", desc: "Revisión de aceite y estabilidad de las piezas" },
      { id: "Multi Estación", desc: "Revisión de funcionamiento, tapicería, estado de los cables y aceite" },
      { id: "Jalon Dorsal", desc: "Revisión de funcionamiento, tapicería, estado de cables" },
      { id: "Poleas", desc: "Revisión de funcionamiento, aceite, estado de cables" },
      { id: "Patada de Gluteo", desc: "Revisión de funcionamiento, aceite, tapicería" },
      { id: "Hack / Prensa 45°", desc: "Revisión de tapicería, estabilidad de las piezas" },
      { id: "Abducción, Aducción", desc: "Revisión de funcionamiento, aceite, cables" },
      { id: "Spinning", desc: "Revisión de tapicería, baterías, funcionamiento" },
      { id: "Airbike", desc: "Revisión de batería, funcionamiento, tapicería" }
    ]
  },
  {
    tituloCorto: "3. Peso Libre",
    titulo: "Peso Libre / Funcional",
    icono: "💪",
    permiteAprobacionMasiva: true,
    items: [
      { id: "Mancuernas", desc: "Revisión del estado para usar" },
      { id: "Barras", desc: "Revisión del estado para usar" },
      { id: "Racks", desc: "Revisión de estabilidad" },
      { id: "KB", desc: "Revisión del estado para uso" },
      { id: "Cajón", desc: "Revisión del estado para uso" },
      { id: "Discos", desc: "Revisión del estado para uso" },
      { id: "Bancas", desc: "Revisión de tapicería, estado para uso" },
      { id: "Ligas", desc: "Revisión estado para uso" },
      { id: "Med Ball", desc: "Revisión estado para uso" },
      { id: "TRX", desc: "Revisión estado para uso" },
      { id: "Sacos", desc: "Revisión del estado para uso" }
    ]
  },
  {
    tituloCorto: "4. Infraestructura",
    titulo: "Infraestructura",
    icono: "🏢",
    permiteAprobacionMasiva: true,
    items: [
      { id: "Ventiladores", desc: "Revisión del correcto funcionamiento" },
      { id: "Vidrios", desc: "Revisión estado en que se encuentran" },
      { id: "Techos", desc: "Revisión de fisuras y goteras" },
      { id: "Espejos", desc: "Revisión del estado correcto sin daños" },
      { id: "Lamparas", desc: "Revisión correcto funcionamiento" },
      { id: "Aire acondicionado", desc: "Revisión del correcto funcionamiento" },
      { id: "Instalación Eléctrica", desc: "Revisión correcto funcionamiento" },
      { id: "Bebederos", desc: "Revisión de funcionamiento y estado" },
      { id: "Piso", desc: "Revisión del estado en que se encuentra" },
      { id: "Servicios Sanitarios", desc: "Revisión funcionamiento y estado" },
      { id: "Duchas", desc: "Revisión del funcionamiento y estado" },
      { id: "Jaboneras", desc: "Revisión de funcionamiento y estado" },
      { id: "Lavatarios", desc: "Revisión del estado y funcionamiento" }
    ]
  },
  {
    tituloCorto: "5. Botiquín",
    titulo: "Botiquín del Gimnasio",
    icono: "🩹",
    permiteAprobacionMasiva: true,
    esBotiquin: true,
    items: [
      { id: "Bolsa de Basura para desechos potencialmente infectuosos", stockRequerido: 1, unidad: "bolsa", desc: "Verificar existencia, integridad y vigencia" },
      { id: "Gasa en rollo", stockRequerido: 1, unidad: "rollo", desc: "Verificar empaque sellado, limpieza y fecha de caducidad" },
      { id: "Paletas", stockRequerido: 5, unidad: "unidades", desc: "Verificar cantidad completa (5) y empaque limpio" },
      { id: "Curitas", stockRequerido: 10, unidad: "unidades", desc: "Verificar cantidad completa (10) y adhesivo en buen estado" },
      { id: "Tijeras", stockRequerido: 1, unidad: "unidad", desc: "Verificar existencia, filo adecuado y libre de oxidación" },
      { id: "Alcohol multiuso botella 250 ml", stockRequerido: 1, unidad: "botella 250 ml", desc: "Verificar nivel adecuado, tapa sellada y fecha vigente" },
      { id: "Jabón Neutro Antibacterial Botella 240 ml", stockRequerido: 1, unidad: "botella 240 ml", desc: "Verificar contenido disponible y fecha de vencimiento" },
      { id: "Alcohol en gel Antibacterial botella 240 ml", stockRequerido: 1, unidad: "botella 240 ml", desc: "Verificar contenido disponible y fecha de vencimiento" },
      { id: "Cloruro de Sodio al 0.9% en agua inyectable bolsa de 200 ml", stockRequerido: 1, unidad: "bolsa 200 ml", desc: "Verificar bolsa íntegra, sin fugas y fecha vigente" },
      { id: "Guantes Látex", stockRequerido: 10, unidad: "unidades", desc: "Verificar cantidad completa (10) y sin deterioro del material" },
      { id: "Esparadrapo 5cm x 5m carrucha", stockRequerido: 1, unidad: "carrucha", desc: "Verificar carrucha limpia y con metraje suficiente" },
      { id: "Aplicadores bolsa de 100 unidades", stockRequerido: 1, unidad: "bolsa (100 unid.)", desc: "Verificar bolsa sellada e higiénica" },
      { id: "Algodón Absorbente en bolsa de 25 gramos", stockRequerido: 1, unidad: "bolsa 25 g", desc: "Verificar bolsa cerrada, limpia y seca" },
      { id: "Venda PBT no estéril de 5 cm 3.7m", stockRequerido: 3, unidad: "unidades", desc: "Verificar las 3 unidades en empaque limpio y vigente" },
      { id: "Venda PBT no estéril de 10 cm 3.7m", stockRequerido: 3, unidad: "unidades", desc: "Verificar las 3 unidades en empaque limpio y vigente" },
      { id: "Venda PBT no estéril de 15cm x 3.7m", stockRequerido: 3, unidad: "unidades", desc: "Verificar las 3 unidades en empaque limpio y vigente" },
      { id: "Gasa estéril desechable 10x10 cm", stockRequerido: 10, unidad: "unidades", desc: "Verificar las 10 unidades selladas y dentro de vigencia" },
      { id: "Bolsa de azúcar de 5 gramos", stockRequerido: 1, unidad: "bolsa 5 g", desc: "Verificar sobre íntegro, seco y sin endurecimiento" },
      { id: "Manual cómo atender una emergencia", stockRequerido: 2, unidad: "manuales", desc: "Verificar ambos ejemplares legibles y accesibles" },
      { id: "Paño para cabestrillo", stockRequerido: 1, unidad: "unidad", desc: "Verificar limpieza e integridad de la tela" }
    ]
  }
];

let pasoActual = 0;

// === [SECCIÓN JS 3: RENDERIZADO DE INTERFAZ Y STEPPER] ===
function iniciarFormulario() {
  renderizarStepper();
  const totalPasos = datosFormulario.length;
  let html = "";

  datosFormulario.forEach((seccion, index) => {
    html += `<div class="paso ${index === 0 ? "activo" : ""}" id="paso-${index}">`;
    html += `
      <div class="section-header-card">
        <h3 class="seccion-titulo"><span>${seccion.icono}</span> ${seccion.titulo}</h3>
        <div class="section-actions">
          ${seccion.permiteAprobacionMasiva
            ? `<button type="button" class="btn-bulk-ok" onclick="marcarSeccionCumple(${index})">✓ Marcar pendientes como Cumple</button>`
            : ""}
          <span class="step-counter">Paso ${index + 1} de ${totalPasos}</span>
        </div>
      </div>`;

    seccion.items.forEach(item => {
      const esBotiquin = Boolean(seccion.esBotiquin);
      html += `
        <div class="card item-caja"
             data-id="${item.id}"
             data-categoria="${seccion.titulo}"
             data-stock-req="${item.stockRequerido || ""}"
             data-unidad="${item.unidad || ""}">`;

      if (item.tipo === "select") {
        html += `<div class="item-title">${item.id} <span class="required">*</span></div>`;
        if (item.desc) html += `<div class="item-desc">${item.desc}</div>`;
        html += `
          <select class="input-base validar-req" id="input-inspector" onchange="limpiarErrorSelect(this); guardarBorrador();">
            <option value="">Elige una opción...</option>
            ${item.opciones.map(op => `<option value="${op}">${op}</option>`).join("")}
          </select>
          <div class="mensaje-error">⚠️ Debes seleccionar quién realiza la inspección</div>`;
      } else {
        html += `
          <div class="item-header">
            <div class="item-info">
              <div class="item-title-row">
                <span class="item-title">${item.id} <span class="required">*</span></span>
                ${esBotiquin ? `<span class="stock-badge">Stock requerido: ${item.stockRequerido} ${item.unidad}</span>` : ""}
              </div>
              ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ""}
            </div>
            <div class="eval-toggle-group">
              <input type="hidden" class="estado-valor validar-req" value="">
              <button type="button" class="eval-btn" data-val="Cumple" onclick="seleccionarEstado(this, 'Cumple')">✅ Cumple</button>
              <button type="button" class="eval-btn" data-val="No cumple" onclick="seleccionarEstado(this, 'No cumple')">❌ No cumple</button>
            </div>
          </div>
          <div class="mensaje-error">⚠️ Selecciona Cumple o No cumple para continuar</div>

          <div class="incumplimiento-box">
            <h4>⚠️ Reporte de Hallazgo: ${item.id}</h4>
            ${esBotiquin ? `
              <div class="botiquin-qty-grid">
                <div>
                  <label>Cantidad Estándar Requerida</label>
                  <input type="number" value="${item.stockRequerido}" disabled>
                </div>
                <div>
                  <label>Cantidad Actual Encontrada <span class="required">*</span></label>
                  <input type="number" class="qty-actual" min="0" max="999" placeholder="Ej: 0" oninput="this.classList.remove('error-input'); guardarBorrador();">
                  <div class="mensaje-error">⚠️ Indica la cantidad física encontrada</div>
                </div>
              </div>` : ""}
            <label>Describa el problema detectado (daño, faltante o vencimiento) <span class="required">*</span></label>
            <textarea class="desc-inc" rows="2" placeholder="Detalle la situación encontrada..." oninput="this.classList.remove('error-input'); guardarBorrador();"></textarea>
            <div class="mensaje-error">⚠️ La descripción del hallazgo es obligatoria</div>
            <label>Evidencia Fotográfica o Video (Opcional • Máx. ${CONFIG_MICROSOFT.maxFileSizeMB} MB)</label>
            <input type="file" class="file-inc" accept="image/*,video/*" onchange="validarTamanoArchivo(this)">
          </div>`;
      }

      html += `</div>`;
    });

    if (index === totalPasos - 1) {
      html += `
        <div class="card">
          <div class="item-title">Análisis General <span style="font-size:12px; color:var(--text-muted); font-weight:normal;">(Opcional)</span></div>
          <div class="item-desc">Observaciones finales de la inspección del gimnasio CAVS y su botiquín.</div>
          <textarea id="analisisFinal" rows="3" placeholder="Escribe tu análisis o recomendaciones generales..." oninput="guardarBorrador()"></textarea>

          <div class="summary-box">
            <div class="summary-stat"><span>Total Puntos</span><strong id="sum-total">55</strong></div>
            <div class="summary-stat"><span>Cumplen</span><strong id="sum-ok" style="color:var(--success);">0</strong></div>
            <div class="summary-stat"><span>No Cumplen</span><strong id="sum-fail" style="color:var(--error);">0</strong></div>
          </div>
        </div>`;
    }

    html += `<div class="btn-container">`;
    html += index > 0
      ? `<button type="button" class="btn-nav btn-back" onclick="cambiarPaso(-1)">← Atrás</button>`
      : `<div></div>`;

    html += index < totalPasos - 1
      ? `<button type="button" class="btn-nav btn-next" onclick="cambiarPaso(1)">Siguiente →</button>`
      : `<button type="button" class="btn-nav btn-final" id="btnFinal" onclick="enviarDatos()">Guardar Inspección en SharePoint</button>`;

    html += `</div></div>`;
  });

  document.getElementById("form-container").innerHTML = html;
  restaurarBorrador();
  actualizarKPIs();
}

function renderizarStepper() {
  const stepper = document.getElementById("stepper-bar");
  stepper.innerHTML = datosFormulario.map((sec, idx) => {
    let clase = "step-pill";
    if (idx === pasoActual) clase += " active";
    else if (idx < pasoActual) clase += " completed";
    return `<div class="${clase}" onclick="irAPasoDirecto(${idx})">${sec.tituloCorto}</div>`;
  }).join("");
}

// === [SECCIÓN JS 4: MECÁNICA DE EVALUACIÓN Y APROBACIÓN RÁPIDA] ===
function seleccionarEstado(boton, valor, omitirGuardado = false) {
  const cajaPadre = boton.closest(".item-caja");
  const inputOculto = cajaPadre.querySelector(".estado-valor");
  const botones = cajaPadre.querySelectorAll(".eval-btn");
  const cajaInc = cajaPadre.querySelector(".incumplimiento-box");
  const descArea = cajaPadre.querySelector(".desc-inc");
  const qtyInput = cajaPadre.querySelector(".qty-actual");

  inputOculto.value = valor;
  cajaPadre.classList.remove("card-error");

  botones.forEach(btn => btn.classList.remove("selected-cumple", "selected-nocumple"));

  if (valor === "Cumple") {
    boton.classList.add("selected-cumple");
    cajaInc.style.display = "none";
    descArea.classList.remove("validar-req-desc", "error-input");
    descArea.value = "";
    if (qtyInput) {
      qtyInput.classList.remove("validar-req-qty", "error-input");
      qtyInput.value = "";
    }
    cajaPadre.querySelector(".file-inc").value = "";
  } else {
    boton.classList.add("selected-nocumple");
    cajaInc.style.display = "block";
    descArea.classList.add("validar-req-desc");
    if (qtyInput) qtyInput.classList.add("validar-req-qty");
  }

  actualizarKPIs();
  if (!omitirGuardado) guardarBorrador();
}

function marcarSeccionCumple(indicePaso) {
  const contenedorPaso = document.getElementById(`paso-${indicePaso}`);
  const cajas = contenedorPaso.querySelectorAll(".item-caja");

  cajas.forEach(caja => {
    const valorActual = caja.querySelector(".estado-valor")?.value;
    if (!valorActual) {
      const btnCumple = caja.querySelector('.eval-btn[data-val="Cumple"]');
      if (btnCumple) seleccionarEstado(btnCumple, "Cumple", true);
    }
  });

  guardarBorrador();
}

function limpiarErrorSelect(selectElem) {
  selectElem.classList.remove("error-input");
  selectElem.closest(".item-caja").classList.remove("card-error");
}

function validarTamanoArchivo(input) {
  if (!input.files || input.files.length === 0) return;
  const archivo = input.files[0];
  const tamanoMB = archivo.size / (1024 * 1024);
  if (tamanoMB > CONFIG_MICROSOFT.maxFileSizeMB) {
    alert(`⚠️ El archivo "${archivo.name}" pesa ${tamanoMB.toFixed(1)} MB y supera el límite de ${CONFIG_MICROSOFT.maxFileSizeMB} MB. Por favor selecciona una imagen más ligera.`);
    input.value = "";
  }
}

function actualizarKPIs() {
  const inputsEstado = document.querySelectorAll(".estado-valor");
  const total = inputsEstado.length;
  let respondidos = 0;
  let cumplen = 0;
  let hallazgos = 0;

  inputsEstado.forEach(inp => {
    if (inp.value === "Cumple") {
      respondidos++;
      cumplen++;
    } else if (inp.value === "No cumple") {
      respondidos++;
      hallazgos++;
    }
  });

  document.getElementById("kpi-avance").textContent = `${respondidos}/${total}`;
  document.getElementById("kpi-cumplen").textContent = cumplen;
  document.getElementById("kpi-hallazgos").textContent = hallazgos;

  const sumTotal = document.getElementById("sum-total");
  const sumOk = document.getElementById("sum-ok");
  const sumFail = document.getElementById("sum-fail");
  if (sumTotal) sumTotal.textContent = total;
  if (sumOk) sumOk.textContent = cumplen;
  if (sumFail) sumFail.textContent = hallazgos;
}

// === [SECCIÓN JS 5: VALIDACIÓN BLOQUEANTE Y NAVEGACIÓN] ===
function validarPasoActual() {
  const pasoActivo = document.getElementById(`paso-${pasoActual}`);
  let esValido = true;
  let primerError = null;

  pasoActivo.querySelectorAll(".card-error").forEach(c => c.classList.remove("card-error"));
  pasoActivo.querySelectorAll(".error-input").forEach(c => c.classList.remove("error-input"));

  pasoActivo.querySelectorAll(".validar-req").forEach(campo => {
    if (!campo.value.trim()) {
      esValido = false;
      const caja = campo.closest(".item-caja");
      caja.classList.add("card-error");
      if (campo.tagName === "SELECT") campo.classList.add("error-input");
      if (!primerError) primerError = caja;
    }
  });

  pasoActivo.querySelectorAll(".validar-req-qty").forEach(qty => {
    if (qty.closest(".incumplimiento-box").style.display === "block" && qty.value === "") {
      esValido = false;
      qty.classList.add("error-input");
      if (!primerError) primerError = qty;
    }
  });

  pasoActivo.querySelectorAll(".validar-req-desc").forEach(ta => {
    if (ta.closest(".incumplimiento-box").style.display === "block" && !ta.value.trim()) {
      esValido = false;
      ta.classList.add("error-input");
      if (!primerError) primerError = ta;
    }
  });

  if (!esValido && primerError) {
    primerError.scrollIntoView({ behavior: "smooth", block: "center" });
    if (primerError.focus) primerError.focus();
  }

  return esValido;
}

function cambiarPaso(direccion) {
  if (direccion === 1 && !validarPasoActual()) return;

  document.getElementById(`paso-${pasoActual}`).classList.remove("activo");
  pasoActual += direccion;
  document.getElementById(`paso-${pasoActual}`).classList.add("activo");
  renderizarStepper();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function irAPasoDirecto(indiceDestino) {
  if (indiceDestino <= pasoActual) {
    document.getElementById(`paso-${pasoActual}`).classList.remove("activo");
    pasoActual = indiceDestino;
    document.getElementById(`paso-${pasoActual}`).classList.add("activo");
    renderizarStepper();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// === [SECCIÓN JS 6: AUTO-GUARDADO LOCAL (RESILIENCIA OFFLINE)] ===
function guardarBorrador() {
  const estado = {
    inspector: document.getElementById("input-inspector")?.value || "",
    analisisFinal: document.getElementById("analisisFinal")?.value || "",
    items: {}
  };

  document.querySelectorAll(".item-caja").forEach(caja => {
    const id = caja.dataset.id;
    if (id === "Quien reporta") return;
    const val = caja.querySelector(".estado-valor")?.value || "";
    if (val) {
      estado.items[id] = {
        estado: val,
        descripcion: caja.querySelector(".desc-inc")?.value || "",
        cantidadActual: caja.querySelector(".qty-actual")?.value || ""
      };
    }
  });

  localStorage.setItem(CONFIG_MICROSOFT.storageKey, JSON.stringify(estado));
}

function restaurarBorrador() {
  const raw = localStorage.getItem(CONFIG_MICROSOFT.storageKey);
  if (!raw) return;

  try {
    const borrador = JSON.parse(raw);
    let hayDatos = false;

    if (borrador.inspector) {
      document.getElementById("input-inspector").value = borrador.inspector;
      hayDatos = true;
    }
    if (borrador.analisisFinal) {
      document.getElementById("analisisFinal").value = borrador.analisisFinal;
      hayDatos = true;
    }

    document.querySelectorAll(".item-caja").forEach(caja => {
      const id = caja.dataset.id;
      const saved = borrador.items?.[id];
      if (saved && saved.estado) {
        hayDatos = true;
        const btn = caja.querySelector(`.eval-btn[data-val="${saved.estado}"]`);
        if (btn) seleccionarEstado(btn, saved.estado, true);
        if (saved.descripcion) caja.querySelector(".desc-inc").value = saved.descripcion;
        if (saved.cantidadActual !== "" && caja.querySelector(".qty-actual")) {
          caja.querySelector(".qty-actual").value = saved.cantidadActual;
        }
      }
    });

    if (hayDatos) {
      document.getElementById("draft-banner").style.display = "flex";
    }
  } catch (e) {
    localStorage.removeItem(CONFIG_MICROSOFT.storageKey);
  }
}

function reiniciarBorrador() {
  localStorage.removeItem(CONFIG_MICROSOFT.storageKey);
  location.reload();
}

// === [SECCIÓN JS 7: EMPAQUETADO JSON, REINTENTO DE RED Y CONEXIÓN A SHAREPOINT] ===
async function enviarConReintento(url, opciones, reintentos = 1) {
  try {
    return await fetch(url, opciones);
  } catch (err) {
    if (reintentos > 0) {
      console.warn("⚠️ Microcorte de red/DNS detectado. Reintentando conexión en 1.5s...");
      await new Promise(r => setTimeout(r, 1500));
      return enviarConReintento(url, opciones, reintentos - 1);
    }
    throw err;
  }
}

async function enviarDatos() {
  if (!validarPasoActual()) return;

  if (!navigator.onLine) {
    alert("📡 Sin conexión a internet. Tus respuestas están guardadas localmente; conéctate a la red e intenta de nuevo.");
    return;
  }

  if (!CONFIG_MICROSOFT.modoSimulacionLocal && !CONFIG_MICROSOFT.powerAutomateUrl.startsWith("https://")) {
    alert("⚠️ La URL de Power Automate en SECCIÓN JS 1 no es válida. Verifica que comience con https://");
    return;
  }

  const overlay = document.getElementById("loading-overlay");
  overlay.classList.add("active");
  window.onbeforeunload = () => "La inspección se está sincronizando con SharePoint...";

  try {
    const selectInspector = document.getElementById("input-inspector");
    const inputOtro = document.getElementById("input-inspector-otro");
    const inspector = (selectInspector?.value === "Otro")
      ? (inputOtro?.value.trim() || "Suplente sin nombre")
      : (selectInspector?.value || "Anónimo");

    const analisisGeneral = document.getElementById("analisisFinal")?.value.trim() || "";
    const fechaISO = new Date().toISOString();

    const payload = {
      inspector: inspector,
      fechaInspeccion: fechaISO,
      analisisGeneral: analisisGeneral,
      huboIncumplimiento: false,
      totalHallazgos: 0,
      registros: []
    };

    const cajas = document.querySelectorAll(".item-caja");
    for (const caja of cajas) {
      const elemento = caja.dataset.id;
      const categoria = caja.dataset.categoria;
      if (elemento === "Quien reporta") continue;

      const stockRequerido = caja.dataset.stockReq ? Number(caja.dataset.stockReq) : null;
      const estado = caja.querySelector(".estado-valor").value;
      let detalleFalla = "";
      let cantidadActual = stockRequerido;
      let archivoBase64 = null;
      let nombreArchivo = null;
      let tipoArchivo = null;

      if (estado === "No cumple") {
        payload.huboIncumplimiento = true;
        payload.totalHallazgos += 1;
        detalleFalla = caja.querySelector(".desc-inc").value.trim();

        const qtyInput = caja.querySelector(".qty-actual");
        if (qtyInput && qtyInput.value !== "") {
          cantidadActual = Number(qtyInput.value);
          detalleFalla = `[Stock: ${cantidadActual}/${stockRequerido} ${caja.dataset.unidad}] ${detalleFalla}`;
        }

        const fileInput = caja.querySelector(".file-inc");
        if (fileInput && fileInput.files.length > 0) {
          const fileData = await leerArchivoBase64(fileInput.files[0]);
          archivoBase64 = fileData.base64;
          nombreArchivo = `${Date.now()}_${fileData.name.replace(/[^\w.-]/g, "_")}`;
          tipoArchivo = fileData.type;
        }
      }

      payload.registros.push({
        elemento: elemento,
        categoria: categoria,
        estado: estado,
        stockRequerido: stockRequerido,
        cantidadActual: cantidadActual,
        detalleFalla: detalleFalla,
        tieneEvidencia: Boolean(archivoBase64),
        archivoBase64: archivoBase64,
        nombreArchivo: nombreArchivo,
        tipoArchivo: tipoArchivo
      });
    }

    if (CONFIG_MICROSOFT.modoSimulacionLocal) {
      console.log("📦 JSON generado para SharePoint / Power Automate:", payload);
      await new Promise(r => setTimeout(r, 900));
      localStorage.removeItem(CONFIG_MICROSOFT.storageKey);
      localStorage.removeItem("cavs_inspector_otro_v1");
      mostrarPantallaExito(payload);
      return;
    }

    const respuesta = await enviarConReintento(CONFIG_MICROSOFT.powerAutomateUrl.trim(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }, 1);

    if (!respuesta.ok) {
      const textoError = await respuesta.text().catch(() => "");
      throw new Error(`HTTP ${respuesta.status} ${textoError}`);
    }

    localStorage.removeItem(CONFIG_MICROSOFT.storageKey);
    localStorage.removeItem("cavs_inspector_otro_v1");
    mostrarPantallaExito(payload);

  } catch (error) {
    console.error("❌ Detalle técnico del fallo de red/CORS:", error);
    window.onbeforeunload = null;
    overlay.classList.remove("active");
    const mensajeUsuario = error.message === "Failed to fetch"
      ? "No se pudo contactar con Power Automate por un corte de red o DNS en este dispositivo. Tu borrador sigue guardado; verifica tu conexión e intenta de nuevo."
      : error.message;
    alert("❌ Error al guardar en SharePoint: " + mensajeUsuario);
  }
}

// === [SECCIÓN JS 8: MÓDULO DE SUPLENTE (OPCIÓN "OTRO" EN QUIEN REPORTA)] ===
function montarCampoOtro() {
  const STORAGE_KEY_OTRO = "cavs_inspector_otro_v1";
  const selectInspector = document.getElementById("input-inspector");
  if (!selectInspector || document.getElementById("input-inspector-otro")) return;

  // Limpiar respaldo de suplente si no existe borrador principal activo
  if (typeof CONFIG_MICROSOFT !== "undefined" && !localStorage.getItem(CONFIG_MICROSOFT.storageKey)) {
    localStorage.removeItem(STORAGE_KEY_OTRO);
  }

  // 1. Agregar la opción "Otro (Suplente)" al selector de Quien reporta
  const existeOtro = Array.from(selectInspector.options).some(opt => opt.value === "Otro");
  if (!existeOtro) {
    const opcionOtro = document.createElement("option");
    opcionOtro.value = "Otro";
    opcionOtro.textContent = "Otro (Suplente)";
    selectInspector.appendChild(opcionOtro);
  }

  // 2. Crear la caja de escritura oculta para el nombre del suplente
  const contenedorOtro = document.createElement("div");
  contenedorOtro.id = "contenedor-inspector-otro";
  contenedorOtro.style.display = "none";
  contenedorOtro.style.marginTop = "14px";
  contenedorOtro.innerHTML = `
    <label for="input-inspector-otro" style="display:block; font-size:13px; font-weight:600; color:var(--text-secondary);">
      Nombre completo del suplente <span class="required">*</span>
    </label>
    <input type="text" id="input-inspector-otro" class="input-base" placeholder="Escribe el nombre y apellido de quien realiza la inspección...">
    <div id="error-inspector-otro" class="mensaje-error">Por favor, ingresa el nombre del suplente para continuar.</div>
  `;

  const cardPadre = selectInspector.closest(".card");
  if (cardPadre) {
    cardPadre.appendChild(contenedorOtro);
  } else {
    selectInspector.insertAdjacentElement("afterend", contenedorOtro);
  }

  const inputOtro = document.getElementById("input-inspector-otro");
  const errorOtro = document.getElementById("error-inspector-otro");

  // 3. Restaurar si había un borrador con "Otro" seleccionado
  const nombreGuardado = localStorage.getItem(STORAGE_KEY_OTRO);
  if (selectInspector.value === "Otro" || nombreGuardado !== null) {
    selectInspector.value = "Otro";
    contenedorOtro.style.display = "block";
    inputOtro.value = nombreGuardado || "";
  }

  // 4. Mostrar u ocultar el campo según la elección del usuario
  selectInspector.addEventListener("change", () => {
    if (selectInspector.value === "Otro") {
      contenedorOtro.style.display = "block";
      localStorage.setItem(STORAGE_KEY_OTRO, inputOtro.value);
      inputOtro.focus();
    } else {
      contenedorOtro.style.display = "none";
      inputOtro.value = "";
      inputOtro.classList.remove("error-input");
      errorOtro.style.display = "none";
      localStorage.removeItem(STORAGE_KEY_OTRO);
    }
  });

  // 5. Autoguardar el nombre mientras escribe y limpiar alerta de error
  inputOtro.addEventListener("input", () => {
    localStorage.setItem(STORAGE_KEY_OTRO, inputOtro.value);
    if (inputOtro.value.trim().length >= 3) {
      inputOtro.classList.remove("error-input");
      errorOtro.style.display = "none";
    }
  });

  // 6. Bloquear avance al Paso 2 si eligió "Otro" y dejó el nombre vacío
  const validarSuplente = (e) => {
    if (selectInspector.value === "Otro" && inputOtro.value.trim().length < 3) {
      e.stopImmediatePropagation();
      e.preventDefault();
      inputOtro.classList.add("error-input");
      errorOtro.style.display = "block";
      inputOtro.focus();
    }
  };

  const formContainer = document.getElementById("form-container");
  if (formContainer) {
    formContainer.addEventListener("click", (e) => {
      if (e.target.closest(".btn-next")) validarSuplente(e);
    }, true);
  }

  const stepperBar = document.getElementById("stepper-bar");
  if (stepperBar) {
    stepperBar.addEventListener("click", (e) => {
      if (e.target.closest(".step-pill")) validarSuplente(e);
    }, true);
  }
}

// === [SECCIÓN JS 9: UTILIDADES DE ARCHIVOS, PANTALLA DE ÉXITO Y ARRANQUE] ===
function leerArchivoBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve({
      base64: e.target.result.split(",")[1],
      name: file.name,
      type: file.type
    });
    reader.onerror = err => reject(err);
    reader.readAsDataURL(file);
  });
}

function mostrarPantallaExito(payload) {
  window.onbeforeunload = null;
  document.getElementById("loading-overlay").classList.remove("active");

  const mensajeCorreo = payload.huboIncumplimiento
    ? `Se detectaron <strong>${payload.totalHallazgos} hallazgo(s)</strong> (mantenimiento o reposición de botiquín) y se disparó la notificación automática.`
    : "Los 55 puntos de control (máquinas, peso libre, infraestructura y botiquín) cumplen al 100%.";

  document.querySelector(".main-wrapper").innerHTML = `
    <div class="card" style="text-align:center; padding: 48px 24px; border-top: 5px solid var(--success);">
      <div style="font-size: 52px; margin-bottom: 14px;">✅</div>
      <h2 style="font-size: 24px; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">
        ¡Inspección CAVS Registrada!
      </h2>
      <p style="color: var(--text-secondary); font-size: 15px; max-width: 520px; margin: 0 auto 24px auto;">
        Los ${payload.registros.length} puntos evaluados fueron procesados por <strong>${payload.inspector}</strong>.<br><br>
        ${mensajeCorreo}
      </p>
      <button type="button" class="btn-nav btn-final" onclick="location.reload()">
        Iniciar Nueva Inspección
      </button>
    </div>`;
}

// Arranque secuencial garantizado: primero dibuja el formulario y luego monta la opción "Otro"
window.addEventListener("DOMContentLoaded", () => {
  iniciarFormulario();
  montarCampoOtro();
});