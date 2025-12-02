// Lógica del sorteo de Amigo Invisible

/**
 * Obtiene el resultado del sorteo para un usuario
 * @param {string} username - Nombre de usuario en minúsculas
 * @returns {object} - Objeto con información del amigo invisible
 */
function getAmigoInvisible(username) {
    const amigoUsername = SORTEO_RESULTS[username];
    
    if (!amigoUsername) {
        return null;
    }
    
    return {
        username: amigoUsername,
        fullName: USERS[amigoUsername].fullName
    };
}

/* ============================================
   FUNCIÓN PARA REGENERAR SORTEO (COMENTADA)
   ============================================
   
   Para usar esta función el próximo año:
   1. Descomenta todo el código entre estos comentarios
   2. Abre sorteo.html en el navegador
   3. Abre la consola del navegador (F12)
   4. Escribe: regenerarSorteo()
   5. Copia los resultados que aparecen en consola
   6. Pega los resultados en la constante SORTEO_RESULTS de config.js
   7. Vuelve a comentar esta función
   
   ============================================ */

/*
function regenerarSorteo(seed = null) {
    console.log('🎄 Generando nuevo sorteo de Amigo Invisible...\n');
    
    // Si se proporciona una semilla, usarla para aleatoriedad reproducible
    let random = Math.random;
    if (seed !== null) {
        // Generador de números pseudo-aleatorios con semilla
        let s = seed;
        random = function() {
            s = Math.sin(s) * 10000;
            return s - Math.floor(s);
        };
    }
    
    // Función para mezclar array (Fisher-Yates shuffle)
    function shuffle(array, randomFunc = Math.random) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(randomFunc() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    
    // Intentar generar sorteo válido (máximo 1000 intentos)
    for (let intento = 1; intento <= 1000; intento++) {
        const resultado = {};
        const disponibles = Object.keys(USERS);
        const shuffled = shuffle(disponibles, random);
        let valido = true;
        
        // Intentar asignar cada persona
        for (let i = 0; i < shuffled.length; i++) {
            const dador = shuffled[i];
            const receptor = shuffled[(i + 1) % shuffled.length];
            
            // Verificar restricciones
            if (dador === receptor || USERS[dador].family === USERS[receptor].family) {
                valido = false;
                break;
            }
            
            resultado[dador] = receptor;
        }
        
        if (valido) {
            console.log(`✅ Sorteo válido generado en el intento ${intento}\n`);
            console.log('📋 Copia el siguiente código en config.js:\n');
            console.log('const SORTEO_RESULTS = {');
            
            Object.keys(resultado).forEach(key => {
                console.log(`    '${key}': '${resultado[key]}',`);
            });
            
            console.log('};\n');
            console.log('🎁 Parejas generadas:');
            Object.keys(resultado).forEach(dador => {
                console.log(`   ${USERS[dador].fullName} → ${USERS[resultado[dador]].fullName}`);
            });
            
            return resultado;
        }
    }
    
    console.error('❌ No se pudo generar un sorteo válido después de 1000 intentos');
    return null;
}

// Para regenerar con una semilla específica (año, por ejemplo):
// regenerarSorteo(2025);
*/
