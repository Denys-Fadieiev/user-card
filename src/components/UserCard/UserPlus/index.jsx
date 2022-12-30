import React from 'react';
import styles from './UserPlus.module.scss';

const UserPlus = (props) => {
  const { gender, maleStylesBtn, femaleStylesBtn } = props;
  return (
    <div className={styles.wrapperCardBtn}>
      <button className={styles.userBtn} style={gender === 'male' ? maleStylesBtn : femaleStylesBtn}>
        +
      </button>
    </div>
  );
}

export default UserPlus;