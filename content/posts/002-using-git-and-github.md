+++
author = "Ali Osman Seyyidoglu"  
title = "Basics of Using Git and Github"  
date = "2025-02-25"  
description = "Working with remote repositories by using Git and GitHub"  
draft = true  
tags = ["git","github","remote repositories"]
+++

# Getting started

Git is version control system which helps to track changes in files, especially software source code, and it can syncronize files between local and remote software development environments [^1].

To install Git:
1. Go to [git-scm.com/downloads](https://git-scm.com/downloads)
2. Select your operating system
3. Follow installation prompts

Once you have Git installed on your local work environment, you can setup connection with a remote repository. I will use GitHub as remote repository and I will establish a SSH connection by using private-public key pair.

## Setting up SSH connection with GitHub

Open terminal (for MacOS) and follow steps listed below.

```bash
# Create a new keygen with an email
ssh-keygen -t rsa -C YOUREMAIL@MAIL.com

# Create a new private-public key pair
ssh-add ~/.ssh/id_rsa

# Open file directory where private-public key pair is created
open ~/.ssh/

# Your public key is stored in file ending with .pub
# Go to https://github.com/settings/ssh/new
# Assign a title and use the public key you generated to establish connection.

# Test connection over port 443
ssh -T -p 443 git@ssh.github.com
```

## Cloning a remote repository to start working on it 
```bash
# Go to your project folder
cd yourprojectfolder

# Initiate Git on your local machine
git init

# Add remote repository to your Git environment
git remote add origin git@github.com:USERNAME/REPOSITORY.git

# Clone remote repository to your local environment
git clone git@github.com:USERNAME/REPOSITORY.git
```

Now you are ready to make changes to source code on your local machine. Every time you make a change, Git will track those changes for you to review before staging, committing and pushing it back to remote.

## Staging changes

TBC

## Committing staged changes

TBC

## Pushing committed code to origin

TBC

## .gitignore
Create a gitignore file where you can list files that you do not want Git to track.

Typical files that you may not want to track:
- build codes
- 3rd party libraries

# References
[^1]: https://en.wikipedia.org/wiki/Git