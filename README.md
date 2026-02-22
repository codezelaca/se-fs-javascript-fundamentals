# SE FS JavaScript Fundamentals

Structured learning pathway for JavaScript fundamentals in a software engineering bootcamp flow.  
This repository is organized for instructor delivery and student use across two classes plus one mini project.

## Scope

Core bootcamp scope = Class 1 + Class 2 + mini project.

## Learning Outcomes

By the end of this pathway, students should be able to:

- Use modern JavaScript syntax (`const`/`let`, arrow functions, template literals).
- Transform data with array methods (`map`, `filter`, `find`) and chaining.
- Work with objects, destructuring, spread/rest, and conditionals.
- Fetch data from APIs using `async`/`await` with proper error handling.
- Build a small frontend app with a clean module structure.

## Learning Pathway (Recommended Order)

1. Class 1 Foundations  
[Cheat Sheet](curriculum/class-01/cheatsheet.md)  
[Exercises](curriculum/class-01/exercises.md)  
[Solutions](curriculum/class-01/solutions.md)
2. Class 2 Async + APIs  
[Cheat Sheet](curriculum/class-02/cheatsheet.md)  
[Exercises](curriculum/class-02/exercises.md)  
[Solutions](curriculum/class-02/solutions.md)
3. Mini Project  
[Requirements](projects/user-directory/requirements.md)  
[Starter App](projects/user-directory/starter/index.html)  
[Reference Solution](projects/user-directory/solution/mini-project-solution.js)
4. Full Reference  
[Combined Cheat Sheet](curriculum/references/combined-cheatsheet.md)

## Beyond Essentials (Optional)

For broader JavaScript depth beyond this bootcamp scope, use the optional self-study roadmap:

- [Bonus Learning Roadmap](BONUS_LEARNING_ROADMAP.md)

## Repository Structure

```text
.
├── curriculum/
│   ├── class-01/
│   │   ├── cheatsheet.md
│   │   ├── exercises.md
│   │   └── solutions.md
│   ├── class-02/
│   │   ├── cheatsheet.md
│   │   ├── exercises.md
│   │   └── solutions.md
│   └── references/
│       └── combined-cheatsheet.md
└── projects/
    └── user-directory/
        ├── requirements.md
        ├── starter/
        │   ├── index.html
        │   ├── style.css
        │   ├── api.js
        │   ├── ui.js
        │   └── main.js
        └── solution/
            └── mini-project-solution.js
```

## How to Run the Mini Project Starter

No build tools or package install required.

1. Open `projects/user-directory/starter/index.html` in a browser.
2. Recommended: use VS Code Live Server for module-friendly local serving.
3. Internet access is required because data comes from `https://jsonplaceholder.typicode.com`.

## Instructor Delivery Notes

- Share `cheatsheet.md` + `exercises.md` first.
- Release `solutions.md` after practice or discussion.
- For the project, share `requirements.md` and `starter/` before exposing `solution/`.
- Use `curriculum/references/combined-cheatsheet.md` as revision material near assessments.

## Audience and Prerequisites

- Audience: early-stage full-stack learners.
- Prerequisites: basic HTML/CSS and beginner JavaScript exposure (variables, loops, functions).

## Contributing

If you update content:

- Keep learning order stable (`class-01` -> `class-02` -> project).
- Keep solution files separate from exercise files.
- Prefer small, focused PRs with clear educational intent.

## Student Export Script

Generate release-ready student packs with Day 1 and Day 2 separated, and all solutions excluded:

```bash
bash scripts/export-student-packages.sh
```

Optional custom output directory:

```bash
bash scripts/export-student-packages.sh ./dist/student-release
```

Output structure:

```text
dist/student-exports/<timestamp>/
├── day-01/
├── day-02/
├── day-01.zip
└── day-02.zip
```

Generated exports are local artifacts and should not be committed.

## License

This repository is licensed under the [MIT License](LICENSE).
