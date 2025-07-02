# EAD-Project-ChatApp

A modern, real-time chat application built with React, Node.js, Express, and MongoDB. This project enables users to communicate instantly with text and images, manage profiles, and enjoy a customizable, responsive interface.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User authentication (JWT-based)
- Real-time messaging with Socket.IO
- Profile management and image uploads (Cloudinary)
- Online/offline user indicators
- Unread message badges
- Responsive UI with theme customization (Tailwind CSS, DaisyUI)
- Persistent user preferences

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, DaisyUI, Zustand, Socket.IO-client
- **Backend:** Node.js, Express, Socket.IO, Mongoose
- **Database:** MongoDB
- **Image Storage:** Cloudinary
- **Version Control:** GitHub

---

## Screenshots

<!-- Add screenshots here if available -->
<!-- ![Screenshot](screenshots/chatapp.png) -->

---

## Installation

### Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB (local or cloud)
- Git

### Steps

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/EAD-Project-ChatApp.git
   cd EAD-Project-ChatApp
   ```

2. **Install dependencies**

   - Frontend:

     ```sh
     cd frontend
     npm install
     ```

   - Backend:
     ```sh
     cd ../backend
     npm install
     ```

3. **Configure environment variables**

   - Copy `.env.example` to `.env` in both `frontend` and `backend` folders.
   - Fill in required values (MongoDB URI, JWT secret, Cloudinary keys, etc.).

4. **Run the application**

   - Backend:
     ```sh
     npm run dev
     ```
   - Frontend (in a new terminal):
     ```sh
     npm run dev
     ```

5. **Access the app**

   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Usage

- Register a new account or log in.
- Start chatting with other users in real time.
- Update your profile and customize your theme.

---

## API Documentation

See [API.md](API.md) or the `/docs` folder for detailed API endpoints, request/response formats, and authentication details.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

**Made with ❤️ for everyone**
