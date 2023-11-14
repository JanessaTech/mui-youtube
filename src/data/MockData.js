
export var videos = [
    {
        id: 0, 
        recommendTo:1, // who the video will be recommended to
        key:'Javascript algorithm', 
        labels:['web3.0', 'zz'],
        url: 'watch', 
        videoSrc: 'videos/20230529-210928.mp4', 
        authorId: 2, 
        title: "Javascript algorithm", 
        likes: 10,
        dislikes:1,
        views:'1.5K views', 
        days:'5 days ago'
    },
    {
        id: 2, 
        recommendTo:1, // who the video will be recommended to
        key:'tailwind css tutorial', 
        labels:['ethereum'],
        url: 'watch', 
        videoSrc: 'videos/20230529-210928.mp4', 
        authorId: 2, 
        title: "tailwind css tutorial", 
        likes: 23,
        dislikes:5,
        views:'1K views', 
        days:'25 days ago'
    },
    {
        id: 3, 
        recommendTo:1, // who the video will be recommended to
        key:'defi dapp', 
        labels:[],
        url: 'watch', 
        videoSrc: 'videos/20230529-210928.mp4', 
        authorId: 2, 
        title: "defi dapp1", 
        likes: 223,
        dislikes:15,
        views:'48K views', 
        days:'2 days ago'
    },
    {
        id: 4, 
        recommendTo:1, // who the video will be recommended to
        key:'defi dapp', 
        labels:['security', 'blockchain'],
        url: 'watch', 
        videoSrc: 'videos/20230529-210928.mp4', 
        authorId: 2, 
        title: "defi dapp2", 
        likes: 223,
        dislikes:15,
        views:'48K views', 
        days:'3 days ago'
    },
    {
        id: 5, 
        recommendTo:1, // who the video will be recommended to
        key:'React js tips and tricks', 
        labels:['blockchain'],
        url: 'watch', 
        videoSrc: 'videos/20230529-210928.mp4', 
        authorId: 3, 
        title: "React js tips and tricks1", 
        likes: 677,
        dislikes:5,
        views:'22K views', 
        days:'8 days ago'
    },
    {
        id: 6, 
        recommendTo:1, // who the video will be recommended to
        key:'React js tips and tricks', 
        labels:['evm'],
        url: 'watch', 
        videoSrc: 'videos/20230529-210928.mp4', 
        authorId: 3, 
        title: "React js tips and tricks2", 
        likes: 234,
        dislikes:2,
        views:'48K views', 
        days:'9 days ago'
    },
    {
        id: 7, 
        recommendTo:1, // who the video will be recommended to
        key:'web3.0 fullstack developer', 
        labels:[],
        url: 'watch', 
        videoSrc: 'videos/20230529-210928.mp4', 
        authorId: 4, 
        title: "web3.0 fullstack developer", 
        likes: 234,
        dislikes:2,
        views:'100K views', 
        days:'22 days ago'
    },
    {
        id: 8, 
        recommendTo:1, // who the video will be recommended to
        key:'web3.0 fullstack developer', 
        labels:['zz'],
        url: 'watch', 
        videoSrc: 'videos/20230529-210928.mp4', 
        authorId: 4, 
        title: "web3.0 fullstack developer1", 
        likes: 234,
        dislikes:2,
        views:'200K views', 
        days:'23 days ago'
    },
    {
        id: 9, 
        recommendTo:1, // who the video will be recommended to
        key:'Javascript algorithm', 
        labels:[],
        url: 'watch', 
        videoSrc: 'videos/20230529-210928.mp4', 
        authorId: 5, 
        title: "Javascript algorithm2", 
        likes: 555,
        dislikes:0,
        views:'4K views', 
        days:'5 days ago'
    }
]

