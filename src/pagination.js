import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom'
import './App.css'
function Pagination() {
  const [posts, setposts] = useState([])
  const [pageNo, setpageNo] = useState(0)
  useEffect(async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setposts(data))

  }, [])
  const handlePageClick = ({selected}) => {
    setpageNo(selected);
  
  };
 
  const userPerPage = 5;
  const pageVisited = pageNo * userPerPage
  const dispUser = posts.slice(pageVisited, pageVisited + userPerPage)
    .map(user => {
      return (
        <div class="card">

          <div class="container">
            <h4><b>{user.title}</b></h4>
            <p>{user.body}</p>
          </div>
        </div>
      )
    })
    const pageCount=Math.ceil(posts.length/userPerPage)
  return (
    <div >
      
      <h1 style={{position:'absolute',left:'50%'}}>Tekki Web Solutions Task </h1>
      <div>
       {dispUser}
      </div>
      <div style={{position:'absolute',top:'10rem',left:'45%',zIndex:'3'}}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
    <div style={{position:'absolute',left:'70%',top:'20rem'}}>
    <Link to='/post'><h2>Post a new Post</h2></Link>
    </div>
    </div>
  )
}
export default Pagination
