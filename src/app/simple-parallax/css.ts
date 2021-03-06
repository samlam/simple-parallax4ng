export const css = `
html {
  height: 100%;
  overflow: hidden;
}

body {
  margin:0;
  padding:0;
  perspective: 1px;
  transform-style: preserve-3d;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.parallax {
  position: relative;
  padding: 25vh 10%;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, .4);
  transform-style: inherit;
}

.parallax:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left:0;
  right:0;
}

.parallax:nth-child(2n) .title {
  margin-left: 0;
  margin-right: auto;
}

.parallax:nth-child(2n+1) .title {
  margin-left: auto;
  margin-right: 0;
}

.parallax, .parallax:before {
  background: 50% 50% / cover;
}
`;
