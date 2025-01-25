🎶 Music Streaming Application
A web-based music streaming application that allows users to enjoy their favorite tracks, create playlists, and discover new music. Built with a focus on user experience, the app offers easy signup, a seamless login, and a smooth listening experience.

The project is live on : https://muzic-three.vercel.app/

🚀 Features
User Authentication

Signup: Users can create an account with basic information.
Login: Registered users can log in securely.
Music Playback

Play Music: Stream high-quality music with controls for play, pause, and volume adjustment.
Playlists: Users can create, edit, and delete playlists to organize their favorite tracks.
Search Functionality

Song Search: Allows users to search for specific songs by title, artist, or album.
🛠️ Tech Stack
Frontend: React, CSS, HTML
Backend: Node.js, Express
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
📝 Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/yashk6615/muzic.git
cd muzic
Install dependencies for both client and server:

bash
Copy code
cd muzic_frontend
npm install
cd ../muzic_backend
npm install
Environment Variables:

Create a .env file in the server directory.
Add the following variables:
makefile
Copy code
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
Start the Application:

Run both client and server concurrently or in separate terminals:
bash
Copy code
cd muzic_frontend
npm start
bash
Copy code
cd muzic_backend
npm start
Access the Application: Open http://localhost:3000 in your browser.

📂 Project Structure
plaintext
Copy code
music-streaming-app
├── muzic_frontend               # Frontend files (React)
└── muzic_backend               # Backend files (Node.js, Express)
    └── models           # Database models (e.g., User, Playlist, Song)
    └── controllers      # Request handlers
    └── routes           # API routes
🤝 Contributing
Feel free to submit issues, create pull requests, or reach out if you have ideas to improve the application.


