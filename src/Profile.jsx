import styles from "./Profile.module.css";
const Profile = (props) => {

	let user = props.function();
	return (
		<div className="row">
			<div className="col-sm-3">
				<img
					src={user.avatar}
					alt=""
					width={"100%"}
				/>
			</div>
			<div className="col-sm-9">
				<h1 style={{ backgroundColor: "lightblue" }}>{user.name} {user.surname}</h1>
				<h2 className={styles.about}>{user.about}</h2>
				<p>Email: {user.email}</p>
				<p>Id: {user.id}</p>
				<p className={styles.paragraph}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima aut eum nesciunt
					exercitationem iure ad dignissimos iusto rem voluptas laudantium eius, quos animi.
					Asperiores neque harum minus quisquam ut voluptates!
				</p>
			</div>
		</div>
	);
};

export default Profile;
