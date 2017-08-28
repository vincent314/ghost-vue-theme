import Vue from 'vue';
import Component from 'vue-class-component';
import CONFIG from '../../config';

@Component({
  template: require('./header.html')
})
export class HeaderComponent extends Vue {
  public title = CONFIG.title;
}
