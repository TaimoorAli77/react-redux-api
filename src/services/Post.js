import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 //post are like fb-posts etc & GET api req to fetch all data(posts)

export const postApi = createApi({                                      
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://jsonplaceholder.typicode.com/' }),

    endpoints: (builder) => ({                //getting all data
      getAllPosts: builder.query({            // use then getAllPosts then query for exporting hook =useGetAllPostsQuery
        query: () => ({
            url:'posts',                     //it is endpoint  e.g,https://jsonplaceholder.typicode.com/posts
            method:'GET'
        }),
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetAllPostsQuery } = postApi