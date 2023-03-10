import styled from "styled-components";

// Container for the app
export const AppDiv = styled.div`
  max-width: 410px;
  margin: 0 auto;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Navbar div
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1em;
  width: 380px;
`;

// Styling for the navbar paw icon
export const SelectedDiv = styled.div`
  background-color: rgb(250, 100, 90);
  padding: 0.5em 1.5em;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styling for the navbar icons
export const StyledAvatar = styled.img`
  width: 32px;
  height: 34px;
`;

export const StyledPaw = styled.img`
  width: 22px;
  height: 20px;
`;

export const StyledChat = styled.img`
  width: 34px;
  height: 30px;
`;

// Styling for the main content
export const StyledDiv = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 400px;
  height: 550px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

// Text styling for main content
export const StyledH1 = styled.h1`
  color: white;
  margin: 0 0.5em;
`;

export const StyledP = styled.p`
  color: white;
  margin: 0 1em 1em;
`;

// Styling for the footer
export const StyledFooter = styled.div`
  width: 410px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styling for the like/dislike button
export const StyledButton = styled.button`
  border-radius: 50%;
  background-color: white;
  width: 65px;
  height: 65px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 1px 1px grey;
  margin: 0 1em;

  &:hover {
    background-color: ${(props) => (props.like ? "#DBFFF4" : "#FFE7EF")};
  }
`;

// Styling for the like/dislike button icons
export const NopeIcon = styled.img`
  width: 26px;
  height: 26px;
`;

export const LikeIcon = styled.img`
  width: 40px;
  height: 36px;
`;

// Styling for the like/dislike image
export const StyledImage = styled.img`
  transform: rotate(-30deg);
  position: absolute;
  top: 6.5em;
  left: 36.5em;

  width: 10em;
  display: none;
`;
