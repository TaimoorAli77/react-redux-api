import React from 'react'
// import { useGetAllPostsQuery } from './services/post'
// import {useGetPostByIdQuery} from './services/post'
 import {useGetPostByLimitQuery} from './services/post'
function App() {
  //eslint-disable-next-line
  // const responseInfo = useGetAllPostsQuery();
  // const   responseInfo  = useGetPostByIdQuery(22);
  const   responseInfo  = useGetPostByLimitQuery(3);
  
    // console.log("Response Information  :",responseInfo)
    console.log("Data Taimoor  :",responseInfo.data)
  //   console.log("Success Taimoor  :",responseInfo.isSuccess)
  //   console.log("Fetching Taimoor  :",responseInfo.isFetching)
  //   console.log("isLoading Taimoor  :",responseInfo.isLoading)
  //   console.log("isUninitialized Taimoor  :",responseInfo.isUninitialized)
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


<div className="container">
{responseInfo.data && responseInfo.data.map((post , i)=>
        <div key={i}><h1>{post.id}. {post.title}</h1>
        <p>{post.body}</p>
        <hr></hr></div>) } 
</div>






      </React.Fragment>)
}

export default App
