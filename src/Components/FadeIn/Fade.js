import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FadeInWrapper = styled(motion.div)`
    margin: 0;
    padding: 0;
`;

const fadeInVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            
            ease: [0, 0.71, 0.2, 1.01],
        }
    }
};

const FadeIn = ({ children }) => {
  return (
    <FadeInWrapper variants={fadeInVariants} initial={"hidden"} whileInView={"show"} viewport={{ once: false, amount: 0.7}} animate={"visible"}>
        {children}
    </FadeInWrapper>
  );
};

export default FadeIn;
