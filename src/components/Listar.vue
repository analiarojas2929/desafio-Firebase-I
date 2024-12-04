<script>
//import { onSnapshot, getFirestore,collection } from 'firebase/firestore';
//import firebaseApp from '../../firebaseConfig'
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Listar',
    computed: {
        ...mapState(['colaboradores'])
    },
    methods: {
        ...mapActions(['obtenerColaboradores']),

        async eliminarColaborador(id) {
            await this.$store.dispatch('eliminarColaborador', id);
            this.obtenerColaboradores();   

        }
    },
    mounted(){
      this.obtenerColaboradores();
           
    }
}
</script>

<template>
<div class="contenedor">
    <table>
        <thead>
    <tr>
      <th>Nombre</th>
      <th>Email</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="colaborador in colaboradores" :key="colaborador.id">
      <td>{{ colaborador.nombre }}</td>
      <td>{{ colaborador.correo }}</td>
      <td>
        <button @click="eliminarColaborador(colaborador.id)">Eliminar</button>
      </td>
    </tr>
  </tbody>
    </table>
    
</div>

</template>

<style scoped>
.contenedor{
    display: flex;
    justify-content: center;
}

table{
  border-spacing: 0;
  width: 70%;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>