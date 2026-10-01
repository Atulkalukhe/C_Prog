# C / learnlab

An interactive, beginner-friendly C programming course built with plain HTML, CSS, and JavaScript. It runs as a static site with no build step or package installation.

## Run locally

Open `index.html` in a modern browser, or serve the folder with any static HTTP server. For example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Learning path

The course covers 17 units: C foundations and program structure, types and variables, operators, input/output, conditions, loops, arrays and strings, functions, recursion, pointers, structures and enums, dynamic memory, file handling, the preprocessor, debugging, and putting concepts together. Each unit includes an explanation, syntax example, learning tip, visual model, and short quiz. Course completion and the last selected unit are saved in local browser storage.

## Simulator

The browser-only simulator includes editable C examples, sample output, and step-by-step views of variables, conditions, loops, arrays, function calls, recursion, pointers, structures, and virtual file operations. Choose a demo from the simulator menu, edit the code, then select **Run simulation** or press Ctrl/⌘ + Enter. The simulator is an educational model for its included examples and common beginner patterns; it is not a C compiler and does not execute arbitrary C source. File handling is visualized using an in-memory virtual file.

## Files

- `index.html` — accessible course and simulator layout
- `styles.css` — responsive dark interface, animation, and reduced-motion support
- `app.js` — course content, progress, quizzes, visualizations, and simulator logic

No framework, external runtime, network connection, or build tool is required. The interface uses local system font stacks.
