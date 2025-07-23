import { usePosts } from '../../context/PostsContext';
import PostItem from '../PostItem';
import styles from './PostList.module.css'

const PostList: React.FC = () => {
    const { posts } = usePosts();
    
    return posts && posts?.length > 0 ?
    <div className={styles.postListWrapper}>
        {posts.map((post) => <PostItem key={post.timestamp} {...post}/>)}
    </div>
     : null

}

export default PostList; 