# Compilation

- tsc fileName.ts --watch / -w (don't quit it during dev phase.. Quit later with ctrl+c)

- To run multiple files : tsc --init (just once, tells TS that the total folder is a TS package)
- It creates a tsconfig.json file
- Now, just 'tsc'

# Including, excluding Files

- To exclude something, go to 'tsconfig.json' and.. do this:

```json
  "exclude": [
    "analytics.ts"
  ]
  //to exclude everything ending with .dev.ts - use wildCard(*)
  "exclude": [
    "*dev.ts"
  ]
  //Another pattern, for example:
   "exclude": [
    "**/*.ts"
  ]
  //Excluding node-modules, we don't wanna compile
   "exclude": [
    "node_modules" //tho automatically excluded by default
  ]
```

- Now, including, same way

```json
//nothing will combine, except these files:
 "include": [
    "app.ts"
  ]

// For smaller, projects, we can include just files, lke this:
"files":[
    "file1.ts",
    "file2.ts",
    //etc.
]

// FUNCTIONING - Always, exclude - include
```

# Setting a COMPILATION target

```json
//we can tweak, change according to our need(s)
{
	"compilerOptions": {
		"target": "es2016",
		"module": "commonjs"
	}
}
```

- 'lib []', if not set, some defaults are assumed.. Let's change it acc. to our needs

```json
/* Specify a set of bundled library declaration files that describe the target runtime environment. */
 "lib": [
      "DOM",
      "ES2015",
      "DOM.Iterable",
      "ScriptHost"
     ],
  //Same as: "target": "es2016",
```

# More configuration..

```json
 "allowJs": true,/* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
 "checkJs": true,/* Enable error reporting in type-checked JavaScript files. */
"sourceMap": true,/* Create source map files for emitted JavaScript files. */
 "outFile": "./",/* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
 "outDir": "./", /* Specify an output folder for all emitted files. (sometimes we need a 'dist' folder)*/
 "rootDir": "./",/* Specify the root folder within your source files. */
 "removeComments": true,/* Disable emitting comments. */
 "downlevelIteration": true,/* Emit more compliant, but verbose and less performant JavaScript for iteration.(MAINLY FOR LOOPs) */
 // Interesting.. let it be true:
 "noEmitOnError": true,/* Disable emitting files if any type checking errors are reported. */
```

# Strict Compilations

```json 
 /* Type Checking */
    "strict": true,     /* Enable all strict type-checking options. */
//Same as setting all the following options to true:

// "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

   And many more.. 
```
