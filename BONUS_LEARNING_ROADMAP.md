# Bonus Learning Roadmap (Optional Self-Study)

This guide extends the core bootcamp pathway with optional JavaScript topics you can study after finishing:

- [Class 1 materials](curriculum/class-01/cheatsheet.md)
- [Class 2 materials](curriculum/class-02/cheatsheet.md)
- [Mini project requirements](projects/user-directory/requirements.md)

Core bootcamp scope remains Class 1 + Class 2 + mini project. This roadmap is for deeper mastery and interview preparation.

## Foundation

### 1. Loops
Why now:
- Loops are required for algorithmic thinking and interviews, even when array methods are preferred in product code.

Prerequisites:
- [Class 1 cheat sheet](curriculum/class-01/cheatsheet.md)
- [Class 1 exercises](curriculum/class-01/exercises.md)

Learning objectives:
- Explain when to use `for`, `while`, `for...of`, and `for...in`.
- Control loop flow with `break` and `continue`.
- Convert between loop-based and array-method solutions.

Practice exercises:
- Implement FizzBuzz from 1 to 100.
- Reverse a string and count character frequency using loops only.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
- https://javascript.info/while-for

### 2. DOM Manipulation Basics
Why now:
- Understanding direct DOM APIs improves debugging and helps when building non-React scripts.

Prerequisites:
- [Mini project starter](projects/user-directory/starter/index.html)
- [Mini project main flow](projects/user-directory/starter/main.js)

Learning objectives:
- Select and update elements with `querySelector`, `textContent`, and `classList`.
- Add and remove event listeners correctly.
- Create and remove dynamic elements safely.

Practice exercises:
- Build a basic to-do list with add/delete actions.
- Add an interactive counter with increment/decrement/reset buttons.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
- https://javascript.info/dom-nodes

### 3. More Array Methods (`reduce`, `sort`, `some`, `every`)
Why now:
- These methods cover common transformations used in analytics, reporting, and interview tasks.

Prerequisites:
- [Combined cheat sheet](curriculum/references/combined-cheatsheet.md)
- [Class 2 exercises](curriculum/class-02/exercises.md)

Learning objectives:
- Aggregate values and objects with `reduce`.
- Sort primitives and objects with stable comparator logic.
- Use `some`/`every` to express validation rules.

Practice exercises:
- Compute totals and averages from a purchases array.
- Sort users by city then by name with deterministic output.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

### 4. Debugging Techniques
Why now:
- Better debugging reduces wasted time and improves confidence during project work.

Prerequisites:
- [Class 2 cheat sheet debugging section](curriculum/class-02/cheatsheet.md)
- [Mini project requirements](projects/user-directory/requirements.md)

Learning objectives:
- Use browser DevTools Console, Sources, and Network tabs effectively.
- Trace async errors and failed fetch calls.
- Create repeatable debugging checklists for UI and data issues.

Practice exercises:
- Diagnose and fix a deliberate API URL typo in starter files.
- Add targeted logs and remove them after fixing a filtering bug.

Resources:
- https://developer.chrome.com/docs/devtools/
- https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools

## Intermediate

### 5. Closures
Why now:
- Closures are foundational for factory functions, callbacks, memoization, and module patterns.

Prerequisites:
- [Class 1 functions review](curriculum/class-01/cheatsheet.md)
- [Class 2 async practice](curriculum/class-02/exercises.md)

Learning objectives:
- Explain lexical scope and closure behavior.
- Implement private state via function factories.
- Avoid stale closure bugs in async/event code.

Practice exercises:
- Build a `createCounter` function with increment/decrement/get methods.
- Build a simple memoized function for repeated calculations.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
- https://javascript.info/closure

### 6. The `this` Keyword
Why now:
- Misunderstanding `this` causes subtle bugs in object methods and callbacks.

Prerequisites:
- [Class 1 object/destructuring review](curriculum/class-01/cheatsheet.md)
- [Combined cheat sheet](curriculum/references/combined-cheatsheet.md)

Learning objectives:
- Distinguish `this` behavior in regular functions vs arrow functions.
- Control context with `call`, `apply`, and `bind`.
- Prevent context loss in callbacks and event handlers.

Practice exercises:
- Fix a broken object method that logs `undefined` fields.
- Refactor callback-based code to preserve context safely.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
- https://javascript.info/object-methods

### 7. Classes and OOP
Why now:
- Classes help model entities when a project needs clearer state and behavior boundaries.

Prerequisites:
- [Class 1 object basics](curriculum/class-01/cheatsheet.md)
- [Mini project data model context](projects/user-directory/requirements.md)

Learning objectives:
- Create classes with constructors and instance methods.
- Apply inheritance for shared behavior.
- Choose between plain objects/functions and classes pragmatically.

