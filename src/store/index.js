// src/store/index.js

import { addDoc, doc, deleteDoc, onSnapshot, collection } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    colaboradores: []
  },
  mutations: {
    setColaboradores(state, colaboradores) {
      state.colaboradores = colaboradores;
    },
    registraColaborador(state, colaborador) {
      state.colaboradores.push(colaborador);
    },
    eliminarColaborador(state, id) {
      state.colaboradores = state.colaboradores.filter((colaborador) => colaborador.id !== id);
    }
  },
  actions: {
    async obtenerColaboradores({ commit }) {
      try {
        const docRef = collection(db, 'colaboradores');
        onSnapshot(docRef, (snapshot) => {
          const colaboradores = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          commit('setColaboradores', colaboradores);
        });
      } catch (error) {
        console.error('Error al obtener colaboradores:', error);
      }
    },
    async registrarColaborador({ commit }, { nombre, correo }) {
      if (!nombre.trim() || !correo.trim()) {
        console.error('El nombre y el correo no pueden estar vacíos');
        return;
      }

      try {
        const docRef = collection(db, 'colaboradores');
        const doc = await addDoc(docRef, { nombre, correo });
        console.log('Colaborador registrado con éxito:', doc.id);
        commit('registraColaborador', { id: doc.id, nombre, correo });
      } catch (error) {
        console.error('Error al registrar colaborador:', error);
      }
    },
    async eliminarColaborador({ commit }, id) {
      try {
        const docRef = doc(db, 'colaboradores', id);
        await deleteDoc(docRef);
        commit('eliminarColaborador', id);
        console.log('Colaborador eliminado con éxito');
      } catch (error) {
        console.error('Error al eliminar colaborador:', error);
      }
    }
  },
  getters: {
    getColaboradores(state) {
      return state.colaboradores;
    }
  }
});

export default store;
