import React, { type FC } from "react";

import * as styles from "./post-content.module.scss";

interface PostContentProps {
  title: string;
  body: string;
  tags?: string[];
}

const PostContent: FC<PostContentProps> = ({ body, title, tags }) => {
  const isNovel = tags?.includes("夕凪之息") || tags?.includes("novel");
  const bodyClass = isNovel ? `${styles.body} ${styles.novelProtection}` : styles.body;

  return (
    <div className={styles.postContent}>
      <h1 className={styles.title}>{title}</h1>
      {isNovel && <div className={styles.novelWatermark}>⚠ 本文受保护，禁止复制转载</div>}
      <div className={bodyClass} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export { PostContent };
