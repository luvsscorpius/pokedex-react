# Pokemon Search App

This is a simple React application that allows users to search and view information about different Pokémon. The app makes use of the PokeAPI to fetch data about Pokémon and display it to the user.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, you'll need to have Node.js and npm installed on your machine. Follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/pokemon-search-app.git
   ```

2. Change into the project directory:

   ```bash
   cd pokemon-search-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The app should now be running locally on [http://localhost:3000](http://localhost:3000).

## Usage

- Upon launching the app, you will see a search bar at the top.
- Enter the name or partial name of a Pokémon you want to search for and press Enter.
- The app will fetch Pokémon data from the PokeAPI and display a list of Pokémon matching your search.
- Click on a Pokémon card to view more details about that Pokémon, including its image and types.

## Features

- Search for Pokémon by name.
- View basic information about Pokémon, including their image and types.
- The app uses Skeletons to provide a loading animation while data is being fetched.

## Technologies

This project is built using the following technologies:

- **React**: The JavaScript library used for building the user interface.
- **Material-UI**: A popular React UI framework for creating a consistent and responsive design.
- **Axios**: A promise-based HTTP client for making API requests.
- **PokeAPI**: An external API used to fetch data about Pokémon.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as needed.