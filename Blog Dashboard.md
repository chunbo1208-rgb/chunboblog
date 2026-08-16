# Blog Dashboard

Open [[Blog Dashboard.base]] to see **Unpushed** and **Pushed** posts.

## Write

1. Create a note in `src/content/posts/_drafts`.
2. Insert the `Blog Post` template.
3. Rename the note, fill in `title`, `description`, and `tags`, then write it.
4. Keep `pubDatetime` unchanged. `modDatetime` updates automatically after edits.

## Publish

Change `publishStatus` from `unpushed` to `ready` when the post is finished. On Mac, the vault publishes it automatically; on phone, iCloud carries the approval to the Mac and it publishes the next time this vault opens there.

The publisher validates the required properties, changes `draft` to `false`, changes `publishStatus` to `published`, moves the note out of `_drafts`, commits only the approved post, and pushes it to [chunboblog](https://github.com/chunbo1208-rgb/chunboblog). GitHub then deploys [chunboblog.com](https://chunboblog.com/).

If automatic publishing needs to be retried, run **Chunbo Blog Workflow: Publish ready posts** from the command palette.
