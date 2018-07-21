import Content from './components/shared/Content.vue';
import List from './components/List.vue';

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
