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

// Du må sikkert trykke 2 ganger på første knappen for å bytte til neste hund på appen.
export const LandingPage = () => {
  // Denne variabelen er 0 og blir ikke forandret såvidt som jeg vet.
  let whyDoesThisWork = 0;

  // Usestate som jeg vil bruke for index for å bla gjennom dogs arrayen min.
  const [index, setIndex] = useState(0);

  // Usestate for dogs array med usestate index
  const [data, setData] = useState([dogs[index]]);

  // Blar gjennom dogs array 0-1-2-0 osv.
  const nextArrObj = () => {
    if (index < dogs.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }

    setData([dogs[index]]);
    console.log(index, whyDoesThisWork);
  };

  // Viser like eller dislike og bytter til neste hund etter 2 sec.
  const handleNope = () => {
    document.getElementById("showNope").style.display = "block";
    document.getElementById("activeNope").style.backgroundColor = "#FFE7EF";

    setTimeout(() => {
      document.getElementById("showNope").style.display = "none";
      document.getElementById("activeNope").style.backgroundColor = "white";
      nextArrObj();
    }, 2000);
  };

  const handleLike = () => {
    document.getElementById("showLike").style.display = "block";
    document.getElementById("activeLike").style.backgroundColor = "#DBFFF4";

    setTimeout(() => {
      document.getElementById("showLike").style.display = "none";
      document.getElementById("activeLike").style.backgroundColor = "white";
      nextArrObj();
    }, 2000);
  };

  console.log(data[whyDoesThisWork].avatar);
  // console.log(data[index].avatar);

  return (
    <AppDiv>
      <NavBar>
        <StyledAvatar src={profile} />

        <SelectedDiv>
          <StyledPaw src={paw} />
        </SelectedDiv>

        <StyledChat src={chat} />
      </NavBar>
      <StyledDiv
        // Jeg vil ha index istedenfor whyDoesThisWork men det funker ikke.
        style={{ backgroundImage: `url(${data[whyDoesThisWork].avatar})` }}
      >
        <StyledH1>
          {data[whyDoesThisWork].name}, {data[whyDoesThisWork].age}
        </StyledH1>
        <StyledP>{data[whyDoesThisWork].bio}</StyledP>
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
