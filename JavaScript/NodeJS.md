NodeJS

JS runtime built on Chrome V8 engine
- aynschronous, non-blocking, event-driven I/O model
  - allows for multiple tasks running concurrently on one thread
  - fast & doesn't hog memory
Basically allows us to write javascript code to do non-browser tasks

Two main functions:
1) utilities + npm
2) create a webserver

NPM
[prereqs: install Node via NVM, then install NPM]
- modules get installed into root of working directory
     - npm install -g express (install mod globally)
- npm init creates package.json
    - mods get installed into node_modules folder
    - npm install gulp --save-dev (save dev dependencies into package.json)
    - npm install gulp
- npm install auto-installs all the packages in package.json file & creates node_modules folder
- enable caching -- npm config set cache-min 9999999
