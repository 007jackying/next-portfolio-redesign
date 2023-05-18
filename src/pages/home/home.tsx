import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';
import { Summary } from '../../components/summary/summary';
import profilePic from '../../public/images/profile.jpg';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Head>
        <title>Teng Hong Lee</title>
        <meta name="description" content="This is the home page of a Next.js app" />
      </Head>
      <motion.div  
      dragConstraints={{ left: -100, right: 100 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      > 
      <div >
      <h1>Hello</h1>
        <p>Welcome to my portfolio!</p>
      </div>
        <div>
          <Image src={profilePic} alt={''} style={{objectFit: 'cover'}} height={100} width={100}/>
          <Summary/>
        </div>
      </motion.div>
    </HomeContainer>
  );
};

export default Home;
