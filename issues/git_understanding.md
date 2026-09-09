# Git Understanding

## What is the difference between staging and committing?

Staging and committing are two different steps in Git.

When I use `git add`, I move a modified file into the staging area. This means I am telling Git that I want to include those changes in my next commit.

For example:

```bash
git add file.md
```

After that, I can use:

```bash
git status
```

to see that the file is staged and ready to be committed.

A commit is different because it actually saves the staged changes into the Git history. I can create a commit with:

```bash
git commit -m "My changes"
```

So, in simple terms, staging is preparing the changes, while committing is saving those prepared changes in the repository history.

## Why does Git separate these two steps?

I think separating these steps is useful because I might have several modified files but not want to commit all of them together.

For example, I could modify three files while working on different things, but only one of those changes might be ready to commit. I can use `git add` to select only the file I want and leave the other changes alone.

This gives me more control over what each commit contains and makes the project history easier to understand.

## When would you want to stage changes without committing?

I would stage changes without committing when I want to prepare or review what will be included in my next commit before actually creating it.

I can use:

```bash
git status
```

to check what is currently staged.

I also learned that if I change my mind, I can remove a file from staging with:

```bash
git restore --staged file.md
```

This does not delete my changes. It only takes the file out of the staging area, so I can modify it more or decide to commit it later.

This is different from:

```bash
git restore file.md
```

because that command discards the local changes and returns the file to the version from the last commit.

## What I learned

The main thing I learned from this exercise is that staging is not the same as saving a change permanently.

Before this, I already knew how to use `git add`, `git status`, and `git commit`, but I had not really thought about the purpose of the staging area. Now I understand that it works as a place where I can select and review the changes that I want to include in a commit.

I also learned how to unstage a file without losing the work I had done. This gives me more control over my commits and helps me avoid accidentally committing changes that I did not want to include.
