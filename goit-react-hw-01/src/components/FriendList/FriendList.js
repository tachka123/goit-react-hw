import React from 'react';
import style from './friends.module.css';
import Proptypes from 'prop-types';

function FriendList({ friendList }) {
  return (
    <ul className={style.friendsList}>
      {friendList.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <span
              className={
                style.status + ' ' + (isOnline ? style.online : style.offline)
              }
            ></span>
            <img className={style.avatar} src={avatar} alt="" />
            <p className={style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: Proptypes.string,
  name: Proptypes.string,
  isOnline: Proptypes.bool,
  id: Proptypes.number,
};

export default FriendList;
