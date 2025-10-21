# 🎬 MovieGPT

MovieGPT is an AI-powered web application that helps users get intelligent suggestions and summaries about any movie they search for. With a clean and user-friendly interface, the app allows users to explore movie insights, suggestions, and overviews — all powered by Google's **Gemini API**.

<br/>

##  Features

-  **User Authentication**
  - Secure login and sign-up using **Firebase Authentication**
  - Protected routes for authenticated users only

-  **Browse & Stream**
  - Display of **Popular**, **Top Rated**, and **Upcoming** movies using **TMDB API**
  - Fully responsive and interactive UI

-  **AI Movie Recommender**
  - **Gemini API** integration to get movie suggestions by typing natural language like:
    - “Show me a thriller with a twist ending”
    - “I want a feel-good movie like Forrest Gump”

-  **Search Functionality**
  - Real-time movie search with intelligent results

-  **Netflix-Like UI**
  - Built with React and Tailwind CSS for a modern and responsive design

<br/>

##  Tech Stack

- **Frontend**: React, Tailwind CSS
- **Authentication**: Firebase Auth
- **AI Recommendation**: Gemini API (Google's Generative AI)
- **Movie Data**: TMDB (The Movie Database) API
- **Routing**: React Router DOM
- **State Management**: React-Redux 

<br/>

##  Screenshots

<img width="1920" height="883" alt="image" src="https://github.com/user-attachments/assets/1914d4ad-f89b-49bc-9842-b86fecfddc76" />
<img width="1906" height="853" alt="image" src="https://github.com/user-attachments/assets/4cd78e54-24b9-46d0-8bac-9852ae54779a" />
<img width="1887" height="860" alt="image" src="https://github.com/user-attachments/assets/17ca07c2-fde8-4865-9948-065d4eddb2a5" />


<br/>

##  Setup & Installation

```bash
# 1. Clone the repository
https://github.com/Chandrashekher1/MovieGPT.git
cd movieGPT

# 2. Install dependencies
npm install

# 3. Set up your environment variables
# Create a .env file and add:
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_TMDB_API_KEY=your_tmdb_key
REACT_APP_GEMINI_API_KEY=your_gemini_key

# 4. Start the development server
npm start
