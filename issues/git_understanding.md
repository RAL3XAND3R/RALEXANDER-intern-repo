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


# Git Understanding

## What caused the conflict?

The merge conflict happened because I had two different branches that changed the same part of the same file.

I first made a change to the file in a separate branch. Then I switched back to `main` and changed the same part of the file in a different way. After committing both changes, I tried to merge the branch into `main`.

Git could not automatically decide which change should be kept because both branches had modified the same section. This caused the merge conflict.

## How did you resolve it?

I resolved the conflict by opening the file in VS Code and looking at the changes from both branches.

Git marked the conflicting section so I could see the version from `main` and the version from the branch. I reviewed both changes and decided which version should be kept for the final file.

After removing the conflict markers and saving the correct version, I staged the resolved file with `git add` and completed the merge with a commit.

## What did you learn?

I learned that merge conflicts are not necessarily errors in Git. They happen when Git cannot automatically combine changes because different branches modified the same part of a file.

Before this exercise, I knew that merge conflicts could happen, but I had not intentionally created and resolved one myself. Doing the process helped me understand what Git is actually showing when a conflict occurs.

I also learned that the important part of resolving a conflict is reviewing both versions carefully instead of simply choosing one without understanding the changes. After resolving the conflict, the final version should contain the changes that are actually needed.

      

## What does `git bisect` do?

`git bisect` is a Git command that helps find which commit introduced a bug. It uses a binary search through the commit history instead of making me check every commit one by one.

To use it, I need to identify one commit where the project is known to work and another commit where the bug is present. Git then checks commits between those points, and I tell Git whether each version is good or bad.

Based on my answers, Git keeps narrowing down the possible commits until it identifies the commit that introduced the problem.

## When would you use it in a real-world debugging situation?

I would use `git bisect` when a project was working correctly at some point in the past but a bug has appeared later, and there are many commits between the working and broken versions.

For example, if a bug appeared after several days of development and many developers had made changes during that time, checking every commit manually could take a long time. `git bisect` would make it easier to narrow down the problem and identify the commit responsible.

## How does it compare to manually reviewing commits?

Manually reviewing commits means going through the changes one by one and trying to find which change caused the problem. This can work for a small number of commits, but it can become slow and difficult in a large project.

`git bisect` is more efficient because it uses a binary search. Instead of checking every commit, Git moves between commits and reduces the number of possible problematic commits after each test.

I found this useful because it turns what could be a long debugging process into a much more systematic process.

## What I learned

The main thing I learned is that `git bisect` is useful when the exact commit that introduced a bug is unknown. I also learned that I do not have to manually move through every commit myself. Git helps choose which commits to test based on whether I mark them as good or bad.

This exercise also helped me understand the value of having a clear commit history. When commits are organized and changes are separated properly, tools like `git bisect` become much more useful for debugging.


## Writing Meaningful Commit Messages

### What makes a good commit message?

A good commit message should be clear, specific, and concise. It should give enough information to understand what changed without including unnecessary details.

While testing different commit message styles, I noticed that a message like `fixed stuff` does not provide enough information about the change. A very long message can also make the history harder to read.

A good message should describe the main purpose of the change in a simple way, such as `Improve commit message example`.

### How does a clear commit message help in team collaboration?

Clear commit messages make it easier for other developers to understand what has changed without having to inspect every commit in detail.

They are especially useful when working with branches and pull requests because the commit history gives the team a quick overview of the work that was done.

Clear messages also make it easier to investigate previous changes when working on a project with multiple developers.

### How can poor commit messages cause issues later?

Poor commit messages can make the project history confusing, especially after a project has been developed for a long time.

Messages such as `fixed stuff`, `update`, or `changes` do not explain what was actually changed. Later, if someone needs to find when or why something was changed, these messages provide very little useful information.

This exercise showed me that commit messages may seem small, but they become important when a repository has many commits and multiple developers working on it.



## What is a Pull Request and why is it used?

A Pull Request (PR) is a way to propose changes from one branch to another, usually into the main branch. It gives other team members a chance to review the changes before they are merged.

PRs are useful because they make it easier to review code, discuss changes, catch possible problems, and keep the main branch more stable. They also provide a history of why a change was made and what was discussed before it was merged.

## Why are Pull Requests important in a team workflow?

Pull Requests are important because developers usually work on separate branches instead of making changes directly to the main branch. Once the work is ready, the PR gives the rest of the team an opportunity to review it.

This helps catch bugs or problems before they reach the main branch. It also makes collaboration easier because developers can leave comments, suggest changes, and discuss the implementation.

In my case, this is already part of my normal development workflow, so the process of creating branches, pushing changes, opening PRs, receiving feedback, and merging them is something I use regularly.

## What makes a well-structured Pull Request?

I think a good PR should be clear and focused. The title should explain what the PR is about, and the description should give enough context about what was changed and why.

A well-structured PR should also avoid mixing unrelated changes together. Keeping the changes focused makes the review easier and makes it less likely that something important gets missed.

Linking the PR to the related issue is also useful because it gives more context about the reason behind the change.

## What did I learn from reviewing an open-source PR?

Reviewing a public open-source PR helped me see how code reviews work when many developers are involved in the same project.

One thing I noticed is that the discussion is not only about whether the code works. Reviewers also ask questions about the implementation, suggest improvements, and sometimes request changes before approving the PR.

It also showed me that PR discussions can contain several rounds of feedback. The author can make additional commits and update the PR until the reviewers are satisfied with the changes.

Overall, it helped me understand that a PR is not just a way to merge code. It is also a place for collaboration and communication between developers.

## Reflection

The main thing I took from this task is that Pull Requests are an important part of keeping development organized. Even though I already use branches and PRs regularly, reviewing an open-source PR gave me a better perspective on the review and discussion side of the process.

A good PR should make it easy for another developer to understand what was changed, why it was changed, and how the changes were tested. Keeping PRs focused and providing enough context makes the whole review process easier for everyone.
