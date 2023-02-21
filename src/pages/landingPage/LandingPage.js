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
  StyledP,
  StyledPaw,
} from "../../components/StyledComponents";
import { dogs } from "../../Data";

import profile from "../../images/profile-icon.png";
import paw from "../../images/paw-icon.png";
import chat from "../../images/chat-icon.png";
import nope from "../../images/nope-icon.png";
import like from "../../images/like-icon.png";

export const LandingPage = () => {
  return (
    <AppDiv>
      <NavBar>
        <StyledAvatar src={profile} />

        <SelectedDiv>
          <StyledPaw src={paw} />
        </SelectedDiv>

        <StyledChat src={chat} />
      </NavBar>
      {dogs.map((dog, index) => {
        return (
          <>
            <StyledDiv
              key={index}
              style={{ backgroundImage: `url(${dog.avatar})` }}
            >
              <StyledH1>
                {dog.name}, {dog.age}
              </StyledH1>
              <StyledP>{dog.bio}</StyledP>
            </StyledDiv>
            <StyledFooter>
              <StyledButton>
                <NopeIcon src={nope} />
              </StyledButton>

              <StyledButton like>
                <LikeIcon src={like} />
              </StyledButton>
            </StyledFooter>
          </>
        );
      })}
    </AppDiv>
  );
};
