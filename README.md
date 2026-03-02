
# Laptop Recommendation System (Web Application)

## Project Overview

This project is a browser-based **Laptop Recommendation System** developed using HTML, CSS, and JavaScript.  
It recommends the most suitable laptops based on user preferences such as **budget, RAM, storage capacity, and processor level**.

The system uses a custom scoring algorithm to rank laptops and display the top matches.

---

## Objective

To provide users with personalized laptop suggestions by evaluating multiple hardware parameters and calculating a match score.

---

## Key Features

- Budget input (Minimum ₹30,000 validation)
- RAM selection (8GB / 16GB)
- Storage selection (256GB / 512GB)
- Processor level selection (Basic / Medium / High)
- Dynamic recommendation generation
- Top 3 ranked results displayed
- Match score shown for transparency

---

## Recommendation Logic

Each laptop is evaluated using a weighted scoring mechanism:

- **Price Matching:** Closer price to user budget increases score  
- **RAM Match:** Exact match adds bonus score  
- **Storage Match:** Exact match adds additional score  
- **Processor Score:** Weighted importance for performance  

Additional Logic:
- Laptops within ₹20,000 above the user’s budget are considered  
- Results are sorted in descending order based on total score  
- Top 3 recommendations are displayed  

---

## Technologies Used

- HTML (Structure)
- CSS (Styling)
- JavaScript (Recommendation Logic & Dynamic Rendering)

This application runs entirely on the client side without requiring a backend.

---

## Project Structure

```text
laptop-recommendation-system/
│
├── index.html      # User Interface
├── style.css       # Styling
├── script.js       # Recommendation Logic
└── README.md

```

## Output Display

Each recommendation includes:

- Laptop Name  
- Price  
- RAM  
- Storage  
- Processor Score  
- Calculated Match Score  

---

## Developer

**Grishma C.D**
