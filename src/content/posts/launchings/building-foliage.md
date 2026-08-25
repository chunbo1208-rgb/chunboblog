---
author: Chunbo Liu
title: "Building Foliage: A Reading and Note-Taking App in SwiftUI"
description: Introducing Foliage, a SwiftUI app that keeps documents, annotations, reading progress, and notes in one personal library.
pubDatetime: 2026-08-25T03:59:54.000Z
modDatetime: 2026-08-25T04:55:41.342Z
draft: false
publishStatus: published
tags:
  - swiftui
  - ios-development
  - projects
---

# Building Foliage

I have been building **Foliage**, a reading and note-taking app for iPhone,
iPad, and macOS. The idea is simple: reading should not be separated from the
notes, highlights, and summaries that make a document useful later.

Most reading apps are good at displaying a file, while note-taking apps are
good at storing thoughts. Moving between them makes it easy to lose the
connection between a passage and the idea it produced. Foliage keeps that
context inside one personal library.

Relevant link: [Github Repo](https://github.com/chunbo1208-rgb/Foliage)

## What Foliage Can Do Today

Foliage currently supports importing PDF, Markdown, text, LaTeX, and EPUB
files. Imported documents are copied into the app's private storage, so the
library does not depend on temporary access to the original file.

The current PDF workflow includes:

- page restoration and reading progress;
- a table of contents, page navigation, and bookmarks;
- highlights and underlines with multiple colors;
- side notes linked to selected passages;
- page-aware free notes and a separate book summary;
- Markdown preview and offline mathematical notation rendering.

The library can search across titles, file names, formats, statuses, tags,
summaries, and notes. Documents can be sorted, grouped into collections, and
given custom metadata or covers. The interface adapts from a compact mobile
layout to a larger desktop reading workspace.

## How It Is Built

Foliage is a native SwiftUI application. SwiftData stores the library metadata,
reading progress, annotations, bookmarks, and notes. PDFKit handles document
rendering and text selection on iOS and macOS.

One important design decision is to keep annotations in the app's data model
instead of writing them directly into the imported PDF. This keeps the source
document read-only and lets Foliage reconstruct its annotation layer when a
document is opened. It also provides a clearer path toward synchronization and
conflict handling.

The app is being designed for local-first use. A reader should still be able to
open documents and edit notes when cloud services are unavailable. CloudKit
support is being prepared for library metadata and reading notes, but it is not
enabled as a finished user feature yet.

## What I Learned

The difficult part is not displaying a PDF. It is preserving context reliably:
which page was open, where a selected passage appeared, which note belongs to
it, and how all of that survives relaunches and layout changes.

Cross-platform SwiftUI also requires careful separation. The overall reading
experience can be shared, but PDF selection coordinates, window behavior,
keyboard interactions, and navigation differ between macOS and iOS. Building
one product across these platforms means sharing the model while respecting
their native interaction patterns.

## Next Steps

My immediate focus is stability: testing imports, navigation, annotations,
missing-file recovery, data migration, accessibility, and both macOS and iOS
builds. After that, I plan to complete CloudKit synchronization, add a real EPUB
reader, and support exporting notes and summaries to Markdown.

Foliage is still in development, but its core workflow is now taking shape: a
document, its reading state, and the ideas around it can remain together.
