import React, { type FC } from "react";

import * as styles from "./post-footer.module.scss";

interface PostFooterProps {
  date?: string;
}

const PostFooter: FC<PostFooterProps> = ({ date }) => {
  if (!date || date === "null" || new Date(date).getTime() === 0) {
    return null;
  }

  return (
    <div className={styles.postFooter}>
      <p className={styles.date}>
        Published{" "}
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export { PostFooter };
