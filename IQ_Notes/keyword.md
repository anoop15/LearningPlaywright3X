# JavaScript Keywords & Reserved Words

## 1. Reserved Keywords (Cannot use as identifiers)

| Keyword | Description | Category |
|---------|-------------|----------|
| `break` | Terminates the current loop/switch | Control Flow |
| `case` | Marks a branch in a switch statement | Control Flow |
| `catch` | Handles exceptions from try block | Error Handling |
| `class` | Declares a class | OOP |
| `const` | Declares a block-scoped constant | Variable Declaration |
| `continue` | Skips to next iteration of a loop | Control Flow |
| `debugger` | Invokes debugger breakpoint | Debugging |
| `default` | Default case in switch / export default | Control Flow |
| `delete` | Deletes a property from an object | Operators |
| `do` | Creates a do-while loop | Control Flow |
| `else` | Alternative branch in if-else | Control Flow |
| `export` | Exports a module | Modules |
| `extends` | Creates a subclass | OOP |
| `finally` | Block that runs after try/catch | Error Handling |
| `for` | Creates a for loop | Control Flow |
| `function` | Declares a function | Functions |
| `if` | Conditional branching | Control Flow |
| `import` | Imports a module | Modules |
| `in` | Checks if property exists in object | Operators |
| `instanceof` | Checks object type | Operators |
| `new` | Creates an instance of a user-defined object | Operators |
| `return` | Returns a value from a function | Functions |
| `super` | References parent class | OOP |
| `switch` | Multi-way branching | Control Flow |
| `this` | References current execution context | Context |
| `throw` | Throws a user-defined exception | Error Handling |
| `try` | Wraps code that may throw an exception | Error Handling |
| `typeof` | Returns data type of operand | Operators |
| `var` | Declares a function-scoped variable | Variable Declaration |
| `void` | Evaluates expression and returns undefined | Operators |
| `while` | Creates a while loop | Control Flow |
| `with` | Extends scope chain (strict mode disallowed) | Scope |
| `yield` | Pauses/resumes a generator function | Generators |

## 2. Future Reserved Keywords (ES3/ES5+)

| Keyword | Notes |
|---------|-------|
| `boolean` | Reserved for future use |
| `byte` | Reserved for future use |
| `char` | Reserved for future use |
| `double` | Reserved for future use |
| `enum` | Reserved for future use |
| `final` | Reserved for future use |
| `float` | Reserved for future use |
| `goto` | Reserved for future use |
| `implements` | Reserved in strict mode |
| `int` | Reserved for future use |
| `interface` | Reserved in strict mode |
| `let` | Reserved in strict mode (now used for block-scoped vars) |
| `long` | Reserved for future use |
| `native` | Reserved for future use |
| `package` | Reserved in strict mode |
| `private` | Reserved in strict mode |
| `protected` | Reserved in strict mode |
| `public` | Reserved in strict mode |
| `short` | Reserved for future use |
| `static` | Reserved in strict mode |
| `synchronized` | Reserved for future use |
| `throws` | Reserved for future use |
| `transient` | Reserved for future use |
| `volatile` | Reserved for future use |

## 3. Special Identifiers (Predefined but overridable)

| Identifier | Purpose |
|------------|---------|
| `arguments` | Array-like object of function arguments |
| `Infinity` | Numeric infinity value |
| `NaN` | Not-a-Number value |
| `undefined` | Undefined primitive value |
| `null` | Null literal |

## 4. Literals (Reserved values)

| Literal | Description |
|---------|-------------|
| `true` | Boolean true |
| `false` | Boolean false |
| `null` | Null value |

## 5. Important Rules

| # | Rule |
|---|------|
| 1 | Keywords **cannot** be used as variable names, function names, or identifiers |
| 2 | Some keywords like `let`, `private`, `static` are only reserved in **strict mode** |
| 3 | JavaScript is **case-sensitive** — `null` is a keyword but `Null` or `NULL` is not |
| 4 | `NaN` and `Infinity` are properties of the global object, not keywords, but should be avoided as identifiers |
| 5 | `undefined` can technically be used as an identifier (not recommended and causes confusion) |
| 6 | In ES modules, `await` is also reserved at the top level |
