export interface Post {
  title?:string;
  slug?:string;
  markdown?:string;
  html?: string;
  safeHtml?: string;
  image?:string;
  url?:string;
}

export interface Tag {
  id:string;
  uuid:string;
  name:string;
  slug:string;
}
