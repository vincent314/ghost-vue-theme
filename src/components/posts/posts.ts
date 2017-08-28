import Component from 'vue-class-component';
import Vue from 'vue';
import { Post } from '../../model/ghost.model';
import { GhostService } from '../../services/ghost.service';
import * as _ from 'lodash';

@Component({
  template: require('./posts.html')
})
export class PostsComponent extends Vue {
  posts: Post[] = [];
  page = 1;

  private ghostService: GhostService = new GhostService();


  mounted(): void {
    this.onScroll();
  }

  onScroll() {
    this.ghostService.getPosts(this.page)
      .then(posts => {
        this.posts = _.sortBy(this.posts.concat(posts), '-published_at');
        this.page++;
      });
  }
}
