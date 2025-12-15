# Company Portfolio Website

This project is a **company portfolio website** built with **Node.js** and **Express**. It is designed to present the company's information, services, and content in a clean and organized way, using static assets served by Express.

---

## 🚀 Technologies Used

* **Node.js**
* **Express.js**
* **HTML / CSS / JavaScript**

---

## 📁 Project Structure

```
project-root/
│
├── app.js            # Main server file
├── package.json      # Project dependencies and scripts
|   .gitignore        # Ignore project files and folders
├── pages/            # HTML pages
│   └── index.html
├── public/           # Static files (CSS, JS, assets, fonts)
│   ├── css/
│   ├── js/
│   └── assets/
|   └── fonts/
└── README.md
```

---

## ⚙️ How to Run the Project

### 1️⃣ Install dependencies

```bash
npm i
```

### 2️⃣ Start the server

```bash
node app.js
```

Or, if you use nodemon:

```bash
npm run dev
```

### 3️⃣ Access in the browser

```
http://localhost:3000
```

---

## 📌 Features

* Static file serving using Express
* Organized folder structure
* Easy to extend with new pages and assets
* Suitable for company presentation and portfolio

---

## 🧩 Express Configuration Example

```js
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "home.html"));
});
```

---

## 📄 License

This project is for portfolio and presentation purposes.
