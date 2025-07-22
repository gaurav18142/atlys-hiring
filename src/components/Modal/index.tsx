import React from 'react';
import styles from './Modal.module.css';
import type { ModalProps } from './types';

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { children, onClose } = props;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 