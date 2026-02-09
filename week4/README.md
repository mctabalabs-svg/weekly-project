
# Expense Tracker Lite

A lightweight interactive web app for tracking expenses.  
This project demonstrates **DOM selection, element creation, event handling, and live updates** in vanilla JavaScript.

---

## 🚀 Features

- **Add Expenses**  
  Enter a name, amount, and category, then add it to the list.
  
- **Delete Individual Expenses**  
  Each expense row has its own delete button.

- **Clear All**  
  Remove all expenses at once and reset the summary.

- **Live Summary Updates**  
  - Total amount of all expenses  
  - Number of items  
  - Highest expense (name + amount)  

- **Validation & Error Handling**  
  - Name must not be empty  
  - Amount must be greater than 0  
  - Errors are shown inline (no alerts)

---

## 🛠️ Technologies Used

- **HTML5** – Structure and UI
- **CSS3** – Basic styling
- **JavaScript (ES6)** – DOM manipulation and event handling

---

## 📂 Project Structure
-expense.html
-expense.js     
-README.md      

---

## 📖 How It Works

1. **Inputs**  
   - Expense name (text)  
   - Amount (number)  
   - Category (dropdown: Food, Transport, Bills, Shopping, Other)

2. **Buttons**  
   - **Add Expense** → Adds a new row with delete button  
   - **Clear All** → Clears the list and resets summary  

3. **Expense List**  
   - Displays each expense as:  
     `Name | Category | Amount | [Delete]`

4. **Summary Section**  
   - Updates automatically after every add/delete/clear

---

## ⚙️ Setup & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-tracker-lite.git


- Open expense.html in your browser.

📌 Future Improvements- Persistent storage using localStorage
- Category-wise totals
- Sorting/filtering options
- Improved styling with CSS frameworks
👨‍💻 AuthorDeveloped as part of a Weekend Assignment to practice DOM manipulation and event-driven programming in JavaScript.
