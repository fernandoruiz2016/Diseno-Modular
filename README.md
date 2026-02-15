# Diseño Modular – Aplicación Universitaria

Este repositorio es parte de la tarea de Diseño Modular utilizando Angular 20.

## Descripción

Se desarrolló una aplicación universitaria organizada por módulos (features), aplicando arquitectura modular y buenas prácticas en Angular.

La aplicación cuenta con tres áreas principales:

- Gestión Académica  
- Biblioteca  
- Bienestar Estudiantil  

---

## 🧩 Tecnologías utilizadas

- Angular 20  
- TypeScript  
- HTML5  
- CSS3  

---

## Ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/fernandoruiz2016/Diseno-Modular
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor:

```bash
ng serve
```

4. Abrir en el navegador:

```bash
http://localhost:4200
```

Adicionalmente, puedes visitar el [Link](diseno-modular.vercel.app)

---

## Estructura del proyecto
```bash
src/app
│
├── core/
├── features/
│   ├── biblioteca/
│   │   ├──components
│   │   └──pages
│   │   
│   ├── gestionAcademica/
│   │   ├──components
│   │   └──pages
│   │   
│   └── bienestarEstudiantil/
│       ├──components
│       └──pages
│      
├── shared/
├── layout/
│
├── app.routes.ts
├── app.html
└── app.ts
```