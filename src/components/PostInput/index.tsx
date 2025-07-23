import React, { useCallback, useRef } from 'react';
import styles from './PostInput.module.css';
import emoji from '../../assets/emoji.svg';
import add from '../../assets/add.svg';
import audio from '../../assets/audio.svg';
import video from '../../assets/video.svg';
import publish from '../../assets/publish.svg';
import { notImplementedAlert } from '../../utils/home-utils';
import PostToolbar from '../PostToolbar';
import { usePosts } from '../../context/PostsContext';
import { useAuth } from '../../context/AuthContext';
import type { PostInputProps } from '../../types/Home';

const PostInput: React.FC<PostInputProps> = (props: PostInputProps) => {

  const { handleLoginClick } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { addPost } = usePosts();
  const { user, isAuthenticated } = useAuth();

  const onPublish = useCallback(() => {
    if (isAuthenticated) {

      const { name } = user || {};

      addPost({
        name: name || '',
        text: textareaRef.current?.value || '',
        timestamp: new Date().toISOString(),
      })
      if (textareaRef.current) {
        textareaRef.current.value = '';
      }
    } else {
      handleLoginClick();
    }
  }, [isAuthenticated, user]);

  return (
    <div className={styles.composer}>
      <PostToolbar />
      <div className={styles.inputRow}>
        <img src={emoji} alt="Emoji" className={styles.emojiIcon} onClick={notImplementedAlert} />
        <textarea
          ref={textareaRef}
          className={styles.input}
          placeholder="How are you feeling today?"
          rows={5}
          style={{overflow:'hidden'}}
        />
      </div>
      <div className={styles.footerRow}>
        <div className={styles.footerLeft}>
          <button className={styles.footerBtn} onClick={notImplementedAlert} aria-label="Add">
            <img src={add} alt="Add" />
          </button>
          <button className={styles.footerBtn} onClick={notImplementedAlert} aria-label="Audio">
            <img src={audio} alt="Audio" />
          </button>
          <button className={styles.footerBtn} onClick={notImplementedAlert} aria-label="Video">
            <img src={video} alt="Video" />
          </button>
        </div>
        <button className={styles.publishBtn} aria-label="Publish" onClick={onPublish}>
          <img src={publish} alt="Publish" />
        </button>
      </div>
    </div>
  );
};

export default PostInput; 