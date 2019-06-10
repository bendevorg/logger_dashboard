import List from './components/Log/List.vue';

const routes = [
  {
    path: '/',
    name: 'Default',
    components: {
      // 'menu-top': Navmenu,
      default: List
      // 'foot-compo': Footer
    }
  }
];

export default routes;
