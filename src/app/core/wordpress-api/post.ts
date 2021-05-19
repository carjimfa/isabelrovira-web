import { WordpressRenderedItem } from './wordpress-rendered-item';
import {WpEntity} from './wp-entity';
import {Type} from 'class-transformer';
import {PostAcf} from './post-acf';

export class Post extends WpEntity {
  // https://stackoverflow.com/a/53791071/8058956
  @Type(() => WordpressRenderedItem)
  content: WordpressRenderedItem = new WordpressRenderedItem();

  excerpt = new WordpressRenderedItem();

  // tslint:disable-next-line:variable-name
  featured_media = 0;

  sticky = false;

  template = '';

  format = '';

  categories = new Array<number>();

  acf?: PostAcf;

  get renderedTitle(): string {
    return this.title.rendered;
  }

  constructor(values: Partial<Post> = {}) {
    super(values);
    if (values) {
      Object.assign(this, {
        content: values.content,
        excerpt: values.excerpt,
        // tslint:disable-next-line:variable-name
        featured_media: values.featured_media,
        sticky: values.sticky,
        template: values.template,
        format: values.format,
        categories: values.categories
      });
    }
  }
}
