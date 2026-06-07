import "./src/assets/styles/main.scss";

export { wrapRootElement } from "./internal/gatsby/wrap-root-element";

// Anti-copy protection for novel posts
export const onClientEntry = () => {
  if (typeof window === "undefined") return;

  // Wait for DOM to be ready
  const setupNovelProtection = () => {
    const novelBodies = document.querySelectorAll(".novelProtection");
    if (novelBodies.length === 0) return;

    novelBodies.forEach((body) => {
      // Prevent copy
      body.addEventListener("copy", (e) => {
        e.preventDefault();
        alert("本文受版权保护，禁止复制");
        return false;
      });

      // Prevent cut
      body.addEventListener("cut", (e) => {
        e.preventDefault();
        return false;
      });

      // Prevent context menu
      body.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        return false;
      });

      // Prevent selectstart
      body.addEventListener("selectstart", (e) => {
        e.preventDefault();
        return false;
      });
    });
  };

  // Run after a short delay to ensure React has rendered
  if (document.readyState === "complete") {
    setTimeout(setupNovelProtection, 1000);
  } else {
    window.addEventListener("load", () => setTimeout(setupNovelProtection, 1000));
  }
};
