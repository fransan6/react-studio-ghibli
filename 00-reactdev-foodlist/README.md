### Thoughts and lessons💥💯 

- As it was presented in the project, instead of pasting products (an array of six objects) directly into `App.jsx`, I created `db.json`. I did this so as to mimic fetching data, which is what happens in real life, and to refine my `fetch` request and store the data in `useState`.
- Created separate components, instead of using just one jsx file.
- The importance of where to implement `useState` - finding where it needs to be used (`SearchBar` and `ProductTable`) and its common parent (`FilterableTable`). From `FilterableTable`, it's easy to pass down the current state and set function of `useState`.
- Learning to focus on breaking down the UI into components, sorted hierarchically, and thinking how to build in React going forward (prefer bottom-top to top-bottom).

Using the brief from **React.dev** '*Thinking in React*' documentation ([link](https://react.dev/learn/thinking-in-react)).

<sup><sub>Started after **React.dev** Tic-Tac-Toe challenge ([GitHub link](https://github.com/fransan6/react-challenges/tree/main/01-reactdev-tictactoe)), but labelled as 00 due to its comparative simplicity.</sub></sup>
