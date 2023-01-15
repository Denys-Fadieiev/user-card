import styles from "./App.module.css";
import UserCard from "./components/UserCard";

function App() {
	const users = [
		{
			name: "Emma Watson",
			nickName: "@EmWatson",
			img: {
				src: "https://oboi-telefon.ru/wallpapers/12073/35005.jpg",
				alt: "Emma Watson photo",
			},
			tweets: 1.337,
			fallowing: 561,
			followers: 718,
      gender: 'female',
		},
		{
			name: "Daniel Radcliffe",
			nickName: "@DanRadcl",
			img: {
				src: "https://dnepr.info/wp-content/uploads/2022/05/250631.700xp.jpg",
				alt: "Daniel Radcliffe photo",
			},
			tweets: 1.658,
			fallowing: 3861,
			followers: 5678,
      gender: 'male',
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<UserCard users={users[0]} />
				<UserCard users={users[1]} />
				<UserCard users={users[1]} />
				<UserCard users={users[1]} />
				<UserCard users={users[1]} />
				<UserCard users={users[1]} />
				<UserCard users={users[1]} />
				<UserCard users={users[1]} />
			</div>
		</div>
	);
}

export default App;
