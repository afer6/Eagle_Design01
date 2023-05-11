import React from 'react'
import logo from '../images/logo1.png'
import '../css/layout.css'

import { SearchOutlined ,YoutubeOutlined,TwitterOutlined,InstagramOutlined,GithubOutlined,GitlabOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
function layout() {
  return (




<div>


<header>

<div className='border-b-[1px] bg-white w-[1920px] fixed pl-[20px] h-[70px] pb-[10px] flex items-center justify-between'>


 <div className='flex  items-center '>
 <img src={logo} alt="" className='w-[70px] h-[70px]'/>
 <h1 className='text-[20px] pl-[5px]'>
 <span className='relative top-[6px]'>Eagle Design</span>
 <br /> 
 <span className='text-[15px] relative
 left-[20px] text-[#208FFD] hover:underline'>SoftClub</span></h1>
 </div>

<div >

 <div className=''>
 <nav id="menu">
             <div class="menu-item">
                 <div class="menu-text">
                     <a href="#" className='text-black'>Products</a>
                 </div>
                 <div class="sub-menu">
                     <div class="icon-box">
                         <div class="icon"><i class="fal fa-wind-turbine"></i></div>
                         <div class="text">
                             <div class="title">Turbo Editor <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">Edit your code while slowing down time.</div>
                         </div>
                     </div>
                     <div class="icon-box">
                         <div class="icon"><i class="fal fa-lightbulb-on"></i></div>
                         <div class="text">
                             <div class="title">Idea Creator <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">Think of an idea, and have an AI create it.</div>
                         </div>
                     </div>
                     <div class="icon-box">
                         <div class="icon"><i class="fal fa-bomb"></i></div>
                         <div class="text">
                             <div class="title">Super Collider <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">Remove mass from any object.</div>
                         </div>
                     </div>
                     <div class="sub-menu-holder"></div>
                 </div>
             </div>
             <div class="menu-item highlight">
                 <div class="menu-text">
                     <a href="#">Services</a>
                 </div>
                 <div class="sub-menu double">
                     <div class="icon-box gb a">
                         <div class="icon"><i class="far fa-question-circle"></i></div>
                         <div class="text">
                             <div class="title">Consult <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">From Professionals</div>
                         </div>
                     </div>
                     <div class="icon-box gb b">
                         <div class="icon"><i class="far fa-users-class"></i></div>
                         <div class="text">
                             <div class="title">Teach <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">In Classroom</div>
                         </div>
                     </div>
                     <div class="icon-box gb c">
                         <div class="icon"><i class="far fa-school"></i></div>
                         <div class="text">
                             <div class="title">Learn <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">By Video</div>
                         </div>
                     </div>
                     <div class="icon-box gb d">
                         <div class="icon"><i class="far fa-chess-rook"></i></div>
                         <div class="text">
                             <div class="title">Keep <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">The Castle</div>
                         </div>
                     </div>
                     <div class="icon-box gb e">
                         <div class="icon"><i class="far fa-video-plus"></i></div>
                         <div class="text">
                             <div class="title">Become <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">A Creator</div>
                         </div>
                     </div>
                     <div class="icon-box gb f">
                         <div class="icon"><i class="far fa-cat"></i></div>
                         <div class="text">
                             <div class="title">Understand <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">Our Journey</div>
                         </div>
                     </div>
                     <div class="bottom-container">
                         Ready to dive in? <a href="#">Get Started</a>
                     </div>
                     <div class="sub-menu-holder"></div>
                 </div>
             </div>
             <div class="menu-item highlight">
                 <div class="menu-text">
                     <a href="#">Support</a>
                 </div>
                 <div class="sub-menu triple">
                     <div class="top-container gb c icon-box">
                         <div class="icon big"><i class="far fa-book"></i></div>
                         <div class="text">
                             <div class="title">Where to start</div>
                             <div class="sub-text">Find out where to begin below</div>
                         </div>
                     </div>
                     <div class="box">
                         <h3>Your Journey</h3>
                         <a href="#">Get Started</a>
                         <a href="#">Learn the Basics</a>
                         <a href="#">Get Advanced</a>
                         <a href="#">Start Teaching</a>
                     </div>
                     <div class="box">
                         <h3>Your Tools</h3>
                         <a href="#">Turbo Editor</a>
                         <a href="#">Time Stopper</a>
                         <a href="#">Brain Enhancer</a>
                         <a href="#">Network Maker</a>
                     </div>
                     <div class="icon-box flat">
                         <div class="icon"><i class="fal fa-plug"></i></div>
                         <div class="text">
                             <div class="title">API Guide <i class="far fa-arrow-right"></i></div>
                         </div>
                     </div>
                     <div class="icon-box flat">
                         <div class="icon"><i class="fal fa-comments"></i></div>
                         <div class="text">
                             <div class="title">Support Line <i class="far fa-arrow-right"></i></div>
                         </div>
                     </div>
                     <div class="icon-box flat">
                         <div class="icon"><i class="fal fa-phone-volume"></i></div>
                         <div class="text">
                             <div class="title">Live Chat <i class="far fa-arrow-right"></i></div>
                         </div>
                     </div>
                     <div class="icon-box flat">
                         <div class="icon"><i class="fal fa-book-spells"></i></div>
                         <div class="text">
                             <div class="title">Documentation <i class="far fa-arrow-right"></i></div>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="menu-item">
                 <div class="menu-text">
                     <a href="#">Community</a>
                 </div>
                 <div class="sub-menu">
                     <div class="icon-box">
                         <div class="icon"><i class="far fa-satellite"></i></div>
                         <div class="text">
                             <div class="title">Forum <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">Join our passionate community.</div>
                         </div>
                     </div>
                     <div class="icon-box">
                         <div class="icon"><i class="fab fa-twitter-square"></i></div>
                         <div class="text">
                             <div class="title">Twitter <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">Follow us on twitter.</div>
                         </div>
                     </div>
                     <div class="icon-box">
                         <div class="icon"><i class="fab fa-twitch"></i></div>
                         <div class="text">
                             <div class="title">Live Stream <i class="far fa-arrow-right"></i></div>
                             <div class="sub-text">We stream content every day.</div>
                         </div>
                     </div>
                     <div class="sub-menu-holder"></div>
                 </div>
             </div>
             <div id="sub-menu-container">
                 <div id="sub-menu-holder">
                     <div id="sub-menu-bottom">

                     </div>
                     </div>
                 </div>
                 <SearchOutlined  style={{fontSize:"27px",paddingRight:"20px",}}/>
                 <YoutubeOutlined style={{fontSize:"27px"}}/>
                 <TwitterOutlined style={{fontSize:"27px",paddingLeft:"20px",
                 paddingRight:"15px"}}/>

                 <InstagramOutlined style={{fontSize:"27px",
                 paddingRight:"20px"}}/>
                 <GithubOutlined style={{fontSize:"27px"}} />
                 <button className='w-[200px] h-[50px] relative
                 bottom-[12px] left-[25px]
                 text-white font-[700] bg-[#1389FD]'>Get Started</button>
        </nav>




     </div>
</div>


</div>




</header>

<Outlet/>



</div>
  )
}

export default layout