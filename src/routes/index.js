import { createRouter, createWebHashHistory } from 'vue-router'

import MunicipeListScreen from '../screens/MunicipeListScreen.vue'
import MunicipeFormScreen from '../screens/MunicipeFormScreen.vue'

const routes = [
  { path: '/', name: 'MunicipeList', component: MunicipeListScreen },
  { path: '/municipeform', name: 'MunicipeForm', component: MunicipeFormScreen },
  // { path: '/equipmentformedit/:id', name: 'EquipmentFormEdit', component: MunicipeFormScreen }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
  
export default router