import React, { useCallback, useRef } from 'react';
import styles from './PostInput.module.css';
import emoji from '../../assets/emoji.svg';
import add from '../../assets/add.svg';
import audio from '../../assets/audio.svg';
import video from '../../assets/video.svg';
import publish from '../../assets/publish.svg';
import { notImplementedAlert } from '../../utils/notImplementedAlert';
import PostToolbar from '../PostToolbar';

const PostInput: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

  };

  const onPublish = useCallback(() => {
    console.log('publish');
  }, []);

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
          onInput={handleInput}
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