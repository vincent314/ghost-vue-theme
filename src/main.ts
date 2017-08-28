import * as Vue from 'vue';
import VueRouter from 'vue-router';
import { HeaderComponent } from './components/header/header';
import { PostsComponent } from './components/posts/posts';

// register the plugin
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {path: '/', component: PostsComponent},
  ]
});


new Vue({
  el: '#app-main',
  router: router,
  components: {
    'theme-header': HeaderComponent
  }
});
