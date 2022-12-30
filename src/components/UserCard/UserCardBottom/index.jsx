import React from 'react';
import styles from './UserCardBottom.module.scss';

const UserCardBottom = (props) => {
  const { tweets, fallowing, followers, } = props;

  return (
    <div>
      <div className={styles.wrapperDesc}>
        <div >
          <h5>Tweets</h5>
          <p>{tweets}</p>
        </div>
        <div>
          <h5>Fallowing</h5>
          <p>{fallowing}</p>
        </div>
        <div>
          <h5>Followers</h5>
          <p>{followers}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCardBottom;