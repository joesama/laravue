import Welcome from './pages/Welcome'
import Register from './pages/Registration'
import Login from './pages/Login'
import User from './pages/User'

export default [
    {path:'/', component: null},
    {path:'/register', component: require('./pages/Registration').default},
    {path:'/login', component: require('./pages/Login').default},
    {path:'/user', component:  require('./pages/User').default},
  ]