import {Order} from '../order.enum';
import {LogicOperator} from '../logic-operator.enum';

export class PostRequestParams {
  context?: string;
  page?: number;
  // tslint:disable-next-line:variable-name
  per_page?: number;
  search?: string;
  after?: Date;
  // tslint:disable-next-line:variable-name
  modified_after?: Date;
  author?: Array<number>;
  // tslint:disable-next-line:variable-name
  author_exclude?: Array<number>;
  before?: Date;
  // tslint:disable-next-line:variable-name
  modified_before?: Date;
  exclude?: Array<number>;
  include?: Array<number>;
  offset?: number;
  order?: Order = Order.Desc;
  orderBy?: PostOrderByAttribute = PostOrderByAttribute.date;
  slug?: string;
  status?: PostStatus = PostStatus.publish;
  // tslint:disable-next-line:variable-name
  tax_relation?: LogicOperator;
  categories?: Array<string>;
  // tslint:disable-next-line:variable-name
  categories_exclude?: Array<string>;
  tags?: Array<string>;
  // tslint:disable-next-line:variable-name
  tags_exclude?: Array<string>;
  sticky?: boolean;

  constructor(values: Partial<PostRequestParams> = {}) {
    Object.assign(this, values);
  }
}



export enum PostOrderByAttribute {
  author = 'author',
  date = 'date',
  id = 'id',
  include = 'include',
  modified = 'modified',
  parent = 'parent',
  relevance = 'relevance',
  slug = 'slug',
  include_slugs = 'include_slugs',
  title = 'title'
}

export enum PostStatus {
  publish = 'publish',
  future = 'future',
  draft = 'draft',
  pending = 'pending',
  private = 'private',
  trash = 'trash',
  autoDraft = 'auto-draft',
  inherit = 'inherit',
  requestPending = 'request-pending',
  requestConfirmed = 'request-confirmed',
  requestFailed = 'request-failed',
  requestCompleted = 'request-completed',
  acfDisabled = 'acf-disabled',
  any = 'any'
}
