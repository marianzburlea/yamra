# YAMRA
Welcome to **YAMRA**, **Y**et **A**nother **M**ono**R**epo **A**ttempt. I'll write the history of it in reverse order. Newest first.

[You can start to read here, just click this link](#start-reading-upwords)

***Latest changes***

## Lerna changelog

Install the module:

```
yarn add -DW lerna-changelog
```

Generate a token if needed at https://github.com/settings/tokens

use the token like:
export GITHUB_AUTH="e11cc4ccbbd4cf333d3b7c888cc9f5712eee4444"


## Check for changed repositories

Running the following:
```
npx lerna changed
```

will get you something like this
```
lerna notice cli v3.15.0
lerna info versioning independent
lerna info Assuming all packages changed
codetap-button
codetap-text-input
lerna success found 2 packages ready to publish
```

## Create a new component

We want to create a new component `codetap-text-input`, write tests and stories.

## Let's start testing

Wouldn't it be fun to add a bunch of libraries like:

```
yarn add -WD jest jest-styled-components babel-jest react-test-renderer jest-resolve jest-haste-map
```

* **jest** A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects.
* **jest-styled-components** A set of utilities for testing Styled Components with Jest. This package improves the snapshot testing experience and provides a brand new matcher to make expectations on the style rules.
* **babel-jest** If you are already using jest-cli, just add babel-jest and it will automatically compile JavaScript code using Babel.
* **react-test-renderer** This package provides an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.
* **jest-resolve** resolves modules and checks if it is a haste module or a node module to speed up resolution when we build a dependency graph
* **jest-haste-map** HasteMap is a JavaScript implementation of Facebook's haste module system.

## Try out components?

Storybook Addon Knobs allow you to edit React props dynamically using the Storybook UI. You can also use Knobs as a dynamic variable inside stories in Storybook.

```
yarn add -DW @storybook/addon-knobs
```

## Our first story?

Firstly, let's configure our mono repo storybook in `.storybook/config.js` with:

```
import { configure } from '@storybook/react';

const req = require.context('../cool-place-to-keep-a-project', true, /.story.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
```

Let's add our first story as `index.story.js` in our codetap-button project.

## Story time?

Let's add a story book:

```
yarn add -DW @storybook/react
```

## Fix babel config

Fix: error running babel config inside package.json

While running in --root-mode upward babel is looking for a config in babel.config.js

## Create our first component (should be reusable)

Run:

```
cd cool-place-to-keep-a-project
```

followed by:

```
mkdir codetap-button && cd $_ && npm init -y
```

Than create a component in `src/index.js`

## The party gets bigger with react, react-dom and styled-components

```
yarn add -DW react{,-dom} styled-components
```

## Invite babel, styled and webpack

```
yarn add -DW @babel/cli @babel/core @babel/preset-react @babel/preset-env babel-core@7.0.0-bridge.0 babel-loader babel-plugin-styled-components webpack
````

The `-W` will install across the workspace.

Don't forget to set `"private": true` in `package.json`

## Lerna?

Lerna helps managing multiple projects.

```npx lerna init```


Add to `package.json`:
```
"workspaces": [
  "cool-place-to-keep-a-project/*"
],
```

Update `lerna.json` to:
```
{
  "packages": [
    "cool-place-to-keep-a-project/*"
  ],
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

Add the new foloder to hold the future projects:

```
mkdir cool-place-to-keep-a-project
```

## Push it to GitHub

```
git remote add origin git@github.com:marianzburlea/yamra.git
git push -u origin master
```

## Implement a commit helper

```yarn add -DE commitizen cz-conventional-changelog```

EVERY time you want to do a commit message with `git` run:

```yarn c```

I'm pretty sure you'll figure the rest of it out.
Otherwise get in touch with us using our text, voice and video chat at https://codetap.academy

## Add git to the party

You want to add `git` as a versioning system to watch like a historian hawk over your files.

```git init && git add . && git commit -m "feat: start of YAMRA"```

Followed by:

```npm init -y```

to create a default `package.json` file.

## Got yarn?

If you don't have yarn run:

```npm i -g yarn```

## Start the project
You want to create a place for the project to feel comfortable:

```mkdir yamra && cd $_```

## History (in reverse order)
Scroll up to read. The reason for this setup is that every time you visit this project you should see the latest changes first.

# Start reading upwords