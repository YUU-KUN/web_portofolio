import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../views/Header.vue'
import Beranda from '../views/Beranda.vue'
import Services from '../views/Services.vue'
import HappyClients from '../views/HappyClients.vue'
import Works from '../views/Works.vue'
import OurStudio from '../views/OurStudio.vue'
import Testimonials from '../views/Testimonials.vue'
import Blog from '../views/Blog.vue'
import Footer from '../views/Footer.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'beranda',
    components: {default: Beranda, header: Header, footer: Footer, services: Services, works: Works, happyClients: HappyClients, ourStudio: OurStudio, testimonials: Testimonials, blog: Blog},
  },
  {
    path: '/header',
    name: 'header',
    component: Header,
  },
  {
    path: '/footer',
    name: 'footer',
    component: Footer,
  },

  // {
  //   path: '/petugas',
  //   name: 'petugas',
  //   components: {default: Petugas, header: Navbar, footer: Footer},
    
  // },

  // {
  //   path: '/dataSiswa',
  //   name: 'dataSiswa',
  //   components: {default: DataSiswa, header: Navbar, footer: Footer},
    
  // },
  // {
  //   path: '/pelanggaran',
  //   name: 'pelanggaran',
  //   components: {default: Pelanggaran, header: Navbar, footer: Footer},
    
  // },
  // {
  //   path: '/inputPelanggaran',
  //   name: 'inputPelanggaran',
  //   components: {default: InputPelanggaran, header: Navbar, footer: Footer},
    
  // },
  // {
  //   path: '/poinSiswa',
  //   name: 'poinSiswa',
  //   components: {default: PoinSiswa, header: Navbar, footer: Footer},
    
  // }
]

const router = new VueRouter({
  routes
})

export default router
