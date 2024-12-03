Spotlight-Zone Product Display Page:
An Angular-based product management application that allows users to view, add, and interact with products dynamically. The page highlights product details such as name, model, price, quantity, total price, and availability, making it a comprehensive tool for inventory display and management.

Features:
Display products with details:
Name, Model, Price, Quantity, Total Price, and Availability.
Add new products dynamically through a form.
Highlight out-of-stock products for better visibility.
View detailed information about any product.
Real-time total price calculation for new products.
Responsive design for seamless usage across devices.
Technologies Used
Frontend: Angular 15+
Styling: CSS with Google Fonts
Language: TypeScript
Getting Started
Prerequisites
Node.js (v16+ recommended)
Angular CLI (v15+)
Installation
1.Clone the repository:

Copy code
git clone https://github.com/username/spotlight-zone-product-display.git
2.Navigate to the project directory:

Copy code
cd spotlight-zone-product-display
3.Install dependencies:

Copy code
npm install
Usage
Run the Application
Start the Angular development server:


Copy code
ng serve
Open your browser and navigate to http://localhost:4200.

Add New Products
Fill out the form with details such as:
Product Name
Model (string or number)
Price and Quantity
Availability (In Stock/Out of Stock)
Submit the form to add the product to the table.
View Product Details
Click the View Details button for any product to see an alert with detailed information.
Code Overview
Key Files and Directories
src/app/app.component.ts: Contains the core logic for adding and displaying products.
src/app/app.component.html: Template for the product display page and form.
src/app/app.component.css: Styles for the page layout and components.
Main Methods
addProduct():
Validates and adds new products to the list.
Resets the form after submission.
resetForm():
Clears the input fields in the form.
logProductDetails(product):
Displays product details in an alert.
updateTotalPrice():
Calculates and updates the total price dynamically.
Screenshots
1. Product Display Table
 ![Screenshot (296)](https://github.com/user-attachments/assets/ebee2e90-e8da-4b1d-9882-419e01ec2c1f)

Future Enhancements
Add sorting and filtering options for the product table.
Integrate a backend API for storing and managing products.
Implement pagination for better scalability.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add a new feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
Contact
For any queries or suggestions, please reach out to vedantdorle13@gmail.com
