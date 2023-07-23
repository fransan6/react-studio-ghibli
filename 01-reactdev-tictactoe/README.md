### Thoughts and lessons 🎲💥💯

- Instead of creating it all in the `App.jsx`, I decided to use separate component files and move `calculateWinner()` to `helpers.js`.
- Short-circuit conditionals and ternary operators are not *always* easily readable.
- Note that we want to preserve immutability and not alter the state itself when updating the squares array in `Board.jsx`, hence the use of `slice()`.
- I became aware of the [prop-types](https://www.npmjs.com/package/prop-types) library, so I imported that and applied it to my `Square` component. I used props instead of the tutorial's destructured variables. Going forward, I believe consistency is key and with only one or two props, using props is fine; otherwise, destructuring might be better. For reference this time, I have kept both the tutorial's destructuring in `Board.jsx` and props in `Square.jsx`.
- Useful to see in which component state should be owned and what you can pass down to child components.
