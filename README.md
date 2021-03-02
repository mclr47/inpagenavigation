# trying to simulate :
zurfyx.github.io/angular-contents
**from :
https://github.com/zurfyx/angular-contents/blob/master/README.md

specifically attempting to reproduce the example:
https://github.com/zurfyx/angular-contents/tree/master/example

#Problems encountered:
 >>>>
   PageScrollInstance.newInstance
the newInstance method missing or some other error detected on VSCode.

Specific error from VSCode:
"Property 'newInstance' does not exist on type 'typeof PageScrollInstance'.ts(2339)"
>>>>>>
  used the following resources to help with the problem:
  https://github.com/Nolanus/ngx-page-scroll/issues/122
  https://github.com/zurfyx/angular-contents/issues/12
>>>>
 then had this errors:
   >>
   arc@mwc-011144 ang-toc-npm % ng s
Error: ENOENT: no such file or directory, open '/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/angular-contents/src/contents-section.directive.ts '
    at Object.openSync (fs.js:476:3)
    at Object.readFileSync (fs.js:377:35)
    at NodeJSFileSystem.NodeJSReadonlyFileSystem.readFile (/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@angular/compiler-cli/src/ngtsc/file_system/src/node_js_file_system.js:98:23)
    at EsmDependencyHost.DependencyHostBase.recursivelyCollectDependencies (/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@angular/compiler-cli/ngcc/src/dependencies/dependency_host.js:81:40)
    at EsmDependencyHost.DependencyHostBase.processFile (/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@angular/compiler-cli/ngcc/src/dependencies/dependency_host.js:136:22)
    at EsmDependencyHost.DependencyHostBase.collectDependenciesInFiles (/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@angular/compiler-cli/ngcc/src/dependencies/dependency_host.js:56:26)
    at ProgramBasedEntryPointFinder.getInitialEntryPointPaths (/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@angular/compiler-cli/ngcc/src/entry_point_finder/program_based_entry_point_finder.js:49:18)
    at ProgramBasedEntryPointFinder.TracingEntryPointFinder.findEntryPoints (/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@angular/compiler-cli/ngcc/src/entry_point_finder/tracing_entry_point_finder.js:45:41)
    at /Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@angular/compiler-cli/ngcc/src/execution/analyze_entry_points.js:28:41
    at new ClusterMaster (/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@angular/compiler-cli/ngcc/src/execution/cluster/master.js:45:30)
An unhandled exception occurred: NGCC failed.
See "/private/var/folders/9k/7kg2czzx7bqclvqx2vzj3gn00000gn/T/ng-iJWh6B/angular-errors.log" for further details.
   >>
>>>>
  >> other errors:
  Error: ./node_modules/angular-contents/src/contents.module.ts
Module build failed (from ./node_modules/@ngtools/webpack/src/index.js):
Error: /Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/angular-contents/src/contents.module.ts is missing from the TypeScript compilation. Please make sure it is in your tsconfig via the 'files' or 'include' property.
The missing file seems to be part of a third party library. TS files in published libraries are often a sign of a badly packaged library. Please open an issue in the library repository to alert its author and ask them to package the library using the Angular Package Format (https://goo.gl/jB3GVv).
    at AngularCompilerPlugin.getCompiledFile (/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@ngtools/webpack/src/angular_compiler_plugin.js:951:23)
    at /Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@ngtools/webpack/src/loader.js:43:31
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)

Error: ./node_modules/angular-contents/src/html-utils.ts
Module build failed (from ./node_modules/@ngtools/webpack/src/index.js):
Error: /Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/angular-contents/src/html-utils.ts is missing from the TypeScript compilation. Please make sure it is in your tsconfig via the 'files' or 'include' property.
The missing file seems to be part of a third party library. TS files in published libraries are often a sign of a badly packaged library. Please open an issue in the library repository to alert its author and ask them to package the library using the Angular Package Format (https://goo.gl/jB3GVv).
    at AngularCompilerPlugin.getCompiledFile (/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@ngtools/webpack/src/angular_compiler_plugin.js:951:23)
    at /Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/@ngtools/webpack/src/loader.js:43:31
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)

  >>     

  https://stackoverflow.com/questions/52441509/ts-is-missing-from-the-typescript-compilation-please-make-sure-it-is-in-your-ts

  used the above link to correct 
    *****  tsconfig.app.json  *** **
     ~~
      "files": [
    "src/main.ts",
    "src/polyfills.ts",
    "node_modules/angular-contents/src/contents-link.directive.ts",
    "node_modules/angular-contents/src/contents-section.directive.ts",
    "node_modules/angular-contents/src/contents-table.directive.ts",
    "node_modules/angular-contents/src/contents.directive.ts",
    "node_modules/angular-contents/src/index.ts",
    "/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/angular-contents/src/contents.module.ts",
    "/Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/angular-contents/src/html-utils.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
     ~~
 >>
# ng serve 
results in the following warings:

Warning: /Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/angular-contents/src/contents.directive.ts depends on 'rxjs/Subject'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies

Warning: /Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/angular-contents/src/contents.directive.ts depends on 'rxjs/BehaviorSubject'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies

Warning: /Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/angular-contents/src/contents.directive.ts depends on 'rxjs/add/operator/filter'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies

Warning: /Users/arc/Documents/web_Dev2/ex/ang-toc-npm/node_modules/angular-contents/src/contents-section.directive.ts depends on 'rxjs/add/operator/takeUntil'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies


# finally a deployment can be seen at :
https://inpagenavigation.web.app/











# AngTocNpm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
