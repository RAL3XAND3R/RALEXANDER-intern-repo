# Agile Workflows & Kanban

## How a Kanban Board Works

A Kanban board is a visual way to organize and track work. It allows the team to see what needs to be done, what is currently being worked on, and what has already been completed.

A typical Kanban board can have different columns depending on how the team works. For example:

**Backlog / Not Started:** Tasks that still need to be worked on.
**In Progress:** Tasks that someone is currently working on.
**Blocked:** Tasks that cannot continue because there is a problem or something is missing.
**Ready for Review:** Tasks that are finished from the developer's side and are waiting to be reviewed.
**Done / Approved:** Tasks that have passed the necessary review and are considered complete.

The exact columns can be different for each team. The important part is that the board represents the actual workflow of the team.

## How Tasks Move Through the Board

When a task is created, it normally starts in the backlog or not started column. When someone begins working on it, the task is moved to In Progress.

After the development work is finished, it can move to Ready for Review. At this point, another person or an automated process can review the changes. If there is a problem, the task may move back to In Progress.

Once the changes have been reviewed and approved, the task can move to the final column, such as Approved or Done.

The person working on the task should normally keep its status updated. This is important because the board should reflect the real state of the work. If a task is still marked as In Progress even though it is waiting for review, the rest of the team may not know that it is actually ready for the next step.

## Why Limiting Work in Progress Is Important

One useful Kanban principle is limiting Work in Progress (WIP). This means avoiding having too many tasks being worked on at the same time.

For example, if I start five different tasks at once, I may feel like I am making progress, but in reality I might not finish any of them quickly. I also have to keep switching between different problems, which can make the work slower and more confusing.

By focusing on fewer tasks at a time, I can finish them faster and keep better track of what I am doing.

## Reflection: Priorities and Avoiding Overload

Kanban helps manage priorities because the team can see all the work in one place and decide what should be worked on next.

It also helps avoid overload because it makes it easier to see when there are too many tasks in progress. Instead of constantly starting new work, the team can focus on finishing existing tasks first.

For me, this is useful because it is easy to look at several tasks and think that I should work on all of them at the same time. Kanban encourages me to focus on the most important task and finish it before moving on to something else.

## Improving My Workflow

One way I can improve my workflow is by keeping my tasks updated as I work on them.

If I start working on something, I should move it to In Progress. If I finish the implementation and it is waiting for review, I should move it to Ready for Review instead of leaving it in In Progress.

I can also try to avoid starting a new task when I already have another task that is close to being finished. Finishing work before starting more work should make my workflow more consistent.

## Task: My Kanban Board

For my repository, I created a Kanban workflow with the following columns:

**Not Started → In Progress → Ready for Review → Approved by Bot**

This workflow represents the stages a task goes through while I am working on it.

For example, when I receive a new task, it starts in **Not Started**. Once I begin working on it, I move it to **In Progress**. When the implementation is finished, I move it to **Ready for Review**. After the changes have been reviewed and approved by the bot, the task can move to **Approved by Bot**.

I moved at least one task through this workflow and updated its status as the work progressed. This helped me understand how the board can be used to keep track of the actual state of a task instead of only using it as a list of things to do.

## One Way I Can Improve Task Tracking

One improvement I can make is to update the task status immediately when the state of the work changes.

It is easy to focus on the code and forget about the board, but an outdated task status can make it difficult for other team members to know what is actually happening.

Keeping the board updated should make communication easier and give the team a more accurate picture of the current workload.


