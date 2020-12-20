# Note Taker Application

## Description

The Note Taker is an application that can be used to write, save, and delete notes. This application uses an express backend to save and retrieve note data from a JSON file.

## Table of Contents 

* [User Story](#userstory)
* [Installation](#installation)
* [Credits](#credits)
* [License](#license)

## User Story
```
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete
```
## Installation

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


## Usage

Within a business context; for users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

Below is an example of what the product looks like:

![Demo](/assets/demo.png)

## Credits

![GitHub License](https://img.shields.io/badge/made%20by-%40alexbachicha-orange)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## License

![GitHub License](https://img.shields.io/npm/l/express)