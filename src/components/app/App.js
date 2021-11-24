import * as S from './AppStyles';
import picture from '../../images/summer.png'
import pineappleIcon from '../../images/pineappleIcon.svg'
import pineappleText from '../../images/pineapple.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <S.App>
      <S.SidePannel>
        <S.TopBarMargin />
        <S.TopBar>
          <S.Icon src={pineappleIcon} />
          <S.IconTextWrapper>
            <S.Icon src={pineappleText} />
          </S.IconTextWrapper>
          <S.TopBarButtonContainer>
            <S.TopBarButton href="#">About
              <S.TopBarButtonUnderline />
            </S.TopBarButton>
            <S.TopBarButton href="#">How it works
              <S.TopBarButtonUnderline />
            </S.TopBarButton>
            <S.TopBarButton href="#">Contact
              <S.TopBarButtonUnderline />
            </S.TopBarButton>
          </S.TopBarButtonContainer>
        </S.TopBar>
        <S.CenteredFlexbox>
          <S.NewsletterBlock>
            <S.Heading>Subscribe to newsletter</S.Heading>
            <S.Paragraph>Subscribe to our newsletter and get 10% discount on pineapple glasses.</S.Paragraph>
            <S.EmailContainer>
              <S.EmailDecoration />
              <S.Email value="" placeholder="MyEmailAdress@mail.com" onChange={(e) => { }}></S.Email>
              <S.EmailButton>
                ⭢
              </S.EmailButton>
            </S.EmailContainer>
            <S.TermsOfService>
              <S.Checkbox type="checkbox"></S.Checkbox>
              <S.TermsOfServiceText>
                <S.InlineParagraph>I agree to </S.InlineParagraph>
                <S.InlineParagraphLink as="a" href="#">terms of service</S.InlineParagraphLink>
              </S.TermsOfServiceText>
            </S.TermsOfService>
            <S.Socials>
              <S.Social href="#">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </S.Social>
              <S.Social href="#">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </S.Social>
              <S.Social href="#">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </S.Social>
              <S.Social href="#">
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
              </S.Social>
            </S.Socials>
          </S.NewsletterBlock>
        </S.CenteredFlexbox>

      </S.SidePannel>
      <S.CoverPhotoWrapper>
        <S.CoverPhoto src={picture} />
      </S.CoverPhotoWrapper>

    </S.App>
  );
}

export default App;
