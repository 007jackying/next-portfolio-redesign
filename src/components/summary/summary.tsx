import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';



export const Summary: React.FC = () => {
    const [selected, setSelected] = useState(false);

    return (
        <>
        <motion.div layoutId={'SummaryBox'} whileHover={{ scale: 5 }} onClick={() => setSelected(!selected)}>
        <motion.h5>CLICK ME</motion.h5>
      </motion.div>
          
          <AnimatePresence>
            {selected && (
              <motion.div layoutId={'SummaryBox'} whileTap={{ scale: 5 }}>
                <motion.h5>Zoom</motion.h5>
                <motion.button onClick={() => setSelected(!selected)} />
              </motion.div>
            )}
          </AnimatePresence>
        </>
        
        
    ) 
}
