### Thoughts 🎲

1) Instead of creating it all in the App.jsx, I decided to use separate component files and move calculateWinner() to helpers.js.
2) I enjoy short-circuit conditionals and ternary operators but they are not always readable so do not use liberally.
3) Note that we want to preserve immutability and not alter the state itself when updating the squares array in Board.jsx, hence the use of slice().
<hr>

Before scrolling down the tutorial more to see that they did indeed create a Square component, I did the following
```jsx
<div className="board-row">
  <Square num={1}/>
  <Square num={2}/>
  <Square num={3}/>
</div>
```
so as to get used to importing components. I became aware of the [prop-types](https://www.npmjs.com/package/prop-types) library, so I imported that and applied it to my Square component. I used 'props.num' instead of the tutorial's 'value', but have kept that as a comment. Going forward, I believe consistency is key and with only one or two props, using 'props.num' is fine; otherwise, destructing might be better. For reference, I have kept the tutorial's destructing in Board.jsx and props in Square.jsx.
