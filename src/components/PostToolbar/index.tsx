import styles from './PostToolbar.module.css'
import { notImplementedAlert } from '../../utils/notImplementedAlert'
import bold from '../../assets/bold.svg'
import italic from '../../assets/italic.svg'
import underline from '../../assets/underline.svg'
import list from '../../assets/list.svg'
import listOl from '../../assets/list-ol.svg'
import quote from '../../assets/quote.svg'
import code from '../../assets/code.svg'
import trash from '../../assets/trash.svg'
import React from 'react'

function PostToolbar() {
  return (
    <div className={styles.toolbarRow}>
      <div className={styles.toolbar}>
          <select className={styles.dropdown}>
              <option>Paragraph</option>
          </select>
          <button className={styles.toolbarBtn} onClick={notImplementedAlert} aria-label="Bold">
              <img src={bold} alt="Bold" />
          </button>
          <button className={styles.toolbarBtn} onClick={notImplementedAlert} aria-label="Italic">
              <img src={italic} alt="Italic" />
          </button>
          <button className={styles.toolbarBtn} onClick={notImplementedAlert} aria-label="Underline">
              <img src={underline} alt="Underline" />
          </button>
          <button className={styles.toolbarBtn} onClick={notImplementedAlert} aria-label="List">
              <img src={list} alt="List" />
          </button>
          <button className={styles.toolbarBtn} onClick={notImplementedAlert} aria-label="Ordered List">
              <img src={listOl} alt="Ordered List" />
          </button>
          <button className={styles.toolbarBtn} onClick={notImplementedAlert} aria-label="Quote">
              <img src={quote} alt="Quote" />
          </button>
          <button className={styles.toolbarBtn} onClick={notImplementedAlert} aria-label="Code">
              <img src={code} alt="Code" />
          </button>
      </div>
      <button className={styles.trashBtn} onClick={notImplementedAlert} aria-label="Delete">
        <img src={trash} alt="Delete" />
      </button>
    </div>
  )
}

export default React.memo(PostToolbar)