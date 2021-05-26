/* tslint:disable:variable-name */
import {Order} from '../order.enum';
import {LogicOperator} from '../logic-operator.enum';

export class PostRequestParams {
  context?: string;
  page?: number;
  per_page?: number;
  search?: string;
  after?: Date;
  modified_after?: Date;
  author?: Array<number>;
  author_exclude?: Array<number>;
  before?: Date;
  modified_before?: Date;
  exclude?: Array<number>;
  include?: Array<number>;
  offset?: number;
  order?: Order = Order.Desc;
  orderBy?: PostOrderByAttribute = PostOrderByAttribute.date;
  slug?: string;
  status?: PostStatus = PostStatus.publish;
  tax_relation?: LogicOperator;
  categories?: Array<string>;
  categories_exclude?: Array<string>;
  tags?: Array<string>;
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
