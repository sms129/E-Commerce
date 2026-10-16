# 🛒 E-Commerce Backend API & Application

A modern and scalable e-commerce backend platform built using Node.js, Express.js, Mongoose, and MongoDB. The API features secure authentication, cart/wishlist management, dynamic invoice creation with VAT and shipping calculations, SSLCommerz payment integration, and a comprehensive admin dashboard summary.

---

## 📌 Project Status
- **Backend API:** Completed & Fully Functional ✅
- **Frontend Application:** Upcoming / In Development 🚀

---

## ✨ Backend Features

- **User Authentication & Authorization:** Secure JWT-based signup, login, and role-based access control.
- **Product Management:** Full CRUD operations, category/brand filtering, and stock management.
- **Cart & Wishlist:** Complete shopping cart management and item wishlist support.
- **Order & Invoice Generation:** Automated calculation of product prices, 15% VAT, and shipping charges, saving the final `payable` amount to the database.
- **Payment Gateway Integration:** Secure payment processing integrated via **SSLCommerz**.
- **File Management:** Local file storage handled via `multer` with sanitized, timestamp-prefixed naming conventions.
- **Admin Dashboard Summary:** Aggregated analytics using MongoDB `$facet` and `$group` operators to track total users, products, orders, successful income revenue, and delivery statuses.

---

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database & ODM:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **File Upload:** Multer
- **Payment Gateway:** SSLCommerz
