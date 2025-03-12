# Backend API - Autenticación y Gestión de Productos

Este proyecto implementa una API RESTful utilizando Node.js, Express, Nodemailer y JSON Web Tokens (JWT) para la autenticación y gestión de usuarios y productos.

## 📌 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/JuanAndreAV/loginApi.git
   ```

2. **Navega al directorio del proyecto:**
   ```bash
   cd loginApi
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

## ⚙️ Configuración

Antes de iniciar la aplicación, configura las variables de entorno creando un archivo `.env` en la raíz del proyecto con:

```
PORT=3000
MONGODB_URI=
JWT_SECRET=
EMAIL_SERVICE=servicio_de_email
EMAIL_USER=tu_email
EMAIL_PASS=tu_contraseña_de_email
SERVER_PORT=3000
URI=mongodb://localhost:27017/nombre_de_tu_base_de_datos
JWT_SECRET=tu_secreto_jwt
EMAIL_USER=tu_email
EMAIL_PASS=tu_contraseña_de_aplicación
FRONTEND_ROUTE=host_del_front_para_recuperacion_contraseña
```

## 📂 Estructura del Proyecto

```
loginApi/
├── controller/
├── dbConfig/
├── middlewares/
├── models/
├── routes/
├── services/
├── .gitignore
├── index.js
└── package.json
```

## 🚀 Endpoints de la API

### Autenticación

1. **Registro de Usuario**  
   `POST /api/auth/register`
   ```json
   {
     "name": "Nombre del Usuario",
     "email": "usuario@example.com",
     "password": "contraseña_segura"
   }
   ```

2. **Inicio de Sesion**  
   `POST /api/auth/login`
   ```json
   {
     "email": "usuario@example.com",
     "password": "contraseña_segura"
   }
   ```

3. **Recuperar Contraseña**  
   `POST /api/auth/forgot-password`
   ```json
   {
     "email": "usuario@example.com"
   }
   ```

4. **Restablecer Contraseña**  
   `POST /api/auth/reset-password/:token`
   ```json
   {
     "newPassword": "nueva_contraseña_segura"
   }
   ```

### Gestión de Productos

1. **Crear Producto**  
   `POST /api/products` (Requiere token JWT en headers)
   ```json
   {
     "name": "Nombre del Producto",
     "description": "Descripción",
     "price": 100.0,
     "category": "Categoría",
     "stock": 50,
     "image": "URL"
   }
   ```

2. **Obtener Productos**  
   `GET /api/products`

3. **Actualizar Producto**  
   `PATCH /api/products/:id`
   ```json
   {
     "name": "Nuevo Nombre",
     "price": 150.99
   }
   ```

## 🛠️ Manejo de Errores
La API maneja errores de validación, autenticación y base de datos con respuestas JSON apropiadas.

## 🔒 Consideraciones de Seguridad
- Utilizar HTTPS en producción.
- Almacenar contraseñas encriptadas con bcrypt.
- Manejo seguro de tokens JWT.

## ✅ Pruebas
Puedes probar la API con herramientas como Postman o Insomnia.

---

📌 **Autor:** Juan Andrés Alvarez Velásquez 
📌 **Repositorio:** [loginApi](https://github.com/JuanAndreAV/loginApi)

