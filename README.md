# Black Mesa IT

Welcome to the Black Mesa IT repository, a test project by Gregory Stepanov that showcases a simple store with multiple categories and filtering capabilities.

## Getting Started with Docker

The application is containerized with Docker, allowing for easy setup and execution. To run the entire application, simply use the following command:

```bash
docker run -it --rm --name black-mesa-it -p 3000:3000 -p 3001:3001 stgreg13/black-mesa-it:latest
```

## Stack

- **Framework**: Next.js 14.0.3
- **Language**: JavaScript/TypeScript
- **Styling**: SASS
- **Backend**: json-server for mock API data
- **Containerization**: Docker

## Architecture

The project is structured to follow best practices of Next.js development, with a focus on modular components, services for API calls, and comprehensive styling using SASS.

- `src/components`: Reusable UI components like filters, food lists, and catalog displays.
- `src/services`: Services for handling API interactions.
- `src/app`: Core application logic and styling.
- `db`: Mock database in the form of `json-server`, providing an API for development use.

## Libraries

- **react & react-dom**: For building the user interface.
- **json-server**: To mock RESTful API endpoints.
- **sass**: Preprocessor scripting language that is interpreted or compiled into CSS.
- **typescript**: For adding static type definitions to JavaScript.

## Functionality

- **Catalog Display**: Users can browse through a catalog of items.
- **Filtering**: Items can be filtered based on categories.
- **Data Fetching**: Utilizes `json-server` to simulate fetching data from an API.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/StGreg13/black-mesa-it.git
cd black-mesa-it
npm install
```

## Docker Support

A Docker file is included to containerize the application. Build configured via Github actions