/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** This field accepts both ISODateString and ISODateTimeStringexample: 1992-08-14 or 1992-08-14T03:42:00.000Z */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum PageOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type PageWhere = {
  AND?: InputMaybe<Array<InputMaybe<PageWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<PageWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_by_ne?: InputMaybe<Scalars['String']['input']>;
  created_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_ne?: InputMaybe<Scalars['String']['input']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publish_details?: InputMaybe<SystemPublishDetailsWhere>;
  rich_text?: InputMaybe<Scalars['String']['input']>;
  rich_text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rich_text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rich_text_ne?: InputMaybe<Scalars['String']['input']>;
  rich_text_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_by_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_by_ne?: InputMaybe<Scalars['String']['input']>;
  updated_by_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_ne?: InputMaybe<Scalars['String']['input']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_ne?: InputMaybe<Scalars['Int']['input']>;
  version_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** WEBP images are usually lower in size and have good quality. */
export enum SysAssetAutoValues {
  Webp = 'WEBP'
}

export type SysAssetDimensionWhere = {
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_ne?: InputMaybe<Scalars['Int']['input']>;
  height_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_ne?: InputMaybe<Scalars['Int']['input']>;
  width_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export enum SysAssetDisableValues {
  /** UPSCALE is always enabled, in which the image is upscaled if the output image (by specifying the width or height) is bigger than the source image */
  Upscale = 'UPSCALE'
}

/** This parameter allows an image to be downloaded or rendered on page */
export enum SysAssetDispositionValues {
  /** Allows to download an image */
  Attachment = 'ATTACHMENT',
  /** Allows an image to be rendered on page */
  Inline = 'INLINE'
}

export enum SysAssetFitValues {
  Bounds = 'BOUNDS',
  Crop = 'CROP'
}

export enum SysAssetImageFormats {
  /** Convert an image to GIF format */
  Gif = 'GIF',
  /** Convert an image to JPEG format */
  Jpg = 'JPG',
  /** A Progressive JPEG is an image file created using a compression method that displays higher detail in progression */
  Pjpg = 'PJPG',
  /** Convert an image to PNG format */
  Png = 'PNG',
  /** WEBP images are usually lower in size and have good quality */
  Webp = 'WEBP',
  /** WEBP Lossless format */
  Webpll = 'WEBPLL',
  /** WEBP Lossy format */
  Webply = 'WEBPLY'
}

export enum SysAssetOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export enum SysAssetOrientValues {
  /** Flip image horizontally and vertically */
  Both = 'BOTH',
  /** Set image to default */
  Default = 'DEFAULT',
  /** Flip image horizontally */
  Horizontally = 'HORIZONTALLY',
  /** Flip image horizontally and then rotate 90 degrees towards left */
  Rotate90Left = 'ROTATE90LEFT',
  /** Rotate image 90 degrees towards right */
  Rotate90Right = 'ROTATE90RIGHT',
  /** Flip image vertically */
  Vertically = 'VERTICALLY'
}

/** The overlay_align parameter allows you to put one image on top of another */
export enum SysAssetOverlayAlignValues {
  /** Align the overlay image to the bottom of the actual image */
  Bottom = 'BOTTOM',
  /** Align the overlay image to the center (horizontally) of the actual image */
  Center = 'CENTER',
  /** Align the overlay image to the left of the actual image */
  Left = 'LEFT',
  /** Align the overlay image to the middle (vertically) of the actual image */
  Middle = 'MIDDLE',
  /** Align the overlay image to the right of the actual image */
  Right = 'RIGHT',
  /** Align the overlay image to the top of the actual image */
  Top = 'TOP'
}

export enum SysAssetOverlayRepeatValues {
  /** Horizontal and vertical repetition */
  Both = 'BOTH',
  /** Horizontal repetition */
  X = 'X',
  /** Vertical repetition */
  Y = 'Y'
}

export type SysAssetTransformUrl = {
  /** When the auto parameter is set to webp, it enables WebP image support. WebP images have higher compression rate with minimum loss of quality. */
  auto?: InputMaybe<SysAssetAutoValues>;
  /** The bg-color parameter lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image */
  bg_color?: InputMaybe<Scalars['String']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  /** The disable parameter disables the functionality that is enabled by default */
  disable?: InputMaybe<SysAssetDisableValues>;
  /** The disposition parameter lets you allow image to download or render.  */
  disposition?: InputMaybe<SysAssetDispositionValues>;
  /** The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio. The device pixel ratio of any device determines the screen resolution that its CSS would interpret */
  dpr?: InputMaybe<Scalars['String']['input']>;
  /** Fit parameter enables you to fit the given image properly within the specified height and width */
  fit?: InputMaybe<SysAssetFitValues>;
  /** Format parameter lets you converts a given image from one format to another */
  format?: InputMaybe<SysAssetImageFormats>;
  height?: InputMaybe<Scalars['String']['input']>;
  /** The orient parameter lets you control the cardinal orientation of the given image */
  orient?: InputMaybe<SysAssetOrientValues>;
  overlay?: InputMaybe<Scalars['String']['input']>;
  overlay_align?: InputMaybe<SysAssetOverlayAlignValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When height is defined in percentage, it relative to the output image */
  overlay_height?: InputMaybe<Scalars['String']['input']>;
  /** The overlay_repeat parameter lets you define how the overlay image will be repeated on the given image */
  overlay_repeat?: InputMaybe<SysAssetOverlayRepeatValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When width is defined in percentage, it is relative to the output image */
  overlay_width?: InputMaybe<Scalars['String']['input']>;
  /** This parameter lets you add extra pixels to the edges of an image. You can specify values for top, right, bottom, and left padding for an image */
  pad?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  trim?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type SysAssetWhere = {
  AND?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_ne?: InputMaybe<Scalars['String']['input']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dimension?: InputMaybe<SysAssetDimensionWhere>;
  dimension_exists?: InputMaybe<Scalars['Boolean']['input']>;
  file_size?: InputMaybe<Scalars['Int']['input']>;
  file_size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  file_size_gt?: InputMaybe<Scalars['Int']['input']>;
  file_size_gte?: InputMaybe<Scalars['Int']['input']>;
  file_size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  file_size_lt?: InputMaybe<Scalars['Int']['input']>;
  file_size_lte?: InputMaybe<Scalars['Int']['input']>;
  file_size_ne?: InputMaybe<Scalars['Int']['input']>;
  file_size_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filename_exists?: InputMaybe<Scalars['Boolean']['input']>;
  filename_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename_ne?: InputMaybe<Scalars['String']['input']>;
  filename_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags?: InputMaybe<Scalars['String']['input']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid_ne?: InputMaybe<Scalars['String']['input']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_ne?: InputMaybe<Scalars['String']['input']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemPublishDetailsWhere = {
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locale_ne?: InputMaybe<Scalars['String']['input']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  time?: InputMaybe<Scalars['DateTime']['input']>;
  time_gt?: InputMaybe<Scalars['DateTime']['input']>;
  time_gte?: InputMaybe<Scalars['DateTime']['input']>;
  time_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  time_lt?: InputMaybe<Scalars['DateTime']['input']>;
  time_lte?: InputMaybe<Scalars['DateTime']['input']>;
  time_ne?: InputMaybe<Scalars['DateTime']['input']>;
  time_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  user_ne?: InputMaybe<Scalars['String']['input']>;
  user_nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


export type PageQuery = { __typename?: 'Query', all_page?: { __typename?: 'AllPage', items?: Array<{ __typename?: 'Page', description?: string | null, rich_text?: string | null, title?: string | null, url?: string | null, system?: { __typename?: 'EntrySystemField', uid?: string | null, content_type_uid?: string | null } | null, imageConnection?: { __typename?: 'SysAssetConnection', edges?: Array<{ __typename?: 'SysAssetEdge', node?: { __typename?: 'SysAsset', url?: string | null, title?: string | null } | null } | null> | null } | null } | null> | null } | null };


export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"all_page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"content_type_uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"imageConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;