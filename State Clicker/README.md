# State Changes

* State is designed to constantly change in response to events.
* A great way to think about state is to think of games, for instance Chess. At any point of time, the board is in a complex of state.
* Every new move represents a single discrete state change.

## What Does State Track

* There are two types of stateon the client/frontend keeps track of:

  1. UI logic - the changing state of the interface e.g., there is a modal open right now because I'm editing my profile
  2. Business logic - the changing state of date e.g., in my inbox, messages are either read or unread, and this is turn affects how they display.

## Core React Concept Review

* Component
  1. Building block of React
  2. Combines logic (JS) and presentation (JSX)
* Props
  1. Data passed to a component (or found via defaults)
  2. Immutable component cannot change its own props
