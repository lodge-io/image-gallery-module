import React, { Component } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Share from './Share.jsx';
import Save from './Save.jsx';

const StyledComponent = window.styled;

const toggleFade = () => window.styled.keyframes`
  0% {
    filter: blur(20px);
  }
  100% {
    filter: blur(0px);
  }
`;

const PhotoElement = StyledComponent.img`
  transition: transform 0.45s;
  background-size:cover;
  background-image: url(${props => props.wait ? props.srcThumb : props.srcBig});
  animation: ${toggleFade} 500ms ease-in-out 0s forwards;
  width: 100%;
  height: 100%;
`;

const PhotoGrid = StyledComponent.div`
  border: .5px solid grey;
  overflow: hidden;
  height: 50%;
  width: 100%;
`;

const PrimaryPhoto = StyledComponent.div`
  height: 100%;
  width: 50%;
  border: 2px solid grey;
  overflow: hidden;
  @media (max-width: 1150px) {
    width: 60%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SecondaryPhotos = StyledComponent.div`
  height: 100%;
  width: 30%;
  @media (max-width: 1200px) {
    width: 35%;
  }
  @media (max-width: 750px) {
    width: 0%;
  }
  &:hover {
    > ${PhotoGrid} {
      filter: brightness(.6);
    }
  }
  &:hover {
    > ${PhotoGrid}:hover {
      filter: brightness(1);
    }
  }
}
`;

const TertiaryPhotos = StyledComponent.div`
  height: 100%;
  width: 28%;
  @media (max-width: 1150px) {
    width: 0%;
  }
  &:hover {
    > ${PhotoGrid} {
      filter: brightness(.4);
    }
  }
  &:hover {
    > ${PhotoGrid}:hover {
      filter: brightness(1);
    }
  }
`;

const PhotoView = StyledComponent.div`
  display: flex;
  cursor: pointer;
  flex-fit: column;
  font-family: Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  position: relative;
  height: 295px;
  &:hover {
    > ${PrimaryPhoto} {
      filter: brightness(.5);
    }
  }
  &:hover {
    > ${PrimaryPhoto}:hover {
      filter: brightness(1);
    }
  }
  &:hover {
    > ${SecondaryPhotos} {
      filter: brightness(.5);
    }
  }
  &:hover {
    > ${SecondaryPhotos}:hover {
      filter: brightness(1);
    }
  }
  &:hover {
    > ${TertiaryPhotos} {
      filter: brightness(.5);
    }
  }
  &:hover {
    > ${TertiaryPhotos}:hover {
      filter: brightness(1);
    }
  }
`;

const PhotoButton = StyledComponent.div`
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  height: 30px;
  width: 105px;
  right: 18px;
  bottom: 18px;
`;

const ShareButton = StyledComponent.div`
  display: flex;
  border: 2px solid grey;
  border-radius: 4px;
  background-color: white;
  height: 40px;
  width: 85px;
  right: 125px;
  top: 18px;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  z-index: 1;
`;

const ShareButtonIcon = StyledComponent.svg`
  left: 0;
  top: 0;
  height: 19px;
  width: 19px;
  fill: grey;
`;

const SaveButton = StyledComponent.div`
  border: 2px solid grey;
  border-radius: 4px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  width: 88px;
  right: 18px;
  top: 18px;
  position: absolute;
  z-index: 1;
`;

const SaveButtonIcon = StyledComponent.svg`
  left: 0;
  top: 0;
  width: 19px;
  height: 19px;
  fill: grey;
