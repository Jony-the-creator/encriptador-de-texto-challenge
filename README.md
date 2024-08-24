# Encriptador/Desencriptador de Texto por Jonathan Elías

## Descripción

Este proyecto es una aplicación web que encripta y desencripta texto utilizando un sistema específico de llaves. La aplicación cuenta con un diseño responsivo y un fondo animado con puntos que aparecen y desaparecen, similar a estrellas en el cielo. La página permite al usuario ingresar texto, seleccionar entre encriptar o desencriptar, y ver el resultado en pantalla. Además, incluye botones para copiar el texto encriptado o desencriptado al portapapeles.

## Funcionalidades

- **Encriptar y Desencriptar Texto**: Utiliza un sistema de llaves para convertir texto en su versión encriptada y viceversa.
- **Diseño Responsivo**: La interfaz se ajusta automáticamente para adaptarse a diferentes tamaños de pantalla, incluyendo dispositivos móviles y tabletas.
- **Animación de Fondo**: Puntos blancos en el fondo que aparecen y desaparecen, imitando estrellas en el cielo.
- **Botones de Copia**: Permite copiar el texto encriptado o desencriptado al portapapeles con un solo clic.

## Llaves de Encriptación

Las llaves utilizadas para la encriptación y desencriptación son:

- **e** se convierte en **enter**
- **i** se convierte en **imes**
- **a** se convierte en **ai**
- **o** se convierte en **ober**
- **u** se convierte en **ufat**

## Requisitos

- Solo funciona con letras minúsculas.
- No debe utilizarse acentos ni caracteres especiales.
- Los textos de entrada deben ser válidos según estas reglas.

## Uso

1. **Encriptar Texto**:
   - Ingresa el texto en el campo de entrada bajo la sección **"inputContainer"**.
   - Haz clic en el botón **"Encriptar"**.
   - El texto encriptado se mostrará en el área de salida bajo la sección **"outputContainer"**.

2. **Desencriptar Texto**:
   - Ingresa el texto encriptado en el campo de entrada.
   - Haz clic en el botón **"Desencriptar"**.
   - El texto desencriptado se mostrará en el área de salida.

3. **Copiar Texto**:
   - Usa el botón **"Copiar"** para copiar el texto encriptado o desencriptado al portapapeles.

## Responsividad

- **Desktop**: La interfaz está diseñada para ser visualmente atractiva en pantallas grandes, con los elementos dispuestos en una sola fila.
  
- **Tableta** (Ancho menor o igual a 768px):
  - El **"outputContainer"** se coloca debajo del **"inputContainer"**.
  - Se oculta la imagen del **"placeholderImage"** en la sección de desencriptación.
  
- **Teléfono** (Ancho menor o igual a 576px):
  - El botón **"Desencriptar"** se coloca debajo del botón **"Encriptar"**.
  - Se ajusta el tamaño y la posición de los elementos para mejorar la usabilidad en pantallas pequeñas.

## Aviso de Copyright

© 2024 Jonathan Jesús Elías Gómez. Todos los derechos reservados.

Este proyecto está licenciado bajo la Licencia MIT.
