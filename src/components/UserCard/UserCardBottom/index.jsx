import React from 'react';
import styles from './UserCardBottom.module.scss';

const UserCardBottom = (props) => {
  const { tweets, fallowing, followers, } = props;

  return (
    <div>
      <div className={styles.wrapperDesc}>
        <div >
          <p className={styles.subtitle}>Tweets</p>
          <p className={styles.text}> {tweets}</p>
        </div>
        <div>
          <p className={styles.subtitle}>Fallowing</p>
          <p className={styles.text}>{fallowing}</p>
        </div>
        <div>
          <p className={styles.subtitle}>Followers</p>
          <p className={styles.text}>{followers}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCardBottom;