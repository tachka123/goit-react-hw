import React, { Component } from 'react';
import T from 'prop-types';
import style from './SearchBar.module.css';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired,
  };

  state = {
    value: '',
  };

  handleOnChange = e => {
    const {
      target: { value },
    } = e;
    this.setState({ value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;
    onSubmit(value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className={style.SearchBar}>
        <form className={style.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={style.SearchFormButton} />
          <input
            onChange={this.handleOnChange}
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            placeholder="Search images and photos"
            value={value}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
