(() => {
  'use strict';

  const units = [
    {id:'overview',group:'FOUNDATIONS',title:'C at a glance',time:'6 min read',heading:'What is C, really?',intro:'A quick, friendly introduction to the language behind so much of the software around us.',body:'C is a small, fast programming language that gives you a clear view of how a computer works. You write instructions in source code, a compiler translates them into a program, and the computer follows those instructions in order. C is used in operating systems, embedded devices, games, and tools that need to be efficient.',callout:'Think of C as a precise recipe.',calloutBody:'You give the computer exact steps. It follows them faithfully, which makes clear instructions and careful thinking valuable skills.',syntax:'#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C learner!\\n");\n    return 0;\n}',syntaxCaption:'A complete program can be just a few readable lines.',takeaway:'C programs are instructions that a compiler turns into something a computer can run.',tip:'Try changing the message in the simulator, then run it again. Small experiments build confidence.',visual:'PROGRAM FLOW',visualType:'flow',quiz:{q:'What does a compiler do?',options:['Translates source code into a program','Stores every variable in a spreadsheet','Connects your computer to the internet','Automatically writes your program'],answer:0,why:'Exactly. A compiler translates your C source into instructions your computer can run.'},demo:'hello'},
    {id:'structure',group:'FOUNDATIONS',title:'Program structure',time:'7 min read',heading:'Give every program a shape',intro:'Meet the pieces that make a C program complete and understandable.',body:'A C program is built from functions. Execution starts in main, the function every complete program needs. Header files make library features available, braces group a function body, and semicolons mark the end of most statements. Indentation does not change what C means, but it helps people follow the structure.',callout:'Read from the outside in.',calloutBody:'First find main, then follow its statements from top to bottom. Braces show which instructions belong together.',syntax:'#include <stdio.h>  // make printf available\n\nint main(void) {    // program entry point\n    puts("Ready!");\n    return 0;        // report success\n}',syntaxCaption:'The entry point, a statement, and a successful return.',takeaway:'Execution begins inside main; braces group its statements and semicolons finish them.',tip:'Match each opening brace with its closing brace before tracing a program.',visual:'PROGRAM STRUCTURE',visualType:'flow',quiz:{q:'Where does a C program begin running?',options:['At the first #include','Inside main','At the last line of the file','At the first semicolon'],answer:1,why:'The operating system starts a C program by calling its main function.'},demo:'hello'},
    {id:'types',group:'FOUNDATIONS',title:'Types & variables',time:'8 min read',heading:'Give information a name',intro:'Variables are named places to keep values while your program runs.',body:'A variable has a type, a name, and a current value. The type tells C what kind of information to expect and how much space it needs. Use int for whole numbers, double for decimal values, and char for a single character. Declare a variable before using it, and initialize it when you can.',callout:'A variable is a labeled box.',calloutBody:'Its type describes what fits inside. Its name helps you remember what the current value means.',syntax:'int lives = 3;\ndouble temperature = 21.5;\nchar initial = \'C\';\n\nlives = lives + 1;  // update the value',syntaxCaption:'Declare a type and name, then give the variable a value.',takeaway:'A variable has a type and a value that can change while the program runs.',tip:'Choose names that explain what a value represents, like total_score instead of x.',visual:'A VARIABLE IN MEMORY',visualType:'variable',quiz:{q:'Which type is a good fit for a whole-number count?',options:['int','double','char','void'],answer:0,why:'int stores whole numbers, making it a useful type for counts and indexes.'},demo:'loop'},
    {id:'operators',group:'FOUNDATIONS',title:'Operators & expressions',time:'7 min read',heading:'Combine values into answers',intro:'Operators do work with values: calculate, compare, and combine.',body:'Arithmetic operators such as +, -, *, /, and % create new values. Comparison operators such as == and < ask questions that are true or false. Logical operators &&, ||, and ! combine or reverse those questions. Bitwise operators (&, |, ^, ~, <<, >>) work on the bits of integer values and are often used for flags. Parentheses make expression order clear.',callout:'An expression is a question or calculation.',calloutBody:'C evaluates its smaller parts and combines them according to the operators and parentheses you wrote.',syntax:'int total = 4 + 3 * 2;  // 10\nint remainder = 17 % 5;  // 2\nint ready = total >= 10 && remainder == 2;\nunsigned flags = 1u << 2;  // 00000100',syntaxCaption:'Multiplication happens before addition; shifts can set or inspect bits.',takeaway:'Use arithmetic to calculate, comparisons for conditions, and bitwise operators to work with individual bits.',tip:'When an expression feels crowded, add parentheses to make your intention easy to see.',visual:'EXPRESSION FLOW',visualType:'flow',quiz:{q:'What is the value of 4 + 3 * 2 in C?',options:['14','10','20','18'],answer:1,why:'Multiplication happens before addition, so 4 + (3 × 2) equals 10.'},demo:'condition'},
    {id:'io',group:'FOUNDATIONS',title:'Input & output',time:'7 min read',heading:'Let your program talk',intro:'Print useful information and read values that a person provides.',body:'The stdio library provides common input and output tools. printf displays formatted text. scanf can read formatted values into variables; it needs the address of the variable so it can store what was read. For a beginner, start with clear output, then practice reading one value at a time.',callout:'Input and output are the conversation.',calloutBody:'Your program receives information, works with it, and gives a result back to the person using it.',syntax:'#include <stdio.h>\n\nint main(void) {\n    int age = 12;\n    printf("Age: %d\\n", age);\n    return 0;\n}',syntaxCaption:'%d is a placeholder for an integer value.',takeaway:'printf formats output; scanf can store input at the address of a variable.',tip:'Every printf format marker should match the type of value you provide.',visual:'INPUT → PROGRAM → OUTPUT',visualType:'flow',quiz:{q:'Which format marker prints an int with printf?',options:['%c','%s','%d','%p'],answer:2,why:'%d tells printf to format the matching value as a decimal integer.'},demo:'hello'},
    {id:'conditions',group:'MAKE DECISIONS',title:'Conditions',time:'8 min read',heading:'Teach your program to choose',intro:'Conditions let a program follow different paths depending on what is true.',body:'An if statement checks a condition. If the condition is true, its block runs; otherwise, an optional else block runs. Use else if when you need to check more than two cases. A single equals sign assigns a value, while two equals signs compare values.',callout:'A condition is a fork in the path.',calloutBody:'The program checks a yes-or-no question, then follows only the path that matches its answer.',syntax:'int score = 72;\n\nif (score >= 50) {\n    puts("Pass!");\n} else {\n    puts("Keep practicing");\n}',syntaxCaption:'The comparison chooses which block runs.',takeaway:'if and else choose a path based on whether a condition is true.',tip:'Read a condition out loud as a question. score >= 50 means “is score at least 50?”',visual:'A CONDITION CHOOSES',visualType:'branch',quiz:{q:'What does an if statement check?',options:['Whether a condition is true','How many bytes a file uses','Whether a function is finished','The name of a variable'],answer:0,why:'An if statement evaluates a condition and runs its block when that condition is true.'},demo:'condition'},
    {id:'loops',group:'MAKE DECISIONS',title:'Loops',time:'9 min read',heading:'Repeat work without repeating code',intro:'Loops help a program do a task again and again, with a clear stopping point.',body:'A for loop is useful when you know how many repeats you need. A while loop keeps going as long as its condition remains true. Every loop needs progress toward a stopping point; otherwise, it may run forever. Watch the loop variable change to understand when the condition becomes false.',callout:'A loop is a careful “do this again.”',calloutBody:'The loop checks its rule, does one round of work, updates its state, then checks the rule again.',syntax:'for (int lap = 1; lap <= 5; lap++) {\n    printf("Lap %d\\n", lap);\n}\n\n// lap advances: 1 → 2 → 3 → 4 → 5',syntaxCaption:'Start at 1, repeat through 5, and add one after each round.',takeaway:'A loop repeats a block while its condition allows another round.',tip:'Trace the starting value, the condition, and the update separately.',visual:'LOOP CYCLE',visualType:'loop',quiz:{q:'What makes a for loop move to its next round?',options:['The variable update expression','The closing brace by itself','The #include line','A return from printf'],answer:0,why:'The update expression runs after each round and usually moves the loop toward its stopping condition.'},demo:'loop'},
    {id:'arrays',group:'DATA & MEMORY',title:'Arrays & strings',time:'10 min read',heading:'Keep related values together',intro:'An array stores a row of values of the same type, ready to access by index.',body:'Array elements sit next to each other in order. In C, the first element is at index 0, so an array with four elements uses indexes 0 through 3. A string is a char array ending in a special null character, \\0. Check your indexes carefully; C will not automatically protect you from going beyond the array.',callout:'An array is a numbered row of boxes.',calloutBody:'Each position has an index. Begin counting at zero, and stay inside the row.',syntax:'int scores[4] = {3, 5, 8, 2};\n\nfor (int i = 0; i < 4; i++) {\n    printf("%d ", scores[i]);\n}\n// indexes:     0  1  2  3',syntaxCaption:'The loop visits each valid index exactly once.',takeaway:'Array indexes begin at zero; the last valid index is one less than the length.',tip:'Draw each value in its own box and write its index underneath it.',visual:'ARRAY CELLS',visualType:'array',quiz:{q:'What is the first index in a C array?',options:['1','-1','0','It depends on the type'],answer:2,why:'C arrays start at index 0. A four-element array uses indexes 0, 1, 2, and 3.'},demo:'array'},
    {id:'functions',group:'DATA & MEMORY',title:'Functions',time:'9 min read',heading:'Package a useful action',intro:'Functions give a name to a task so you can reuse it and reason about it separately.',body:'A function can receive inputs called parameters, perform a task, and return a result. Its declaration tells C the function name and types. When you call a function, execution moves into its body, works through its statements, then returns to where it was called. Small functions make large programs easier to understand.',callout:'A function is a named mini-program.',calloutBody:'Give it the information it needs, let it do one job, then use the value it returns.',syntax:'int add(int a, int b) {\n    return a + b;\n}\n\nint main(void) {\n    int answer = add(4, 3);\n    printf("%d\\n", answer);\n    return 0;\n}',syntaxCaption:'The call add(4, 3) returns 7 to its caller.',takeaway:'A function call temporarily transfers execution to a reusable block of code.',tip:'Name functions with action words: calculate_total, print_menu, or find_largest.',visual:'FUNCTION CALL',visualType:'function',quiz:{q:'What happens when a function reaches return?',options:['It gives control back to its caller','It restarts the whole program','It erases every variable','It opens a new file'],answer:0,why:'return ends the current function and gives control and, when specified, a value back to its caller.'},demo:'function'},
    {id:'recursion',group:'DATA & MEMORY',title:'Recursion',time:'9 min read',heading:'Solve a problem by making it smaller',intro:'A recursive function calls itself with a smaller version of the same problem.',body:'Recursion works when a problem can be reduced to a simpler instance of itself. Every recursive function needs a base case that can finish without another call. The recursive case moves toward that base case. Think of calls stacking up on the way down, then returning in reverse order.',callout:'Make the problem smaller each time.',calloutBody:'A base case stops the chain. Each other call should move closer to that stopping point.',syntax:'int countdown(int n) {\n    if (n == 0) {\n        return 0;         // base case\n    }\n    printf("%d\\n", n);\n    return countdown(n - 1);\n}',syntaxCaption:'Each call uses a smaller n until the base case is reached.',takeaway:'Recursion needs a base case and a recursive step that reaches it.',tip:'Write out the call values in a column. Then trace the returns back up.',visual:'CALL STACK',visualType:'recursion',quiz:{q:'What prevents a recursive function from calling itself forever?',options:['A base case','A larger variable','An extra header','A pointer'],answer:0,why:'The base case gives the recursion a condition where it can stop making new calls.'},demo:'recursion'},
    {id:'pointers',group:'DATA & MEMORY',title:'Pointers',time:'10 min read',heading:'Follow an address to a value',intro:'Pointers store addresses, which lets your program refer to values in memory.',body:'A pointer is a variable whose value is the address of another object. The & operator asks for an object’s address. The * operator, when used with a pointer, follows that address to read or change the value there. Make sure a pointer refers to a valid object before you dereference it.',callout:'A pointer is a note with a location on it.',calloutBody:'The pointer does not hold the score itself. It holds where to find that score in memory.',syntax:'int score = 42;\nint *score_ptr = &score;\n\nprintf("%d\\n", *score_ptr);\n// &score means “address of score”\n// *score_ptr means “value at that address”',syntaxCaption:'& takes an address; * follows a pointer to the value.',takeaway:'Pointers hold addresses; dereferencing a valid pointer accesses the value at that address.',tip:'Draw the variable box, write a pretend address on it, then draw the pointer pointing to that address.',visual:'ADDRESS → VALUE',visualType:'pointer',quiz:{q:'What does &score mean in C?',options:['The address of score','The value stored at score','A comparison with score','A new integer variable'],answer:0,why:'The address-of operator & produces the memory address where score is stored.'},demo:'pointer'},
    {id:'structs',group:'DATA & MEMORY',title:'Structures & enums',time:'9 min read',heading:'Describe a thing with named parts',intro:'Structures bundle related fields, and enumerations give names to a set of choices.',body:'A struct defines a record with fields that can have different types. A variable of that struct type holds all those fields together, and the dot operator selects one field. An enum defines readable names for a fixed set of choices, while typedef can give a type a shorter name. A union shares one storage area between its fields, so only the most recently stored member should be read. These tools help your data match the problem.',callout:'A struct is a labeled information card.',calloutBody:'Instead of keeping a person’s name and age in unrelated places, group them into one Student value.',syntax:'typedef enum { NEW, LEARNING, READY } Stage;\n\nstruct Student {\n    char name[32];\n    int age;\n};\n\nunion Number { int whole; float decimal; };\nstruct Student learner = {"Mina", 14};\nprintf("%s is %d\\n", learner.name, learner.age);',syntaxCaption:'Structures group fields; enums name choices; unions share storage.',takeaway:'Use a struct for related fields, an enum for named choices, and a union when fields share storage.',tip:'List the facts that describe one real-world thing, then turn each fact into a field.',visual:'STRUCT FIELDS',visualType:'struct',quiz:{q:'How do you select the age field from learner?',options:['learner->age','learner.age','age.learner','learner[age]'],answer:1,why:'For a structure value, the dot operator selects a named field: learner.age.'},demo:'struct'},
    {id:'memory',group:'DATA & MEMORY',title:'Dynamic memory',time:'10 min read',heading:'Request memory as you need it',intro:'Dynamic memory lets a program request space while it is running.',body:'The standard library provides malloc and calloc to request memory, and free to release it. Check whether an allocation succeeded before using it. Every successful allocation should have a clear owner and eventually be freed once. This lesson introduces the idea; later, practice it with small examples and careful ownership notes.',callout:'Borrow a workspace, then tidy it up.',calloutBody:'Ask for memory, check you received it, use it while you need it, and release it when finished.',syntax:'#include <stdlib.h>\n\nint *values = malloc(3 * sizeof *values);\nif (values != NULL) {\n    values[0] = 10;\n    free(values);\n}',syntaxCaption:'Check for allocation failure and release memory when done.',takeaway:'Dynamic memory must be checked and released exactly once when it is no longer needed.',tip:'Draw an “allocated” and “released” state for each block of dynamic memory.',visual:'MEMORY LIFECYCLE',visualType:'pointer',quiz:{q:'Which function releases memory requested with malloc?',options:['delete','close','free','remove'],answer:2,why:'free releases a memory block that was returned by malloc, calloc, or realloc.'},demo:'pointer'},
    {id:'files',group:'BEYOND THE BASICS',title:'File handling',time:'10 min read',heading:'Keep information after a program ends',intro:'Files let your program read and write information that lasts beyond one run.',body:'Use fopen to open a file and check that it did not return NULL. Choose a mode such as "r" for reading, "w" for writing, or "a" for appending. Read or write using appropriate functions, and always close an open file with fclose. In this browser demo, file contents are represented visually instead of written to your device.',callout:'A file is a notebook your program can reopen.',calloutBody:'Open it carefully, read or write the information you need, and close it when your work is done.',syntax:'#include <stdio.h>\n\nFILE *file = fopen("notes.txt", "w");\nif (file != NULL) {\n    fprintf(file, "Keep practicing!\\n");\n    fclose(file);\n}',syntaxCaption:'The simulator uses a virtual file so nothing is saved to your device.',takeaway:'Check fopen, choose the correct mode, and close each successfully opened file.',tip:'The mode matters: “w” replaces a file, while “a” adds content at its end.',visual:'WRITE → FILE → READ',visualType:'file',quiz:{q:'What should you do after successfully opening and using a file?',options:['Call fclose','Call free','Call return twice','Delete the FILE variable'],answer:0,why:'fclose finishes file work and releases the resources associated with the open file.'},demo:'file'},
    {id:'preprocessor',group:'BEYOND THE BASICS',title:'Preprocessor & headers',time:'7 min read',heading:'Prepare useful pieces before compiling',intro:'Preprocessor directives make library declarations and reusable definitions available.',body:'A line beginning with # is handled before ordinary compilation. #include brings declarations from a header into your source file. #define can create a named constant-like macro, though typed const variables are often easier to reason about. Header guards prevent the same header from being included repeatedly.',callout:'Headers are a program’s toolbox index.',calloutBody:'Including a header tells the compiler which library tools and declarations your source intends to use.',syntax:'#include <stdio.h>\n#define MAX_TRIES 3\n\nint main(void) {\n    printf("Attempts: %d\\n", MAX_TRIES);\n    return 0;\n}',syntaxCaption:'The preprocessor handles directives before regular C compilation.',takeaway:'#include makes declarations available; preprocessor lines begin with #.',tip:'If a compiler says a function is undeclared, check whether its header is included.',visual:'PREPARE → COMPILE',visualType:'flow',quiz:{q:'What does #include <stdio.h> provide?',options:['Declarations for standard input/output tools','A new main function','A loop that runs before main','A memory address'],answer:0,why:'stdio.h declares standard input and output functions such as printf and fopen.'},demo:'hello'},
    {id:'errors',group:'BEYOND THE BASICS',title:'Errors & debugging',time:'8 min read',heading:'Use errors as clues',intro:'Programming gets easier when you know how to read a problem and narrow it down.',body:'Syntax errors mean the compiler could not understand your code. Runtime errors happen while the program runs. Logic errors mean it runs but gives an unintended result. Read the first compiler message carefully, check the nearby line, and change one thing at a time. A debugger lets you pause and inspect values as execution moves.',callout:'Debugging is asking a smaller question.',calloutBody:'Find the first moment the program differs from what you expected. Inspect the values at that point.',syntax:'int total = 0;\nfor (int i = 1; i <= 3; i++) {\n    total += i;\n    printf("i=%d total=%d\\n", i, total);\n}\n// small traces make state visible',syntaxCaption:'Print temporary state to learn how a program changes.',takeaway:'Identify whether an error is syntax, runtime, or logic, then inspect the first failing step.',tip:'Write down the expected value and actual value; the difference often points to the cause.',visual:'TRACE A VALUE',visualType:'loop',quiz:{q:'The program runs but calculates the wrong total. What kind of error is this?',options:['A logic error','A syntax error','A header file','A compiler warning only'],answer:0,why:'The code runs, but its behavior is wrong, so this is a logic error.'},demo:'loop'},
    {id:'practice',group:'BEYOND THE BASICS',title:'Putting it together',time:'12 min read',heading:'Think like a C programmer',intro:'Connect the ideas: break a task down, represent its data, then trace the steps.',body:'A useful problem-solving routine is to describe the goal, list the data, choose a small set of steps, and test those steps with a tiny example. Functions can name each part, arrays can hold repeated values, and conditions or loops can control what happens. Keep a trace of important values until the result makes sense.',callout:'Small, clear steps scale up.',calloutBody:'Plan the pieces first, then connect them. A working small example is a strong foundation for the next one.',syntax:'// 1. Name the information you need\nint scores[3] = {7, 9, 8};\nint total = 0;\n\n// 2. Repeat a clear action\nfor (int i = 0; i < 3; i++) {\n    total += scores[i];\n}',syntaxCaption:'This tiny example combines an array, a variable, and a loop.',takeaway:'Break a problem into data, steps, and checks; test with a small example first.',tip:'Explain each line to an imaginary classmate. If a line is hard to explain, simplify it.',visual:'PUT THE PIECES TOGETHER',visualType:'array',quiz:{q:'What is a helpful first step when solving a programming problem?',options:['Describe the goal and the information you need','Write every line at once','Ignore the sample input','Add pointers immediately'],answer:0,why:'A clear goal and a list of needed information give you a manageable starting point.'},demo:'array'}
  ];

  const demos = {
    hello:{label:'Hello, C',kind:'hello',code:'#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C learner!\\n");\n    return 0;\n}'},
    condition:{label:'Choose a path',kind:'condition',code:'#include <stdio.h>\n\nint main(void) {\n    int score = 72;\n\n    if (score >= 50) {\n        puts("Pass!");\n    } else {\n        puts("Keep practicing");\n    }\n    return 0;\n}'},
    loop:{label:'Count with a loop',kind:'loop',code:'#include <stdio.h>\n\nint main(void) {\n    for (int lap = 1; lap <= 5; lap++) {\n        printf("%d ", lap);\n    }\n    return 0;\n}'},
    array:{label:'Walk an array',kind:'array',code:'#include <stdio.h>\n\nint main(void) {\n    int scores[4] = {3, 5, 8, 2};\n    for (int i = 0; i < 4; i++) {\n        printf("%d ", scores[i]);\n    }\n    return 0;\n}'},
    function:{label:'Call a function',kind:'function',code:'#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main(void) {\n    int answer = add(4, 3);\n    printf("%d\\n", answer);\n    return 0;\n}'},
    recursion:{label:'Recursive countdown',kind:'recursion',code:'#include <stdio.h>\n\nvoid countdown(int n) {\n    if (n == 0) {\n        puts("Go!");\n        return;\n    }\n    printf("%d ", n);\n    countdown(n - 1);\n}\n\nint main(void) {\n    countdown(3);\n    return 0;\n}'},
    pointer:{label:'Follow a pointer',kind:'pointer',code:'#include <stdio.h>\n\nint main(void) {\n    int score = 42;\n    int *score_ptr = &score;\n    printf("%d\\n", *score_ptr);\n    return 0;\n}'},
    struct:{label:'Read a structure',kind:'struct',code:'#include <stdio.h>\n\nstruct Student {\n    int age;\n    int level;\n};\n\nint main(void) {\n    struct Student learner = {14, 2};\n    printf("%d\\n", learner.age);\n    return 0;\n}'},
    file:{label:'Virtual file',kind:'file',code:'#include <stdio.h>\n\nint main(void) {\n    FILE *file = fopen("notes.txt", "w");\n    if (file != NULL) {\n        fprintf(file, "Keep practicing!\\n");\n        fclose(file);\n    }\n    puts("File saved and closed.");\n    return 0;\n}'}
  };

  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const storage = {read(key, fallback){try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}},write(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}}};
  let completed = new Set(storage.read('clab-completed', []));
  let activeIndex = Math.max(0, units.findIndex(u => u.id === storage.read('clab-last-unit','overview')));
  let activeDemo = 'hello';
  let simSteps = [];
  let stepIndex = 0;
  let autoTimer = null;
  let toastTimer = null;
  let visualFrame = 0;
  const navGroups = ['FOUNDATIONS','MAKE DECISIONS','DATA & MEMORY','BEYOND THE BASICS'];

  function renderNav(filter='') {
    const nav = $('#unit-nav');
    const query = filter.trim().toLowerCase();
    nav.innerHTML = navGroups.map(group => {
      const groupUnits = units.map((unit,index)=>({unit,index})).filter(x=>x.unit.group===group && (!query || `${x.unit.title} ${x.unit.group}`.toLowerCase().includes(query)));
      if (!groupUnits.length) return '';
      return `<div class="nav-group-label">${group}</div>${groupUnits.map(({unit,index})=>`<button class="unit-link ${index===activeIndex?'active ':''}${completed.has(unit.id)?'done':''}" data-unit="${index}" aria-current="${index===activeIndex?'page':'false'}"><span class="unit-number">${completed.has(unit.id)?'✓':String(index+1).padStart(2,'0')}</span><span>${unit.title}</span>${completed.has(unit.id)?'<span class="nav-check">✓</span>':''}</button>`).join('')}`;
    }).join('') || '<div class="nav-group-label">No topics found</div>';
    $$('.unit-link',nav).forEach(button=>button.addEventListener('click',()=>selectUnit(Number(button.dataset.unit))));
  }

  function renderProgress() {
    const percent = Math.round(completed.size / units.length * 100);
    $('#progress-label').textContent = `${percent}%`;
    $('#progress-fill').style.width = `${percent}%`;
    $('#completed-count').innerHTML = `${completed.size} <small>/ ${units.length}</small>`;
    $('#next-step').textContent = completed.size === units.length ? 'You completed the learning path!' : `Continue with ${units[activeIndex].title}`;
  }

  function renderUnit(index, shouldScroll=false) {
    activeIndex = Math.max(0,Math.min(units.length-1,index));
    const unit = units[activeIndex];
    storage.write('clab-last-unit',unit.id);
    $('#crumb-unit').textContent = unit.title;
    $('#unit-title').textContent = unit.title;
    $('#unit-intro').textContent = unit.intro;
    $('#lesson-heading').textContent = unit.heading;
    $('#lesson-body').textContent = unit.body;
    $('#unit-tag').textContent = `UNIT ${String(activeIndex+1).padStart(2,'0')} · ${unit.group}`;
    $('#read-time').textContent = `◷ ${unit.time}`;
    $('#callout-title').textContent = unit.callout;
    $('#callout-body').textContent = unit.calloutBody;
    $('#syntax-code').textContent = unit.syntax;
    $('#syntax-caption').textContent = unit.syntaxCaption;
    $('#takeaway-text').textContent = unit.takeaway;
    $('#aside-tip').textContent = unit.tip;
    $('#visual-label').textContent = unit.visual;
    $('#quiz-prompt').textContent = unit.quiz.q;
    $('#quiz-feedback').textContent = '';
    $('#quiz-feedback').className = 'quiz-feedback';
    $('#complete-unit').classList.toggle('completed',completed.has(unit.id));
    $('#complete-unit').innerHTML = completed.has(unit.id)?'Unit completed <span>✓</span>':'Mark unit complete <span>✓</span>';
    $('#quiz-options').innerHTML = unit.quiz.options.map((option,i)=>`<button class="quiz-option" data-answer="${i}"><span>${String.fromCharCode(65+i)}.</span> &nbsp;${option}</button>`).join('');
    $$('.quiz-option').forEach(button=>button.addEventListener('click',()=>answerQuiz(Number(button.dataset.answer))));
    $('#prev-unit').disabled = activeIndex===0;
    $('#next-unit').disabled = activeIndex===units.length-1;
    renderNav($('#unit-search').value);
    renderProgress();
    renderVisual(unit);
    renderNextUnits();
    if (shouldScroll) $('#lesson').scrollIntoView({behavior:'smooth',block:'start'});
  }

  function answerQuiz(answer) {
    const unit=units[activeIndex], feedback=$('#quiz-feedback');
    $$('.quiz-option').forEach((button,i)=>{button.disabled=true;if(i===unit.quiz.answer)button.classList.add('selected');else if(i===answer)button.classList.add('wrong')});
    if(answer===unit.quiz.answer){feedback.textContent=`✓ ${unit.quiz.why}`;feedback.className='quiz-feedback';if(!completed.has(unit.id))setCompleted(unit.id,true,false)}
    else{feedback.textContent=`Not quite. ${unit.quiz.why}`;feedback.className='quiz-feedback incorrect'}
  }

  function setCompleted(id,value=true,showToast=true) {
    if(value)completed.add(id);else completed.delete(id);
    storage.write('clab-completed',[...completed]);renderNav($('#unit-search').value);renderProgress();
    $('#complete-unit').classList.toggle('completed',completed.has(units[activeIndex].id));
    $('#complete-unit').innerHTML=completed.has(units[activeIndex].id)?'Unit completed <span>✓</span>':'Mark unit complete <span>✓</span>';
    if(showToast&&value)showToastMessage('Nice work. Your progress is saved on this device.');
  }

  function renderNextUnits() {
    const start=Math.min(activeIndex+1,units.length-1);
    const upcoming=[units[start],units[Math.min(start+1,units.length-1)],units[Math.min(start+2,units.length-1)]];
    const unique=[...new Map(upcoming.map(u=>[u.id,u])).values()];
    $('#next-grid').innerHTML=unique.map(unit=>{const ix=units.indexOf(unit);return `<button class="next-card" data-unit="${ix}"><span class="next-number">UNIT ${String(ix+1).padStart(2,'0')} ${completed.has(unit.id)?'· DONE':''}</span><span class="next-arrow">↗</span><strong>${unit.title}</strong><p>${unit.intro}</p></button>`}).join('');
    $$('.next-card').forEach(button=>button.addEventListener('click',()=>selectUnit(Number(button.dataset.unit),true)));
  }

  function selectUnit(index,scroll=false) {
    renderUnit(index,scroll);
    if(window.innerWidth<=820)$('#sidebar').classList.remove('open');
  }

  function renderVisual(unit) {
    const stage=$('#visual-stage');stage.className='visual-stage';visualFrame=0;
    const first={flow:`<div class="flow-node">source code</div><span class="flow-arrow">→</span><div class="flow-node highlight">compiler</div><span class="flow-arrow">→</span><div class="flow-node">program</div>`,branch:`<div class="flow-node highlight">score ≥ 50?</div><span class="flow-arrow">↙ &nbsp; ↘</span><div class="flow-node">Pass</div><div class="flow-node">Practice</div>`,loop:`<div class="flow-node">start</div><span class="flow-arrow">→</span><div class="flow-node highlight">check rule</div><span class="flow-arrow">→</span><div class="flow-node">do work ↺</div>`,variable:`<div class="memory-stack"><div class="memory-cell">lives = 3<small>int · named box</small></div><span class="flow-arrow">→</span><div class="memory-cell">lives = 4<small>after update</small></div></div>`,array:`<div class="array-cell">3<small>index 0</small></div><div class="array-cell">5<small>index 1</small></div><div class="array-cell">8<small>index 2</small></div><div class="array-cell">2<small>index 3</small></div>`,function:`<div class="flow-node">main()</div><span class="flow-arrow">→</span><div class="flow-node highlight">add(4, 3)</div><span class="flow-arrow">↩</span><div class="flow-node">answer = 7</div>`,recursion:`<div class="call-stack"><span>f(3)</span><span>f(2)</span><span>f(1)</span><span class="returning">base</span></div>`,pointer:`<div class="memory-stack"><div class="memory-cell">score<small>address 0x100</small></div><span class="memory-pointer">← *ptr</span><div class="memory-cell">ptr = 0x100<small>holds address</small></div></div>`,struct:`<div class="struct-fields"><span>name</span><span>"Mina"</span><span>age</span><span>14</span><span>level</span><span>2</span></div>`,file:`<div class="file-demo"><div class="flow-node">program</div><span class="flow-arrow">→</span><div class="file-icon">▤</div><div class="file-lines"><small>notes.txt</small><i></i><i></i><i></i></div></div>`};
    stage.innerHTML=first[unit.visualType]||first.flow;
    stage.classList.toggle('array-stage',unit.visualType==='array');
    $('#visual-hint').textContent=unit.visualType==='pointer'?'Follow the address to the value.':unit.visualType==='loop'?'The rule sends execution around again.':'See it happen, one step at a time.';
  }

  function playVisual() {
    const stage=$('#visual-stage');stage.classList.remove('is-playing');void stage.offsetWidth;stage.classList.add('is-playing');
    const button=$('#visual-play');button.innerHTML='<span>✓</span> Played';
    setTimeout(()=>{stage.classList.remove('is-playing');button.innerHTML='<span>▶</span> Play the visual'},1500);
  }

  function showToastMessage(message) {
    const toast=$('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2400);
  }

  function loadDemo(id) {
    activeDemo=id in demos?id:'hello';
    $('#demo-select').value=activeDemo;$('#code-editor').value=demos[activeDemo].code;updateLineNumbers();clearSimulation();
  }

  function updateLineNumbers() {
    const count=Math.max(1,$('#code-editor').value.split('\n').length);
    $('#line-numbers').textContent=Array.from({length:count},(_,i)=>i+1).join('\n');
  }

  function clearSimulation() {
    stopAuto();simSteps=[];stepIndex=0;$('#program-output').textContent="Your program's output will appear here.";$('#output-status').textContent='WAITING';$('#output-status').className='output-status';$('#step-counter').textContent='0 / 0';$('#execution-stage').innerHTML='<div class="empty-state"><span>◇</span><strong>Ready when you are</strong><small>Run a program to watch it work.</small></div>';$('#step-back').disabled=true;$('#step-next').disabled=true;$('#auto-play').disabled=true;
  }

  function makeStep(description,variables={},kind='variables',extra={}) {return {description,variables:{...variables},kind,...extra}}

  function parseNumberExpression(expr,vars) {
    const tokens=(expr.match(/\d+(?:\.\d+)?|[A-Za-z_]\w*|[()+*/%\-]/g)||[]).filter(Boolean);
    if(tokens.join('')!==expr.replace(/\s+/g,''))return 0;
    let pos=0;
    function atom(){const t=tokens[pos++];if(t==='('){const v=addSub();if(tokens[pos]===')')pos++;return v}if(t==='-')return -atom();if(/^\d/.test(t||''))return Number(t);return Number(vars[t]||0)}
    function mul(){let v=atom();while(['*','/','%'].includes(tokens[pos])){const op=tokens[pos++],r=atom();v=op==='*'?v*r:op==='/'?v/r:v%r}return v}
    function addSub(){let v=mul();while(tokens[pos]==='+'||tokens[pos]==='-'){const op=tokens[pos++],r=mul();v=op==='+'?v+r:v-r}return v}
    try{return addSub()}catch{return 0}
  }

  function formatC(format,args,vars) {
    let ai=0;
    const decoded=format.replace(/\\n/g,'\n').replace(/\\t/g,'\t').replace(/\\"/g,'"').replace(/\\\\/g,'\\');
    return decoded.replace(/%[-+0-9.]*[diufcs]/g,token=>{const exp=(args[ai++]||'').trim();const value=exp?parseNumberExpression(exp,vars):0;if(token.endsWith('s'))return exp.replace(/^"|"$/g,'');if(token.endsWith('c'))return String.fromCharCode(value);if(token.endsWith('f'))return Number(value).toFixed((token.match(/\.(\d+)/)||[])[1]?Number(RegExp.$1):6);return String(Math.trunc(value))});
  }

  function sourceOutput(source,vars) {
    const chunks=[];
    const re=/(printf|puts)\s*\(\s*("(?:\\.|[^"\\])*"|[^,)]*)(?:,([^)]*))?\)/gs;let match;
    while((match=re.exec(source))){const fn=match[1],raw=match[2].trim();if(fn==='puts'){chunks.push(raw.startsWith('"')?raw.slice(1,-1).replace(/\\n/g,'\n')+'\n':raw+'\n');continue}if(!raw.startsWith('"'))continue;const args=match[3]?match[3].split(',').map(x=>x.trim()):[];chunks.push(formatC(raw.slice(1,-1),args,vars))}
    return chunks.join('');
  }

  function inferSimulation(source,kind) {
    const lines=source.split('\n'),steps=[];let output='';
    const pushLine=(line,description,vars={},type='variables',extra={})=>steps.push(makeStep(description,{line,...vars},type,extra));
    if(kind==='hello'||(!/\b(for|while|if|struct|fopen|\*\s*\w+\s*=\s*&|factorial|countdown|\w+\s*\([^;]*\)\s*;)/.test(source)&&/printf|puts/.test(source))){
      const vars={};for(let i=0;i<lines.length;i++){if(/printf|puts/.test(lines[i])){output+=sourceOutput(lines[i],vars);pushLine(i+1,'Print a message to the screen.',vars,'variables')}else if(/\breturn\b/.test(lines[i]))pushLine(i+1,'Return from main. The program is finished.',vars,'variables')}
      if(!steps.length)pushLine(1,'The program is ready. Add a printf or puts statement to see output.');return {steps,output};
    }
    if(kind==='file'||/\bfopen\s*\(/.test(source)){
      const text=(source.match(/fprintf\s*\([^,]+,\s*"((?:\\.|[^"\\])*)"/)||[])[1]||'Keep practicing!\\n';
      steps.push(makeStep('Open notes.txt in write mode. The simulator uses a virtual file.',{file:'notes.txt',mode:'w'},'file',{contents:''}));
      steps.push(makeStep('Write text into the virtual file.',{file:'notes.txt',mode:'w'},'file',{contents:text.replace(/\\n/g,'')}));
      steps.push(makeStep('Close the file so the operation is complete.',{file:'notes.txt',mode:'closed'},'file',{contents:text.replace(/\\n/g,'')}));
      output=`File saved and closed.\n[virtual notes.txt] ${text.replace(/\\n/g,'')}`;return {steps,output};
    }
    if(kind==='recursion'||/\b(countdown|factorial)\s*\(/.test(source)){
      const n=Number((source.match(/(?:countdown|factorial)\s*\(\s*(\d+)\s*\)\s*;/)||source.match(/printf[^;]*,\s*(?:countdown|factorial)\s*\(\s*(\d+)\s*\)/)||[])[1]||3);
      const isFactorial=/factorial/.test(source);const limit=Math.min(n,8);const stack=Array.from({length:limit+1},(_,i)=>isFactorial?`fact(${limit-i})`:`count(${limit-i})`);
      for(let i=0;i<=limit;i++)steps.push(makeStep(i===limit?'Base case: stop making new calls.':`Call the function with ${limit-i}; it asks for a smaller problem.`,{},'recursion',{stack:stack.slice(0,i+1)}));
      for(let i=limit-1;i>=0;i--)steps.push(makeStep(`Return from ${isFactorial?'factorial':'countdown'}(${limit-i-1}) to its caller.`,{},'recursion',{stack:stack.slice(0,i+1),returning:true}));
      output=isFactorial?`${Array.from({length:limit},(_,i)=>i+1).reduce((a,b)=>a*b,1)}\n`:`${Array.from({length:limit},(_,i)=>limit-i).join(' ')} Go!\n`;
      if(!/factorial|countdown/.test(source)){steps.push(makeStep('Run the statements in main.',{},'variables'));output=sourceOutput(source,{})||'Program finished.\n'}return {steps,output};
    }
    if(kind==='pointer'||/\*\s*\w+\s*=\s*&/.test(source)){
      const varMatch=source.match(/int\s+(\w+)\s*=\s*(-?\d+)/);const name=varMatch?.[1]||'score',value=Number(varMatch?.[2]||42);const ptr=(source.match(/int\s*\*\s*(\w+)\s*=\s*&\s*\w+/)||[])[1]||'score_ptr';
      pushLine(Math.max(1,lines.findIndex(l=>/int\s+\w+\s*=/.test(l))+1),`Create ${name} with value ${value}.`,{[name]:value},'pointer',{name,value,pointer:ptr});
      pushLine(Math.max(1,lines.findIndex(l=>/\*\s*\w+\s*=\s*&/.test(l))+1),`${ptr} stores the address of ${name}.`,{[name]:value,[ptr]:'0x100'},'pointer',{name,value,pointer:ptr});
      output=`${value}\n`;steps.push(makeStep(`Dereference ${ptr} to read ${value}.`,{[name]:value,[ptr]:'0x100'},'pointer',{name,value,pointer:ptr}));return {steps,output};
    }
    if(kind==='struct'||/\bstruct\s+\w+/.test(source)){
      const age=Number((source.match(/\{\s*(\d+)\s*,\s*(\d+)\s*\}/)||[])[1]||14),level=Number((source.match(/\{\s*(\d+)\s*,\s*(\d+)\s*\}/)||[])[2]||2);
      steps.push(makeStep('Create one Student value with its named fields.',{age,level},'struct',{fields:{age,level}}));steps.push(makeStep('Use the dot operator to read learner.age.',{age,level},'struct',{fields:{age,level},active:'age'}));
      output=`${age}\n`;return {steps,output};
    }
    if(kind==='function'||/\badd\s*\(/.test(source)){
      const call=(source.match(/add\s*\(\s*(-?\d+)\s*,\s*(-?\d+)\s*\)/)||[]);const a=Number(call[1]||4),b=Number(call[2]||3),answer=a+b;
      steps.push(makeStep(`Call add(${a}, ${b}) from main.`,{a,b},'function',{a,b,answer,phase:'call'}));steps.push(makeStep(`Inside add, calculate ${a} + ${b} and return ${answer}.`,{a,b,answer},'function',{a,b,answer,phase:'work'}));steps.push(makeStep(`Back in main, store the returned value in answer.`,{answer},'variables'));
      output=sourceOutput(source,{answer})||`${answer}\n`;return {steps,output};
    }
    if(kind==='array'||/\w+\s*\[\s*\d+\s*\]\s*=\s*\{/.test(source)){
      const arrayMatch=source.match(/(?:int|char)\s+(\w+)\s*\[\s*\d*\s*\]\s*=\s*\{([^}]+)\}/);const name=arrayMatch?.[1]||'scores';const values=(arrayMatch?.[2]||'3, 5, 8, 2').split(',').map(x=>Number(x.trim())||0);
      const loop=source.match(/for\s*\(\s*(?:int\s+)?(\w+)\s*=\s*(\d+)\s*;\s*\w+\s*<\s*(\d+)/);const limit=Math.min(Number(loop?.[3]||values.length),values.length);
      for(let i=0;i<limit;i++)steps.push(makeStep(`Read ${name}[${i}] — the value at index ${i}.`,{i,value:values[i]},'array',{values,index:i,name}));
      output=values.slice(0,limit).join(' ')+'\n';return {steps,output};
    }
    const declaration=/\b(?:int|double|float|char)\s+(\w+)\s*=\s*(-?\d+(?:\.\d+)?)\s*;/g;let decl;const vars={};while((decl=declaration.exec(source)))vars[decl[1]]=Number(decl[2]);
    const loop=source.match(/for\s*\(\s*(?:int\s+)?(\w+)\s*=\s*(-?\d+)\s*;\s*\1\s*(<|<=|>|>=)\s*(-?\d+)\s*;\s*(?:\1\+\+|\+\+\1|\1\s*=\s*\1\s*\+\s*(\d+))\s*\)/);
    if(loop){const variable=loop[1],start=Number(loop[2]),op=loop[3],end=Number(loop[4]),increment=Number(loop[5]||1);let v=start,round=0;while(round<12&&((op==='<'&&v<end)||(op==='<='&&v<=end)||(op==='>'&&v>end)||(op==='>='&&v>=end))){vars[variable]=v;const body=source.slice(source.indexOf('{',source.indexOf(loop[0]))+1,source.indexOf('}',source.indexOf(loop[0])));output+=sourceOutput(body,vars);pushLine(lines.findIndex(l=>l.includes(loop[0]))+1,`Loop round ${round+1}: ${variable} is ${v}.`,vars,'variables');v+=increment;round++}pushLine(lines.findIndex(l=>l.includes(loop[0]))+1,`The loop condition is false at ${variable} = ${v}; continue after the loop.`,{...vars,[variable]:v});return {steps,output};}
    if(/\bif\s*\(/.test(source)){const condition=source.match(/if\s*\(\s*(\w+)\s*(>=|<=|==|!=|>|<)\s*(-?\d+)\s*\)/);if(condition){const [,name,op,rhs]=condition,lhs=Number(vars[name]||0),right=Number(rhs);const truth=op==='>='?lhs>=right:op==='<='?lhs<=right:op==='=='?lhs===right:op==='!='?lhs!==right:op==='>'?lhs>right:lhs<right;const open=source.indexOf('{',source.indexOf(condition[0])),close=source.indexOf('}',open);const elseAt=source.indexOf('else',close);const elseOpen=elseAt>=0?source.indexOf('{',elseAt):-1,elseClose=elseOpen>=0?source.indexOf('}',elseOpen):-1;const chosen=truth?source.slice(open+1,close):elseOpen>=0?source.slice(elseOpen+1,elseClose):'';output=sourceOutput(chosen,vars);steps.push(makeStep(`Check ${name} ${op} ${right}: ${truth?'true':'false'}.`,vars,'variables'));steps.push(makeStep(`Follow the ${truth?'if':'else'} path and run its statement.`,vars,'variables'));return {steps,output};}}
    for(let i=0;i<lines.length;i++){const line=lines[i];const assignment=line.match(/\b(\w+)\s*=\s*([^;]+);/);if(assignment&&!/==|>=|<=/.test(assignment[0]))vars[assignment[1]]=parseNumberExpression(assignment[2],vars);if(/printf|puts/.test(line))output+=sourceOutput(line,vars);if(line.trim()&&!line.trim().startsWith('#')&&!line.trim().startsWith('//')&&!/[{}]/.test(line.trim()))pushLine(i+1,'Step through this statement.',vars,'variables');}
    if(!steps.length)pushLine(1,'Edit the example or choose a demo, then run again.');return {steps,output:output||'Program finished. No printable output.\n'};
  }

  function renderStep() {
    const total=simSteps.length;$('#step-counter').textContent=total?`${stepIndex+1} / ${total}`:'0 / 0';$('#step-back').disabled=stepIndex<=0;$('#step-next').disabled=stepIndex>=total-1;$('#auto-play').disabled=total<2;$('#auto-play').innerHTML=autoTimer?'Ⅱ &nbsp; Pause steps':'▷ &nbsp; Play steps';
    if(!total)return;
    const step=simSteps[stepIndex],stage=$('#execution-stage');let scene='';
    if(step.kind==='array')scene=`<div class="step-scene"><p class="step-description">${step.description}</p><div class="array-track">${step.values.map((v,i)=>`<div class="${i===step.index?'active-cell':''}">${v}<small>${i}</small></div>`).join('')}</div></div>`;
    else if(step.kind==='pointer')scene=`<div class="step-scene"><p class="step-description">${step.description}</p><div class="pointer-scene"><div class="pointer-box">${step.name}<small>${step.value} · 0x100</small></div><span class="pointer-arrow">←</span><div class="pointer-box">${step.pointer}<small>holds 0x100</small></div></div></div>`;
    else if(step.kind==='recursion')scene=`<div class="step-scene"><p class="step-description">${step.description}</p><div class="call-stack">${step.stack.map((x,i)=>`<span class="${step.returning&&i===step.stack.length-1?'returning':''}">${x}</span>`).join('')}</div></div>`;
    else if(step.kind==='struct')scene=`<div class="step-scene"><p class="step-description">${step.description}</p><div class="struct-fields"><span>learner.age</span><span>${step.fields.age}</span><span>learner.level</span><span>${step.fields.level}</span></div></div>`;
    else if(step.kind==='file')scene=`<div class="step-scene"><p class="step-description">${step.description}</p><div class="file-demo"><div class="file-icon">▤</div><div class="file-lines"><small>${step.variables.file} · ${step.variables.mode}</small><i></i><i></i><i style="width:${step.contents?52:20}px"></i></div></div></div>`;
    else if(step.kind==='function')scene=`<div class="step-scene"><p class="step-description">${step.description}</p><div class="call-stack"><span>main()</span><span>add(${step.a}, ${step.b})</span><span class="returning">${step.answer}</span></div></div>`;
    else {const entries=Object.entries(step.variables).filter(([key])=>key!=='line');scene=`<div class="step-scene"><p class="step-description">${step.description}</p><div class="variable-row">${entries.length?entries.map(([key,value])=>`<div class="variable-card"><small>${key}</small><strong>${value}</strong></div>`).join(''):'<div class="flow-node highlight">statement</div>'}</div></div>`}
    stage.innerHTML=scene;
  }

  function runSimulation() {
    stopAuto();const source=$('#code-editor').value;const result=inferSimulation(source,demos[activeDemo].kind);simSteps=result.steps;stepIndex=0;$('#program-output').textContent=result.output||'(no output)';$('#output-status').textContent='SIMULATED';$('#output-status').className='output-status success';if(!simSteps.length)simSteps=[makeStep('No beginner pattern was recognized. Try one of the sample programs or a simple printf.',{},'variables')];renderStep();
  }

  function stopAuto() {if(autoTimer){clearInterval(autoTimer);autoTimer=null}}
  function toggleAuto() {if(autoTimer){stopAuto();renderStep();return}if(!simSteps.length)return;autoTimer=setInterval(()=>{if(stepIndex>=simSteps.length-1){stopAuto();renderStep();return}stepIndex++;renderStep()},850);renderStep()}

  function initialize() {
    renderNav();renderUnit(activeIndex);for(const [id,demo] of Object.entries(demos))$('#demo-select').insertAdjacentHTML('beforeend',`<option value="${id}">${demo.label}</option>`);loadDemo(units[activeIndex].demo);
    $('#unit-search').addEventListener('input',event=>renderNav(event.target.value));$('#prev-unit').addEventListener('click',()=>selectUnit(activeIndex-1,true));$('#next-unit').addEventListener('click',()=>selectUnit(activeIndex+1,true));$('#continue-learning').addEventListener('click',()=>selectUnit(activeIndex,true));$('#review-lesson').addEventListener('click',()=>$('#lesson').scrollIntoView({behavior:'smooth'}));$('#visual-play').addEventListener('click',playVisual);$('#complete-unit').addEventListener('click',()=>setCompleted(units[activeIndex].id,!completed.has(units[activeIndex].id)));
    $('#copy-code').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(units[activeIndex].syntax);showToastMessage('Example copied.')}catch{showToastMessage('Clipboard access is unavailable in this browser.')}});
    $('#demo-select').addEventListener('change',event=>loadDemo(event.target.value));$('#reset-code').addEventListener('click',()=>loadDemo(activeDemo));$('#load-current-example').addEventListener('click',()=>{loadDemo(units[activeIndex].demo);$('#simulator').scrollIntoView({behavior:'smooth'});showToastMessage('Loaded this unit’s example.')});$('#code-editor').addEventListener('input',updateLineNumbers);$('#code-editor').addEventListener('scroll',()=>{$('#line-numbers').scrollTop=$('#code-editor').scrollTop});$('#code-editor').addEventListener('keydown',event=>{if(event.key==='Tab'){event.preventDefault();const start=event.target.selectionStart,end=event.target.selectionEnd;event.target.setRangeText('    ',start,end,'end');updateLineNumbers()}if((event.ctrlKey||event.metaKey)&&event.key==='Enter'){event.preventDefault();runSimulation()}});$('#run-sim').addEventListener('click',runSimulation);$('#step-back').addEventListener('click',()=>{if(stepIndex>0){stepIndex--;renderStep()}});$('#step-next').addEventListener('click',()=>{if(stepIndex<simSteps.length-1){stepIndex++;renderStep()}});$('#auto-play').addEventListener('click',toggleAuto);
    $('#reset-progress').addEventListener('click',()=>{completed.clear();storage.write('clab-completed',[]);renderUnit(activeIndex);showToastMessage('Learning progress reset.')});$('#font-toggle').addEventListener('click',()=>{document.body.classList.toggle('large-text');storage.write('clab-large-text',document.body.classList.contains('large-text'))});if(storage.read('clab-large-text',false))document.body.classList.add('large-text');$('#menu-toggle').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
    document.addEventListener('keydown',event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();$('#unit-search').focus()}if(event.key==='Escape')$('#sidebar').classList.remove('open')});
  }

  initialize();
})();
