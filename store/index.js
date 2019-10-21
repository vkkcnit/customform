
import Vuex from 'vuex';

const createStore = () => new Vuex.Store({
  state: () => ({
    counter: 5,
  }),
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
  modules: {

    custom: {
      namespaced: true,
      state: () => ({
        list: [],
        title: 'Create Form',
        select: [
          { text: 'Text box' },
          { text: 'Radio Button' },
          { text: 'CheckBox' },
          { text: 'Text Area' },
          { text: 'Drop Down' },
          { text: 'File' },
        ],
      }),
      formData: {
        formTitle: '',
        formDescription: '',
        fields: [],
      },
      mutations: {
        add(state, { text }) {
          state.list.push({
            text,
            done: false,
          });
        },
        remove(state, { todo }) {
          state.list.splice(state.list.indexOf(todo), 1);
        },
      },
    },
  },
});


export default createStore;