`;

class Applet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wait: true,
      showPhotoModal: false,
      showShareModal: false,
      showSaveModal: false,
      prevSliderLocation: '0%',
      newSliderLocation: '0%',
      index: 0,
    };
    this.getPhotos = this.getPhotos.bind(this);
    this.sortAndStorePhotosArray = this.sortAndStorePhotosArray.bind(this);
    this.togglePhotoCarouselDisplay = this.togglePhotoCarouselDisplay.bind(this);
    this.toggleShareButtonModal = this.toggleShareButtonModal.bind(this);
    this.toggleSaveButtonModal = this.toggleSaveButtonModal.bind(this);
    this.handleClickOnDisplayPhoto = this.handleClickOnDisplayPhoto.bind(this);
    this.handleClickOnCarouselPhoto = this.handleClickOnCarouselPhoto.bind(this);
    this.scrollImg = this.scrollImg.bind(this);
    this.generateCarouselPosition = this.generateCarouselPosition.bind(this);
  }

  getPhotos(roomID) {
    let that = this;
    axios.get(`/rooms/${roomID}`)
      .then((response) => {
        that.setState({homePhotoArray: response.data});
        that.sortAndStorePhotosArray();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  sortAndStorePhotosArray() {
    let sortedPhotosArr = [];
    let sortedThumbsArr = [];
    let sortedTextArr = [];
    for (let i = 0; i < this.state.homePhotoArray.length; i++ ) {
      if (this.state.homePhotoArray[i].is_primary) {
        sortedPhotosArr = [this.state.homePhotoArray[i].url].concat(sortedPhotosArr);
        sortedThumbsArr = [this.state.homePhotoArray[i].thumb_url].concat(sortedThumbsArr);
        sortedTextArr = [this.state.homePhotoArray[i].description].concat(sortedTextArr);
      } else {
        sortedPhotosArr.push(this.state.homePhotoArray[i].url);
        sortedThumbsArr.push(this.state.homePhotoArray[i].thumb_url);
        sortedTextArr.push(this.state.homePhotoArray[i].description);
      }
    }
    this.setState({
      sortedPhotosArr: sortedPhotosArr, 
      sortedThumbsArr: sortedThumbsArr, 
      sortedTextArr: sortedTextArr
    });
  }

  togglePhotoCarouselDisplay() {
    this.setState({
      showPhotoModal: !this.state.showPhotoModal
    });
  }

  toggleShareButtonModal() {
    this.setState({
      showShareModal: 
      !this.state.showShareModal
    });
  }

  toggleSaveButtonModal() {
    this.setState({
      showSaveModal: 
      !this.state.showSaveModal
    });
  }

  handleClickOnDisplayPhoto(index, event) {
    this.setState({
      prevSliderLocation: this.generateCarouselPosition(index, 0),
    });
    this.setState({
      index: index,
      showPhotoModal: true,
      newSliderLocation: this.generateCarouselPosition(index, 0),
    });
  }

  handleClickOnCarouselPhoto(event) {
    this.setState({
      prevSliderLocation: this.generateCarouselPosition(this.state.index, 0),
    });
    this.setState({
      index: this.state.sortedPhotosArr.indexOf(event.target.src),
      showPhotoModal: true,
      newSliderLocation: this.generateCarouselPosition(this.state.sortedPhotosArr.indexOf(event.target.src), 0),
    });
  }
  generateCarouselPosition(index, direction) {
    if (index + direction < 2) {
      return 0 * -100 + '%';
    } else if (index + direction > this.state.sortedPhotosArr.length - 4) {
      return (5 * -100) - 25 + '%';
    } else {
      return (index + direction - 2) * -100 + '%';
    } 
  }
  
  scrollImg(direction) {
    this.setState({
      prevSliderLocation: this.generateCarouselPosition(this.state.index, 0)
    });

    if (this.state.index + direction > this.state.sortedPhotosArr.length - 1) {
      this.setState({
        index: 0, 
        newSliderLocation: '0%'
      });
    } else if (this.state.index + direction < 0) {
      this.setState({
        index: this.state.sortedPhotosArr.length - 1, 
        newSliderLocation: this.generateCarouselPosition(this.state.sortedPhotosArr.length - 1, 0)
      });
    } else {
      this.setState({
        index: this.state.index + direction, 
        newSliderLocation: this.generateCarouselPosition(this.state.index, direction)
      });
    }
  }

  componentDidMount() {
    let paramId;
    if (window.location.href.split('?')[1]) {
      paramId = window.location.href.split('?')[1];
    } else {
      window.location = window.location.href + '?1';
      paramId = window.location;
    }
    this.getPhotos(paramId);
    setTimeout(() => { 
      this.setState({
        wait: false
      });
    }, 200);
  }
  
  render() {
    return (
      <PhotoView>
        <Carousel 
          show={this.state.showPhotoModal} 
          handleClose={this.togglePhotoCarouselDisplay} 
          scrollImg={this.scrollImg} 
          handleClickOnCarouselPhoto={this.handleClickOnCarouselPhoto}
          prevSliderLocation={this.state.prevSliderLocation} 
          newSliderLocation={this.state.newSliderLocation}
          index={this.state.index} pics={this.state.sortedPhotosArr} 
          texts={this.state.sortedTextArr}/>

        <Share show={this.state.showShareModal} 
          handleClose={this.toggleShareButtonModal}/>
        <Save show={this.state.showSaveModal} 
          handleClose={this.toggleSaveButtonModal}/>

        <PrimaryPhoto>
          <PhotoElement srcThumb={this.state.sortedThumbsArr && this.state.sortedThumbsArr[0]} 
            srcBig={this.state.sortedPhotosArr && this.state.sortedPhotosArr[0]} 
            wait={this.state.wait} 
            onClick={this.handleClickOnDisplayPhoto.bind(null, 0)}
          />
        </PrimaryPhoto>
        <SecondaryPhotos>
          <PhotoGrid>
            <PhotoElement srcThumb={this.state.sortedThumbsArr && this.state.sortedThumbsArr[1]} 
              srcBig={this.state.sortedPhotosArr && this.state.sortedPhotosArr[1]} 
              wait={this.state.wait} 
              onClick={this.handleClickOnDisplayPhoto.bind(null, 1)}
            />
          </PhotoGrid>
          <PhotoGrid>
            <PhotoElement srcThumb={this.state.sortedThumbsArr && this.state.sortedThumbsArr[2]} 
              srcBig={this.state.sortedPhotosArr && this.state.sortedPhotosArr[2]} 
              wait={this.state.wait} onClick={this.handleClickOnDisplayPhoto.bind(null, 2)}
            />
          </PhotoGrid>
        </SecondaryPhotos>

        <TertiaryPhotos>
          <PhotoGrid>
            <PhotoElement srcThumb={this.state.sortedThumbsArr && this.state.sortedThumbsArr[3]} srcBig={this.state.sortedPhotosArr && this.state.sortedPhotosArr[3]} wait={this.state.wait} onClick={this.handleClickOnDisplayPhoto.bind(null, 3)}/>
          </PhotoGrid>
          <PhotoGrid>
            <PhotoElement srcThumb={this.state.sortedThumbsArr && this.state.sortedThumbsArr[4]} srcBig={this.state.sortedPhotosArr && this.state.sortedPhotosArr[4]} wait={this.state.wait} onClick={this.handleClickOnDisplayPhoto.bind(null, 4)}/>
          </PhotoGrid>
        </TertiaryPhotos>

        <ShareButton onClick={this.toggleShareButtonModal}><ShareButtonIcon viewBox="0 0 477.07 477.07">
          <path d="M358.39 159.97h-38.9c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h38.9c19.1 0 34.7 15.6 34.7
            34.7v193.8c0 19.1-15.6 34.7-34.7 34.7h-239.8c-19.1 0-34.7-15.6-34.7-34.7v-193.9c0-19.1 15.6-34.7 
            34.7-34.7h38.9c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-38.9c-34 0-61.7 27.7-61.7 61.7v193.8c0 34 
            27.7 61.7 61.7 61.7h239.9c34 0 61.7-27.7 61.7-61.7v-193.8c-.1-34-27.8-61.6-61.8-61.6z"
          />
          <path d="M166.99 104.17l58-58v218c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-218l58 58c2.6 2.6 6.1 4 9.5 
            4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-81.1-81.1c-5.3-5.3-13.8-5.3-19.1 0l-81.1 81.1c-5.3 5.3-5.3 13.8 0 
            19.1 5.5 5.3 14 5.3 19.3 0z" 
          />
        </ShareButtonIcon>Share</ShareButton>
        <SaveButton 
          onClick={this.toggleSaveButtonModal}>
          <SaveButtonIcon viewBox="0 0 129 129">
            <path d="M121.6 40.1c-3.3-16.6-15.1-27.3-30.3-27.3-8.5 
              0-17.7 3.5-26.7 10.1-9.1-6.8-18.3-10.3-26.9-10.3-15.2 0-27.1 
              10.8-30.3 27.6-4.8 24.9 10.6 58 55.7 76a4.01 4.01 0 0 0 3 0c45-18.4 
              60.3-51.4 55.5-76.1zm-57 67.9C25 91.6 11.3 63 15.4 41.7c2.4-12.7 11.2-21 
              22.3-21 7.5 0 15.9 3.6 24.3 10.5 1.5 1.2 3.6 1.2 5.1 0C75.5 24.5 83.8 21 
              91.3 21c11.1 0 19.8 8.1 22.3 20.7 4.1 21.1-9.5 49.6-49 66.3z"
            />
          </SaveButtonIcon>Save</SaveButton>
        
        <PhotoButton 
          onClick={this.togglePhotoCarouselDisplay}> View Photos</PhotoButton>
      </PhotoView>
    );
  }
}

export default Applet;