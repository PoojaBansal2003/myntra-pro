// components/Profile.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5; /* Light gray background */
  padding: 20px;
`;

const ProfileCard = styled.div`
  background-color: #ffffff; /* White background */
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Shadow effect */
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #4b0082; /* Dark purple color */
  text-align: center;
`;

const Info = styled.p`
  font-size: 18px;
  color: #666666; /* Light gray color */
  margin-bottom: 10px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #4b0082; /* Dark purple color */
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 18px;
  color: #333333; /* Dark gray color */
  padding: 15px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #fafafa; /* Light background for list items */
`;

const Highlight = styled.span`
  color: #4b0082; /* Highlight color */
  font-weight: bold;
`;

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "1234 Main St, Anytown, USA",
    orders: ["Order #1", "Order #2", "Order #3"],
    likedProducts: ["Product A", "Product B", "Product C"]
  };

  return (
    <Container>
      <ProfileCard>
        <Title>User Profile</Title>
        <Info><Highlight>Name:</Highlight> {user.name}</Info>
        <Info><Highlight>Email:</Highlight> {user.email}</Info>
        <Info><Highlight>Address:</Highlight> {user.address}</Info>
      </ProfileCard>
      <ProfileCard>
        <SectionTitle>Placed Orders</SectionTitle>
        <List>
          {user.orders.map((order, index) => (
            <ListItem key={index}>{order}</ListItem>
          ))}
        </List>
      </ProfileCard>
      <ProfileCard>
        <SectionTitle>Liked Products</SectionTitle>
        <List>
          {user.likedProducts.map((product, index) => (
            <ListItem key={index}>{product}</ListItem>
          ))}
        </List>
      </ProfileCard>
    </Container>
  );
};

export default Profile;
