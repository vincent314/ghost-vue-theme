import 'showdown';
import * as Showdown from 'showdown';
import { Post } from '../model/ghost.model';
import CONFIG from '../config';
import axios from 'axios';

export class GhostService {

  private credentials = { 'client_id': CONFIG.api.clientId, 'client_secret': CONFIG.api.clientSecret };

  private converter: Showdown.Converter;

  private imageUrlRegex = /src="(\/content\/images\/)(.*)"/g;

  private axios;

  constructor() {
    this.converter = new Showdown.Converter();
    this.axios = axios;
  }

  async getPosts(page: number) {
    const response = await axios.get('posts', {
      baseURL: CONFIG.api.baseUrl,
      params: Object.assign({
        fields: 'id,uuid,slug,title,html,markdown,published_at,image,url',
        filters: 'status:published',
        limit: 10,
        page: page
      }, this.credentials)
    });

    const posts: Post[] = response.data.posts;

    posts.forEach((post: Post) => {
      let html: string;

      if (post.markdown) {
        html = this.converter.makeHtml(post.markdown);
      } else {
        html = post.html;
      }

      post.safeHtml = this.fixImageUrl(html);
    });
    return posts;
  }

  fixImageUrl(html: string) {
    return html.replace(this.imageUrlRegex, `src="${CONFIG.imageBaseUrl}$1$2"`);
  }

  // getTags():Observable<Tag[]>{
  //   return this.api.one('tags').get(
  //     Object.assign({
  //       fields: 'id,uuid,name,slug',
  //       limit: 'all'
  //     }, this.credentials)
  //   ).map(data => data.tags);
  // }

}
