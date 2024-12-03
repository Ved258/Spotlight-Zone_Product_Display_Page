import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Spotlight-Zone Product Display Page';

  // Initial list of products with model property (string or number)
  products = [
    { name: 'Laptop', model: 'X123', price: 50000, Qty: 5, totalPrice: 50000 * 5, available: true },
    { name: 'Mobile', model: 12345, price: 15000, Qty: 6, totalPrice: 15000 * 6, available: false },
    { name: 'Tablet', model: 'T500', price: 25000, Qty: 100, totalPrice: 25000 * 100, available: true },
  ];

  // New product object with model as string or number
  newProduct = {
    name: '',
    model: '',  // Model can be a string or number
    price: 0,
    Qty: 0,
    totalPrice: 0,
    available: true,
  };
productForm: any;

  // Method to add a new product
  addProduct(): void {
    // Validate product details before adding
    if (this.newProduct.name && this.newProduct.price > 0 && this.newProduct.Qty > 0) {
      // Calculate total price
      this.newProduct.totalPrice = this.newProduct.price * this.newProduct.Qty;

      // Push the new product to the products array
      this.products.push({ ...this.newProduct });

      // Reset the form after adding the product
      this.resetForm();
      alert('Product added successfully!');
    } else {
      alert('Please enter valid product details!');
    }
  }

  // Method to reset the form fields
  resetForm(): void {
    this.newProduct = {
      name: '',
      model: '',  // Reset the model field
      price: 0,
      Qty: 0,
      totalPrice: 0,
      available: true,
    };
  }

  // Method to log product details
  logProductDetails(product: any): void {
    alert(
      `Product Details:\n\nName: ${product.name}\nModel: ${product.model}\nPrice: ₹${product.price}\nQuantity: ${product.Qty}\nTotal Price: ₹${product.totalPrice}\nAvailability: ${
        product.available ? 'In Stock' : 'Out of Stock'
      }`
    );
  }

  // Method to update total price when quantity or price changes
  updateTotalPrice(): void {
    this.newProduct.totalPrice = this.newProduct.price * this.newProduct.Qty;
  }
}
