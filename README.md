# 🎄 Amigo Invisible 2024

Aplicación web para sorteo de Amigo Invisible familiar con restricciones de familia.

## 📋 Credenciales de Acceso

| Usuario | Contraseña | Familia |
|---------|------------|---------|
| raul | 2847 | Hermann |
| ana | 9153 | Hermann |
| juan | 4729 | Hermann |
| claudia | 6384 | Hermann |
| nicolas | 1956 | Hermann |
| romina | 8402 | Hermann |
| emiliano | 3671 | Vazquez |
| maira | 5298 | Vazquez |
| claudio | 7105 | Vazquez |
| viviana | 4862 | Vazquez |
| victor | 9234 | Vazquez |
| lara | 1547 | Vazquez |

## 🚀 Cómo Usar

1. Abre el archivo `index.html` en tu navegador
2. Ingresa tu usuario (en minúsculas) y tu contraseña de 4 dígitos
3. Haz clic en "Descubrir mi Amigo Invisible"
4. Haz clic en el botón "¡Descubrir!" para revelar tu amigo invisible
5. ¡Guarda el secreto! 🤫

## 🎁 Características

- ✅ Sistema de autenticación simple con usuario y contraseña
- ✅ 12 participantes divididos en 2 familias
- ✅ Restricciones: nadie puede regalarse a sí mismo ni a miembros de su propia familia
- ✅ Sorteo pre-generado y fijo para toda la temporada
- ✅ Diseño responsive con Bootstrap 5
- ✅ Tema navideño con animaciones
- ✅ Sesión temporal (se borra al cerrar el navegador)

## 🔄 Regenerar Sorteo para el Próximo Año

Si deseas generar un nuevo sorteo para la próxima navidad:

1. Abre el archivo `js/sorteo.js`
2. Busca el comentario que dice `FUNCIÓN PARA REGENERAR SORTEO (COMENTADA)`
3. Descomenta todo el código de la función `regenerarSorteo()`
4. Abre `sorteo.html` en tu navegador
5. Abre la Consola del Desarrollador (F12)
6. En la consola, ejecuta uno de estos comandos:
   - `regenerarSorteo()` - para un sorteo completamente aleatorio
   - `regenerarSorteo(2025)` - para un sorteo con semilla del año 2025 (reproducible)
7. Copia el código que aparece en la consola
8. Pega el código en `js/config.js`, reemplazando el objeto `SORTEO_RESULTS`
9. Vuelve a comentar la función en `js/sorteo.js`
10. ¡Listo! El nuevo sorteo está activo

### Ejemplo de salida en consola:

```javascript
const SORTEO_RESULTS = {
    'raul': 'emiliano',
    'ana': 'maira',
    // ... etc
};
```

## 📁 Estructura del Proyecto

```
amigo/
├── index.html              # Página de login
├── sorteo.html             # Página de resultado
├── README.md               # Este archivo
├── css/
│   └── styles.css          # Estilos personalizados navideños
└── js/
    ├── config.js           # Configuración de usuarios y sorteo
    ├── auth.js             # Sistema de autenticación
    └── sorteo.js           # Lógica del sorteo
```

## 🔒 Seguridad

Esta aplicación está diseñada para uso familiar interno. Las contraseñas están en el código fuente (no es seguro para uso público), pero es suficiente para mantener la sorpresa entre familiares.

**Importante:** No subas esta aplicación a un servidor público sin implementar medidas de seguridad adicionales.

## 💡 Notas Técnicas

- **No requiere servidor:** Funciona abriendo `index.html` directamente en el navegador
- **SessionStorage:** Los datos de sesión se borran al cerrar el navegador
- **Sin base de datos:** Todo está en archivos JavaScript estáticos
- **Bootstrap 5:** Para diseño responsive
- **Font Awesome:** Para iconos navideños

## 🎅 Reglas del Sorteo

1. **Nadie se regala a sí mismo**
2. **Nadie regala a miembros de su propia familia:**
   - Familia Hermann: Raul, Ana, Juan, Claudia, Nicolas, Romina
   - Familia Vazquez: Emiliano, Maira, Claudio, Viviana, Victor, Lara
3. **Cada persona regala a exactamente una persona**
4. **Cada persona recibe de exactamente una persona**

## 🎄 ¡Felices Fiestas!

Disfruta del intercambio de regalos y mantén el secreto hasta el día del evento.

---

**Creado con ❤️ para la familia en Navidad 2024**
