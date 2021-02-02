let style = `/* 首先给所有元素加上过渡效果 */
* {
  transition: all .4s;
}

/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); 
  background: rgb(0,43,54);
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #a3a3a3;
    margin-top: 5px;
}

/* 文字离边框太近了 */
.prismEditor {
  padding: .5em;
  border: 1px solid;
  margin: auto;
  overflow: hidden;
  width: 45vw; height: 40vh;
}

/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 接下来我给自己准备一个编辑器 */
.mdEditor{
    padding: .5em;
    border: 1px solid;
    margin: .1em auto;
    overflow: auto;
    width: 45vw; height: 40vh;
}

/* 再准备一个渲染器 */
.menu{
    padding: .5em;
    margin: .1em auto;
    overflow: hidden;
    width: 45vw;
    height: 10vh;
    text-align: center;
}

`;

// /* 加点 3D 效果呗 */
// html{
//     perspective: 1000px;
//   }
//   .prismEditor1 {
//     -webkit-transition: none;
//     transition: none;
//     -webkit-transform: rotateY(10deg) translateZ(-100px) ;
//             transform: rotateY(10deg) translateZ(-100px) ;
//   }
export default style