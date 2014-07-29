## Getting started

Once the repository is cloned somewhere, `cd` into that directory and run the
following commands. You only need to do `install` once to get started, then use
`update` very occasionally (if we ever update gems).

```bash
# Tools that must be installed globally.
npm install -g npm
npm install -g gulp bower
gem install bundler

# first time
$ bundle install
$ bower install
$ npm install

# occasional updates
$ bundle update
$ bower install
$ npm install
```

## Normal development

To run a server that auto-generates the new site when you save files, run the
following command:

```bash
# BrowserSync server that watches everything for you. Always.
$ gulp server
```

This command will automatically open the site. It will watch for changes to HTML and Sass, perform the build/compiling, and refresh the page in your browser.

You can also manually run tasks with Gulp:

```bash
# Compile all of the Sass files--- this will NOT update what is in the browser
$ gulp sass

# Minify all images-- this will take time the first time, then will speed up.
$ gulp images

# Rebuild Jekyll site
$ gulp jekyll-build

# Rebuild all assets for production.
$ gulp build

# Deploy the site to gh-pages
$ gulp deploy

```

## What is this all actually doing?

The tools that are now on this project are:

* [Jekyll](http://jekyllrb.com/), static site generator
* [Bundler](http://bundler.io/), ensures we have the right versions of ruby gems
* [Bower](http://bower.io/), manages frontend packages
* [Gulp](http://gulpjs.com/), task runner
* Gulp and Jekyll extensions

Most of these we have used before, but some are new. Gulp is probably the most important.

Gulp is a magical tool, but this site has some unique aspects compared to other projects. Our JavaScript and CSS minification and concatenation now happen through an asset pipeline. This allows us to have the cache be busted for end users when we deploy new code. This is very important to us, but it adds a layer of complexity to our site and how we are developing it.

## Commits

:exclamation: Use a good commit description, and don't forget to prepend the
message with an emoji. It helps display how many files changed within one
commit, and it's fun!

Use the [emoji cheat sheet](http://www.emoji-cheat-sheet.com/) to find the perfect :whale2: :punch: :iphone:.
