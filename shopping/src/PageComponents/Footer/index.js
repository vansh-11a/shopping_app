
import NewsLetter from './Newsletter';
import styles from './styles.module.css';

function Footer() {
  return (
    <div className={styles.main_container}>
      <NewsLetter />
      <div className={styles.copyright_container}>Copyright 2022 All Right Reserved By SG</div>
    </div>
  );
}

export default Footer;