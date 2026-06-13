# Guía de Personalización - Portafolio Profesional

## 🎨 Descripción General

Este portafolio profesional ha sido diseñado con una estética minimalista y elegante, inspirada en patrones de diseño moderno. Presenta un diseño limpio con tipografía espaciada, líneas simples y una paleta de colores neutral (blanco, grises y negro).

## 📋 Estructura del Proyecto

```
/components
  ├── header.tsx           # Navegación fija con scroll suave
  ├── hero.tsx             # Sección de bienvenida principal
  ├── about.tsx            # Información personal y experiencia
  ├── projects.tsx         # Galería de proyectos destacados
  ├── skills.tsx           # Habilidades técnicas organizadas
  └── contact.tsx          # Formulario de contacto y redes sociales
```

## 🎯 Cómo Personalizar

### 1. Información Personal (Header)
Edita `/components/header.tsx`:
```typescript
// Cambiar nombre y título
<p className="text-xl font-light tracking-widest text-black">
  TU NOMBRE AQUÍ
</p>
<p className="text-xs tracking-widest text-gray-500 mt-1">
  TU TÍTULO AQUÍ
</p>
```

### 2. Sección Hero
Edita `/components/hero.tsx`:
- **Titular**: Cambiar el h1 con tu profesión/especialidad
- **Descripción**: Actualizar párrafo de bienvenida
- **Botones**: Modificar textos y acciones
- **Especialidades**: Agregar/modificar las 3 áreas de expertise

### 3. Sección About
Edita `/components/about.tsx`:
- **Descripción personal**: Reemplazar textos en los párrafos
- **Formación**: Actualizar grado académico e institución
- **Experiencia laboral**: Modificar empleos, empresas y fechas
  - Cambiar títulos de posición
  - Actualizar nombres de empresa
  - Modificar rangos de fechas
  - Actualizar descripciones de logros

### 4. Proyectos
Edita `/components/projects.tsx`:

Actualiza el array `projects`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Nombre de tu proyecto',
    description: 'Descripción detallada',
    category: 'Categoría',
    year: '2024',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    status: 'Completado o Activo',
  },
  // Agregar más proyectos...
]
```

### 5. Habilidades Técnicas
Edita `/components/skills.tsx`:

Modifica el array `skillCategories`:
```typescript
const skillCategories = [
  {
    category: 'Tu Categoría',
    skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
  },
  // Agregar más categorías...
]
```

También actualiza las estadísticas:
```typescript
<p className="text-3xl lg:text-4xl font-light text-black">
  8+ {/* Cambiar número */}
</p>
```

### 6. Contacto y Redes Sociales
Edita `/components/contact.tsx`:

**Email:**
```typescript
<a href="mailto:tu@email.com">tu@email.com</a>
```

**Enlaces a redes:**
```typescript
<a href="https://linkedin.com/in/tuusuario">
<a href="https://github.com/tuusuario">
<a href="https://twitter.com/tuusuario">
```

## 🎨 Personalización de Estilos

### Colores
Los colores están definidos en `/app/globals.css`. Para cambiar la paleta:

```css
:root {
  --background: oklch(1 0 0);      /* Fondo */
  --foreground: oklch(0.145 0 0);  /* Texto */
  --primary: oklch(0.205 0 0);     /* Primario */
}
```

### Tipografía
La fuente por defecto es Geist (sin serif). Para cambiar:
1. Edita `/app/layout.tsx`
2. Importa una fuente de Google Fonts
3. Aplica los estilos a las clases correspondientes

### Espaciado
El diseño utiliza clases de Tailwind con espaciado coherente:
- `p-6 lg:p-8` para padding
- `gap-12` para espacios entre elementos
- `py-20` para espacios verticales de sección

## 📱 Responsive Design

El portafolio es completamente responsive:
- **Mobile-first** diseño
- Prefijos `md:` y `lg:` para puntos de quiebre
- Viewport en `/app/layout.tsx`

Puntos de quiebre:
- sm: 640px
- md: 768px (cambios principales)
- lg: 1024px
- xl: 1280px

## 🔗 Enlaces Útiles

Actualiza los siguientes enlaces en `contact.tsx`:
- Email: `mailto:tu@email.com`
- LinkedIn: `https://linkedin.com/in/tuusuario`
- GitHub: `https://github.com/tuusuario`
- Twitter/X: `https://twitter.com/tuusuario`

## 💡 Tips de Diseño

1. **Mantén la coherencia**: Los espacios, fuentes y colores son deliberados
2. **Whitespace es poder**: Más espacio en blanco = más elegancia
3. **Tipografía**: El letter-spacing `tracking-widest` contribuye a la sofisticación
4. **Hover states**: Todos los botones tienen transiciones suaves
5. **Líneas sutiles**: Las líneas separadoras (`border-gray-200`) ayudan a dividir secciones

## 🚀 Deployment

### Vercel (Recomendado)
```bash
vercel deploy
```

### Netlify
```bash
npm run build
# Subir la carpeta `.next` a Netlify
```

### Autohospedaje
```bash
npm run build
npm run start
```

## 📝 Mejoras Sugeridas

1. **Agregar imágenes**: Reemplazar placeholders con fotos reales de proyectos
2. **Animaciones**: Agregar scroll animations con `aos` o `framer-motion`
3. **Blog integrado**: Agregar sección de artículos técnicos
4. **Formulario funcional**: Conectar a Resend o SendGrid
5. **Analytics**: Agregar Vercel Analytics o Google Analytics
6. **Modo oscuro**: Agregar toggle de tema (adaptación de estilos existentes)

## ❓ Preguntas Frecuentes

**P: ¿Cómo cambio el orden de las secciones?**
R: Edita `/app/page.tsx` y reorganiza los componentes.

**P: ¿Cómo agrego más proyectos?**
R: Agrega más objetos al array `projects` en `/components/projects.tsx`.

**P: ¿Cómo cambio los colores?**
R: Edita las variables de color en `/app/globals.css`.

**P: ¿Cómo hago que el formulario funcione?**
R: Conecta el formulario a un servicio como Resend, SendGrid o un endpoint personalizado.

---

**Última actualización**: Junio 2024
**Versión**: 1.0
