export default async ({ route, store, redirect }) => {
  return
  
  if(route.path=='/login') return
  
  if(!store.getters['auth/loggedIn']){
    if(localStorage.token!=null) await store.dispatch('validateToken', localStorage.token)
  }
  
  if(!store.getters['auth/loggedIn']){
    redirect('/login')
  }
}