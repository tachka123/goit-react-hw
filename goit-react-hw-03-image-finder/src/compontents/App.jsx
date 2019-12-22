import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './ImgFinder/Searchbar/SearchBar';
import ImageGallery from './ImgFinder/ImageGallery/ImageGallery';
import Loader from './ImgFinder/SetLoader/SetLoader';
import './App.css';

class App extends Component {
  state = {
    Loading: false,
    page: 1,
    imageList: [],
    itemToFind: '',
  };

  componentDidMount() {}

  fetchItems = async () => {
    await this.setState({ Loading: true });
    const { page, itemToFind } = this.state;
    const {
      data: { hits },
    } = await axios.get(
      `https://pixabay.com/api/?q=${itemToFind}&page=${page}&key=14125150-f318113a737f32f93c3727cb2&image_type=photo&orientation=horizontal&per_page=12`,
    );
    if (page > 1) {
      this.setState(prev => {
        return {
          imageList: [...prev.imageList, ...hits],
        };
      });
    } else {
      await this.setState({ imageList: hits });
    }
    this.setState({ Loading: false });
  };

  onLoadMore = async () => {
    this.setState(prev => {
      return { page: (prev.page += 1) };
    });
    await this.fetchItems();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  onSubmit = async itemToFind => {
    if (!itemToFind) {
      alert('Search input is empty! Please fill it');
      return;
    }
    await this.setState({ itemToFind, page: 1, imageList: [] });
    this.fetchItems();
  };

  render() {
    const { Loading, imageList } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery onLoadMore={this.onLoadMore} itemList={imageList} />
        <Loader loading={Loading} />
      </div>
    );
  }
}

export default App;
