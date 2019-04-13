import React, { Component } from 'react';
const StyledComponents = window.styled;

const SaveModal = StyledComponents.div`
  position: fixed;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  display: ${props => props.showMe ? 'block' : 'none'};
  background-color: rgb(0,0,0,.5);
  z-index: 2;
`;

const PrimaryContainer = StyledComponents.div`
  height: 115%;
  width: 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  z-index: 2;
`;

const NestedContainer = StyledComponents.div`
  position: absolute;
  top: 12%;
  height: 112px;
  width: 582px;
  background-color: white;
  z-index: 2;
  display: flex;
  justify-content: center;
`;

const CloseButton = StyledComponents.div`
  position: absolute;
  top: 17%;
  left: 3.6%;
  width: 42px;
  height: 42px;
`;

const Screenshot = StyledComponents.img`
  height: 695px;
  object-fit: contain;
`;

class Save extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <SaveModal showMe={this.props.show}>
        <PrimaryContainer>
          <NestedContainer>
            <CloseButton onClick={this.props.handleClose}>
            </CloseButton>
            <Screenshot src="https://s3-us-west-1.amazonaws.com/ch0psh0p-bread4bed/SaveModal.png" />
          </NestedContainer>
        </PrimaryContainer>
      </SaveModal>
    );
  }
}
export default Save;