// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 70vh;
// `;

// const MainText = styled.h1`
//   font-size: 84px;
//   color: #333;
//   text-align: center;
//   background-color: rgba(255, 255, 255, 0.7);
//   padding: 20px;
// `;

// const SubText = styled.span`
//   font-size: 20px;
//   color: #666;
// `;

// const Button = styled.button`
//   background-color: purple;
//   color: white;
//   border: none;
//   padding: 15px 40px;
//   border-radius: 25px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   font-size: 24px;

//   &:hover {
//     background-color: #6a1b9a;
//   }
// `;


// const Home = () => {

//   return (
//     <Container>
//       <MainText>
//         <span>Welcome to the</span> <br />
//         <span>e-commerce website</span> <br />
//         <SubText>Boost your e-commerce site with </SubText>
//         <SubText>AI recommendations for personalized experiences. </SubText>
//       </MainText>
//       <Link to="/dashboard">
//         <Button>Try Now</Button>
//       </Link>
      
//     </Container>
//   );
// };

// export default Home;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const MainText = styled.h1`
  font-size: 84px;
  color: #333;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  animation: ${fadeIn} 1s ease;
`;

const SubText = styled.span`
  font-size: 20px;
  color: #666;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 1s;
 
`;

const Button = styled.button`
  background-color: purple;
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 24px;
  margin-top: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 2s;

  &:hover {
    background-color: #6a1b9a;
    transform: scale(1.1);
  }
`;

const Home = () => {
  return (
    <Container>
      <MainText>
        <span>Welcome to the</span> <br />
        <span>e-commerce website</span>
      </MainText>
      <SubText>
        Boost your e-commerce site with AI recommendations for personalized experiences.
      </SubText>
      <Link to="/dashboard">
        <Button>Try Now</Button>
      </Link>
    </Container>
  );
};

export default Home;
