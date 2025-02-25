+++
author = "Ali Osman Seyyidoglu"
title = "Basics of Using Git and Github"
date = "2025-02-25"
description = "Working with remote repositories by using Git and GitHub"
tags = ["git","github","remote repositories"]
draft = false
+++

# Getting started

Git is version control system which helps to track changes in files, especially software source code, and it can syncronize files between local and remote software development environments [^1].

To install Git:
1. Go to [git-scm.com/downloads](https://git-scm.com/downloads)
2. Select your operating system
3. Follow installation prompts

Once you have Git installed on your local work environment, you can setup connection with a remote repository. I will use GitHub as the remote repository and establish a [Secure Shell (SSH)](https://en.wikipedia.org/wiki/Secure_Shell) connection by using private-public key pair.

## Setting up SSH connection with GitHub

Open terminal (for MacOS) and type following commands:

```bash
# 1) Create a new keygen with an email
ssh-keygen -t rsa -C YOUREMAIL@MAIL.com

# 2) Create a new private-public key pair
ssh-add ~/.ssh/id_rsa
# a) press ENTER when asked for filename
# b) type a passphrase that you can remember 

# 3) Open file directory of private-public key pair
open ~/.ssh/
# Public key is stored in file with extension: .pub

# 4.1) Go to https://github.com/settings/ssh/new on your web browser
# 4.2) Assign a title and use the public key you generated to establish connection

# 5) Test connection over port 443
ssh -T -p 443 git@ssh.github.com
```

## Cloning a remote repository to start working on it 
```bash
# 1) Create a project folder
mkdir PROJECTNAME && cd PROJECTNAME

# 2) Initiate Git on your local machine
git init

# 3) Add remote repository to your Git environment
git remote add origin git@github.com:USERNAME/REPOSITORY.git

# 4) Clone remote repository to your local environment
git clone git@github.com:USERNAME/REPOSITORY.git
```

Now you are ready to make changes to source code on your local machine. Every time you make a change, Git will track those changes for you to review before staging, committing and pushing it back to remote.

## Staging changes
```bash
# Stage all changes
git add .
```

## Committing staged changes
```bash
# Stage all changes
git commit -m "Explain what has changed"
```

## Pushing commit to origin (remote repository)
```bash
# Push changes to origin (remote repository), main branch
git push origin main
```

## .gitignore
Create a gitignore file where you can list files that you do not want Git to track.

Typical files that you may not want to track:
- build codes
- 3rd party libraries
- system generated files

[Toptal provides a tool](https://www.toptal.com/developers/gitignore) where you can generate .gitignore file content based on OS, IDEs or programming languages.

```bash
# Create .gitignore file and open it
touch .gitignore && open .gitignore
```

# References
[^1]: https://en.wikipedia.org/wiki/Git