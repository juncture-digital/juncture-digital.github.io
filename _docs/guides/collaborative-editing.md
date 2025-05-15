---
title: Collaborative File Editing
layout: docs
category: guides
---

# Collaborating on Markdown With GitHub

*A friendly, step-by-step guide for people who have never touched **GitHub** or **version control** before.*

---

## 1. Why GitHub?

GitHub is like **Google Docs for text files**—but with a time machine and a built-in discussion board.  
Using it for Markdown lets you:

* work together without overwriting each other’s edits;
* see **who changed what, when, and why**;
* roll back to any previous version if something breaks;
* discuss ideas, request feedback, and keep decisions in one place.

## 2. A 60-Second Glossary

| Term | What it really means | Friendly analogy |
|------|---------------------|------------------|
| **Repository (repo)** | A folder hosted on GitHub that stores your files *and* their history | Your project’s filing cabinet |
| **Commit** | A saved snapshot of the repo at a point in time, with a short message | Hitting *Save* + leaving a sticky note |
| **Branch** | A separate line of development where you can make changes safely | A copy of a document you can scribble on |
| **Pull Request (PR)** | A proposal to merge one branch into another, with a discussion thread | “Hey team, look at my edits—OK to add them?” |
| **Merge** | Accepting the changes from a PR into the main branch | Putting the updated pages back in the binder |

> **Tip:** Don’t worry about memorizing the jargon—refer back here while you learn.

## 3. Getting Set Up

1. **Create a free GitHub account** at <https://github.com/join>.
2. Decide whether you’ll **create a new repo** or **join an existing one**:  
   * *Creating?* Click **➕ New repository** on your GitHub home page.  
   * *Joining?* Ask the owner to add your GitHub username under **Settings → Collaborators**.

## 4. Your First Repository (Web Interface)

1. **Name** it (e.g. `docs-site`).
2. Check **“Add a README”** so the repo isn’t empty.
3. Choose **“Public”** (anyone can view) or **“Private”** (only invited people).
4. Click **Create repository**.

You’ll land on the repo’s **main page**—think of it as the project’s home screen.

## 5. Writing Markdown in GitHub

Markdown is plain text with a few symbols that turn into formatting. Here’s a mini-cheat-sheet:

```md
# H1 Heading
## H2 Heading

**Bold** and *italic*

- Bullet list item
1. Numbered list item

[Link text](https://example.com)

![Alt text](images/pic.jpg)
```

*Click the **Preview** tab* in any editor window to see how it will look.

## 6. Quick Edits — Your Day-to-Day Workflow

Most updates will use the **quick edit** method right in your browser:

1. Navigate to the file (e.g. `README.md`).
2. Click the **pencil 🖉 icon** (top-right) to open the web editor.
3. Make your changes.
4. **Commit**: at the bottom, add a short description (e.g. “Fix typos in intro”) and click **Commit changes**.

GitHub saves your edit as a new commit on the **main** branch.

### Perfect for

* Fixing typos or wording tweaks.
* Adding images or links.
* Updating small sections of content.

> **Good habit:** Write clear commit messages so teammates know what changed.

## 7. Branches & Pull Requests (Optional for Bigger Changes)

For larger edits—like adding a new chapter or reorganizing pages—create a **branch** and open a **pull request** (PR). This keeps the main branch stable while the work is in progress.

**In brief:**
1. From the repo home, click **Branch: main → New branch…** (name it `add-chapter-2`).
2. Edit files on *your* branch.
3. When ready, click **Compare & pull request**.
4. Teammates can review, comment, and approve.
5. Click **Merge pull request → Confirm merge** when everyone’s happy.

If you’re a solo editor or making quick fixes, branches are optional—use them only when you need an extra layer of review.

## 8. Reviewing Changes

On every PR you can:
* Open the **Files changed** tab to see side-by-side differences (adds in green, removals in red).
* Leave comments on specific lines (hover → blue “+”).
* Approve, request changes, or comment only.

## 9. Tracking History & Reverting

* Click any file → **History** to browse past commits.
* Click a commit ID → **Browse files** to view the repo at that point.
* Need to undo a bad commit? Open a new PR that reverts it automatically (**Revert** button).

## 10. Issues — Your Project’s Sticky Notes

Use **Issues** to:
* Suggest new content or improvements.
* Report problems (broken links, unclear sections).
* Assign tasks via **Assignees**.
* Group related issues with **Labels** (e.g. `content`, `typo`, `idea`).

## 11. Notifications & Watching

Click **Watch → All activity** to receive email/app updates on new PRs, issues, or comments.  
Tweak frequency under **Settings → Notifications**.

## 12. Handling Merge Conflicts (Don’t Panic!)

Conflicts happen when two edits change the same line. GitHub will:

1. Prevent the merge and show a **“This branch has conflicts”** banner.
2. Highlight the conflicting sections like this:

```md
<<<<<<< main
Original text
=======
Your branch’s text
>>>>>>> add-chapter-2
```
3. Delete the markers, keep the correct text, commit the fix.

## 13. Best Practices for Smooth Collaboration

* **Write clear commit messages**—future you will thank present you!
* **Make small, focused PRs** when using branches—easier to review.
* Use **file/folder conventions** (e.g. `images/`, `docs/`).
* Agree on **branch naming** (e.g. `feature-topic`, `fix-typo`).
* Add a `CONTRIBUTING.md` with house rules and style guide.

## 14. Quick Reference Cheat Sheet

| Action | Where to click |
|--------|----------------|
| Edit a file (quick edit) | File → 🖉 pencil |
| Create a new file | **Add file → Create new file** |
| Upload an image | **Add file → Upload files** |
| New branch | **Branch: main → New branch…** |
| Open PR | **Compare & pull request** banner |
| Merge PR | PR page → **Merge pull request** |
| View history | File → **History** |
| Revert commit | Commit page → **Revert** |

## 15. More Resources

* **GitHub Guides** – bite-sized tutorials: <https://guides.github.com/>
* **GitHub Docs** – official manual: <https://docs.github.com/>
* **Markdown Cheat Sheet** – <https://www.markdownguide.org/cheat-sheet/>

---

### You’re Ready!

Treat your repository like a shared notebook—experiment, discuss, polish, and watch your Markdown content grow without the chaos of endless email attachments. 🎉

> **Need extra help?** Tag a teammate in an Issue or PR, or drop by the Discussions tab if enabled.

Happy writing! 🎈
