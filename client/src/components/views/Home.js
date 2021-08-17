import { useEffect, useState } from 'react'



const Home = () => {

  const [data, setData] = useState([])
  const [postid,setPostid] = useState("")

  useEffect(() => {
    //console.log("in useEffect")
    showPost()
  }, [])


  const showPost = ()=>{
    fetch('/allposts')
      .then((res) => res.json())
      .then((result) => {
        //console.log("numbers of result: ",result.data.length)
        //loopPost(data)
        console.log("result_data: ", result.data)
        setData(result.data)
      })
  }


  const deletePost = (post_id)=>{
    console.log("postid: ",post_id)

    const jwt = localStorage.getItem("jwt")
    const user = localStorage.getItem("user")
    //console.log(jwt)
    console.log(user)

    fetch('/deletepost',{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        Authorization:jwt
      },
      body:JSON.stringify({
        postid:post_id,
        author:JSON.parse(user).name
      })
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      showPost()
    })
    .catch((err)=>{
      console.log(err)
    })
  }



  return (
    <>
 {/*      
      <br />
      <button
        onClick={
          () => {
            console.log(data)
          }
        }
      >click</button>
*/}

      {
        data.map((item) => {
          return (
            <div key={item._id} className="home">

              <div className="row">
                <div className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div style={postAuthor} className="post-header">
                      <div  className="post-author">{item.author}</div>
                      <span 
                      style={{cursor:"pointer"}} 
                      className="post-delete-button"
                      onClick={()=>{
                        deletePost(item._id)
                      }}
                      >
                        <i className="material-icons">delete</i>
                      </span>
                    </div>
                    <hr />
                    <div className="post-picture">
                      <img style={{ height: "20%", width: "20%" }} src={item.picture} />
                    </div>

                    <div className="card-content white-text">
                      <span className="card-title post-title">{item.title}</span>
                      <p>{item.content}</p>
                    </div>
                    <div className="post-like">likes:{item.like}</div>
                    <div className="card-action">
                      <a href="#">comment block is working</a>

                    </div>
                  </div>
                </div>
              </div>






            </div>
          )
        })
      }
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>


      {/* 
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="author">{author}</div>
              <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <p className="c-content">{content}</p>
              </div>
              <div>
                likes:{like}
              </div>
              <div className="card-action">
                <a href="/">This is a link</a>
                <a href="/">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

*/}
    </>
  )
}


const postAuthor = {
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  padding:"8px"
}




export default Home