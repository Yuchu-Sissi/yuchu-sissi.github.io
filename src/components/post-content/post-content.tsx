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
      <div className={bodyClass} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export { PostContent };
