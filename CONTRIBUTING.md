# Contributing Guidelines

First off, thanks for taking the time to contribute!

Please read through our [Installation Instructions](INSTALL.md).

## Getting Started

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the core team before making a change.

- Make sure you have a [GitHub account](https://github.com/login).
- Submit a GitHub issue for your issue if one does not already exist.
  - A issue is not necessary for trivial changes.
- [Fork](https://help.github.com/en/articles/working-with-forks) the repository on GitHub.
    - [Configuring a remote for a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
    - [Syncing a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
      - `git fetch upstream`
      - `git checkout master`
      - `git merge upstream/master`
    - [Merging an upstream repository into your fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork)
      - `git checkout master`
      - `git pull upstream master`
      - Commit the merge
      - `git push origin master`
- When working on an issue, create a new branch from `master` named for issue number or custom name. Name the branch `issue/<issue-number>` or `issue/<custom-name>`. For example `issue/22` for fixing issue #22.
- Make your changes.
  - Follow the [Style Guides](#style-guides).
  - [Avoid platform-dependent code](https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility/).
  - Add tests if your changes contains new, testable behavior.
  - Make the tests pass.
- Create a [pull request](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork) to the repository.

### Tips and tricks for using the Git

- [GitHub Cheat Sheet](https://github.com/tiimgreen/github-cheat-sheet)
- [git-tips](https://github.com/git-tips/tips)

### Key branches

- `master` is the latest, deployed version

## Contribute to the core code or bug fixes
