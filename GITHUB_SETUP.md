# Guía de Conexión y Sincronización con GitHub

Este proyecto ya cuenta con el repositorio Git local inicializado en la rama principal `main` y con el commit inicial de todo el código de **Acupuntura Clínica Especializada**.

---

## Pasos para conectar con tu cuenta de GitHub

### Paso 1: Crear un nuevo repositorio en GitHub
1. Entra a tu cuenta en [https://github.com/new](https://github.com/new).
2. Asigna un nombre al repositorio, por ejemplo: `acupuntura-cdmx` o `acupuntura-clinica`.
3. Selecciona si deseas que sea **Público** o **Privado**.
4. **IMPORTANTE:** No selecciones "Initialize this repository with a README, .gitignore or license", ya que el proyecto ya los tiene generados localmente.
5. Haz clic en **Create repository**.

---

### Paso 2: Vincular el repositorio remoto y subir el código

Abre tu terminal en la carpeta del proyecto y ejecuta los siguientes comandos:

```bash
# 1. Tu repositorio remoto ya está configurado como:
# https://github.com/lizagam68-web/ACUPUNTURA-CDMX.git

# 2. Asegurar que estás en la rama main
git branch -M main

# 3. Subir todos los archivos a GitHub
git push -u origin main
```

> **Nota sobre credenciales:** 
> Cuando GitHub te solicite contraseña en la terminal, utiliza un **Personal Access Token (Classic)** con permisos de `repo` en lugar de tu contraseña habitual, o utiliza una clave SSH (`git@github.com:...`).
> Para generar tu token en GitHub: *Settings -> Developer settings -> Personal access tokens -> Tokens (classic) -> Generate new token*.

---

### Paso 3: Sincronizar futuros cambios

Cada vez que realices cambios en el proyecto y desees actualizarlos en GitHub:

```bash
# Ver estado de los archivos modificados
git status

# Agregar todos los cambios
git add .

# Crear un commit descriptivo
git commit -m "Actualización: descripción de los cambios realizados"

# Subir a GitHub
git push
```

---

## Archivos Ignorados Automáticamente
El archivo `.gitignore` ya está configurado para no subir archivos innecesarios ni pesados:
- `node_modules/`
- `.next/`
- Archivos de caché y compilación
- Variables locales de entorno (`.env*.local`)
