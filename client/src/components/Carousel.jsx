import React, { Component } from 'react';
const StyledComponent = window.styled;

const Modal = StyledComponent.div`
  position: fixed;
  display: ${props => props.showMe ? 'block' : 'none'};
  background-color: grey;
  z-index: 3;
  postition: absolute;
  height: 100%;
  width: 100%;
  background-color: #323232;
`;

const CloseButton = StyledComponent.div`
  color: white;
  font-size 22pt;
  right: 38px;
  top: 18px;
  position: absolute;
`;

const CloseButtonIcon = StyledComponent.svg`
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  fill: white;
`;

const RightButton = StyledComponent.div`
  top: 45%;
  right: 3%;
  position: absolute;
`;

const RightButtonIcon = StyledComponent.svg`
  top: 0;
  left: 0;
  width: 82px;
  height: 82px;
  fill: white;
  @media (max-width: 625px) {
    height: 40px;
    width: 40px;
  }
`;

const LeftButton = StyledComponent.div`
  top: 45%;
  left: 2%;
  position: absolute;
`;

const LeftButtonIcon = StyledComponent.svg`
  top: 0;
  left: 0;
  width: 78px;
  height: 78px;
  fill: white;
  @media (max-width: 600px) {
    height: 40px;
    width: 40%;
  }
`;

const PhotoAndCaptionContainer = StyledComponent.div`
  width: 50%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CenterImageContainer = StyledComponent.div`
  background-color: #00FF00;
  display: flex;
  align-items: center;
`;

const CenterImage = StyledComponent.img`
  width: 100%;
  object-fit: contain;
`;

const CaptionContainer = StyledComponent.div`
  display: flex;
  flex-direction: row;
`;

const Caption = StyledComponent.div`
  color: white;
  font-size 12pt;
  font-weight: 200;
`;


const ToggleListContainer = StyledComponent.div`
`;

const ToggleList = StyledComponent.div`
  color: white;
  padding: 12px;
  font-size: 11pt;
  font-weight: 200;
  text-align: right;
`;

const ThumbnailImageView = StyledComponent.div`
  display: ${props => props.showState ? 'inline-block' : 'none'};
  vertical-align: middle;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Scroll = (start, finish) => window.styled.keyframes`
  from { transform: translate(${start}); }
  to { transform: translate(${finish}); }
`;

const Thumbnail = StyledComponent.img`
  width: 18%;
  margin: .5%;
  animation: ${props => Scroll(props.prevSliderLocation, props.newSliderLocation)} 500ms ease-out forwards;
  filter: ${props => props.mappedImgIndex === props.selectedImgIndex ? 'brightness(100%)' : 'brightness(35%)'};
  border-left: ${props => props.mappedImgIndex === props.selectedImgIndex ? 'solid blue 0px' : 'none'};
  border-right: ${props => props.mappedImgIndex === props.selectedImgIndex ? 'solid blue 0px' : 'none'};
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleText: 'Show Photo List \u25B2',
      toggleState: false,
    };
    this.showPicsHidePics = this.showPicsHidePics.bind(this);
  }

  showPicsHidePics() {
    if (this.state.toggleState) {
      this.setState({
        toggleState: false
      });
      this.setState({
        toggleText: 'Show Photo List\u25B2'
      });
    } else {
      this.setState({
        toggleState: true
      });
      this.setState({
        toggleText: 'Hide Photo List\u25BC'
      }); 
    }  
  }
  
  render() {
    return (
      <Modal showMe={this.props.show}>
        <CloseButton onClick={this.props.handleClose}>
          <CloseButtonIcon 
            viewBox="0 0 64 64"
          >
            <path d="M28.94 31.79L.61 60.1a2.01 2.01 0 1 0 2.85 2.85L32 34.42l28.54 28.54a2 2 0 0 0 2.85 
              0c.79-.78.79-2.06 0-2.85L35.06 31.8 63.41 3.44A2.01 2.01 0 1 0 60.56.59L32 29.15 3.44.59A2.01 2.01 0 0 0 
              .6 3.44l28.35 28.35z"
            />
          </CloseButtonIcon>
        </CloseButton>
        <RightButton 
          onClick={this.props.scrollImg.bind(null, 1)}
        >
          <RightButtonIcon viewBox="0 0 129 129">
            <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,
              1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,
              0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"
            />
          </RightButtonIcon>
        </RightButton>
        <LeftButton 
          onClick={this.props.scrollImg.bind(null, -1)}
        >
          <LeftButtonIcon viewBox="0 0 129 129">
            <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 
              0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"
            />
          </LeftButtonIcon>
        </LeftButton>
        <PhotoAndCaptionContainer>
          <CenterImageContainer>
            <CenterImage src={this.props.pics && this.props.pics[this.props.index]} />
          </CenterImageContainer>
          <CaptionContainer>
            <Caption>
              {this.props.index + 1}/{this.props.texts && this.props.texts.length}: 
              {this.props.texts && this.props.texts[this.props.index]}
            </Caption>
          </CaptionContainer>
          <ToggleListContainer>
            <ToggleList 
              onClick={this.showPicsHidePics}
            >
              {this.state.toggleText}
            </ToggleList>
            <ThumbnailImageView showState={this.state.toggleState}>
              {this.props.pics && this.props.pics.map((item, index) => 
                <Thumbnail src={item} 
                  key={index} 
                  mappedImgIndex={index} 
                  selectedImgIndex={this.props.index} 
                  newSliderLocation={this.props.newSliderLocation} 
                  prevSliderLocation={this.props.prevSliderLocation} 
                  onClick={this.props.handleClickOnCarouselPic}
                />
              )}
            </ThumbnailImageView>
          </ToggleListContainer>
        </PhotoAndCaptionContainer>
      </Modal>
    );
  }
}
export default Carousel;