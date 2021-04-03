# Note Taker Application

![GitHub License](https://img.shields.io/badge/made%20by-%40alexbachicha-orange)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## Description

The Note Taker is an application that can be used to write, save, and delete notes. This application uses an express backend to save and retrieve note data from a JSON file.

## Table of Contents 

* [User Story](#userstory)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## User Story

```
AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Installation

* The following HTML routes are used:

  * GET `/notes` - returns the `notes.html` file.

  * GET `*` - returns the `index.html` file

* This application also has a `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

* The following API routes are used:

  * GET `/api/notes` - reads the `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` - receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` - receives a query parameter containing the id of a note to delete.

## Usage

![Demo](/public/assets/demo.png)

## License

Licensed under the [MIT License](license.txt)