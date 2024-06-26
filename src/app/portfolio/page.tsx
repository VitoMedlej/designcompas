"use client"
import { Box, Container, Divider, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from 'swiper';
import Btn from '@/Components/Btn/Btn';


const Index = () => {
  
  const router = useRouter();
  return (
    <Box >
            
            <Box sx={{height:{xs:'300px',sm:'400px'}}} className='relative flex '>
            <img 
            src="https://ucarecdn.com/08159733-08f7-43bf-beb6-2a1b05b7b27a/photo_5829990695400751436_w.jpg" alt="" className="img" />
            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.43}} className="absolute">

</Box>
            <Container className="absolute  justify-center flex col" sx={{height:'100%',position:'absolute',zIndex:1234,color:'white'}}>
                <Typography sx={{fontWeight:900,fontSize:"2.5em"}}>
                    Our Projects
                </Typography>
                <Typography sx={{maxWidth:'650px',fontSize:"1em"}}>

                Our Interior Design Ideas To Inspire Every Room In Your Home
                
                </Typography>

            </Container>
        </Box>
    
            <Box className='auto' sx={{py:6,my:8,background:'rgb(247, 247, 247)'}}>
    <Box className='auto' >
    <Typography sx={{textAlign:'center',width:'100%',pb:2,fontWeight:500,fontSize:"1.64em"}}>

    Featured Work

</Typography>
<Box  className="flex wrap row space-around">

                {
  [{
    img:'https://ucarecdn.com/f889e11f-eb71-4663-9cca-87af0db84b2f/25c049dde10d4270a29d3e9e53a7b74c.jpg',
    title:'Talet Al Khayat Project',
    id:'UIn2j41',
  },

  {
    img:'https://ucarecdn.com/f6400526-f65e-4c99-a2a5-b8d751e70f7c/',
    title: 'Beit Mery project',
    id:'6INI2X'
  },
  {
    img:`https://ucarecdn.com/96a3f6a7-ae4f-4e7e-8fca-d00094b949c5/`,
    title: `Ras Beirut Project (contracting)`,
    id:'ZN521c'
  },
  {
    id:'Hbn794',
    img: `https://ucarecdn.com/0ba061b7-2ec8-4236-a461-d2b5168b8658/WhatsAppImage20240129at153050.jpeg`,
    title: `Stop And Shop Project`,
  },
  {
    id: 'UKSZN6',
    title:`Gynecologist Doctor Clinic Project`,
    img:'https://ucarecdn.com/22fa3d16-bda0-4024-90ca-ed14f399d5b5/photo_5865974137565070938_y.jpg'
  },
  {
    title: `Saudi Arabia Project`,
    img:'https://ucarecdn.com/05bd9889-b5d4-456e-bc8c-71380469f495/photo_5865974137565070921_w.jpg',
    id:'Vm24zg'
  }  ,
  {
      title:'Leon cafe Project',
      img:'https://ucarecdn.com/41db89fc-4c34-4ee6-a5d3-6320a43062ce/photo_5837020916914175759_y.jpg',
      id:'Bj2zw7'
    },
  {
    title : 'Toledo Project',
    img:'https://ucarecdn.com/525987cf-f7f0-49c7-8144-7c6d17b5f72b/photo_5767334647334812873_y.jpg',
    id:'42NC25'
  },
  {
    title : `Ras El Nabeh Project`,
    img:`https://ucarecdn.com/b6bc2555-d25f-49ab-a69c-923b65eae400/photo_5832586041058509674_y.jpg`,
    id:'NC2zm2'
  },
  {
    title: `Animal Lebanon project`,
    img:`https://ucarecdn.com/e44ebc20-1a19-487b-b1d4-530e8f5b334d/photo_5832586041058509708_y.jpg`,
    id:'VBz2zs'
  },
  {
  img:    `https://ucarecdn.com/ec4ded49-f4ba-4e1a-915c-45630cb4552d/photo_5816598205687775297_y1.jpg`,
  title : 'Toledo Project 2',
   id:'Yo6mz2',
  }
  ,{
    img:'https://ucarecdn.com/be0f1645-87f4-4b78-9745-e1c6122827e7/6.jpg',
    title:`Yarze Project`,
    id:'5NX51z'
  },
  {
    title:'Tintin Room Project',
    id:'Fnz35o',
    img:'https://ucarecdn.com/0392ce20-01da-4c3d-8b2a-602d00a9cadf/photo_5820989676603948872_y.jpg'
  }
].map(i=>{
                        return  <Box
                        className='auto'
                        key={i?.id}
                        // className='auto' 
                        sx={{width:{xs:'95%',sm:'310px',md:'400px'},
                        // height:{xs:'100%',sm:'500px',md:'550px'},
                        height:'fit-content',
                        mx:1,
                        my:1,
                        py:2
                        ,cursor:'pointer'}}
                        onClick={()=>router.push(`/portfolio/${i?.id}?title=${i.title.replace(/ /g,'-')}`)}>
                       

                        <Box key={i.title} sx={{py:1,height:{xs:'100%',sm:'280px',md:'300px'}}}>
                            <img src={i.img} alt="" className="img cover" />
                        </Box>
                        <Box>
                        <Typography 
                        
                        sx={{textAlign:'left',
                        color:'black',
                        fontSize:{xs:'1.189em',sm:'1.196em',md:'1.3em',lg:'1.42em'},
                        fontWeight:600}}>
                               {i?.title}
                                </Typography>
                        </Box>
                        </Box>
                    })
                }
</Box>

    </Box>

            </Box>
    </Box>
  )
}

export default Index