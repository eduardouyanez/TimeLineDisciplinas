const renderRutinas = (containerId, rutinasArray) => {
    const container = document.getElementById(containerId);
    const fragment = document.createDocumentFragment();

    rutinasArray.forEach((rutina, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${rutina.titulo}</h5>
                    <p class="card-text">${rutina.descripcion}</p>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                        <button class="btn btn-primary" id="toggle-${containerId}-${index}" data-target="${containerId}-${index}">Ver más</button>
                        <small class="text-muted">By Project Zero</small>
                    </div>
                    <div class="collapse mt-3" id="${containerId}-${index}">
                        <div class="alert alert-info">
                            <strong>Detalles:</strong>
                            <ul>
                                ${rutina.detalles.map(detalle => `<li>${detalle}</li>`).join('')}
                            </ul>
                            <strong>Ejemplos:</strong>
                            <ul>
                                ${rutina.ejemplos.map(ejemplo => `<li>${ejemplo}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
};

// Renderizar las rutinas en sus respectivos contenedores
renderRutinas('inicio-container', rutinas.inicio);
renderRutinas('desarrollo-container', rutinas.desarrollo);
renderRutinas('cierre-container', rutinas.cierre);

// Agregar funcionalidad de colapso y cambio de texto del botón
document.addEventListener('click', (event) => {
    if (event.target.matches('.btn-primary')) {
        const id = event.target.getAttribute('data-target');
        const targetCollapse = document.getElementById(id);

        if (targetCollapse.classList.contains('show')) {
            targetCollapse.classList.remove('show');
            event.target.innerText = 'Ver más';
        } else {
            targetCollapse.classList.add('show');
            event.target.innerText = 'Ver menos';
        }
    }
});

// Funcionalidad del botón "+"
document.addEventListener('click', (event) => {
    if (event.target.matches('.add-tab-button')) {
        const tabContentId = event.target.getAttribute('data-tab');
        alert(`Botón "+" presionado en la pestaña: ${tabContentId}`);
        // Aquí puedes agregar lógica para abrir un formulario o añadir contenido dinámico.
    }
});

// Detectar cambios en los tabs y mover el botón "+" al tab activo
document.getElementById('rutinasTabs').addEventListener('shown.bs.tab', (event) => {
    const activeTab = event.target; // El tab actualmente seleccionado
    const button = document.querySelector('.btn-primary.position-absolute');
    const tabBounds = activeTab.getBoundingClientRect();

    // Ajustar la posición del botón para que quede más cerca del tab activo
    button.style.top = `${tabBounds.top + window.scrollY + 5}px`; // Ajuste vertical (+5px para margen superior)
    button.style.left = `${tabBounds.right - 330}px`; // Ajuste horizontal (-40px para alinear mejor con el tab)
});

// Asegurar que el botón esté al lado del tab activo al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-rutina-btn');
    const updateButtonPosition = () => {
        const activeTab = document.querySelector('.nav-tabs .nav-link.active');
        if (activeTab) {
            const tabRect = activeTab.getBoundingClientRect();
            const navRect = activeTab.closest('.nav-tabs').getBoundingClientRect();

            // Calcular posición del botón
            addButton.style.top = `${tabRect.top + window.scrollY + tabRect.height / 2 - 20}px`;
            addButton.style.left = `${tabRect.right + window.scrollX - 330}px`;
        }
    };

    // Actualizar posición al cargar la página
    updateButtonPosition();

    // Escuchar eventos de cambio de tab para mover el botón
    document.querySelectorAll('.nav-tabs .nav-link').forEach(tab => {
        tab.addEventListener('shown.bs.tab', updateButtonPosition);
    });

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', updateButtonPosition);
});


