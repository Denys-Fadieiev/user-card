import React from 'react';
import UserCardTop from './UserCardTop';
import UserCardBottom from './UserCardBottom';
import UserPlus from './UserPlus';
import styles from './UserCard.module.scss';

const maleStyles = {
  color: 'rgb(8, 160, 236)',
};

const femaleStyles = {
  color: 'rgb(246, 78, 6)',
};

const maleStylesBtn = {
  background: 'linear-gradient(rgb(8, 160, 236), rgb(232, 124, 223))',
};

const femaleStylesBtn = {
  background: 'linear-gradient(rgb(246, 78, 6), rgb(232, 124, 223))',
};

const UserCard = ({props}) => {
  const {name, nickName, img, tweets, fallowing, followers, gender} = props;
  
  return (
    <article 
      className={styles.wrapperCard} 
      style={gender === 'male'? maleStyles : femaleStyles}
    >
      <UserCardTop 
        name={name}
        nickName={nickName}
        img={img}
      />
      <UserCardBottom
        tweets={tweets}
        fallowing={fallowing}
        followers={followers}
      />
      <UserPlus
        gender={gender}
        maleStylesBtn={maleStylesBtn}
        femaleStylesBtn={femaleStylesBtn}
      />
    </article>
  );
}

export default UserCard;
