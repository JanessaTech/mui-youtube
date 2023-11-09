export var mockVideos = [
    {id: 0, profileId: 1, key:'Javascript algorithm', url: 'watch', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Javascript algorithm", views:'1.5K views', days:'5 days ago'},
    {id: 1, profileId: 1, key:'Javascript algorithm', url: 'watch', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Javascript algorithm", views:'1.5K views', days:'5 days ago'},
    {id: 2, profileId: 1, key:'tailwind css tutorial', url: 'watch', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "tailwind css tutorial", views:'1.5K views', days:'5 days ago'},
    {id: 3, profileId: 1, key:'defi dapp', url: 'watch', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "defi dapp", views:'1.5K views', days:'5 days ago'},
    {id: 4, profileId: 1, key:'defi dapp', url: 'watch', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "defi dapp", views:'1.5K views', days:'5 days ago'},
    {id: 5, profileId: 1, key:'defi dapp', url: 'watch', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "defi dapp", views:'1.5K views', days:'5 days ago'},
    {id: 6, profileId: 1, key:'React js tips and tricks', url: 'watch', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "React js tips and tricks", views:'1.5K views', days:'5 days ago'},
    {id: 7, profileId: 1, key:'web3.0 fullstack developer', url: 'watch', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "web3.0 fullstack developer", views:'1.5K views', days:'5 days ago'},
    {id: 8, profileId: 1, key:'web3.0 fullstack developer', url: 'watch', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "web3.0 fullstack developer", views:'1.5K views', days:'5 days ago'},
]

export var videos = [
    {
        id: 0, 
        recommendTo:1, // who the video will be recommended to
        key:'Javascript algorithm', 
        labels:[],
        url: 'watch', 
        videoSrc: 'videos/20230529-210928.mp4', 
        authorId: 2, 
        title: "Javascript algorithm", 
        likes: 10,
        dislikes:1,
        views:'1.5K views', 
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
        tabs:['Web3.0', 'Ethereum', 'Security', 'Blockchain', 'EVM'],
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
        isReply: false // an indicator if the comment is a comment made on top of video rather than a reply on top of an existing comment
    },
    {
        id:2,
        vedioId:0,
        from: 20,
        days: '6 days ago',
        comment:'Beautiful lovey words.. Finding meaning is the key in every communication.. and not following the lessons from failure...another key..',
        likes:15,
        dislikes:1,
        commentedBy: undefined,
        isReply: false
    },
    {
        id:3,
        vedioId:undefined,
        from: 17,
        days: '4 days ago',
        comment: 'A profound message succinctly put. Has it occurred to you, though, JanessaTech, the meaning we\'ve to search for could be common to us all. Just picked up Michael Newton\'s, "Life between Lives - Hypnotherapy for Spiritual Regression." Have you ever read any of his stuff? e.g. Journey of Souls, and Destiny of Souls.',
        likes:50,
        dislikes:1,
        commentedBy: [5],
        isReply: true
    },
    {
        id:4,
        vedioId:undefined,
        from: 19,
        days: '7 days ago',
        comment: 'Thank you, that was very thought provoking and insightful.',
        likes:45,
        dislikes:1,
        commentedBy: undefined,
        isReply: true
    },
    {
        id:5,
        vedioId:undefined,
        from: 18,
        days: '3 days ago',
        comment: 'This was amazing JanessaTech, the point on reciprocity was outstanding, really fantastic advice',
        likes:17,
        dislikes:1,
        commentedBy: undefined,
        isReply: true
      }
  ]

