export interface PublishDetails {
  environment: string;
  locale: string;
  time: string;
  user: string;
}

export interface File {
  uid: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  tags: string[];
  filename: string;
  url: string;
  ACL: any[];
  is_dir: boolean;
  parent_uid: string;
  _version: number;
  title: string;
  publish_details: PublishDetails;
  $: any;
}

export interface Page {
  uid: string;
  _content_type_uid: string;
  $: any;
  _version?: number;
  title: string;
  url?: string;
  description?: string;
  imageConnection?: any;
  rich_text?: string;
}

export type GraphQLHeaders = {
  access_token: string;
  live_preview?: string;
  preview_token?: string;
}