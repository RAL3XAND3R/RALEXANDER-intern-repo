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



# Git Understanding

## Why is pushing directly to `main` problematic?

I think pushing directly to `main` can be problematic because `main` should normally contain stable code that the rest of the team can rely on.

If everyone pushes their changes directly to `main`, someone could accidentally introduce a bug or break something that another person is currently using. It also makes it harder to review changes before they become part of the main codebase.

Working on a separate branch gives me a safer place to make changes without immediately affecting `main`.

## How do branches help with reviewing code?

Branches make code review easier because each change can be developed separately from `main`.

A developer can create a branch, make their changes, commit them, and push the branch to GitHub. Then they can create a pull request where other members of the team can review the changes before they are merged into `main`.

This also makes it easier to understand what a specific change is supposed to do because the pull request contains the commits and changes related to that task.

I have been using this workflow during my internship, so I have seen how useful branches and pull requests are for keeping work organized.

## What happens if two people edit the same file on different branches?

Two people can edit the same file on different branches without immediately affecting each other's work.

The problem can happen when the branches are merged. If both people changed the same part of the file, Git may not know which version should be kept and will create a merge conflict.

The conflict then needs to be reviewed and resolved manually before the branches can be merged successfully.

## What I learned

This issue helped me understand more clearly why teams use branches instead of working directly on `main`.

I already use branches, commits, pushes, and pull requests regularly during my internship, but this made me think more about why the workflow exists.

Branches give each developer a separate place to work, while pull requests provide an opportunity for the changes to be reviewed before they become part of the main codebase.

For me, the most important part is that `main` should not be treated as a place where everyone can randomly push unfinished changes. The branch and review process provides a safer and more organized way for a team to work together.
