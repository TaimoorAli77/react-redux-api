import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//post are like fb-posts etc & GET api req to fetch all data(posts)

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),

  endpoints: (builder) => ({                //getting all data
    getAllPosts: builder.query({            // use then getAllPosts then query for exporting hook =useGetAllPostsQuery
      query: () => ({
        url: 'posts',                     //it is endpoint  e.g,https://jsonplaceholder.typicode.com/posts
        method: 'GET'
      }),
    }),
    getPostById: builder.query({
      query: (id) => {
        console.log("ID : ", id)
        return {
          url: `posts/${id}`,
          method: 'GET'
        }
      }
    }),
    getPostByLimit: builder.query({
      query: (num) => {
        console.log("Limit Number : ", num)
        return {
          url: `posts/?_limit=${num}`,
          method: 'GET'
        }
      }
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        console.log("Post Create: ", newPost)
        return {
          url: 'posts',
          method: 'POST',
          body: newPost,
          headers: {
            'Content-type': 'application/json, charset-UTF-8'
          }
        }
      }
    }),
    deletePost: builder.mutation({
      query: (id) => {
        console.log("Delete Id: ", id)
        return {
          url: `posts/${id}`,
          method: 'DELETE'
        }
      }
    }),
    updatePost: builder.mutation({
      query: (updatePostData) => {
        console.log("Post update: ", updatePostData);

        const { id , ...data }= updatePostData; 

        console.log("Post update actual: ", data)

        return {
          url:`posts/${id}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-type': 'application/json, charset-UTF-8'
          }
        }
      }
    }),


  }),


})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostsQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation , useUpdatePostMutation } = postApi