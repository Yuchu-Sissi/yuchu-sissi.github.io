import React, { type FC } from "react";

import type { Node } from "@/types/node";
import { Button } from "@/components/button";
import { PostTags } from "@/components/post-tags";
import { PostAuthor } from "@/components/post-author";
import { PostFooter } from "@/components/post-footer";
import { PostContent } from "@/components/post-content";
import { ThemeSwitcher } from "@/components/theme-switcher";

import * as styles from "./post.module.scss";

interface PostProps {
  post: Node;
}

const Post: FC<PostProps> = ({ post }) => {
  const { html } = post;
  const { tagSlugs } = post.fields;
  const { tags, title, date, prev, next } = post.frontmatter;

  return (
    <div className={styles.post}>
      <div className={styles.buttons}>
        <Button className={styles.buttonArticles} title="All Articles" to="/" />
        <ThemeSwitcher />
      </div>
      <div className={styles.content}>
        <PostContent body={html} title={title} tags={tags} />
      </div>
      {(prev || next) && (
        <nav className={styles.chapterNav}>
          {prev ? (
            <Button title="← 上一章" to={prev} />
          ) : (
            <span />
          )}
          {next ? (
            <Button title="下一章 →" to={next} />
          ) : (
            <span />
          )}
        </nav>
      )}
      <div className={styles.footer}>
        <PostFooter date={date} />
        {tags && tagSlugs && <PostTags tags={tags} tagSlugs={tagSlugs} />}
        <PostAuthor />
      </div>
    </div>
  );
};

export { Post };
