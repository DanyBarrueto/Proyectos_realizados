"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Función de validación de campo de texto (sin números)
    function validarCampoTexto(idCampo, mensajeError) {
        var campo = document.getElementById(idCampo);
        var valorCampo = campo.value.trim();
        
        // Verifica si el campo está vacío o contiene números
        return valorCampo !== '' && !/\d/.test(valorCampo);
    }
    
    // Función de validación para listas desplegables
    function validarListaDesplegable(idLista, mensajeError) {
        var lista = document.getElementById(idLista);
        var valorLista = lista.value;
        
        // Verifica si no se ha seleccionado ningún valor
        return valorLista !== '' && valorLista !== undefined;
    }
    
    // Función de validación específica para cédula (solo números)
    function validarCedula(idCedula, mensajeError) {
        var cedula = document.getElementById(idCedula);
        var valorCedula = cedula.value.trim();
        
        // Verifica si la cédula contiene solo números
        return /^[0-9]+$/.test(valorCedula);
    }
    
    // Obtén el formulario de la tabla 1
    var formularioTabla1 = document.querySelector('.tabla1 form');
    
    // Agrega un escucha de eventos para el evento submit del formulario
    formularioTabla1.addEventListener('submit', function (event) {
        // Evita que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Inicializa la variable de errores
        var errores = [];
        
        // Realiza las validaciones aquí
        if (!validarCampoTexto('nombre', 'Por favor ingresa un nombre válido (sin números)')) {
            errores.push('Nombre inválido');
        }
        
        if (!validarListaDesplegable('area', 'Por favor selecciona un área')) {
            errores.push('Selecciona un área');
        }
        
        if (!validarCampoTexto('apellido', 'Por favor ingresa un apellido válido (sin números)')) {
            errores.push('Apellido inválido');
        }
        
        if (!validarListaDesplegable('cargo', 'Por favor selecciona un cargo')) {
            errores.push('Selecciona un cargo');
        }
        
        if (!validarCedula('cedula', 'Por favor ingresa una cédula válida (solo números)')) {
            errores.push('Cédula inválida');
        }
        
        if (!validarCampoTexto('dominio', 'Por favor ingresa un dominio válido')) {
            errores.push('Dominio inválido');
        }
        
        if (!validarCampoTexto('cuenta', 'Por favor ingresa una cuenta válida')) {
            errores.push('Cuenta inválida');
        }
        
        if (!validarListaDesplegable('region', 'Por favor selecciona una región')) {
            errores.push('Selecciona una región');
        }
        
        if (!validarListaDesplegable('ubicacion', 'Por favor selecciona una ubicación')) {
            errores.push('Selecciona una ubicación');
        }
        
        if (!validarListaDesplegable('oficina', 'Por favor selecciona una oficina')) {
            errores.push('Selecciona una oficina');
        }
        
        // Verifica si hay errores
        if (errores.length > 0) {
            // Muestra un mensaje de error con los detalles
            alert('Error al enviar el formulario. Corrige los siguientes problemas:\n' + errores.join('\n'));
        } else {
            // Si no hay errores, puedes enviar el formulario
            alert('Formulario enviado exitosamente!');
            formularioTabla1.reset(); // O realiza la acción que desees después de enviar el formulario
        }
    });
});
