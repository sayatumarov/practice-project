import React from 'react'
import s from './MainPage.module.css'
import logo from './logo.png'
import like from './like.png'
import postImg from './post.png'
import repost from './share.png'

function OutputPosts(posts){
      const li = posts.map(post => 
        <div className={s.post}>
        <div className={s.heading}>
            <div className={s.name}>
                <img src={logo} />
                <user>{post.user}</user>
            </div>
            <time>
            {post.time}
            </time>
        </div>
        <text>{post.text}</text>
        <content>
            <img src={postImg} className={s.postImg}/>
            <stat>
                <likes>
                    <img src={like}/>
                    <num>{post.likes}</num>
                </likes>
                <reposts>
                    <img src={repost}/>
                    <num>{post.reposts}</num>
                </reposts>
            </stat>
        </content>
    </div>
      
      )
      return(li)
}
export default function MainPage(props) {
    return (
        <div className={s.posts}>
            <div>{OutputPosts(props.store.getState().posts)}</div>
        </div>
    )
}
