# Welcome to the Pokedex Web Application! 🌟

The Pokedex Web Application is a Flask-based web application designed to help you explore and capture your favorite Pokemons. With its intuitive interface and powerful features, you can easily browse through a vast collection of Pokemons and capture them to build your ultimate team! 🚀

## Client Side (Frontend) 💻

### Components:

- **Pokemon List:** 📋 The Pokemon list displays a paginated list of Pokemons, including their names, numbers, and images. You can navigate through pages, specify the number of Pokemons per page, and choose to fetch all Pokemons at once.

- **Pagination Controls:** 📄 Pagination controls allow you to navigate through different pages of the Pokemon list. You can specify the page size and move to the next or previous page to view more Pokemons.

- **Capture Pokemon Feature:** 🎮 The capture Pokemon feature enables you to capture or release Pokemons from your list. Simply click on the capture button next to a Pokemon to mark it as captured or release it back into the wild.

- **Loader:** 🔄 The loader component displays a loading animation to indicate that the application is fetching data from the server. It appears while fetching Pokemons and disappears once the data is loaded.

- **Error Handling:** ❌ Error handling ensures smooth user experience by gracefully handling errors that may occur during data fetching or processing. Any errors are displayed to the user with appropriate error messages.

## Server Side (Backend) 🛠️

### Routes:

- **GET /get:** Fetches Pokemons from the server. Supports pagination and fetching all Pokemons at once.

- **PUT /put:** Updates the capture status of a Pokemon. Requires the name of the Pokemon and whether it is captured or released.

- **Caching Mechanism:** 📦 The Pokedex Web Application employs a simple caching mechanism to store previously fetched Pokemons. This helps improve performance by reducing the number of database queries required to fetch data, especially when paginating through large datasets.

## Usage:

1. Clone the repository.
2. Navigate to the root directory of the project.
3. Set up a virtual environment using `python -m venv .venv`.
4. Activate the virtual environment.
5. Install dependencies using `pip install -r requirements.txt`.
6. Run the Flask application using `python app.py`.
7. Access the application in your web browser at `http://localhost:8080`.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
