export  const state = () => ({
  counter: 1,
  inputType:'textvinay'
})

export const mutation = {

  increment (state){
    state.counter++ ;
  }
}