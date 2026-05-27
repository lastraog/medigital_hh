// --- BASES DE DATOS ESTÁTICAS (FÁCILES DE EDITAR) ---
const DB_LIDERES = [
    "Andrés Benedicto Leiva",
    "Benjamín Ronaldo Díaz",
    "Carlos Jara G.",
    "Diego Eduardo Fuentes",
    "Eduardo Andrés Menares",
    "Enzo Alejandro Delgado",
    "Héctor Andrés Mondaca",
    "Henry Horacio Ardiles",
    "José Alfredo Abarca",
    "Rodolfo Maximiliano Guzmán",
    "Rodrigo Alan Irigoyen",
    "Rodrigo Nicolás Pérez",
    "Rubén Andrés Meza",
    "Sebastián Rodrigo Pérez",
    "Tamara Fernanda Hernández",
    "Zibor Alejandro Obreque"
];

const DB_PERSONAL = [
    "Aldo Stefano Ramírez",
    "Andrés Benedicto Leiva",
    "Anita Valentina Córdova",
    "Ariel Marcelo Medina",
    "Benjamín Ronaldo Díaz",
    "Camila Isabel Chandía",
    "Camilo Sebastián Trujillo",
    "Carlos Felipe Valdés",
    "Claudio Nicolás Silva",
    "Constanza Gabriel González",
    "Cristopher Raúl Santander",
    "Daniel Ángel Arango",
    "Diego Alonso Moreno",
    "Diego Eduardo Fuentes",
    "Eduardo Andrés Menares",
    "Eduardo Enrique Alvarado",
    "Enzo Alejandro Delgado",
    "Esteban Andrés Lagos",
    "Felipe Esteban Herrera",
    "Francisco Javier Rojas",
    "Freddy Aaron López",
    "Gonzalo Andrés Rojas",
    "Guillermo Marcelo Enrique Lastra",
    "Héctor Andrés Mondaca",
    "Henry Horacio Ardiles",
    "Hugo Javier Bruna",
    "Ignacio Benjamín Tapia",
    "Ignacio Gabriel Durán",
    "Ignacio Javier González",
    "Iván Alejandro Navarrete",
    "Javier Enrique Cruz",
    "Jesús Aroon Aballay",
    "Jorge Alberto Chávez",
    "José Alfredo Abarca",
    "Juan Luis Aguilera",
    "Juan Manuel Leon",
    "Juan Pablo Briceño",
    "Julio Andrés Salas",
    "Lucas Ignacio Saez",
    "María Ignacia Carvacho",
    "María José Ramírez",
    "Mario Andrés Moscoso",
    "Matías Nicolás Villalobos",
    "Melanie Ivania Lira",
    "Miguel Andrés Garcés",
    "Nasly Stefany Rondon",
    "Nicolás Alberto Grez",
    "Oskar Karim García",
    "Pablo Cristian Ortiz",
    "Ramiro Andrés López",
    "René Alejandro Guzmán",
    "Ricardo Ignacio Piña",
    "Rino Christian Paredes",
    "Roberto Jesús Narváez",
    "Rodolfo Maximiliano Guzmán",
    "Rodrigo Alan Irigoyen",
    "Rodrigo Nicolás Pérez",
    "Rubén Andrés Meza",
    "Samuel Alejandro Escobar",
    "Sebastián Alejandro Rodríguez",
    "Sebastián Enrique Segura",
    "Sebastián Rodrigo Pérez",
    "Sergio Aníbal Pinto",
    "Tamara Alejandra González",
    "Tamara Eugenia Rubio",
    "Tamara Fernanda Hernández",
    "Tomás Ignacio Verdugo",
    "Zibor Alejandro Obreque"
];

const DB_TAREAS = [
    { id: "T01", desc: "Scaneo Molinos SAG" },
    { id: "T02", desc: "Scaneo Molinos Bolas" },
    { id: "T03", desc: "Scaneo Chancado" },
    { id: "T04", desc: "Scaneo otros" },
    { id: "T05", desc: "Soporte Comercial" },
    { id: "T06", desc: "Soporte GM" },
    { id: "T07", desc: "Soporte MED" },
    { id: "T08", desc: "Handy Metro repuestos" },
    { id: "T09", desc: "Phased Array Coronas" },
    { id: "T10", desc: "Ultrasonido convencional" },
    { id: "T11", desc: "Otros END" },
    { id: "T12", desc: "Alineamiento vibraciones" },
    { id: "T13", desc: "Auditorias Inst pernos" },
    { id: "T14", desc: "Soporte eco circular" }
];

