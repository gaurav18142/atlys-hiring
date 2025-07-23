import type { PostData } from '../../types/Home';
import user from '../../assets/user.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';
import styles from './PostItem.module.css'
import { notImplementedAlert, timeAgo } from '../../utils/home-utils';

const PostItem: React.FC<PostData> = (props: PostData) => {
    
    const { name, text, timestamp } = props;

    return <div className={styles.postItemWrapper}>
        <div className={styles.postContent}>
            <div className={styles.postHeader}>
                <img className={styles.profilePicture} src={user} alt="Add" />
                <div>
                    <p className={styles.userName}>{name}</p>
                    <p className={styles.timeStamp}>{timeAgo(timestamp)}</p>
                </div>
            </div>
            <div className={styles.postText}>
                {text}
            </div>
        </div>
        <div className={styles.postActions}>
        <button className={styles.actionBtn} onClick={notImplementedAlert} aria-label="Like">
              <img src={like} alt="Like" />
          </button>
          <button className={styles.actionBtn} onClick={notImplementedAlert} aria-label="Comment">
              <img src={comment} alt="Comment" />
          </button>
          <button className={styles.actionBtn} onClick={notImplementedAlert} aria-label="Share">
              <img src={send} alt="Share" />
          </button>
        </div>
    </div>

}

export default PostItem; 