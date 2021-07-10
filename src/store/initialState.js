let initialState = {
    posts: [{
        user: 'RightyDev',
        time: '2 минуты назад',
        text: 'Just new post',
        logo: './logo.png',
        img: './post.png',
        likes: 666,
        reposts: 555
    },
    {
        user: 'asc',
        text: 'Just new post',
        img: 'post.png',
        likes: 666,
        reposts: 555
    } 
],

    ProfileData: {
        username: 'dfvfv',
        ava: 'ava.png'
    },
    MessagesData: [
        {
            id: 1,
            messages: [
                ['me', 'Hello', 13, 26], //[position, text, hour, minute]
            ['other', 'How are you', 15, 28],
            ['other', 'How are you', 17, 28],
            ['me', 'How are you', 19, 28],
            ['other', 'How are you', 19, 35]
        ]
        },
        {
            id: 2,
            messages: [
                ['me', 'Hello', 14, 26], //[position, text, hour, minute]
            ['other', 'How are you', 15, 28],
            ['other', 'How are you', 17, 28],
            ['me', 'How are you', 19, 28],
            ['other', 'How are you', 19, 35]
        ]
        }
    ],
    NewMessageText: '',
    DialogsData: [
        {
            UserId: 1,
            UserName: 'UserName',
            date: '23.06.2021',
            lastMessage: 'LastMessage'
        },
        {
            UserId: 2,
            date: '23.06.2021',
            UserName: 'UserName',
            lastMessage: 'LastMessage'
        }
    ]
}

export default initialState