# Angular-Item-List-with-API-Fetch-Sort-Filter
This is a simple Angular application that displays a list of items fetched from a public API. Users can sort and filter items based on various criteria. The project uses Angular, Bootstrap (or Angular Material), and HttpClient to provide a responsive and user-friendly interface.

# Features
Fetch items from a public API
Filter items based on text input
Sort items alphabetically (A-Z or Z-A)
Responsive design with Bootstrap 

# Getting Started
These instructions will help you set up and run the project locally.

# Prerequisites
Ensure you have the following installed:

Node.js (https://nodejs.org/) - Recommended version 14+

Angular CLI - You can install it globally via:
npm install -g @angular/cli

# Installation

Clone the repository:
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name

Install dependencies:
npm install

Run the application:
ng serve

Open the app in your browser:
Navigate to http://localhost:4200 to view the app in your browser.

File Structure:
src/app/item.service.ts: Contains the service to fetch data from the API.
src/app/item-list/item-list.component.ts: Component logic for displaying, sorting, and filtering items.
src/app/item-list/item-list.component.html: HTML template for displaying the item list.
src/app/item-list/item-list.component.css: Basic styling for the item list component.
src/app/app.module.ts: Main application module that imports necessary modules and declares components.

Usage
Search: Type in the search bar to filter items by title.
Sort: Use the dropdown to sort items alphabetically (A-Z or Z-A).

API
The project fetches data from JSONPlaceholder, a free API for testing and prototyping. Each item includes a title and body text.

Built With
Angular - Framework for building web applications
Bootstrap (or Angular Material) - For responsive UI components
RxJS - Reactive programming library
Contributing
If you'd like to contribute, feel free to make a pull request or open an issue.

Acknowledgments
JSONPlaceholder for the test API
Angular Documentation for the helpful guides and tutorials
