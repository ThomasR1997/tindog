import {
  AppDiv,
  LikeIcon,
  NavBar,
  NopeIcon,
  SelectedDiv,
  StyledAvatar,
  StyledButton,
  StyledChat,
  StyledDiv,
  StyledFooter,
  StyledH1,
  StyledImage,
  StyledP,
  StyledPaw,
} from "../../components/StyledComponents";
import { dogs } from "../../Data";

import profile from "../../images/profile-icon.png";
import paw from "../../images/paw-icon.png";
import chat from "../../images/chat-icon.png";
import nope from "../../images/nope-icon.png";
import like from "../../images/like-icon.png";
import nopeImg from "../../images/nope-image.png";
import likeImg from "../../images/like-image.png";
import { useState } from "react";

export const LandingPage = () => {
  let myIndex = 0;

  const [data, setData] = useState([dogs[myIndex]]);

  const handleNope = () => {
    // if (myIndex < dogs.length) {
    //   myIndex = myIndex + 1;
    // } else {
    //   myIndex = 0;
    // }

    if (myIndex === 3) {
      myIndex = 0;
    } else {
      myIndex++;
    }
    console.log(myIndex);
    setData([dogs[myIndex]]);
  };

  const handleLike = () => {};

  return (
    <AppDiv>
      <NavBar>
        <StyledAvatar src={profile} />

        <SelectedDiv>
          <StyledPaw src={paw} />
        </SelectedDiv>

        <StyledChat src={chat} />
      </NavBar>
      <StyledDiv style={{ backgroundImage: `url(${data[0].avatar})` }}>
        <StyledH1>
          {data[0].name}, {data[0].age}
        </StyledH1>
        <StyledP>{data[0].bio}</StyledP>
      </StyledDiv>
      <StyledFooter>
        <StyledButton onClick={() => handleNope()}>
          <NopeIcon src={nope} />
        </StyledButton>

        <StyledButton like onClick={() => handleLike()}>
          <LikeIcon src={like} />
        </StyledButton>
      </StyledFooter>
    </AppDiv>
  );
};
