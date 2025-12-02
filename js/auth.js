// Sistema de autenticación para Amigo Invisible

function login(username, password) {
    // Convertir usuario a minúsculas por si acaso
    const user = username.toLowerCase().trim();
    
    // Verificar si el usuario existe
    if (!USERS[user]) {
        return { success: false, message: 'Usuario no encontrado' };
    }
    
    // Verificar contraseña
    if (USERS[user].password !== password.trim()) {
        return { success: false, message: 'Contraseña incorrecta' };
    }
    
    // Login exitoso - guardar en sessionStorage
    sessionStorage.setItem('currentUser', user);
    sessionStorage.setItem('isAuthenticated', 'true');
    
    return { success: true, user: user };
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

function isAuthenticated() {
    return sessionStorage.getItem('isAuthenticated') === 'true';
}

function getCurrentUser() {
    return sessionStorage.getItem('currentUser');
}

function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}
