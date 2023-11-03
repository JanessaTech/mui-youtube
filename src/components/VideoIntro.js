import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function VideoIntro() {
    const [showMore, setShowMore] = React.useState(true)
    const toggleShowMore = (e) => {
        e.preventDefault()
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
            JanessaTech(Juan Zhao in Chinese name) has over 10-year software engineering experience, who ever worked in ZTE, IBM, Huawei, Alstela(a global distributed remote-first company) as a backend software engineer.
            </Typography>
            <Typography paragraph variant='body1'>
            JanessaTech is a fast learner and an expert at building new production/features from concepts to delivery.
            </Typography>
            <Typography paragraph variant='body1'>
            In the last 5 years or so, she mainly focuses on micro-service tech stack. Besides that, she, with a great passion about blockchain, started an open-source project and made a comprehensive explanation about yellow paper which aims to help people worldwide to easily get through yellow paper. Besides writing codes, JanessaTech is comfortable with doing research, reading academic paper and productionizing academic paper via codes.
            For more information about JanessaTech, check the CV in pdf or browse the profile on LinkedIn.
            </Typography>
            <Typography paragraph variant='body1'>
            For now, she works as a solo software engineer aiming to provide her services worldwide. Feel free to contact her. JanessaTech can help your achievement and success at all effort
            </Typography>
<Typography paragraph variant='body1'>
JanessaTech's tech stack:
</Typography>
<Typography variant='body1'>
<strong>Language:</strong> Java, Go, Solidity, Groovy, bash, scala, (basic knowledge about Javascript, html, css)
</Typography>
<Typography variant='body1'>
<strong>Framework:</strong> Spring/Springboot/SpringCloud/micro-services, Gin, FX, Restful, GraphQL, Spring Security, JWT, OAuth 2.0,SSO, Swagger
</Typography>
<Typography variant='body1'>
<strong>Middleware:</strong> Truffle, Ganache,Rabbitmq, Nomad, Consul, Redis
</Typography>
<Typography variant='body1'>
<strong>CICD:</strong> AWS, gitlab pipeline, GitHub action, Docker
</Typography>
<Typography variant='body1'>
<strong>Database:</strong> Mysql,Flyway, JPA, Hibernate, gorm ,
</Typography>
<Typography variant='body1'>
<strong>Unit Test:</strong> Mockito, spock, Junit, Git
</Typography>
<strong>Process Management:</strong> Agile, Jira, github, git
<Typography variant='body1'>
<strong>Others:</strong> Linux, Data Structure, Design Pattern, API design, DB schema design, system design
</Typography>
        <Button sx={{ 
            borderRadius:2, position:'absolute', 
            right:0, bottom:0}} 
            color="primary" 
            style={{textTransform: 'none'}} onClick={toggleShowMore}>{showMore ? 'Show more' : 'Show less'}</Button>
    </Box>
  )
}

