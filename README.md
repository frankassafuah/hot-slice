# HOT SLICE

This is a simple pizza ordering application built with React. Users can browse a menu of pizzas, add items to a cart, and place orders without needing to create an account. The app interacts with a backend API to fetch the menu and send orders.

## Features

### Users
- No user accounts or login required
- Users input their name, phone number, and address before placing an order
- Optional: Provide GPS location for easier delivery

### Menu
- Dynamic pizza menu loaded from an API
- Users can browse and select multiple pizzas

### Cart
- Users can add multiple pizzas to a cart
- Review cart before placing an order

### Order
- Simple order form requiring name, phone number, and address
- Option to mark order as "priority" for an additional 20% of the cart price
- Orders are sent via a POST request to the API
- Payment is made on delivery (no payment processing in the app)
- Each order receives a unique ID for lookup
- Users can mark their order as "priority" even after it has been placed

## Pages

### Homepage
- Introduction to the app
- Navigation links to the menu and order lookup

### Pizza Menu
- Displays the list of available pizzas
- Option to add pizzas to the cart

### Cart
- Shows the selected pizzas
- Option to adjust quantities or remove items
- Proceed to place an order

### Placing a New Order
- Form to input user details (name, phone number, address)
- Option to mark order as "priority"
- Submit order to the API

### Looking Up an Order
- Input order ID to view order details
- Option to mark order as "priority" if not already done

## Technologies Used

- **Frontend:**
  - React.js
  - Redux Toolkit
  - React Router
- **Styling:**
  - Tailwind Css

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/frankassafuah/hot-slice.git
   cd hot-slice
