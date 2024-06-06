# Caisse Event RS

This project is a simple cash register system for an event. It allows users to add products to a ticket and calculate the total price. There is also a reset button to clear the total.

## Features

- **Product Buttons**: Buttons for each product to add their price to the total.
- **Display Total**: Displays the total price of the ticket.
- **Reset Button**: Clears the total amount on the ticket.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/caisse-event-rs.git
    ```

2. Navigate to the project directory:
    ```bash
    cd caisse-event-rs
    ```

3. Open the `index.html` file in your browser to see the application in action.

## File Structure

- **index.html**: The main HTML file for the application.
- **src/js/caisse.js**: The JavaScript file containing the logic for the cash register.
- **src/css/reset.css**: CSS reset file to ensure consistent styling across browsers.
- **src/css/styles.css**: Custom CSS styles for the application.

## Usage

1. Open the `index.html` file in a web browser.
2. Click on the product buttons to add their prices to the total.
3. The total amount will be displayed in the "total" section.
4. Click the "reset ticket" button to clear the total amount.

## Future Implementations

In the future, we plan to expand the functionality of the cash register system with several new features:

1. **Visualization of Entered Items**: Users will be able to see a list of items they have added to the ticket, providing better transparency and the ability to review the ticket before finalizing it.

2. **Line Item Deletion**: Users will have the capability to delete individual items from the ticket, offering more flexibility and control over their purchases.

3. **Database Integration**: We will implement a feature to save tickets in a database, including details such as the content, total amount, payment method, date, and time. This will allow for better record-keeping and data analysis.

4. **Admin Interface**: An admin interface will be created, accessible via password protection. This interface will provide additional functionalities for managing the system.

5. **Product Management via Admin Interface**: Admin users will be able to create new products directly through the admin interface, simplifying the process of updating the product list.

6. **Sales Statistics Management**: The admin interface will also include tools for managing sales statistics, allowing users to view sales data by time range or day. This feature will provide valuable insights into sales trends and performance.

These future enhancements aim to make the cash register system more robust, user-friendly, and capable of meeting the needs of both customers and administrators.



