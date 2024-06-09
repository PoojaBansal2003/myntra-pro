import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFire, FaArrowRight } from 'react-icons/fa';
import Footer from './Footer';
import ProductList from './ProductList';

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
  justify-content: center;
  align-items: center;
  height: 75vh;
  background-color: #f2f2f2;
  border-radius: 20px;
  width: 93%;
  margin-left: 49px;
  margin-bottom: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  max-width: 50%;
`;

const MainText = styled.h1`
  font-size: 50px;
  color: #333;
  font-family: 'Arial', sans-serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  line-height: 1.2;
  animation: ${fadeIn} 1s ease;
  margin-left: 214px;
  margin-top: 13px;
`;

const SubText = styled.span`
  font-size: 20px;
  color: black;
  margin-right: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 1s;
  margin-left: 214px;
`;

const FireIcon = styled(FaFire)`
  color: red;
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
  margin-left: 214px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 2s;

  &:hover {
    background-color: #6a1b9a;
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  height: 60vh;
  width: 60vh;
`;

const CollectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  text-align: center;
`;

const CollectionHeading = styled.h2`
  font-size: 50px;
  margin-bottom: 15px;
  color: #333;
`;

const CollectionDescription = styled.p`
  font-size: 18px;
  color: #555;
  max-width: 70%;
  margin-bottom: 40px;
`;

const RunningImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const RunningImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RunningImage = styled.img`
  height: 190px;
  margin: 0 20px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
`;

const PremiumTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: -63px;
`;

const PremiumText = styled.p`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-right: 8px;
`;

const ArrowCircle = styled(Link)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -55px;
  text-decoration: none;
`;

const Text = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  text-align: center;
  padding-top: 1px;
  padding-left: 5px;
`;

const Spacer = styled.div`
  height: 80px;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Content>
          <SubText>
            In this season, find the best <FireIcon />
          </SubText>
          <MainText>
            Exclusive <br />
            collection for <br />
            everyone
          </MainText>
          <Link to="/dashboard">
            <Button>Explore Now</Button>
          </Link>
        </Content>
        <ImageContainer>
          <Image src="final_shopping.png" alt="Image" />
        </ImageContainer>
      </Container>

      <CollectionContainer>
        <CollectionHeading>Our Collection</CollectionHeading>
        <CollectionDescription>
          Discover a world of convenience and choice at our e-commerce platform.
          Shop effortlessly from an extensive range of products and enjoy seamless transactions from the comfort of your home.
        </CollectionDescription>
      </CollectionContainer>

      <RunningImages>
        <RunningImageContainer>
          <RunningImage src="clothes.jpeg" alt="Clothes" />
          <PremiumTextContainer>
            <PremiumText>Premium Clothes</PremiumText>
            <ArrowCircle to="/products">
              <FaArrowRight color="white" />
            </ArrowCircle>
          </PremiumTextContainer>
          <Text>
            Online essentials for everyday style, offering convenience and quality at your fingertips.
          </Text>
        </RunningImageContainer>
        <RunningImageContainer>
          <RunningImage src="bags.jpeg" alt="Bags" />
          <PremiumTextContainer>
            <PremiumText>Luxury Bags</PremiumText>
            <ArrowCircle to="/products">
              <FaArrowRight color="white" />
            </ArrowCircle>
          </PremiumTextContainer>
          <Text>
            High-end statements, available with a click, adding sophistication to your digital cart.
          </Text>
        </RunningImageContainer>
        <RunningImageContainer>
          <RunningImage src="footwear.jpeg" alt="Footwear" />
          <PremiumTextContainer>
            <PremiumText>Prime Footwear</PremiumText>
            <ArrowCircle to="/products">
              <FaArrowRight color="white" />
            </ArrowCircle>
          </PremiumTextContainer>
          <Text>
            Trendy finds for virtual shopping sprees, ensuring style meets comfort with each step.
          </Text>
        </RunningImageContainer>
        <RunningImageContainer>
          <RunningImage src="plants.jpeg" alt="Plants" />
          <PremiumTextContainer>
            <PremiumText>Fresh Plants</PremiumText>
            <ArrowCircle to="/products">
              <FaArrowRight color="white" />
            </ArrowCircle>
          </PremiumTextContainer>
          <Text>
            Greenery delivered, enhancing your space with online botanical beauty and ease.
          </Text>
        </RunningImageContainer>
        <RunningImageContainer>
          <RunningImage src="furniture.jpeg" alt="Furniture" />
          <PremiumTextContainer>
            <PremiumText>Fancy Furniture</PremiumText>
            <ArrowCircle to="/products">
              <FaArrowRight color="white" />
            </ArrowCircle>
          </PremiumTextContainer>
          <Text>
            Online elegance for every room, curated selections to redefine your digital dwelling.
          </Text>
        </RunningImageContainer>
      </RunningImages>

      <Spacer />

      <Footer />
    </>
  );
};

export default Home;
