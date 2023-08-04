A React app project to consolidate some of the basics of React. Built using Vite, it displays Studio Ghibli's films, in chronological order, with next and previous buttons to scroll through them. You can filter by director name, clearing the filter to go back to all films (with the list starting from the beginning each time). In addition, you are able to save and remove films from a favourites section, using `localStorage`. There is also a dropdown displaying information about a particular film.

### Thought/lessons
- The importance of set-up and thinking through your entire project. I did not do quite enough and so had to pause a few times and figure out how the components were ordered and where state should be. Using Obsidian's Canvas was very useful.
- Figuring out where state goes and when to set it up.
- `AbortController` is not really necessary for a project this size but I believe it is good practice to get used to implementing it now.
- What you don't really get in self-learning, when reading React Dev documentation or watching a video, are errors in your code. There were multiple bugs that popped up and solving them was always invaluable.

### To do (upon further learning):
- Implement other hooks, if necessary, such as useContext.
- Set up testing.
- Not upon further learning, but make it responsive.

### Note
- I initially created this in a private repo, as part of a repo with multiple projects in, but have now moved it to its own repo.
- Partway through, I came across [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). I switched to that mid-project in order to get going in creating better commit messages.
