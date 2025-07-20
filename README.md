# 🍨 Ice Cream Stock Manager

Una aplicación web para gestionar el inventario de helados en tiempo real. Permite controlar el stock en kilos, reflejar ingresos y ventas, y calcular automáticamente el balance económico de cada operación.

---

## 🧩 Características Principales

### 1. Interfaz

#### 📋 Lista Principal de Helados (`ice-cream-list`)

Cada producto muestra:

- **🧊 Name**: Nombre del helado.
- **⚖️ Weight Stock**: Kilos disponibles actualmente.
- **💰 Price Cost**: Costo del proveedor por kilo.
- **💵 Price Sale**: Precio de venta por kilo.
- **🖼️ Imagen**: Imagen ilustrativa del helado.
- **🔢 Control de cantidad**: Input con botones para modificar stock (positivo para compras, negativo para ventas).
- **➕ Add Balance**: Agrega el producto modificado a la operación actual.
- **❌ Discontinue**: Elimina el helado de la vista y de la base de datos.

#### 📊 Balance Económico (`monetary-balance`)

- **📦 Lista de productos añadidos**: Cada producto ingresado o vendido se agrega aquí.
- **🧮 Total**: Muestra el balance total de la operación actual.
- **✅ Update Stock**: Aplica los cambios al inventario y actualiza la base de datos.

#### ℹ️ Sección About

- Breve descripción de la empresa desarrolladora.
- Información de contacto: dirección física y correo electrónico.

---

## 🧱 Estructura de Componentes

| Componente             | Función                                                              |
|------------------------|----------------------------------------------------------------------|
| `about`                | Contiene la sección informativa de la empresa.                      |
| `ice-cream-list`       | Interfaz principal de interacción con los productos.                |
| `ice-cream-main-page`  | Página principal que agrupa la lista y el balance.                  |
| `input-integer`        | Permite modificar cantidades con botones de suma y resta.           |
| `monetary-balance`     | Calcula y actualiza el balance de la operación actual.              |

---

## 🔧 Servicios

| Servicio              | Función                                                                  |
|------------------------|--------------------------------------------------------------------------|
| `ice-cream-data`       | Comunicación con la API (`GET`, `GET by ID`, `PATCH`, `DELETE`).         |
| `stock-manager`        | Lógica para mantener la lista interna del balance.                       |

---

## ⚙️ Comportamiento Esperado

- ✅ **Actualización de Stock**: Solo se permite modificar el stock dentro de los límites reales (no se puede bajar de 0).
- 🔁 **Reset al cambiar de pestaña**: Al cambiar a la pestaña `About`, se reinicia la operación en curso.
- 🗑️ **Discontinue**: Elimina permanentemente un helado del sistema.
- 🧾 **Balance en Tiempo Real**: Cada operación suma o resta según compra (gasto) o venta (ingreso).

---

## 📸 Vista Esperada

![Uso Esperado](img/uso_esperado.png)
