import React from 'react'
import s from './MainPage.module.css'
import logo from './logo.png'
import like from './like.png'
import post from './post.png'
import repost from './share.png'
export default function MainPage() {
    return (
        <div className={s.posts}>
            <div className={s.post}>
                <div className={s.heading}>
                    <div className={s.name}>
                        <img src={logo} />
                        <user>UserName</user>
                    </div>
                    <time>
                    2 минуты назад
                    </time>
                </div>
                <text>Девушка, у которой было хобби — писательство, написала роман об одном из претендентов на трон. 
                    Он попался на глаза королевской семьи, и её арестовали за неуважение. </text>
                <content>
                    <img src={post} className={s.postImg}/>
                    <stat>
                        <likes>
                            <img src={like}/>
                            <num>6 230</num>
                        </likes>
                        <reposts>
                            <img src={repost}/>
                            <num>6 230</num>
                        </reposts>
                    </stat>
                </content>
            </div>
            <div className={s.post}>
                <div className={s.heading}>
                    <div className={s.name}>
                        <img src={logo} />
                        <user>UserName</user>
                    </div>
                    <time>
                    2 минуты назад
                    </time>
                </div>
                <text>Девушка, у которой было хобби — писательство, написала роман об одном из претендентов на трон. 
                    Он попался на глаза королевской семьи, и её арестовали за неуважение. </text>
                <content>
                    <img src={post} className={s.postImg}/>
                    <stat>
                        <likes>
                            <img src={like}/>
                            <num>6 230</num>
                        </likes>
                        <reposts>
                            <img src={repost}/>
                            <num>6 230</num>
                        </reposts>
                    </stat>
                </content>
            </div>
        </div>
    )
}
