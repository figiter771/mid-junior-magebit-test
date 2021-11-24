import styled from 'styled-components'

export const TopBar = styled.div`
  display: flex;
  margin:auto;
  width:80%;
  min-width:380px;
`

export const SidePannel = styled.div`
 min-width: 400px;
 width:30%;
 display: flex;
 flex-flow: column;
`

export const NewsletterBlock = styled.div`
  margin:auto;
  max-width:350px;
`
export const CoverPhotoWrapper = styled.div`
flex:1;
height: 100vh;
`
export const CoverPhoto = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
`

export const App = styled.div`
display: flex;
`
export const CenteredFlexbox = styled.div`
 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Heading = styled.h3`
  font-family: Georgia;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
  color: #131821;
`

export const Paragraph = styled.p`
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #6A707B;
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const EmailContainer = styled.div`
  display:inline-flex;
  margin-top:20px;
  margin-bottom:20px;
  width: calc(15vw + 170px + 50px);
  min-width:420px;
  z-index:99;
  position: relative;
`

export const Email = styled.input`
  position: relative;
  width:100%;
  background: #FFFFFF;
  border: 1px solid #E3E3E4;
  border-right: 0px;
  box-sizing: border-box;
  height: 50px;
  &:focus{
    outline: transparent;
  }

`
export const EmailDecoration = styled.div`
  position: relative;
  width:5px;
  height: 50px;
  background: #4066A5;
`

export const EmailButton = styled.button`
  position: relative;
  font-family: Georgia;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
  color: #131821;
  border: 1px solid #E3E3E4;
  border-left: 0px;
  width: 50px;

  transition: all 0.3s;
  &:hover{
    background:#4066A5;
  }
`

export const Checkbox = styled.input`
  cursor: pointer;
  width: 26px;
  height: 26px;
`

export const InlineParagraph = styled(Paragraph)`
  display: inline;  

`

export const InlineParagraphLink = styled(InlineParagraph)`
  font-weight: bold;
  color: #131821;
`
export const TermsOfServiceText = styled.div`
  display:inline;
  margin-left: 10px;
`

export const TermsOfService = styled.div`
  display:flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom:16px;
`
export const TopBarButton = styled.a`
  color: black;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  margin-right:20px;
  padding:0;

  display:flex;
  flex-direction:column;
  justify-content:flex-end;

  border: none;
  cursor: pointer;
  transition: color 0.3s;
  &:hover{
      color:#4066A5;
  }

  text-decoration: none;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`
export const TopBarButtonUnderline = styled.div`
    position:relative;
    width:0%;
    left: 50%;
    height: 2px;
    background: #4066A5;
    transition: width 0.3s,left 0.3s;
    ${TopBarButton}:hover &{
    width: 100%;
    left:0%;
    }
`

export const TopBarButtonContainer = styled.div`
  display:flex;
  align-items: right;
  justify-content: right;
  flex: 1;
`

export const TopBarMargin = styled.div`
  height:10%;
  max-height:100px;
`

export const Icon = styled.img`
`

export const IconTextWrapper = styled.div`
  margin-left: 5px;
  margin-bottom:3px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
`

export const Socials = styled.div`
margin:auto;
display:flex;
width:60%;

`
export const Social = styled.a`
  display:flex;
  justify-content: center;
  align-items: center;
  margin:5px;

  color: #131821;
  opacity: 0.3;

  height: 30px;
  width: 30px;
  border-radius: 50%;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  border:2px solid #E3E3E4;  

  cursor: pointer;
  transition: all 0.3s;
  &:hover {
  opacity: 0.9;
  }
`