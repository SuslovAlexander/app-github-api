import styles from "./UserLogo.module.css";

interface IUserLogoProps {
  login: string;
  avatarUrl: string;
}

const UserLogo = ({ login, avatarUrl }: IUserLogoProps): JSX.Element => {
  return (
    <div className={styles.logo}>
      <div className={styles.img}>
        <img src={avatarUrl} alt={login} width={"100%"} />
      </div>
      <span className={styles.text}>{login}</span>
    </div>
  );
};

export default UserLogo;
