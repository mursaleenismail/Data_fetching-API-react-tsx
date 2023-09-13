import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import PostScreen from "../../pages/post"
import Singlepost from "../../pages/singlepost"
import AddProject from "../../pages/addproject"

import Comment from "../../pages/comment"

import AddComment from "../../pages/addcomment"
import Projects from "../../pages/project"


export default function AppRouter(){
    return<>
    <Router>
    {/* <nav>
        <Link to='/' >Home</Link>  
        <hr/>
        <Link to='about' >About</Link>
        <hr/>
        <Link to='services' >Services</Link>
        <hr/>
        <Link to='profile' >Profile</Link>
        
    </nav> */}
        <Routes>
            {/* <Route path="/" element={ <Home/>}   />
            <Route path="about" element={ <About/>}   />
            {/* <Route path="about/student" element={ <About/>}   /> */}
            {/* <Route path="services" element={ <Services/>}   /> */}
            {/* <Route path="profile" element={ <Profile/>}   /> */}
            {/* <Route path="profile/:id" element={ <Profile/>}   />
            <Route path="*" element={ <NotFound/>}   /> */}


{/* <         <Route path="post" element={<PostScreen />} /> */}
          <Route path="post" element={<PostScreen  />} />
          <Route path="singlePost/:id" element={<Singlepost />} />
          <Route path="singlePost" element={<Singlepost />} />
          <Route path="project" element={<Projects />} />
          <Route path="comment-page" element={<Comment />} />
         <Route path="add/" element={<AddProject />} />
          <Route path="add/:id" element={<AddProject />} /> 
          <Route path="addcomment/" element={<AddComment />} />
          <Route path="addcomment/:id" element={<AddComment />} />
         
         



        </Routes>
    </Router>
        </>
}