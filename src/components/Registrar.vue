<template>
  <div>
    <div class="form-container">
      <h2>Crear Colaborador</h2>
      <form @submit.prevent="registrar">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            v-model="nombre"
            placeholder="Ingresa el nombre"
            required
          />
        </div>

        <div class="form-group">
          <label for="correo">Correo:</label>
          <input
            type="email"
            id="correo"
            v-model="correo"
            placeholder="Ingresa el correo"
            required
          />
        </div>

        <button type="submit" class="btn">Crear</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Registrar',
  data() {
    return {
      nombre: '',
      correo: ''
    };
  },
  methods: {
    ...mapActions(['registrarColaborador']),
    async registrar() {
      await this.registrarColaborador({
        nombre: this.nombre,
        correo: this.correo
      });

      // Resetear campos después de enviar el formulario
      this.nombre = '';
      this.correo = '';
    }
  }
};
</script>

<style scoped>
/* Estilos generales del formulario */
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

/* Título */
h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* Grupo de formulario */
.form-group {
  width: 95%;
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

/* Estilo del botón */
.btn {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.btn:hover {
  background-color: #45a049;
}
</style>