const DB_OPORTUNIDADES = [
    { id: "O01", desc: "Asbuil Estanques" },
    { id: "O02", desc: "Asbuil Harneros" },
    { id: "O03", desc: "Asbuil Espesadores" },
    { id: "O04", desc: "Auditorias Inst pernos" },
    { id: "O05", desc: "Cambios de Corona" },
    { id: "O06", desc: "Revestimiento de Shute" },
    { id: "O07", desc: "Sesorización de Pernos SMTP" },
    { id: "O08", desc: "Perfect Blend" },
    { id: "O09", desc: "Trustgap" },
    { id: "O10", desc: "QuickScan Chandado" },
    { id: "O11", desc: "QuickScan Molino" },
    { id: "O12", desc: "ME Tracking Liners" },
    { id: "O13", desc: "Alineamiento vibraciones" },
    { id: "O14", desc: "Auditorias Inst pernos" },
    { id: "O15", desc: "Detección de Piezas Scrap de Bolas" },
    { id: "O16", desc: "Detección de Fuega de Pulpa (LPDS)" },
    { id: "O17", desc: "Sens. de Harneros Cadetech" },
    { id: "O18", desc: "Sens. de Palas Equipos Mina Cadetech" },
    { id: "O19", desc: "Otros" }
];

document.addEventListener('DOMContentLoaded', () => {

    // --- CARGAR DATOS DINÁMICOS ---
    const selectLider = document.getElementById('lider');
    DB_LIDERES.forEach(lider => {
        selectLider.add(new Option(lider, lider));
    });

    const selectPersona = document.getElementById('persona');
    DB_PERSONAL.forEach(persona => {
        selectPersona.add(new Option(persona, persona));
    });

    const selectOportunidad = document.getElementById('codigo_oportunidad');
    DB_OPORTUNIDADES.forEach(op => {
        selectOportunidad.add(new Option(`${op.id} - ${op.desc}`, op.id));
    });

    const containerTareas = document.getElementById('container_tareas');
    DB_TAREAS.forEach(tarea => {
        const div = document.createElement('div');
        div.className = 'checkbox-item';
        div.innerHTML = `
            <input type="checkbox" id="chk_${tarea.id}" value="${tarea.id}" name="tareas_personales">
            <label for="chk_${tarea.id}">${tarea.id} - ${tarea.desc}</label>
        `;
        containerTareas.appendChild(div);
    });

    
    // --- LÓGICA CONDICIONAL: Ocultar/Mostrar Secciones ---
    const chkTraslados = document.getElementById('hubo_traslados');
    const containerLogistica = document.getElementById('logistica_container');
    
    chkTraslados.addEventListener('change', (e) => {
        if(e.target.checked) {
            containerLogistica.classList.add('visible');
        } else {
            containerLogistica.classList.remove('visible');
            // Limpiar valores si se desmarca
            document.getElementById('ida_fecha').value = '';
            document.getElementById('ida_salida').value = '';
            document.getElementById('ida_llegada').value = '';
            document.getElementById('regreso_fecha').value = '';
            document.getElementById('regreso_salida').value = '';
            document.getElementById('regreso_llegada').value = '';
        }
    });

    const chkOportunidad = document.getElementById('hubo_oportunidad');
    const containerComercial = document.getElementById('comercial_container');
    
    chkOportunidad.addEventListener('change', (e) => {
        if(e.target.checked) {
            containerComercial.classList.add('visible');
        } else {
            containerComercial.classList.remove('visible');
            document.getElementById('codigo_oportunidad').value = '';
            document.getElementById('area_oportunidad').value = '';
            document.getElementById('descripcion_oportunidad').value = '';
        }
    });


    // --- LÓGICA MAESTRO-DETALLE (Sub-formulario) ---
    const btnAddTech = document.getElementById('btnAddTech');
    const techListUI = document.getElementById('techList');
    
    let tecnicosDetalle = [];

    btnAddTech.addEventListener('click', () => {
        const personaSelect = document.getElementById('persona');
        const tipoCliente = document.getElementById('tipo_cliente');
        const inicioAM = document.getElementById('hora_inicio');
        const finAM = document.getElementById('hora_fin');
        const inicioPM = document.getElementById('hora_inicio_pm');
        const finPM = document.getElementById('hora_fin_pm');
        const heDia = document.getElementById('horas_extra_dia');
        const heNoche = document.getElementById('horas_extra_noche');

        const personaName = personaSelect.value;
        if (!personaName) {
            alert('Por favor selecciona a una persona del equipo.');
            return;
        }

        // Obtener tareas seleccionadas desde los checkboxes generados
        const checkboxesTareas = document.querySelectorAll('input[name="tareas_personales"]:checked');
        const tareasArray = Array.from(checkboxesTareas).map(chk => chk.value);

        if(tareasArray.length === 0) {
            alert('Por favor selecciona al menos un código de tarea.');
            return;
        }

        // Crear objeto fila
        const fila = {
            id: Date.now(), // ID temporal para UI
            Persona_ME: personaName,
            Codigo_Trabajo: tareasArray.join(', '),
            Tipo_Cliente: tipoCliente.value,
            Hora_Inicio_AM: inicioAM.value,
            Hora_Fin_AM: finAM.value,
            Hora_Inicio_PM: inicioPM ? inicioPM.value : '',
            Hora_Fin_PM: finPM ? finPM.value : '',
            Horas_Extra_Dia: heDia.value || 0,
            Horas_Extra_Noche: heNoche.value || 0
        };

        tecnicosDetalle.push(fila);
        renderTechList();
        
        // Limpiar sub-formulario
        personaSelect.value = '';
        inicioAM.value = '';
        finAM.value = '';
        if(inicioPM) inicioPM.value = '';
        if(finPM) finPM.value = '';
        heDia.value = '';
        heNoche.value = '';
        checkboxesTareas.forEach(chk => chk.checked = false);
    });

    function renderTechList() {
        techListUI.innerHTML = '';
        tecnicosDetalle.forEach(tech => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div>
                    <strong>${tech.Persona_ME}</strong><br>
                    <small>Tareas: ${tech.Codigo_Trabajo} | AM: ${tech.Hora_Inicio_AM}-${tech.Hora_Fin_AM} | PM: ${tech.Hora_Inicio_PM}-${tech.Hora_Fin_PM} | HE-D: ${tech.Horas_Extra_Dia} | HE-N: ${tech.Horas_Extra_Noche}</small>
                </div>
                <button type="button" class="btn-remove" onclick="removeTech(${tech.id})">Quitar</button>
            `;
            techListUI.appendChild(li);
        });
    }

    window.removeTech = function(id) {
        tecnicosDetalle = tecnicosDetalle.filter(t => t.id !== id);
        renderTechList();
    };


    // --- LÓGICA DE ENVÍO FINAL (MAILTO BRIDGE) ---
    const reportForm = document.getElementById('reportForm');
    
    reportForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if(tecnicosDetalle.length === 0) {
            alert('Debes agregar al menos a una persona al reporte en la Sección 2.');
            return;
        }

        const btnSubmit = document.getElementById('btnSubmit');
        const btnOriginalText = btnSubmit.innerText;
        btnSubmit.innerText = 'Generando Correo...';
        btnSubmit.disabled = true;

        // 1. Recopilar datos del Maestro
        const reporteMaestro = {
            Cliente: document.getElementById('cliente').value,
            Minera_Faena: document.getElementById('faena').value,
            Planta: document.getElementById('planta').value,
            Fecha_Servicio: document.getElementById('fecha').value,
            Lider_Cargo: document.getElementById('lider').value,
            Descripcion_General: document.getElementById('descripcion').value,
            
            Riesgos_Detectados: document.getElementById('riesgos').value,
            Mitigacion: document.getElementById('mitigacion').value,
            
            Hubo_Traslados: chkTraslados.checked,
            IDA_Fecha: document.getElementById('ida_fecha').value,
            IDA_Hora_Salida: document.getElementById('ida_salida').value,
            IDA_Hora_Llegada: document.getElementById('ida_llegada').value,
            REGRESO_Fecha: document.getElementById('regreso_fecha').value,
            REGRESO_Hora_Salida: document.getElementById('regreso_salida').value,
            REGRESO_Hora_Llegada: document.getElementById('regreso_llegada').value,
            
            Hubo_Oportunidad: chkOportunidad.checked,
            Codigo_Oportunidad: document.getElementById('codigo_oportunidad').value,
            Area_Oportunidad: document.getElementById('area_oportunidad').value,
            Descripcion_Oportunidad: document.getElementById('descripcion_oportunidad').value
        };

        // 2. Construir el Cuerpo del Correo como JSON
        const payloadJSON = {
            ...reporteMaestro,
            Tecnicos: tecnicosDetalle.map(t => {
                const { id, ...resto } = t; // quitamos el id temporal
                return resto;
            })
        };

        // Formatear JSON con 2 espacios para que sea limpio y legible
        const bodyText = JSON.stringify(payloadJSON, null, 2);

        // 3. Generar el enlace Mailto
        // CAMBIA ESTE CORREO POR LA BANDEJA QUE RECIBIRÁ LOS REPORTES (ej: reportes@tuempresa.com)
        const emailDestino = "glastra@me-elecmetal.com"; 
        const asunto = `NUEVO_REPORTE_TERRENO - ${reporteMaestro.Cliente} - ${reporteMaestro.Fecha_Servicio}`;
        
        const mailtoLink = `mailto:${emailDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(bodyText)}`;

        // 4. Abrir la app de correo del usuario
        window.location.href = mailtoLink;

        // 5. Restablecer la interfaz
        setTimeout(() => {
            reportForm.reset();
            tecnicosDetalle = [];
            renderTechList();
            containerLogistica.classList.remove('visible');
            containerComercial.classList.remove('visible');
            
            btnSubmit.innerText = btnOriginalText;
            btnSubmit.disabled = false;
        }, 2000);
    });
});
