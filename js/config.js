// Configuración de usuarios, familias y sorteo
// Amigo Invisible 2025

const USERS = {
    // Familia Hermann
    'raul': { password: '2847', fullName: 'Raul', family: 'hermann' },
    'ana': { password: '9153', fullName: 'Ana', family: 'hermann' },
    'juan': { password: '4729', fullName: 'Juan', family: 'hermann' },
    'claudia': { password: '6384', fullName: 'Claudia', family: 'hermann' },
    'nicolas': { password: '1956', fullName: 'Nicolas', family: 'hermann' },
    'romina': { password: '8402', fullName: 'Romina', family: 'hermann' },
    
    // Familia Vazquez
    'emiliano': { password: '3671', fullName: 'Emiliano', family: 'vazquez' },
    'maira': { password: '5298', fullName: 'Maira', family: 'vazquez' },
    'claudio': { password: '7105', fullName: 'Claudio', family: 'vazquez' },
    'viviana': { password: '4862', fullName: 'Viviana', family: 'vazquez' },
    'victor': { password: '9234', fullName: 'Victor', family: 'vazquez' },
    'lara': { password: '1547', fullName: 'Lara', family: 'vazquez' }
};

// Definición de familias (oculto del frontend)
const FAMILIES = {
    'hermann': ['raul', 'ana', 'juan', 'claudia', 'nicolas', 'romina'],
    'vazquez': ['emiliano', 'maira', 'claudio', 'viviana', 'victor', 'lara']
};

// Resultados del sorteo pre-generado
// Cada persona da regalo a quien aparece como valor
// NOTA: Este sorteo fue generado respetando las reglas:
// - Nadie se regala a sí mismo
// - Nadie regala a miembros de su propia familia
const SORTEO_RESULTS = {
    'raul': 'emiliano',
    'ana': 'maira',
    'juan': 'claudio',
    'claudia': 'viviana',
    'nicolas': 'victor',
    'romina': 'lara',
    'emiliano': 'raul',
    'maira': 'ana',
    'claudio': 'juan',
    'viviana': 'claudia',
    'victor': 'nicolas',
    'lara': 'romina'
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { USERS, FAMILIES, SORTEO_RESULTS };
}
