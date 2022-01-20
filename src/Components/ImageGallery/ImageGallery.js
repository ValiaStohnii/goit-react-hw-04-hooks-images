import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader';
import Button from '../Button/Button';
import imageApi from '../services/image-api';
import './ImageGallery.css';

class ImageGallery extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ status: 'pending' });
      this.setState({ page: 1 });

      imageApi
        .fetchImage(this.props.imageName, prevState.page)
        .then(image => this.setState({ image, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevState.page !== this.state.page) {
      imageApi
        .fetchImage(this.props.imageName, this.state.page)
        .then(image => {
          console.log(image);
          this.setState(prevState => {
            console.log(prevState.image);
            return { image: [...prevState.image, ...image], status: 'resolved' };
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  incrementPage = () => {
    this.setState(state => ({
      page: (state.page += 1),
    }));
  };

  render() {
    const { image, error, status } = this.state;

    if (status === 'idle') {
      return <div className="Notification">You must enter query parameters!</div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <ul className="ImageGallery">
            {image.hits.map(entry => (
              <ImageGalleryItem
                key={entry.id}
                imageName={entry.tags}
                imageUrl={entry.webformatURL}
                onImageClick={this.props.onImageClick}
                largeIMG={entry.largeImageURL}
              />
            ))}
          </ul>
          <Button onClick={this.incrementPage} />
        </div>
      );
    }
  }
}

export default ImageGallery;
