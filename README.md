# Intro
I built this website with Hugo to use it for personal branding and to share technical and educational content.

## Installation

Install Hugo on MacOS
``` shell
brew install hugo
```

Check if Hugo is installed
``` shell
which hugo
```

You should see the directory where Hugo is installed, similar to "/usr/local/bin/hugo"

On terminal, use below code snippet to build a Hugo site on your local machine. In my example, I chose **Etch** theme as it fits to my needs. If you want to use another theme, change "git submodule add https://github.com/LukasJoswiak/etch.git themes/etch" line in the code snippet.

``` shell
hugo new site quickstart
cd quickstart
git init
git submodule add https://github.com/LukasJoswiak/etch.git themes/etch
echo "theme = 'etch'" >> hugo.toml
hugo server
```

Site must be running on your localhost web server "http://localhost:1313/". Check your terminal prompt for to validate this address.

You can now upload your site to a remote repository, ready to be served by a hosting service provider supporting Hugo.
