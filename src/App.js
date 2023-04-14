import React from 'react'
// import { useGetAllPostsQuery } from './services/post'
// import {useGetPostByIdQuery} from './services/post'
//  import {useGetPostByLimitQuery} from './services/post'
//  import {useDeletePostMutation} from './services/post'
//  import {useCreatePostMutation} from './services/post'
 import {useUpdatePostMutation} from './services/post'
function App() { 
  //eslint-disable-next-line
  // const responseInfo = useGetAllPostsQuery();
  // const   responseInfo  = useGetPostByIdQuery(22);
  // const   responseInfo  = useGetPostByLimitQuery(3);
  //  const [ deletePost , responseInfo ] = useDeletePostMutation()
  //  const [ createPost , responseInfo ] = useCreatePostMutation()
  // const newPost ={
  //   title: "New Title",
  //   body: "New body added",
  //   userId:1,
  // }



   const [ updatePost , responseInfo ] = useUpdatePostMutation()

const updatePostData ={
  id:1,
  title: "New Title update",
  body: "New body update",
  userId:1,
}
    console.log("Response Information  :",updatePost)
    console.log("Data Taimoor  :",responseInfo)
    // console.log("Success Taimoor  :",responseInfo.isSuccess)
    console.log("Success Taimoor  :",responseInfo.data)
    
    // console.log("Fetching Taimoor  :",responseInfo.isFetching)
    // console.log("isLoading Taimoor  :",responseInfo.isLoading)
    // console.log("isUninitialized Taimoor  :",responseInfo.isUninitialized)
  //   console.log("isError Taimoor  :",responseInfo.isError)
  // if(responseInfo.isError) return console.log(responseInfo.error.error)

  return (<React.Fragment>
    {/* Get All Data */}
        {/* <div className="container">
        <h1>Redux toolKit - RTK Query (Get All Data)</h1> 
        {responseInfo.data && responseInfo.data.map((post , i)=>
        <div key={i}><h1>{post.id}. {post.title}</h1>
        <p>{post.body}</p>
        <hr></hr></div>) } */}
         
        {/* {console.log("within return taimoor",responseInfo.data)}
        </div> */}
  
  {/* Get Single Data */}
  {/* <div className="container">
  <h1>Redux toolKit - RTK Query (Get Single Data)</h1> 
  {responseInfo.data &&<div><h3>{responseInfo.data.id} {responseInfo.data.title}</h3>
  <p>{responseInfo.data.body}</p></div> }
  {console.log("within return taimoor",responseInfo.data)}
  </div> */}



  {/* //Limited number of data shows */}


{/* <div className="container">
{responseInfo.data && responseInfo.data.map((post , i)=>
        <div key={i}><h1>{post.id}. {post.title}</h1>
        <p>{post.body}</p>
        <hr></hr></div>) } 
</div> */}


{/* Deletes Data */}
{/* <div className='App'>
<h1>Redux ToolKit  -  RTK Query (Delete Data)</h1>

 {/* {console.log("okna",deletePost) } */}
 {/* <div> <button onClick={()=>deletePost(2)}>Delete Post</button> </div> */}
{/* </div>  */}



{/* // Creates data(Posts) */}

{/* <div className='App'>
<h1>Redux ToolKit  -  RTK Query (Create Data)</h1>

 {/* {console.log("okna",deletePost) } */}
 {/* <div> <button onClick={()=>createPost(newPost)}>Add Post</button> </div>
</div>  */}


{/* // update data(Posts) */}


<div className='App'>
<h1>Redux ToolKit  -  RTK Query (update Data)</h1>

 {/* {console.log("okna",deletePost) } */}
 <div> <button onClick={()=>updatePost(updatePostData)}>UPDATE Post</button> </div>
</div>

      </React.Fragment>)
}

export default App