Practice exercises:
- Implement `User` and `AdminUser` classes with shared base behavior.
- Convert a utility object into a class and compare readability.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- https://javascript.info/class

### 8. Advanced Error Handling
Why now:
- Production-ready apps need categorized errors, clean messages, and recovery paths.

Prerequisites:
- [Class 2 error handling](curriculum/class-02/cheatsheet.md)
- [Mini project API and UI state handling](projects/user-directory/starter/api.js)

Learning objectives:
- Differentiate operational vs programmer errors.
- Create custom error classes with useful metadata.
- Build graceful fallbacks for network and parsing failures.

Practice exercises:
- Add retry-with-limit logic to a fetch wrapper.
- Implement custom `ApiError` with status code and user-friendly mapping.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
- https://javascript.info/custom-errors

## Advanced

### 9. Prototypes and Inheritance Internals
Why now:
- Prototype knowledge explains how JavaScript objects and classes work under the hood.

Prerequisites:
- [Classes and OOP section in this guide](#7-classes-and-oop)
- [Class 1 object basics](curriculum/class-01/cheatsheet.md)

Learning objectives:
- Describe prototype chains and property lookup.
- Inspect and modify prototypes responsibly.
- Connect `class` syntax to prototype behavior.

Practice exercises:
- Recreate simple class behavior using constructor functions and prototypes.
- Inspect prototype chains of arrays, functions, and custom objects.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
- https://javascript.info/prototype-inheritance

### 10. Event Loop and Concurrency
Why now:
- Event loop literacy is essential for reasoning about async timing and UI responsiveness.

Prerequisites:
- [Class 2 async/await](curriculum/class-02/cheatsheet.md)
- [Class 2 exercises](curriculum/class-02/exercises.md)

Learning objectives:
- Explain call stack, microtasks, and macrotasks.
- Predict execution order of async snippets.
- Reduce race conditions in UI state updates.

Practice exercises:
- Predict and verify output order for `setTimeout`, `Promise`, and `await`.
- Simulate concurrent requests and guard against stale responses.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
- https://javascript.info/event-loop

### 11. Generators and Iterators
Why now:
- Iteration protocols help with custom data streams and lazy processing.

Prerequisites:
- [Loops section in this guide](#1-loops)
- [Class 1 array method fundamentals](curriculum/class-01/cheatsheet.md)

Learning objectives:
- Implement iterable objects with `[Symbol.iterator]`.
- Write generator functions with `yield`.
- Use generators for lazy sequence creation.

Practice exercises:
- Build a range generator that yields configurable sequences.
- Create an iterable object that exposes paginated items.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
- https://javascript.info/generators

### 12. Design Patterns in JavaScript
Why now:
- Patterns improve maintainability once codebases grow beyond small scripts.

Prerequisites:
- [Mini project architecture](projects/user-directory/starter/main.js)
- [Class 2 modules](curriculum/class-02/cheatsheet.md)

Learning objectives:
- Apply module, factory, and observer patterns in JS.
- Identify when a pattern is over-engineering.
- Refactor duplicated logic into reusable abstractions.

Practice exercises:
- Refactor API logic into a module/factory with clear boundaries.
- Implement a lightweight pub/sub utility for UI events.

Resources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
- https://www.patterns.dev/posts/classic-design-patterns/

## Practice Resources

- Core docs and references:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - https://javascript.info/
- Problem practice:
  - https://www.freecodecamp.org/learn
  - https://exercism.org/tracks/javascript
- Interview-style drills:
  - https://leetcode.com/problemset/
  - https://www.codewars.com/

## Project Ideas

1. Habit Tracker (DOM, events, local storage, sorting)
2. Expense Analyzer (reduce, grouping, filtering, error handling)
3. Movie Search Dashboard (async fetch, debouncing, rendering states)
4. Kanban Lite Board (drag/drop basics, object modeling, persistence)
5. API Retry Playground (custom errors, retry/backoff, logging)

## 8-Week Schedule

Week 1:
- Loops + More Array Methods
- Goal: Solve 8-10 short algorithm tasks

Week 2:
- DOM Manipulation + Debugging Techniques
- Goal: Ship one vanilla JS mini-app

Week 3:
- Closures + `this`
- Goal: Build 3 closure/context exercises

Week 4:
- Classes and OOP + Advanced Error Handling
- Goal: Refactor one existing script with class or factory boundaries

Week 5:
- Prototypes and inheritance internals
- Goal: Recreate class behavior with prototypes

Week 6:
- Event loop and async concurrency behavior
- Goal: Complete 6 output-order and race-condition drills

Week 7:
- Generators/iterators + design patterns intro
- Goal: Build one iterable utility and one pattern-based refactor

Week 8:
- Capstone practice week
- Build one project idea end-to-end, then run self-review against:
  - naming clarity
  - error handling
  - state flow
  - modularity
  - documentation quality
