import React from 'react';
//import StyledComponent from 'styled-components';
const StyledComponent = window.styled;

const ShareModal = StyledComponent.div`
  position: fixed;
  overflow-y: auto;
  display: ${props => props.showMe ? "block" : "none"};
  height: 100%;
  width: 100%;
  background-color: rgb(0,0,0,.6);
  z-index: 2;
`
const MainContainer = StyledComponent.div`
  height: 110%;
  width: 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  z-index: 2;
`

const NestedContainer = StyledComponent.div`
  position: absolute;
  top: 10%;
  height: 100px;
  width: 400px;
  background-color: rgb(255,255,255,1);
  z-index: 2;
  display: flex;
  justify-content: center;
  
`

const CloseButton = StyledComponent.div`
  position: absolute;
  top: 15%;
  left: 3.5%;
  width: 40px;
  height: 40px;
`

const Screenshot = StyledComponent.img`
  height: 700px;
  object-fit: contain;
  
`

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <ShareModal showMe={this.props.show}>
        <MainContainer>
        <NestedContainer>
            <CloseButton onClick={this.props.handleClose}>
            </CloseButton>
          <Screenshot src="" />
        </NestedContainer>
        </MainContainer>
      </ShareModal>
    )
  }
}
export default Share;
