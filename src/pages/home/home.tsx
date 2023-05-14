import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Teng Hong Lee</title>
        <meta name="description" content="This is the home page of a Next.js app" />
      </Head>
      <motion.div  
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className='flex flex-row justify-center items-center h-screen  bg-gray-100 p-4'
      > 
      <div className='flex flex-col justify-center items-center'>
      <h1>Hello</h1>
        <p>Welcome to my portfolio!</p>
      </div>
        <div className='flex justify-center items-center w-80 h-80 rounded-full overflow-hidden border-2 border-yellow'>
          {/* <Image
            src={profilePic} alt={''} fill style={{objectFit: 'contain'}}/> */}
        </div>
      </motion.div>
    </>
  );
};

export default Home;
