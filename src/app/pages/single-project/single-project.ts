import { PostAcf } from '../../shared/wordpress-api/post-acf';

export class Project {
  title?: string;
  images: Array<string> = [];
  properties?: PostAcf;

  constructor(values: Partial<Project> = {}) {
    Object.assign(this, values);
  }
}
