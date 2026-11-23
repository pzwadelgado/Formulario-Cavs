<!-- === [MÓDULO DOC - SECCIÓN 1: IDENTIDAD DEL PROYECTO] === -->
# 🏋️ Sistema Digital de Inspecciones CAVS • Pozuelo SST

Aplicación web progresiva y responsiva para la ejecución mensual de inspecciones de mantenimiento, infraestructura y control de stock de botiquín en el Gimnasio Corporativo CAVS (Compañía de Galletas Pozuelo DCR S.A.).

<!-- === [MÓDULO DOC - SECCIÓN 2: ARQUITECTURA DE 3 CAPAS] === -->
## 🛡️ Arquitectura Modular
* **`index.html` (Núcleo Estructural):** Maquetación semántica, viewport móvil y contenedores de métricas en tiempo real.
* **`styles.css` (Identidad Corporativa):** Paleta oficial Pozuelo/CAVS, diseño adaptable (`@media max-width: 640px`) y ergonomía táctil para campo.
* **`app.js` (Motor Dinámico y Conexión):** Catálogo de 55 puntos de control, respaldo offline en `localStorage`, módulo de suplente y envío asíncrono vía `Fetch API` con reintento automático.

<!-- === [MÓDULO DOC - SECCIÓN 3: INTEGRACIÓN MICROSOFT 365] === -->
## ⚙️ Flujo de Datos en la Nube
1. **Frontend (GitHub Pages):** Empaqueta la inspección y las evidencias fotográficas en Base64 dentro de un objeto JSON.
2. **Orquestación (Power Automate):** Recibe el `POST`, almacena las evidencias en biblioteca documental y registra cada ítem en SharePoint.
3. **Base de Datos y Alertas (SharePoint + Exchange Online):** Persiste el historial en la lista `CAVS_Inspecciones` y envía una alerta HTML tabular con enlace directo cuando `totalHallazgos > 0`.