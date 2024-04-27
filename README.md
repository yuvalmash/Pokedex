# Welcome to the Pokedex Web Application! 🌟

The Pokedex Web Application is a Flask-based web application designed to help you explore and capture your favorite Pokemons. With its intuitive interface and powerful features, you can easily browse through a vast collection of Pokemons and capture them to build your ultimate team! 🚀

## Client Side (Frontend) 💻

### Components:

- **Pokemon List:** 📋 The Pokemon list displays an infinitely scrolling list of Pokemons, including their names, numbers, and images. Instead of traditional pagination, the infinite scroll dynamically loads Pokemons in batches, or "pages," as the user scrolls down the list. Each page contains a predetermined number of Pokemons, ensuring smooth performance and efficient data loading.

- **Capture Pokemon Feature:** 🎮 The capture Pokemon feature enables you to capture or release Pokemons. Simply click on the "Capture"/"Not Captured" toggle button next to a Pokemon's name to mark it as captured or release it back into the wild. Please note that the capture feature currently works only within the same browser session and is not yet persistent across sessions.

- **Attribute Modal:** ℹ️ The attribute modal provides detailed information about a selected Pokemon, including its abilities, types, base stats, and more.

- **Local Storage:** 🗄️ The Pokedex Web Application utilizes local storage to store the list of fetched Pokemons and the current page number. By storing this data locally, the application reduces the number of queries to the database, resulting in improved performance and a smoother user experience.

- **Loader:** 🔄 The loader component displays a loading animation to indicate that the application is fetching data from the server. It appears while fetching Pokemons and disappears once the data is loaded.

- **Error Handling:** ❌ Error handling ensures smooth user experience by gracefully handling errors that may occur during data fetching or processing. Any errors are displayed to the user with appropriate error messages.

## Server Side (Backend) 🛠️

### Routes:

- **GET /get:** Fetches Pokemons from the server. Supports dynamically loading additional Pokemons as the user scrolls down the list.

- **PUT /put:** Updates the capture status of a Pokemon. Requires the name of the Pokemon and whether it is captured or released. 

  *Note: Currently, the capture feature is not fully functional as the capture status of a Pokemon is loaded along with its other attributes when fetched from the server. Additionally, captured Pokemons are not rendered on the page, making it impossible to capture or release them via the UI. However, this route is implemented to demonstrate best practices and will be fully utilized in future updates of the application.*

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
