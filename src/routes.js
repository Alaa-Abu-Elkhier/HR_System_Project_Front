import Get from './components/Get'
import Add from './components/Add'
import LogIn from './components/LogIn.vue'
import search from './components/search.vue'
import Delete from './components/Delete.vue'
import Update from './components/Update.vue'
import Home from'./components/Home.vue'

export default[
{path:'/',component:LogIn},
{path:'/get',component:Get},
{path:'/add',component:Add},
{path:'/search',component:search},
{path:'/home',component:Home},
{path:'/delete',component:Delete},
{path:'/update',component:Update},


]