import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'

export default function VideoIntro() {
    const [showMore, setShowMore] = React.useState(true)
    const toggleShowMore = (e) => {
        //e.preventDefault()
        setShowMore(!showMore)
    }
  return (
    <Box sx={{
        mt:2, mb:3, p:2, pb:3,
        boxSizing:'border-box',
        backgroundColor:'grey.200', width:1, height:showMore ? 120 : 'fit-content', overflow:'hidden',
        borderRadius:3, '&:hover': {backgroundColor:'grey.300'}, 
        cursor:'pointer',
        position:'relative'
        }} onClick={toggleShowMore}>
            <Typography paragraph variant='h6'> Hi, entrepreneur, </Typography>
            <Typography paragraph variant='body1'>
            JanessaTech(Juan Zhao in Chinese name) isn't just a fullstack blockchain engineer with Master Degree in CS, focusing on SaSS consulting in blockchain space powered by the end-to-end development process.
            </Typography>
            <Typography paragraph variant='body1'>
            She aims to transform web3 from a wild-world into the foundation of our digital world. Her determination partly comes from the respect for equality as human-being, partly comes from the participation in the development of different software solutions ranging from blockchain, backend, frontend, AI, CICD in a robust and consistent way with big success since 2010.
            </Typography>
            <Typography paragraph variant='body1'>
            With this dream, she built up a series of web3 fullstack projects from scratch(some for fun, some for employers). The latest full-stack web3 project built for Lian company(a startup) is a NFT marketplace where users can sell/buy second-hand items using ERC20 as payment solution. Check links below for more about the project:
            </Typography>
            <Typography>
              <ul>
                <li><strong>Intro:</strong> <Link href="https://www.youtube.com/watch?v=UCe7ilfKP8o">https://www.youtube.com/watch?v=UCe7ilfKP8o</Link></li>
                <li><strong>Front-end:</strong> <Link href="https://github.com/JanessaTech/best-second-hand-market">https://github.com/JanessaTech/best-second-hand-market</Link></li>
                <li><strong>Backend:</strong><Link href="https://github.com/JanessaTech/best-second-hand-market-backend">https://github.com/JanessaTech/best-second-hand-market-backend</Link></li>
              </ul>
            </Typography>
            <Typography paragraph variant='body1'>
            And Janessa is also fluent both in English and Mandarin and has years of remote-working experience with great autonomy
            </Typography>
            <Typography paragraph variant='body1'>
            Here is the list of tech stacks JanessaTech has experienced/mastered in the recent 5 years:
            </Typography>
            <Typography variant='body1'>
            <strong>Web3:</strong> (Ethereum,Solidity, openzeppelin, Ethers, NFT, ERC721, ERC1115,ERC20, IPFS, Metamask, siwe, Hardhat, Remix, Ganache,Truffle etc)
            </Typography>
            <Typography variant='body1'>
            <strong>MERN:</strong> (MongoDB, Express.js, React, Node, UT(Mocha, Jest, chai etc))
            </Typography>
            <Typography variant='body1'>
            <strong>Frontend:</strong> (Material-ui(MUI),HTML,CSS,Javascript)
            </Typography>
            <Typography variant='body1'>
            <strong>Springboot/Spring Cloud:</strong> (Micro-service, MYSQL, Java, JPA, UT etc)
            </Typography>
            <Typography variant='body1'>
            <strong>Middleware/security:</strong> Redis, MQ(rabbit mq), Cloudflare,SSO, Auth2.0,JWT etc
            </Typography>
            <Typography variant='body1'>
            <strong>Unit Test:</strong> Mockito, spock, Junit, Git
            </Typography>
            <strong>CICD/others</strong> Linux, AWS, gitlab/github pipeline, Docker,Git, Jira, Agile etc

            <Typography paragraph variant='body1'>
            If you need someone who can handle features from ideation to creatio, who is comfortable working in uncertainty and ambiguity and has the ability to make the uncertainty and ambiguity into a clear solution and touchable product JanessaTech is the person you are looking for.
            </Typography>
            <Typography paragraph variant='h6'>
             Contacts:
             <Typography variant='body1'>
              <ul>
                <li><strong>Gmail : </strong>  janessatech.web3@gmail.com</li>
                <li><strong>Skype : </strong>  lvlajzhao1983@gmail.com</li>
                <li><strong>Linkedin : </strong>  https://www.linkedin.com/in/juan-zhao/</li>
                <li><strong>Medium : </strong>  https://medium.com/@JanessaTech</li>
              </ul>
            </Typography>
            </Typography>
            
            
        <Button sx={{ 
            borderRadius:2, position:'absolute', 
            right:0, bottom:0}} 
            color="primary" 
            style={{textTransform: 'none'}} onClick={toggleShowMore}>{showMore ? 'Show more' : 'Show less'}</Button>
    </Box>
  )
}

