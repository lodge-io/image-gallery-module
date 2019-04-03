import React from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import App from './App';
import axios from 'axios'

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


const UnsplashImage = ({ url, key }) =>
React.createElement("div", { className: "image-item", key: key },
React.createElement("img", { src: url }));



let Collage = () => {
  const [images, setImages] = React.useState([]);
  const [loaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey =
    "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";

    axios.
    get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`).
    then(res => {
      setImages([...images, ...res.data]);
      setIsLoaded(true);

      console.log(images);
    });
  };

  return (
    React.createElement("div", { className: "hero is-fullheight is-bold is-info" },
    React.createElement("div", { className: "hero-body" },
    React.createElement("div", { className: "container" },
    React.createElement("div", { className: "header content" },
    React.createElement("h2", { className: "subtitle is-6" }, "By Keep Calm and React"),
    React.createElement("h1", { className: "title is-1" }, "Lodge.io")),




    React.createElement(InfiniteScroll, {
      dataLength: images,
      next: () => fetchImages(5),
      hasMore: true,
      loader:
      React.createElement("img", {
        src: "https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif",
        alt: "loading" }) },



    React.createElement("div", { className: "image-grid", style: { marginTop: "30px" } },
    loaded ?
    images.map((image, index) =>
    React.createElement(UnsplashImage, {
      url: image.urls.regular,
      key: index })) :


    ""))))));






};

ReactDOM.render(React.createElement(Collage, null), document.getElementById("root"));