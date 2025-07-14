# TECNO Reparaciones

Aplicación web para gestionar reparaciones de dispositivos electrónicos (celular, PC, notebook, tablet). Permite registrar, editar, filtrar y eliminar reparaciones de forma sencilla y con una interfaz moderna.

---

## Tecnologías utilizadas

- React (Hooks y componentes funcionales)
- CSS modularizado con estilos personalizados
- React Icons para mostrar iconos según tipo de dispositivo
- Manejo de estado local con persistencia en `localStorage`
- Modo oscuro para una mejor experiencia visual

---

## Estructura del proyecto

/src
/components
Hero.jsx
Navbar.jsx
ReparacionesForm.jsx
ReparacionesInforme.jsx
ReparacionesCard.jsx
/styles
ReparacionesForm.css
ReparacionesInforme.css
ReparacionesCard.css
Navbar.css
App.jsx
main.jsx

---

## Funcionalidades principales

- Registro de reparaciones con formulario intuitivo y validación básica.
- Visualización de reparaciones en formato card, con filtros por estado e importancia.
- Edición inline de reparaciones para modificar los datos rápidamente.
- Eliminación de registros con botón dedicado.
- Persistencia automática de datos en `localStorage` para mantener la información entre sesiones.
- Soporte para modo oscuro con estilos adaptados.
- Iconos representativos para cada tipo de dispositivo reparado.

---

## Cómo ejecutar el proyecto
   git clone <URL-del-repositorio>
   npm install
   npm run dev
   Abrir la app en el navegador en la dirección que indique la terminal (generalmente http://localhost:3000)

