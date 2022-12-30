import React from 'react';
import styles from './UserCardTop.module.scss';

const UserCardTop = (props) => {
  const { name, nickName, img, } = props;
  const {src, alt} = img;

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src={src} 
        alt={alt} />
      <div className={styles.wrapperItem}>
        <h2>{name}</h2>
        <h4>{nickName}</h4>
      </div>
    </div>
  );
}

export default UserCardTop;