export var youtubers = [
    {
        id: 1,
        name: 'Janessa Tech',
        img_profile: 'imgs/prof.png',
        notifications: 5,
        libs: ['FullStack Dev', 'Web3.0 Dev', 'Ethereum'], 
        subscriptions:[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], // who the youtuber is following
        subscribers:[], // who are following the youtuber
        subIndex:1, // the index of the options when being subscribed which are: 'tongzhi-fill','tongzhi', 'tongzhi-no', 'unreg'
        tabs:['All', 'Web3.0', 'Ethereum', 'Security', 'Blockchain', 'EVM', 'ZZ'],
        historyKeyWords: ['Javascript algorithm', 'tailwind css tutorial', 'defi dapp', 'React js tips and tricks', 'web3.0 fullstack developer']
    },
    {
        id: 2,
        notifications: 5,
        name: 'Janessa Tech2',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 3,
        notifications: 5,
        name: 'Janessa Tech3',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 4,
        notifications: 5,
        name: 'Janessa Tech4',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 5,
        notifications: 5,
        name: 'Janessa Tech5',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 6,
        notifications: 5,
        name: 'Janessa Tech6',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 7,
        notifications: 5,
        name: 'Janessa Tech7',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 8,
        notifications: 5,
        name: 'Janessa Tech8',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 9,
        notifications: 5,
        name: 'Janessa Tech9',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 10,
        notifications: 5,
        name: 'Janessa Tech10',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 11,
        notifications: 5,
        name: 'Janessa Tech11',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 12,
        notifications: 5,
        name: 'Janessa Tech12',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 13,
        notifications: 5,
        name: 'Janessa Tech13',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 14,
        notifications: 5,
        name: 'Janessa Tech14',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 15,
        notifications: 5,
        name: 'Janessa Tech15',
        img_profile: 'imgs/prof.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 16,
        notifications: 5,
        name: 'UncommonSenz',
        img_profile: 'imgs/commenters/p1.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 17,
        notifications: 5,
        name: 'arthurthomasware5004',
        img_profile: 'imgs/commenters/p3.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 18,
        notifications: 5,
        name: 'Nicktuck333',
        img_profile: 'imgs/commenters/p5.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 19,
        notifications: 5,
        name: 'G6EJD',
        img_profile: 'imgs/commenters/p4.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },
    {
        id: 20,
        notifications: 5,
        name: 'kamabk1',
        img_profile: 'imgs/commenters/p2.png',
        libs: [], 
        subscriptions:[],
        subscribers:[1],
        subIndex:2,
        tabs:[],
        historyKeyWords: []
    },

]

export var comments = [
    {
        id:1,  // comment id
        vedioId:0, // the video id which the comment is left on
        from: 16,   // the id of the youtuber who left the comment
        days: '5 days ago',  // when the comment happened
        comment:'Anytime I come here, I leave inspired and motivated. The universe brought you into my life. And I\'ve been learning since, hoping to find myself. May God bless you JanessaTech.',
        likes:33,  // the likes
        dislikes:1,  // the dislikes
        commentedBy: [3, 4],  // the list of comment ids
    },
    {
        id:2,
        vedioId:0,
        from: 20,
        days: '6 days ago',
        comment:'Beautiful lovey words.. Finding meaning is the key in every communication.. and not following the lessons from failure...another key..',
        likes:15,
        dislikes:1,
        commentedBy: undefined
    },
    {
        id:3,
        vedioId:undefined,
        from: 17,
        days: '4 days ago',
        comment: 'A profound message succinctly put. Has it occurred to you, though, JanessaTech, the meaning we\'ve to search for could be common to us all. Just picked up Michael Newton\'s, "Life between Lives - Hypnotherapy for Spiritual Regression." Have you ever read any of his stuff? e.g. Journey of Souls, and Destiny of Souls.',
        likes:50,
        dislikes:1,
        commentedBy: [5]
    },
    {
        id:4,
        vedioId:undefined,
        from: 19,
        days: '7 days ago',
        comment: 'Thank you, that was very thought provoking and insightful.',
        likes:45,
        dislikes:1,
        commentedBy: undefined
    },
    {
        id:5,
        vedioId:undefined,
        from: 18,
        days: '3 days ago',
        comment: 'This was amazing JanessaTech, the point on reciprocity was outstanding, really fantastic advice',
        likes:17,
        dislikes:1,
        commentedBy: undefined
    },
    {
        id:6,
        vedioId:2,
        from: 19,
        days: '3 days ago',
        comment: 'This was amazing JanessaTech, the point on reciprocity was outstanding, really fantastic advice',
        likes:17,
        dislikes:1,
        commentedBy: [7]
    },
    {
        id:7,
        vedioId:undefined,
        from: 20,
        days: '3 days ago',
        comment: 'Thanks a lot',
        likes:17,
        dislikes:1,
        commentedBy: [7]
    },
    {
        id:8,
        vedioId:3,
        from: 17,
        days: '2 days ago',
        comment: 'Thanks a lot',
        likes:17,
        dislikes:1,
        commentedBy: undefined
    },
    {
        id:9,
        vedioId:3,
        from: 18,
        days: '4 days ago',
        comment: 'When I was younger, I used to trauma dump sensitive information onto people near me who honestly were absolute strangers because I didn\'t get this concept. Exploring this idea in therapy, as well as watching a couple of Brene Brown talks, helped me understand that I need to vet those who I disclose sensitive info to by first testing the waters, trying out slightly less sensitive info to see how they respond.',
        likes:444,
        dislikes:0,
        commentedBy: undefined
    },
    {
        id:10,
        vedioId:4,
        from: 18,
        days: '1 days ago',
        comment: 'You missed a couple things: 1) Chinese women have become more selective and less interested in marriage. 2) Chinese women also hold most of the debt in their country. 3) Chinese parents mostly depend on their children as their retirement plan and a good marriage ensures a good retirement.',
        likes:23,
        dislikes:0,
        commentedBy: undefined
    },
    {
        id:11,
        vedioId:5,
        from: 20,
        days: '10 days ago',
        comment: 'So true.  Thanks, Jannesa Tech!!',
        likes:23,
        dislikes:0,
        commentedBy: undefined
    },
    {
        id:12,
        vedioId:6,
        from: 18,
        days: '1 days ago',
        comment: 'Uma vida é pouco para agradecer o caminho do conhecimento, que você abriu para mim. Abs,',
        likes:3333,
        dislikes:0,
        commentedBy: undefined
    },
    {
        id:13,
        vedioId:7,
        from: 18,
        days: '12 days ago',
        comment: 'Uma vida é pouco para agradecer o caminho do conhecimento, que você abriu para mim. Abs,',
        likes:3333,
        dislikes:0,
        commentedBy: undefined
    },
    {
        id:14,
        vedioId:8,
        from: 19,
        days: '6 days ago',
        comment: 'You\'re of the things I will celebrate this year Mr. Conor Thanks for this amazing video',
        likes:3333,
        dislikes:0,
        commentedBy: undefined
    },
    {
        id:15,
        vedioId:9,
        from: 20,
        days: '2 days ago',
        comment: 'Uff,you never cease to amaze me with your remarkable presentation. Hands down the best content creator ever',
        likes:3333,
        dislikes:0,
        commentedBy: undefined
    }

  ]

