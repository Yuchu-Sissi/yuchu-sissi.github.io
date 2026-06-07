import React, { useState, type FC } from "react";

import * as styles from "./contact-dialog.module.scss";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

const ContactDialog: FC<ContactDialogProps> = ({ isOpen, onClose, email }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("来自玉初博客的留言");
    const body = encodeURIComponent(
      `嘿，我是 ${name || "匿名访客"}。\n\n${message}\n\n—— 来自你的私人展览馆`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setMessage("");
    setName("");
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.header}>
          <h3 className={styles.title}>嘿，很高兴认识你。</h3>
          <p className={styles.subtitle}>有什么想对我说的吗？欢迎留言。</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="contact-name" className={styles.label}>
              怎么称呼你
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="匿名也没关系"
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-message" className={styles.label}>
              想说什么
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="随便写点什么…"
              rows={5}
              className={styles.textarea}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            发送
          </button>
        </form>
      </div>
    </div>
  );
};

export { ContactDialog };
