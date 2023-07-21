### Thoughts 🎲

1) Instead of creating it all in the App.jsx, I decided to use separate component files.
<hr>

Instead of creating a Square function that includes three sets of the following (up to 9):
```jsx
<div className="board-row">
  <button className="square">1</button>
  <button className="square">2</button>
  <button className="square">3</button>
</div>
```
I did
```jsx
<div className="board-row">
  <Square num={1}/>
  <Square num={2}/>
  <Square num={3}/>
</div>
```
so as to get used to importing components. It also made me aware of the [prop-types](https://www.npmjs.com/package/prop-types) library, so I imported that and applied it to my Square component.
