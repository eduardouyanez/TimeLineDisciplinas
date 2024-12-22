const rutinas = {
    inicio: [
        {
            titulo: "Veo-Pienso-Me Pregunto",
            descripcion: "Invita a la observación detenida de un estímulo visual, la interpretación y el planteamiento de preguntas.",
            detalles: [
                "Veo: Describir lo que se observa.",
                "Pienso: Inferir o interpretar significados.",
                "Me pregunto: Formular preguntas para profundizar."
            ],
            ejemplos: [
                "Mostrar una imagen de un ecosistema y pedir a los estudiantes que describan lo que ven, infieran relaciones ecológicas y formulen preguntas sobre los organismos involucrados.",
                "Usar una ilustración de portada de un cuento para que los estudiantes infieran la trama y formulen preguntas sobre los personajes."
            ]
        },
        {
            titulo: "Pensar-Preguntar-Explorar",
            descripcion: "Ayuda a expresar lo que creen saber, identificar dudas y planear investigación.",
            detalles: [
                "Pienso: ¿Qué creo saber sobre este tema?",
                "Pregunto: ¿Qué me intriga o confunde?",
                "Exploro: ¿Cómo puedo encontrar respuestas a estas dudas?"
            ],
            ejemplos: [
                "Antes de un proyecto sobre el sistema solar, pedir a los estudiantes que compartan lo que saben, formulen dudas y propongan métodos para investigar, como construir maquetas o leer libros sobre astronomía."
            ]
        },
        {
            titulo: "Bomba de Preguntas",
            descripcion: "Estimula la generación de una amplia variedad de preguntas para explorar un tema nuevo.",
            detalles: [
                "Proporcionar inicios de preguntas como '¿Por qué...?' o '¿Qué pasaría si...?'",
                "Generar múltiples preguntas a partir de estas fórmulas."
            ],
            ejemplos: [
                "Al presentar un cuadro histórico, como 'La Libertad guiando al pueblo', los estudiantes podrían preguntar: '¿Por qué se representa a la libertad como una mujer?', '¿Qué eventos inspiraron esta obra?'"
            ]
        },
        {
            titulo: "Zoom In / Zoom Out",
            descripcion: "Presenta una imagen o texto por partes, aumentando gradualmente la información para generar hipótesis y luego contrastarlas con la información completa.",
            detalles: [
                "Mostrar solo un detalle de una imagen (zoom in) y pedir interpretaciones.",
                "Ampliar progresivamente la imagen (zoom out), revelando más contexto.",
                "Comparar las hipótesis iniciales con la información completa."
            ],
            ejemplos: [
                "Mostrar una esquina de una pintura famosa y pedir a los estudiantes que predigan el tema general antes de revelar la obra completa."
            ]
        },
        {
            titulo: "Pensar-Parear-Compartir",
            descripcion: "Fomenta la reflexión individual, el intercambio entre pares y la socialización en grupo.",
            detalles: [
                "Pensar: Cada alumno reflexiona en silencio sobre una pregunta o problema.",
                "Parear: Se forman parejas para compartir y discutir sus ideas.",
                "Compartir: Las parejas exponen sus conclusiones al resto de la clase."
            ],
            ejemplos: [
                "Antes de una clase de ciencias, los estudiantes reflexionan sobre cómo creen que se produce la lluvia, comparten sus ideas con un compañero y luego presentan las conclusiones en grupo."
            ]
        },
        {
            titulo: "Lluvia de Preguntas",
            descripcion: "Recoger las preguntas iniciales de los estudiantes sobre un tema para enfocar la indagación posterior.",
            detalles: [
                "Presentar un tema o disparador visual/verbal.",
                "Pedir a los alumnos que escriban todas las preguntas que les surjan, sin censura.",
                "Recoger y organizar las preguntas en una lista, mural o banco de preguntas."
            ],
            ejemplos: [
                "Al presentar un tema sobre cambio climático, los estudiantes podrían preguntar: '¿Cómo afecta el deshielo de los polos al nivel del mar?', '¿Qué soluciones se están implementando?'"
            ]
        }
    ],
    desarrollo: [
        {
            titulo: "Círculo de Puntos de Vista",
            descripcion: "Explora un tema desde diferentes perspectivas para ampliar la comprensión.",
            detalles: [
                "Identificar perspectivas o voces relacionadas con el tema.",
                "Describir cómo cada perspectiva ve el problema."
            ],
            ejemplos: [
                "Analizar un conflicto medioambiental desde la perspectiva de un activista, una empresa y el gobierno." 
            ]
        },
        {
            titulo: "Conectar-Expandir-Desafiar",
            descripcion: "Relaciona el nuevo aprendizaje con lo previo y plantea retos intelectuales.",
            detalles: [
                "Conectar: ¿Cómo se relaciona esto con lo que ya sabías?",
                "Expandir: ¿Qué nuevas ideas o preguntas surgen?",
                "Desafiar: ¿Qué resulta complejo o contradictorio?"
            ],
            ejemplos: [
                "Después de aprender sobre células madre, conectar con la regeneración de tejidos, expandir hacia el uso médico y desafiar con cuestiones éticas."
            ]
        },
        {
            titulo: "Color, Símbolo, Imagen",
            descripcion: "Representa un concepto con un color, símbolo e imagen para sintetizar su esencia.",
            detalles: [
                "Escoger un color que represente la idea.",
                "Seleccionar un símbolo y una imagen que ilustre el concepto."
            ],
            ejemplos: [
                "Al estudiar la Revolución Francesa: Color rojo (sangre derramada), símbolo: la guillotina, imagen: La Libertad guiando al pueblo."
            ]
        },
        {
            titulo: "Partes, Propósitos, Complejidades",
            descripcion: "Analizar un sistema u objeto descomponiéndolo en partes, identificando su función y reconociendo complejidades.",
            detalles: [
                "Identificar las partes que componen el objeto o sistema.",
                "Definir el propósito de cada parte.",
                "Explorar las complejidades y relaciones entre las partes."
            ],
            ejemplos: [
                "Estudiar un ecosistema identificando organismos clave (productores, consumidores, descomponedores) y sus roles."
            ]
        },
        {
            titulo: "Compara y Contrasta",
            descripcion: "Examinar similitudes y diferencias entre dos elementos para comprender mejor su naturaleza.",
            detalles: [
                "Seleccionar dos objetos, conceptos o textos a comparar.",
                "Identificar en qué se parecen (similitudes).",
                "Señalar en qué difieren (diferencias).",
                "Concluir qué se aprende de esa comparación."
            ],
            ejemplos: [
                "Comparar dos personajes literarios de una novela para analizar sus decisiones y motivaciones."
            ]
        },
        {
            titulo: "Afirmación-Argumento-Pregunta",
            descripcion: "Desarrollar pensamiento crítico al elaborar una afirmación, respaldarla con evidencia y generar una nueva pregunta.",
            detalles: [
                "Afirmación: Proponer una idea o conclusión.",
                "Argumento: Apoyar la afirmación con datos, ejemplos o evidencias.",
                "Pregunta: Formular una pregunta que surja de la afirmación y el argumento."
            ],
            ejemplos: [
                "Afirmación: 'El cambio climático es una realidad.' Argumento: Datos de temperatura global. Pregunta: '¿Qué medidas pueden mitigar sus efectos?'"
            ]
        }
    ],
    cierre: [
        {
            titulo: "Antes pensaba... Ahora pienso...",
            descripcion: "Destaca la evolución del pensamiento tras la experiencia de aprendizaje.",
            detalles: [
                "Antes pensaba: Reflexionar sobre las ideas previas.",
                "Ahora pienso: Expresar los nuevos aprendizajes."
            ],
            ejemplos: [
                "En ciencias: Antes pensaba que la energía solo se obtiene de combustibles fósiles; ahora pienso en fuentes renovables como la solar y la eólica."
            ]
        },
        {
            titulo: "Palabra-Frase-Oración",
            descripcion: "Elige una palabra, frase y oración que representen lo esencial de un texto o lección.",
            detalles: [
                "Escoger una palabra clave.",
                "Seleccionar una frase impactante.",
                "Elegir una oración que resuma la idea central."
            ],
            ejemplos: [
                "Después de leer un artículo sobre el cambio climático: Palabra: Crisis, Frase: 'Es un problema global', Oración: 'Debemos actuar ahora.'"
            ]
        },
        {
            titulo: "3-2-1 Puente",
            descripcion: "Comparar ideas iniciales con las finales, evidenciando el puente cognitivo.",
            detalles: [
                "Escribir 3 ideas, 2 preguntas y 1 metáfora al inicio y final del proceso.",
                "Comparar los cambios y observar la evolución."
            ],
            ejemplos: [
                "Al inicio de una lección sobre el ciclo del agua, anotar ideas básicas; al final, integrar conceptos avanzados como infiltración y transpiración."
            ]
        },
        {
            titulo: "Semáforo",
            descripcion: "Identificar lo claro (verde), lo dudoso (amarillo) y lo que requiere más indagación (rojo).",
            detalles: [
                "Verde: ¿Qué entendiste claramente?",
                "Amarillo: ¿Qué todavía genera dudas?",
                "Rojo: ¿Qué necesitas detenerte a investigar más?"
            ],
            ejemplos: [
                "Después de una clase sobre el sistema solar: Verde: 'Entiendo las órbitas planetarias.' Amarillo: 'No estoy seguro de cómo se forman los eclipses.' Rojo: 'Quiero investigar sobre agujeros negros.'"
            ]
        },
        {
            titulo: "One Word Story",
            descripcion: "Sintetizar el aprendizaje en una sola palabra y justificarla.",
            detalles: [
                "Pedir a cada alumno que elija una palabra que defina la experiencia de aprendizaje.",
                "Explicar por qué eligió esa palabra."
            ],
            ejemplos: [
                "Al estudiar la Revolución Industrial: 'Cambio' porque representa el impacto tecnológico y social de la época."
            ]
        },
        {
            titulo: "Mapas de Ideas",
            descripcion: "Organizar, clasificar y conectar las ideas clave para representar la estructura del conocimiento.",
            detalles: [
                "Generar una lista de ideas sobre el tema.",
                "Ordenar las ideas en categorías.",
                "Conectar las ideas entre sí con líneas y anotaciones.",
                "Elaborar añadiendo detalles y explicaciones a las conexiones."
            ],
            ejemplos: [
                "En una lección de biología, crear un mapa de ideas sobre el sistema nervioso: Categorías como 'cerebro', 'nervios periféricos', 'funciones', y conectar con detalles sobre su interacción y control del cuerpo.",
                "En historia, organizar eventos clave de una revolución en un mapa de ideas para comprender las causas, el desarrollo y las consecuencias."
            ]
        }
    ]
};
