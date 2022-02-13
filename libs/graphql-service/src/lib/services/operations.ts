import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<Writer>;
  category?: Maybe<Category>;
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Article>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type ArticleLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  aggregate?: Maybe<ArticleAggregator>;
  groupBy?: Maybe<ArticleGroupBy>;
  values?: Maybe<Array<Maybe<Article>>>;
};

export type ArticleConnectionAuthor = {
  __typename?: 'ArticleConnectionAuthor';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionCategory = {
  __typename?: 'ArticleConnectionCategory';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionContent = {
  __typename?: 'ArticleConnectionContent';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionCreated_At = {
  __typename?: 'ArticleConnectionCreated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionDescription = {
  __typename?: 'ArticleConnectionDescription';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionImage = {
  __typename?: 'ArticleConnectionImage';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionLocale = {
  __typename?: 'ArticleConnectionLocale';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionPublished_At = {
  __typename?: 'ArticleConnectionPublished_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionSlug = {
  __typename?: 'ArticleConnectionSlug';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTitle = {
  __typename?: 'ArticleConnectionTitle';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionUpdated_At = {
  __typename?: 'ArticleConnectionUpdated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  author?: Maybe<Array<Maybe<ArticleConnectionAuthor>>>;
  category?: Maybe<Array<Maybe<ArticleConnectionCategory>>>;
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ArticleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  image?: Maybe<Array<Maybe<ArticleConnectionImage>>>;
  locale?: Maybe<Array<Maybe<ArticleConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<ArticleConnectionSlug>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_At>>>;
};

export type ArticleInput = {
  author?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['ID']>;
  content: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Category = {
  __typename?: 'Category';
  articles?: Maybe<Array<Maybe<Article>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Category>>>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type CategoryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type CategoryLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  aggregate?: Maybe<CategoryAggregator>;
  groupBy?: Maybe<CategoryGroupBy>;
  values?: Maybe<Array<Maybe<Category>>>;
};

export type CategoryConnectionCreated_At = {
  __typename?: 'CategoryConnectionCreated_at';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CategoryConnectionLocale = {
  __typename?: 'CategoryConnectionLocale';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionName = {
  __typename?: 'CategoryConnectionName';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionSlug = {
  __typename?: 'CategoryConnectionSlug';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: 'CategoryConnectionUpdated_at';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  locale?: Maybe<Array<Maybe<CategoryConnectionLocale>>>;
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
  slug?: Maybe<Array<Maybe<CategoryConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
};

export type CategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ComponentSectionsHero = {
  __typename?: 'ComponentSectionsHero';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentSectionsHeroInput = {
  title: Scalars['String'];
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  shareImage?: Maybe<UploadFile>;
};

export type ComponentSharedSeoInput = {
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  shareImage?: InputMaybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  blurHash?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Global = {
  __typename?: 'Global';
  created_at: Scalars['DateTime'];
  defaultSeo?: Maybe<ComponentSharedSeo>;
  favicon?: Maybe<UploadFile>;
  id: Scalars['ID'];
  siteName: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type GlobalInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  defaultSeo: ComponentSharedSeoInput;
  favicon?: InputMaybe<Scalars['ID']>;
  siteName: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  created_at: Scalars['DateTime'];
  hero?: Maybe<ComponentSectionsHero>;
  id: Scalars['ID'];
  seo?: Maybe<ComponentSharedSeo>;
  updated_at: Scalars['DateTime'];
};

export type HomepageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  hero: ComponentSectionsHeroInput;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = Article | ArticleAggregator | ArticleConnection | ArticleConnectionAuthor | ArticleConnectionCategory | ArticleConnectionContent | ArticleConnectionCreated_At | ArticleConnectionDescription | ArticleConnectionId | ArticleConnectionImage | ArticleConnectionLocale | ArticleConnectionPublished_At | ArticleConnectionSlug | ArticleConnectionTitle | ArticleConnectionUpdated_At | ArticleGroupBy | Category | CategoryAggregator | CategoryConnection | CategoryConnectionCreated_At | CategoryConnectionId | CategoryConnectionLocale | CategoryConnectionName | CategoryConnectionSlug | CategoryConnectionUpdated_At | CategoryGroupBy | ComponentSectionsHero | ComponentSharedSeo | Global | Homepage | I18NLocale | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionBlurHash | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | Writer | WriterAggregator | WriterConnection | WriterConnectionCreated_At | WriterConnectionEmail | WriterConnectionId | WriterConnectionName | WriterConnectionPicture | WriterConnectionUpdated_At | WriterGroupBy | CreateArticlePayload | CreateCategoryPayload | CreateRolePayload | CreateUserPayload | CreateWriterPayload | DeleteArticlePayload | DeleteCategoryPayload | DeleteFilePayload | DeleteGlobalPayload | DeleteHomepagePayload | DeleteRolePayload | DeleteUserPayload | DeleteWriterPayload | UpdateArticlePayload | UpdateCategoryPayload | UpdateGlobalPayload | UpdateHomepagePayload | UpdateRolePayload | UpdateUserPayload | UpdateWriterPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<CreateArticlePayload>;
  createArticleLocalization: Article;
  createCategory?: Maybe<CreateCategoryPayload>;
  createCategoryLocalization: Category;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  createWriter?: Maybe<CreateWriterPayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGlobal?: Maybe<DeleteGlobalPayload>;
  deleteHomepage?: Maybe<DeleteHomepagePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteWriter?: Maybe<DeleteWriterPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  updateFileInfo: UploadFile;
  updateGlobal?: Maybe<UpdateGlobalPayload>;
  updateHomepage?: Maybe<UpdateHomepagePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  updateWriter?: Maybe<UpdateWriterPayload>;
  upload: UploadFile;
};


export type MutationCreateArticleArgs = {
  input?: InputMaybe<CreateArticleInput>;
};


export type MutationCreateArticleLocalizationArgs = {
  input: UpdateArticleInput;
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CreateCategoryInput>;
};


export type MutationCreateCategoryLocalizationArgs = {
  input: UpdateCategoryInput;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateWriterArgs = {
  input?: InputMaybe<CreateWriterInput>;
};


export type MutationDeleteArticleArgs = {
  input?: InputMaybe<DeleteArticleInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: InputMaybe<DeleteCategoryInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationDeleteWriterArgs = {
  input?: InputMaybe<DeleteWriterInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  input?: InputMaybe<UpdateArticleInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: InputMaybe<UpdateCategoryInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateGlobalArgs = {
  input?: InputMaybe<UpdateGlobalInput>;
};


export type MutationUpdateHomepageArgs = {
  input?: InputMaybe<UpdateHomepageInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateWriterArgs = {
  input?: InputMaybe<UpdateWriterInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  category?: Maybe<Category>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  global?: Maybe<Global>;
  homepage?: Maybe<Homepage>;
  me?: Maybe<UsersPermissionsMe>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  writer?: Maybe<Writer>;
  writers?: Maybe<Array<Maybe<Writer>>>;
  writersConnection?: Maybe<WriterConnection>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryArticlesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGlobalArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomepageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryWriterArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryWritersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryWritersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionBlurHash = {
  __typename?: 'UploadFileConnectionBlurHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  blurHash?: Maybe<Array<Maybe<UploadFileConnectionBlurHash>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type Writer = {
  __typename?: 'Writer';
  articles?: Maybe<Array<Maybe<Article>>>;
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFile>;
  updated_at: Scalars['DateTime'];
};


export type WriterArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type WriterAggregator = {
  __typename?: 'WriterAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WriterConnection = {
  __typename?: 'WriterConnection';
  aggregate?: Maybe<WriterAggregator>;
  groupBy?: Maybe<WriterGroupBy>;
  values?: Maybe<Array<Maybe<Writer>>>;
};

export type WriterConnectionCreated_At = {
  __typename?: 'WriterConnectionCreated_at';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WriterConnectionEmail = {
  __typename?: 'WriterConnectionEmail';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WriterConnectionId = {
  __typename?: 'WriterConnectionId';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WriterConnectionName = {
  __typename?: 'WriterConnectionName';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WriterConnectionPicture = {
  __typename?: 'WriterConnectionPicture';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WriterConnectionUpdated_At = {
  __typename?: 'WriterConnectionUpdated_at';
  connection?: Maybe<WriterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WriterGroupBy = {
  __typename?: 'WriterGroupBy';
  created_at?: Maybe<Array<Maybe<WriterConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<WriterConnectionEmail>>>;
  id?: Maybe<Array<Maybe<WriterConnectionId>>>;
  name?: Maybe<Array<Maybe<WriterConnectionName>>>;
  picture?: Maybe<Array<Maybe<WriterConnectionPicture>>>;
  updated_at?: Maybe<Array<Maybe<WriterConnectionUpdated_At>>>;
};

export type WriterInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CreateArticleInput = {
  data?: InputMaybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type CreateCategoryInput = {
  data?: InputMaybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateWriterInput = {
  data?: InputMaybe<WriterInput>;
};

export type CreateWriterPayload = {
  __typename?: 'createWriterPayload';
  writer?: Maybe<Writer>;
};

export type DeleteArticleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteCategoryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGlobalPayload = {
  __typename?: 'deleteGlobalPayload';
  global?: Maybe<Global>;
};

export type DeleteHomepagePayload = {
  __typename?: 'deleteHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteWriterInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteWriterPayload = {
  __typename?: 'deleteWriterPayload';
  writer?: Maybe<Writer>;
};

export type EditArticleInput = {
  author?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditCategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComponentSectionsHeroInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSharedSeoInput = {
  id?: InputMaybe<Scalars['ID']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  shareImage?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  blurHash?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditGlobalInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  defaultSeo?: InputMaybe<EditComponentSharedSeoInput>;
  favicon?: InputMaybe<Scalars['ID']>;
  siteName?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditHomepageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  hero?: InputMaybe<EditComponentSectionsHeroInput>;
  seo?: InputMaybe<EditComponentSharedSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type EditWriterInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type UpdateArticleInput = {
  data?: InputMaybe<EditArticleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateCategoryInput = {
  data?: InputMaybe<EditCategoryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdateGlobalInput = {
  data?: InputMaybe<EditGlobalInput>;
};

export type UpdateGlobalPayload = {
  __typename?: 'updateGlobalPayload';
  global?: Maybe<Global>;
};

export type UpdateHomepageInput = {
  data?: InputMaybe<EditHomepageInput>;
};

export type UpdateHomepagePayload = {
  __typename?: 'updateHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateWriterInput = {
  data?: InputMaybe<EditWriterInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateWriterPayload = {
  __typename?: 'updateWriterPayload';
  writer?: Maybe<Writer>;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homepage?: { __typename?: 'Homepage', seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null, hero?: { __typename?: 'ComponentSectionsHero', title: string } | null } | null };

export type ArticlesQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type ArticlesQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, title: string, content: string, description: string, created_at: any, updated_at: any, published_at?: any | null, slug: string, locale?: string | null, image?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null, category?: { __typename?: 'Category', name: string } | null, author?: { __typename?: 'Writer', name?: string | null } | null, localizations?: Array<{ __typename?: 'Article', id: string, slug: string, locale?: string | null } | null> | null } | null> | null };

export type ArticlesBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Scalars['String'];
}>;


export type ArticlesBySlugQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, title: string, content: string, description: string, created_at: any, updated_at: any, published_at?: any | null, slug: string, locale?: string | null, image?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, blurHash?: string | null } | null, category?: { __typename?: 'Category', name: string } | null, author?: { __typename?: 'Writer', name?: string | null } | null, localizations?: Array<{ __typename?: 'Article', id: string, slug: string, locale?: string | null } | null> | null } | null> | null };

export type SlugsQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type SlugsQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', slug: string, locale?: string | null, localizations?: Array<{ __typename?: 'Article', id: string, slug: string, locale?: string | null } | null> | null } | null> | null };


export const HomePageDocument = gql`
    query HomePage {
  homepage {
    seo {
      metaTitle
      metaDescription
      shareImage {
        url
        width
        height
      }
    }
    hero {
      title
    }
  }
}
    `;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const ArticlesDocument = gql`
    query Articles($locale: String!) {
  articles(locale: $locale) {
    id
    title
    content
    description
    created_at
    updated_at
    published_at
    image {
      url
      width
      height
    }
    slug
    category {
      name
    }
    author {
      name
    }
    localizations {
      id
      slug
      locale
    }
    locale
  }
}
    `;

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useArticlesQuery(baseOptions: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
      }
export function useArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
        }
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
export const ArticlesBySlugDocument = gql`
    query ArticlesBySlug($slug: String!, $locale: String!) {
  articles(locale: $locale, limit: 1, where: {slug: $slug}) {
    id
    title
    content
    description
    created_at
    updated_at
    published_at
    image {
      url
      width
      height
      blurHash
    }
    slug
    category {
      name
    }
    author {
      name
    }
    localizations {
      id
      slug
      locale
    }
    locale
  }
}
    `;

/**
 * __useArticlesBySlugQuery__
 *
 * To run a query within a React component, call `useArticlesBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useArticlesBySlugQuery(baseOptions: Apollo.QueryHookOptions<ArticlesBySlugQuery, ArticlesBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesBySlugQuery, ArticlesBySlugQueryVariables>(ArticlesBySlugDocument, options);
      }
export function useArticlesBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesBySlugQuery, ArticlesBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesBySlugQuery, ArticlesBySlugQueryVariables>(ArticlesBySlugDocument, options);
        }
export type ArticlesBySlugQueryHookResult = ReturnType<typeof useArticlesBySlugQuery>;
export type ArticlesBySlugLazyQueryHookResult = ReturnType<typeof useArticlesBySlugLazyQuery>;
export type ArticlesBySlugQueryResult = Apollo.QueryResult<ArticlesBySlugQuery, ArticlesBySlugQueryVariables>;
export const SlugsDocument = gql`
    query Slugs($locale: String!) {
  articles(locale: $locale) {
    slug
    localizations {
      id
      slug
      locale
    }
    locale
  }
}
    `;

/**
 * __useSlugsQuery__
 *
 * To run a query within a React component, call `useSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSlugsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useSlugsQuery(baseOptions: Apollo.QueryHookOptions<SlugsQuery, SlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SlugsQuery, SlugsQueryVariables>(SlugsDocument, options);
      }
export function useSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SlugsQuery, SlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SlugsQuery, SlugsQueryVariables>(SlugsDocument, options);
        }
export type SlugsQueryHookResult = ReturnType<typeof useSlugsQuery>;
export type SlugsLazyQueryHookResult = ReturnType<typeof useSlugsLazyQuery>;
export type SlugsQueryResult = Apollo.QueryResult<SlugsQuery, SlugsQueryVariables>;