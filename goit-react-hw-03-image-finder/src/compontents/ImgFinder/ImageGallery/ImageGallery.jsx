import React, { Component } from 'react';
import T from 'prop-types';
import style from './ImageGallaryItem.module.css';
import GalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
  static defaultProps = {
    itemList: [],
  };

  static propTypes = {
    itemList: T.arrayOf(T.shape),
    onLoadMore: T.func.isRequired,
  };

  state = { IsModalOpen: false, large: '' };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModal);
  }

  onOpenModal = e => {
    if (e.target === e.currentTarget) return;
    const { nodeValue } = e.target.parentNode.attributes.large;
    this.setState({ large: nodeValue });
    this.setState({ IsModalOpen: true });
  };

  onCloseModal = e => {
    const { IsModalOpen } = this.state;
    if (e.code === 'Escape' && IsModalOpen) {
      this.setState({ IsModalOpen: !IsModalOpen });
    }
    if (e.target === e.currentTarget) {
      this.setState({ IsModalOpen: !IsModalOpen });
    }
  };

  render() {
    const { IsModalOpen, large } = this.state;
    const { itemList, onLoadMore } = this.props;
    const ItemsLength = itemList.length;
    return (
      <>
        <ul
          onClick={this.onOpenModal}
          className={style.ImageGallery}
          role="presentation"
        >
          {ItemsLength > 0 &&
            itemList.map(item => <GalleryItem item={item} key={item.id} />)}
        </ul>
        {ItemsLength % 12 === 0 && ItemsLength > 0 && (
          <Button onLoadMore={onLoadMore} />
        )}
        {IsModalOpen && (
          <Modal onCloseModal={this.onCloseModal} large={large} />
        )}
      </>
    );
  }
}

export default ImageGallery;
