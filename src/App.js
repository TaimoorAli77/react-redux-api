import React from 'react'
import {useGetAllPostsQuery} from './services/Post'
const App = () => {
  const responseInfo = useGetAllPostsQuery();
  console.log("Response Information  :",responseInfo)
  console.log("Data Taimoor  :",responseInfo.data)
  console.log("Success Taimoor  :",responseInfo.isSuccess)
  console.log("Fetching Taimoor  :",responseInfo.isFetching)
  console.log("isLoading Taimoor  :",responseInfo.isLoading)
  console.log("isUninitialized Taimoor  :",responseInfo.isUninitialized)

  console.log("isError Taimoor  :",responseInfo.isError)
if(responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>

  return (
    <div>
      <h1>React Redux CRUD</h1>
    </div>
  )
}

export default App
