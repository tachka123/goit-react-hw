import React from 'react';
import PropTypes from 'prop-types';
import style from './friends.module.css';

function FriendList({ friendList }) {
  return (
    <ul className={style.friendsList}>
      {friendList.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <span
              className={`${style.status} ${
                isOnline ? style.online : style.offline
              }`}
            />
            <img className={style.avatar} src={avatar} alt="avatar" />
            <p className={style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.defaultProps = {
  friendList: [],
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
};

export default FriendList;
