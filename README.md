# YAMRA
Welcome to **YAMRA**, **Y**et **A**nother **M**ono**R**epo **A**ttempt. I'll write the history of it in reverse order. Newest first.

[You can start to read here, just click this link](#start-reading-upwords)

***Latest changes***

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