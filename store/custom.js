export const state = () => ({
  list: [],
  select: [
    { text: 'Text box' },
    { text: 'Radio Button' },
    { text: 'Text Area' },
    { text: 'Drop Down' },
    { text: 'File' },
  ],
});

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
    });
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
};
