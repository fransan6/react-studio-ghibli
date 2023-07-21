### Thoughts 🎲

1) Instead of creating it all in the App.jsx, I decided to use separate component files.
<hr>

Before scrolling down the tutorial more to see that they did indeed create a Square component, I did the following
```jsx
<div className="board-row">
  <Square num={1}/>
  <Square num={2}/>
  <Square num={3}/>
</div>
```
so as to get used to importing components. I became aware of the [prop-types](https://www.npmjs.com/package/prop-types) library, so I imported that and applied it to my Square component. I use 'props.num' instead of the tutorial's 'value', but have kept that as a comment. Going forward, I believe consistency is key and with only one or two props, using 'prop.num' is fine; otherwise, destructing might be better.
