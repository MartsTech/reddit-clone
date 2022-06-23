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
  DateTime: any;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  post_id: Scalars['ID'];
  username: Scalars['String'];
};

/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type Mutation = {
  __typename?: 'Mutation';
  /** In this mutation example you can see how to do a mutation to delete data from the database. */
  deletePost?: Maybe<Post>;
  insertComment?: Maybe<Comment>;
  /** In this mutation example you can see how to do a mutation to insert data in the database. */
  insertPost?: Maybe<Post>;
  insertSubreddit?: Maybe<Subreddit>;
  insertVote?: Maybe<Vote>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationDeletePostArgs = {
  body: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  subreddit_id: Scalars['ID'];
  title: Scalars['String'];
  username: Scalars['String'];
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationInsertCommentArgs = {
  body: Scalars['String'];
  post_id: Scalars['ID'];
  username: Scalars['String'];
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationInsertPostArgs = {
  body: Scalars['String'];
  image: Scalars['String'];
  subreddit_id: Scalars['ID'];
  title: Scalars['String'];
  username: Scalars['String'];
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationInsertSubredditArgs = {
  topic: Scalars['String'];
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationInsertVoteArgs = {
  post_id: Scalars['ID'];
  upvote: Scalars['Boolean'];
  username: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  subreddit?: Maybe<Array<Maybe<Subreddit>>>;
  subreddit_id: Scalars['ID'];
  title: Scalars['String'];
  username: Scalars['String'];
  votes?: Maybe<Array<Maybe<Vote>>>;
};

/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type Query = {
  __typename?: 'Query';
  getCommentList?: Maybe<Array<Maybe<Comment>>>;
  /**
   * In this example, a single query parameter is passed. If the request to the DB will
   * return at most one value you can remove the square brackets from the result.
   */
  getCommentListByPost_id?: Maybe<Array<Maybe<Comment>>>;
  /** This query is an example of how to simply paginate your responses. */
  getPaginatedCommentList?: Maybe<Array<Maybe<Comment>>>;
  getPaginatedPostList?: Maybe<Array<Maybe<Post>>>;
  getPaginatedPostListByTopic?: Maybe<Array<Maybe<Post>>>;
  getPostList?: Maybe<Array<Maybe<Post>>>;
  getPostListByPost_id?: Maybe<Array<Maybe<Post>>>;
  getSubredditList?: Maybe<Array<Maybe<Subreddit>>>;
  getSubredditListById?: Maybe<Array<Maybe<Subreddit>>>;
  getSubredditListByTopic?: Maybe<Array<Maybe<Subreddit>>>;
  getSubredditListWithLimit?: Maybe<Array<Maybe<Subreddit>>>;
  getVoteList?: Maybe<Array<Maybe<Vote>>>;
  getVoteListByPost_id?: Maybe<Array<Maybe<Vote>>>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetCommentListByPost_IdArgs = {
  post_id: Scalars['ID'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetPaginatedCommentListArgs = {
  after: Scalars['Int'];
  first: Scalars['Int'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetPaginatedPostListArgs = {
  after: Scalars['Int'];
  first: Scalars['Int'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetPaginatedPostListByTopicArgs = {
  after: Scalars['Int'];
  first: Scalars['Int'];
  topic: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetPostListByPost_IdArgs = {
  post_id: Scalars['ID'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetSubredditListByIdArgs = {
  id: Scalars['ID'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetSubredditListByTopicArgs = {
  topic: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetSubredditListWithLimitArgs = {
  limit: Scalars['Int'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetVoteListByPost_IdArgs = {
  post_id: Scalars['ID'];
};

export type Subreddit = {
  __typename?: 'Subreddit';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  topic: Scalars['String'];
};

export type Vote = {
  __typename?: 'Vote';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  post_id: Scalars['ID'];
  upvote: Scalars['Boolean'];
  username: Scalars['String'];
};

export type InsertCommentMutationVariables = Exact<{
  post_id: Scalars['ID'];
  username: Scalars['String'];
  body: Scalars['String'];
}>;


export type InsertCommentMutation = { __typename?: 'Mutation', insertComment?: { __typename?: 'Comment', body: string, created_at: any, id: string, post_id: string, username: string } | null };

export type InsertPostMutationVariables = Exact<{
  body: Scalars['String'];
  image: Scalars['String'];
  subreddit_id: Scalars['ID'];
  title: Scalars['String'];
  username: Scalars['String'];
}>;


export type InsertPostMutation = { __typename?: 'Mutation', insertPost?: { __typename?: 'Post', body?: string | null, created_at: any, id: string, image?: string | null, subreddit_id: string, title: string, username: string } | null };

export type InsertSubredditMutationVariables = Exact<{
  topic: Scalars['String'];
}>;


export type InsertSubredditMutation = { __typename?: 'Mutation', insertSubreddit?: { __typename?: 'Subreddit', created_at: any, id: string, topic: string } | null };

export type InsertVoteMutationVariables = Exact<{
  post_id: Scalars['ID'];
  username: Scalars['String'];
  upvote: Scalars['Boolean'];
}>;


export type InsertVoteMutation = { __typename?: 'Mutation', insertVote?: { __typename?: 'Vote', id: string, created_at: any, post_id: string, upvote: boolean, username: string } | null };

export type GetPaginatedPostListQueryVariables = Exact<{
  after: Scalars['Int'];
  first: Scalars['Int'];
}>;


export type GetPaginatedPostListQuery = { __typename?: 'Query', getPaginatedPostList?: Array<{ __typename?: 'Post', body?: string | null, created_at: any, id: string, image?: string | null, subreddit_id: string, title: string, username: string, comments?: Array<{ __typename?: 'Comment', body: string, created_at: any, id: string, post_id: string, username: string } | null> | null, subreddit?: Array<{ __typename?: 'Subreddit', created_at: any, id: string, topic: string } | null> | null, votes?: Array<{ __typename?: 'Vote', created_at: any, id: string, post_id: string, upvote: boolean, username: string } | null> | null } | null> | null };

export type GetPaginatedPostListByTopicQueryVariables = Exact<{
  topic: Scalars['String'];
  first: Scalars['Int'];
  after: Scalars['Int'];
}>;


export type GetPaginatedPostListByTopicQuery = { __typename?: 'Query', getPaginatedPostListByTopic?: Array<{ __typename?: 'Post', body?: string | null, created_at: any, id: string, image?: string | null, subreddit_id: string, title: string, username: string, comments?: Array<{ __typename?: 'Comment', body: string, created_at: any, id: string, post_id: string, username: string } | null> | null, subreddit?: Array<{ __typename?: 'Subreddit', created_at: any, id: string, topic: string } | null> | null, votes?: Array<{ __typename?: 'Vote', created_at: any, id: string, post_id: string, upvote: boolean, username: string } | null> | null } | null> | null };

export type GetPostListByPostIdQueryVariables = Exact<{
  post_id: Scalars['ID'];
}>;


export type GetPostListByPostIdQuery = { __typename?: 'Query', getPostListByPost_id?: Array<{ __typename?: 'Post', body?: string | null, created_at: any, id: string, image?: string | null, subreddit_id: string, title: string, username: string, comments?: Array<{ __typename?: 'Comment', body: string, created_at: any, id: string, post_id: string, username: string } | null> | null, subreddit?: Array<{ __typename?: 'Subreddit', created_at: any, id: string, topic: string } | null> | null, votes?: Array<{ __typename?: 'Vote', created_at: any, id: string, post_id: string, upvote: boolean, username: string } | null> | null } | null> | null };

export type GetSubredditListByTopicQueryVariables = Exact<{
  topic: Scalars['String'];
}>;


export type GetSubredditListByTopicQuery = { __typename?: 'Query', getSubredditListByTopic?: Array<{ __typename?: 'Subreddit', created_at: any, id: string, topic: string } | null> | null };

export type GetSubredditListWithLimitQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetSubredditListWithLimitQuery = { __typename?: 'Query', getSubredditListWithLimit?: Array<{ __typename?: 'Subreddit', created_at: any, id: string, topic: string } | null> | null };

export type GetVoteListByPostIdQueryVariables = Exact<{
  post_id: Scalars['ID'];
}>;


export type GetVoteListByPostIdQuery = { __typename?: 'Query', getVoteListByPost_id?: Array<{ __typename?: 'Vote', created_at: any, id: string, post_id: string, upvote: boolean, username: string } | null> | null };


export const InsertCommentDocument = gql`
    mutation InsertComment($post_id: ID!, $username: String!, $body: String!) {
  insertComment(post_id: $post_id, username: $username, body: $body) {
    body
    created_at
    id
    post_id
    username
  }
}
    `;
export type InsertCommentMutationFn = Apollo.MutationFunction<InsertCommentMutation, InsertCommentMutationVariables>;

/**
 * __useInsertCommentMutation__
 *
 * To run a mutation, you first call `useInsertCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCommentMutation, { data, loading, error }] = useInsertCommentMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *      username: // value for 'username'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useInsertCommentMutation(baseOptions?: Apollo.MutationHookOptions<InsertCommentMutation, InsertCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertCommentMutation, InsertCommentMutationVariables>(InsertCommentDocument, options);
      }
export type InsertCommentMutationHookResult = ReturnType<typeof useInsertCommentMutation>;
export type InsertCommentMutationResult = Apollo.MutationResult<InsertCommentMutation>;
export type InsertCommentMutationOptions = Apollo.BaseMutationOptions<InsertCommentMutation, InsertCommentMutationVariables>;
export const InsertPostDocument = gql`
    mutation InsertPost($body: String!, $image: String!, $subreddit_id: ID!, $title: String!, $username: String!) {
  insertPost(
    body: $body
    image: $image
    subreddit_id: $subreddit_id
    title: $title
    username: $username
  ) {
    body
    created_at
    id
    image
    subreddit_id
    title
    username
  }
}
    `;
export type InsertPostMutationFn = Apollo.MutationFunction<InsertPostMutation, InsertPostMutationVariables>;

/**
 * __useInsertPostMutation__
 *
 * To run a mutation, you first call `useInsertPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPostMutation, { data, loading, error }] = useInsertPostMutation({
 *   variables: {
 *      body: // value for 'body'
 *      image: // value for 'image'
 *      subreddit_id: // value for 'subreddit_id'
 *      title: // value for 'title'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useInsertPostMutation(baseOptions?: Apollo.MutationHookOptions<InsertPostMutation, InsertPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPostMutation, InsertPostMutationVariables>(InsertPostDocument, options);
      }
export type InsertPostMutationHookResult = ReturnType<typeof useInsertPostMutation>;
export type InsertPostMutationResult = Apollo.MutationResult<InsertPostMutation>;
export type InsertPostMutationOptions = Apollo.BaseMutationOptions<InsertPostMutation, InsertPostMutationVariables>;
export const InsertSubredditDocument = gql`
    mutation InsertSubreddit($topic: String!) {
  insertSubreddit(topic: $topic) {
    created_at
    id
    topic
  }
}
    `;
export type InsertSubredditMutationFn = Apollo.MutationFunction<InsertSubredditMutation, InsertSubredditMutationVariables>;

/**
 * __useInsertSubredditMutation__
 *
 * To run a mutation, you first call `useInsertSubredditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSubredditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSubredditMutation, { data, loading, error }] = useInsertSubredditMutation({
 *   variables: {
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useInsertSubredditMutation(baseOptions?: Apollo.MutationHookOptions<InsertSubredditMutation, InsertSubredditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertSubredditMutation, InsertSubredditMutationVariables>(InsertSubredditDocument, options);
      }
export type InsertSubredditMutationHookResult = ReturnType<typeof useInsertSubredditMutation>;
export type InsertSubredditMutationResult = Apollo.MutationResult<InsertSubredditMutation>;
export type InsertSubredditMutationOptions = Apollo.BaseMutationOptions<InsertSubredditMutation, InsertSubredditMutationVariables>;
export const InsertVoteDocument = gql`
    mutation InsertVote($post_id: ID!, $username: String!, $upvote: Boolean!) {
  insertVote(post_id: $post_id, username: $username, upvote: $upvote) {
    id
    created_at
    post_id
    upvote
    username
  }
}
    `;
export type InsertVoteMutationFn = Apollo.MutationFunction<InsertVoteMutation, InsertVoteMutationVariables>;

/**
 * __useInsertVoteMutation__
 *
 * To run a mutation, you first call `useInsertVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertVoteMutation, { data, loading, error }] = useInsertVoteMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *      username: // value for 'username'
 *      upvote: // value for 'upvote'
 *   },
 * });
 */
export function useInsertVoteMutation(baseOptions?: Apollo.MutationHookOptions<InsertVoteMutation, InsertVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertVoteMutation, InsertVoteMutationVariables>(InsertVoteDocument, options);
      }
export type InsertVoteMutationHookResult = ReturnType<typeof useInsertVoteMutation>;
export type InsertVoteMutationResult = Apollo.MutationResult<InsertVoteMutation>;
export type InsertVoteMutationOptions = Apollo.BaseMutationOptions<InsertVoteMutation, InsertVoteMutationVariables>;
export const GetPaginatedPostListDocument = gql`
    query getPaginatedPostList($after: Int!, $first: Int!) {
  getPaginatedPostList(after: $after, first: $first) {
    body
    comments {
      body
      created_at
      id
      post_id
      username
    }
    created_at
    id
    image
    subreddit {
      created_at
      id
      topic
    }
    subreddit_id
    title
    username
    votes {
      created_at
      id
      post_id
      upvote
      username
    }
  }
}
    `;

/**
 * __useGetPaginatedPostListQuery__
 *
 * To run a query within a React component, call `useGetPaginatedPostListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedPostListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedPostListQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPaginatedPostListQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedPostListQuery, GetPaginatedPostListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedPostListQuery, GetPaginatedPostListQueryVariables>(GetPaginatedPostListDocument, options);
      }
export function useGetPaginatedPostListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedPostListQuery, GetPaginatedPostListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedPostListQuery, GetPaginatedPostListQueryVariables>(GetPaginatedPostListDocument, options);
        }
export type GetPaginatedPostListQueryHookResult = ReturnType<typeof useGetPaginatedPostListQuery>;
export type GetPaginatedPostListLazyQueryHookResult = ReturnType<typeof useGetPaginatedPostListLazyQuery>;
export type GetPaginatedPostListQueryResult = Apollo.QueryResult<GetPaginatedPostListQuery, GetPaginatedPostListQueryVariables>;
export const GetPaginatedPostListByTopicDocument = gql`
    query GetPaginatedPostListByTopic($topic: String!, $first: Int!, $after: Int!) {
  getPaginatedPostListByTopic(topic: $topic, first: $first, after: $after) {
    body
    comments {
      body
      created_at
      id
      post_id
      username
    }
    created_at
    id
    image
    subreddit {
      created_at
      id
      topic
    }
    subreddit_id
    title
    username
    votes {
      created_at
      id
      post_id
      upvote
      username
    }
  }
}
    `;

/**
 * __useGetPaginatedPostListByTopicQuery__
 *
 * To run a query within a React component, call `useGetPaginatedPostListByTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedPostListByTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedPostListByTopicQuery({
 *   variables: {
 *      topic: // value for 'topic'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetPaginatedPostListByTopicQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedPostListByTopicQuery, GetPaginatedPostListByTopicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedPostListByTopicQuery, GetPaginatedPostListByTopicQueryVariables>(GetPaginatedPostListByTopicDocument, options);
      }
export function useGetPaginatedPostListByTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedPostListByTopicQuery, GetPaginatedPostListByTopicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedPostListByTopicQuery, GetPaginatedPostListByTopicQueryVariables>(GetPaginatedPostListByTopicDocument, options);
        }
export type GetPaginatedPostListByTopicQueryHookResult = ReturnType<typeof useGetPaginatedPostListByTopicQuery>;
export type GetPaginatedPostListByTopicLazyQueryHookResult = ReturnType<typeof useGetPaginatedPostListByTopicLazyQuery>;
export type GetPaginatedPostListByTopicQueryResult = Apollo.QueryResult<GetPaginatedPostListByTopicQuery, GetPaginatedPostListByTopicQueryVariables>;
export const GetPostListByPostIdDocument = gql`
    query GetPostListByPostId($post_id: ID!) {
  getPostListByPost_id(post_id: $post_id) {
    body
    comments {
      body
      created_at
      id
      post_id
      username
    }
    created_at
    id
    image
    subreddit {
      created_at
      id
      topic
    }
    subreddit_id
    title
    username
    votes {
      created_at
      id
      post_id
      upvote
      username
    }
  }
}
    `;

/**
 * __useGetPostListByPostIdQuery__
 *
 * To run a query within a React component, call `useGetPostListByPostIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostListByPostIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostListByPostIdQuery({
 *   variables: {
 *      post_id: // value for 'post_id'
 *   },
 * });
 */
export function useGetPostListByPostIdQuery(baseOptions: Apollo.QueryHookOptions<GetPostListByPostIdQuery, GetPostListByPostIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostListByPostIdQuery, GetPostListByPostIdQueryVariables>(GetPostListByPostIdDocument, options);
      }
export function useGetPostListByPostIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostListByPostIdQuery, GetPostListByPostIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostListByPostIdQuery, GetPostListByPostIdQueryVariables>(GetPostListByPostIdDocument, options);
        }
export type GetPostListByPostIdQueryHookResult = ReturnType<typeof useGetPostListByPostIdQuery>;
export type GetPostListByPostIdLazyQueryHookResult = ReturnType<typeof useGetPostListByPostIdLazyQuery>;
export type GetPostListByPostIdQueryResult = Apollo.QueryResult<GetPostListByPostIdQuery, GetPostListByPostIdQueryVariables>;
export const GetSubredditListByTopicDocument = gql`
    query getSubredditListByTopic($topic: String!) {
  getSubredditListByTopic(topic: $topic) {
    created_at
    id
    topic
  }
}
    `;

/**
 * __useGetSubredditListByTopicQuery__
 *
 * To run a query within a React component, call `useGetSubredditListByTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubredditListByTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubredditListByTopicQuery({
 *   variables: {
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useGetSubredditListByTopicQuery(baseOptions: Apollo.QueryHookOptions<GetSubredditListByTopicQuery, GetSubredditListByTopicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubredditListByTopicQuery, GetSubredditListByTopicQueryVariables>(GetSubredditListByTopicDocument, options);
      }
export function useGetSubredditListByTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubredditListByTopicQuery, GetSubredditListByTopicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubredditListByTopicQuery, GetSubredditListByTopicQueryVariables>(GetSubredditListByTopicDocument, options);
        }
export type GetSubredditListByTopicQueryHookResult = ReturnType<typeof useGetSubredditListByTopicQuery>;
export type GetSubredditListByTopicLazyQueryHookResult = ReturnType<typeof useGetSubredditListByTopicLazyQuery>;
export type GetSubredditListByTopicQueryResult = Apollo.QueryResult<GetSubredditListByTopicQuery, GetSubredditListByTopicQueryVariables>;
export const GetSubredditListWithLimitDocument = gql`
    query GetSubredditListWithLimit($limit: Int!) {
  getSubredditListWithLimit(limit: $limit) {
    created_at
    id
    topic
  }
}
    `;

/**
 * __useGetSubredditListWithLimitQuery__
 *
 * To run a query within a React component, call `useGetSubredditListWithLimitQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubredditListWithLimitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubredditListWithLimitQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetSubredditListWithLimitQuery(baseOptions: Apollo.QueryHookOptions<GetSubredditListWithLimitQuery, GetSubredditListWithLimitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubredditListWithLimitQuery, GetSubredditListWithLimitQueryVariables>(GetSubredditListWithLimitDocument, options);
      }
export function useGetSubredditListWithLimitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubredditListWithLimitQuery, GetSubredditListWithLimitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubredditListWithLimitQuery, GetSubredditListWithLimitQueryVariables>(GetSubredditListWithLimitDocument, options);
        }
export type GetSubredditListWithLimitQueryHookResult = ReturnType<typeof useGetSubredditListWithLimitQuery>;
export type GetSubredditListWithLimitLazyQueryHookResult = ReturnType<typeof useGetSubredditListWithLimitLazyQuery>;
export type GetSubredditListWithLimitQueryResult = Apollo.QueryResult<GetSubredditListWithLimitQuery, GetSubredditListWithLimitQueryVariables>;
export const GetVoteListByPostIdDocument = gql`
    query GetVoteListByPostId($post_id: ID!) {
  getVoteListByPost_id(post_id: $post_id) {
    created_at
    id
    post_id
    upvote
    username
  }
}
    `;

/**
 * __useGetVoteListByPostIdQuery__
 *
 * To run a query within a React component, call `useGetVoteListByPostIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVoteListByPostIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVoteListByPostIdQuery({
 *   variables: {
 *      post_id: // value for 'post_id'
 *   },
 * });
 */
export function useGetVoteListByPostIdQuery(baseOptions: Apollo.QueryHookOptions<GetVoteListByPostIdQuery, GetVoteListByPostIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVoteListByPostIdQuery, GetVoteListByPostIdQueryVariables>(GetVoteListByPostIdDocument, options);
      }
export function useGetVoteListByPostIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVoteListByPostIdQuery, GetVoteListByPostIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVoteListByPostIdQuery, GetVoteListByPostIdQueryVariables>(GetVoteListByPostIdDocument, options);
        }
export type GetVoteListByPostIdQueryHookResult = ReturnType<typeof useGetVoteListByPostIdQuery>;
export type GetVoteListByPostIdLazyQueryHookResult = ReturnType<typeof useGetVoteListByPostIdLazyQuery>;
export type GetVoteListByPostIdQueryResult = Apollo.QueryResult<GetVoteListByPostIdQuery, GetVoteListByPostIdQueryVariables>;