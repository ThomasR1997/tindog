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

// Dogs data array
import { dogs } from "../../Data";

import profile from "../../images/profile-icon.png";
import paw from "../../images/paw-icon.png";
import chat from "../../images/chat-icon.png";
import nope from "../../images/nope-icon.png";
import like from "../../images/like-icon.png";
import nopeImg from "../../images/nope-image.png";
import likeImg from "../../images/like-image.png";

import { useEffect, useState } from "react";

export const LandingPage = () => {
  // Index state for data array
  const [index, setIndex] = useState(0);

  // State for data array with index
  const [data, setData] = useState(dogs[index]);

  // Updates the data state each time the index changes
  useEffect(() => {
    setData(dogs[index]);
  }, [index]);

  // Cycles through the array
  const nextArrObj = () => {
    if (index < dogs.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  // Shows like/dislike when the button is clicked and changes to next dog after a short delay
  const handleNope = () => {
    document.getElementById("showNope").style.display = "block";
    document.getElementById("activeNope").style.backgroundColor = "#FFE7EF";

    setTimeout(() => {
      document.getElementById("showNope").style.display = "none";
      document.getElementById("activeNope").style.backgroundColor = "white";

      nextArrObj();
    }, 1000);
  };

  const handleLike = () => {
    document.getElementById("showLike").style.display = "block";
    document.getElementById("activeLike").style.backgroundColor = "#DBFFF4";

    setTimeout(() => {
      document.getElementById("showLike").style.display = "none";
      document.getElementById("activeLike").style.backgroundColor = "white";
      nextArrObj();
    }, 1000);
  };

  return (
    <AppDiv>
      <NavBar>
        <StyledAvatar src={profile} />

        <SelectedDiv>
          <StyledPaw src={paw} />
        </SelectedDiv>

        <StyledChat src={chat} />
      </NavBar>
      <StyledDiv style={{ backgroundImage: `url(${data.avatar})` }}>
        <StyledH1>
          {data.name}, {data.age}
        </StyledH1>
        <StyledP>{data.bio}</StyledP>
      </StyledDiv>
      <StyledFooter>
        <StyledButton id="activeNope" onClick={() => handleNope()}>
          <NopeIcon src={nope} />
        </StyledButton>

        <StyledButton id="activeLike" like onClick={() => handleLike()}>
          <LikeIcon src={like} />
        </StyledButton>
      </StyledFooter>
      <StyledImage id="showNope" src={nopeImg} />
      <StyledImage id="showLike" src={likeImg} />
    </AppDiv>
  );
};
