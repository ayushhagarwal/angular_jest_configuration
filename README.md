# JestTestAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Migrating Our Existing Test Suite to Jest

Below are the steps to be followed to remove the Jasmine Configuration from an initial angular repo.

**Step 1: Install Jest (and dependencies)**

First, we need to install `jest` and `jest-environment-jsdom` to our Development Dependencies. This can be simply done via the terminal.

```plaintext
npm i -D jest jest-environment-jsdom
```

**Step 2: Angular configuration Update**

To configure Jest, we need to make a few amends to the `angular.json` of the project. Edit the existing `test` section in the JSON file.

```plaintext
{
  "projects": {
    "jest_test_angular": {
      // other configs...

      "architect": {
        "test": {
          "builder": "@angular-devkit/build-angular:jest",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json"
          }
        }
      }

      // other configs...
    }
  }
}
```

**Step 3: Update** `tsconfig.spec.json` **file**

Currently this file is configured to run Jasmine Tests, let us make a small change here. This is how it looks.

```plaintext
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```

Execute the Jest test suite using the following command:

```plaintext
npm test
```

Now, your tests are running with Jest. Observe the results in the terminal to ensure that the migration was successful.

**Bonus Tip:** You might encounter an issue here initially with an error message saying not able to recognize, `describe` `itbefore` and other keywords in the spec.ts file.

To fix it just run the below command in the terminal.

```plaintext
npm i --save-dev @types/jest
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest]
