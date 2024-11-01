# Shopping List App

A shopping list application built with Node.js, Expo, and React Native, utilizing Firebase Firestore for data storage. This app allows users to create and view shopping lists with anonymous authentication to keep the experience simple and secure.

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## About the Project

**Shopping List App** is designed to help users quickly create, view, and manage shopping lists. The project leverages Firebase's anonymous authentication for a seamless, hassle-free user experience.

## Features

- Anonymous user authentication.
- Add and manage new shopping lists with items.
- View saved lists with persistent data storage using Firebase Firestore.

## Technologies Used

The project was developed with the following technologies:

- **Node.js**: Runtime environment for development.
- **Expo**: Framework and platform for React Native apps.
- **React Native**: Library for building mobile interfaces.
- **Firebase**: Used for authentication and Firestore (database).
- **React Navigation**: For navigation between screens.
- **React Native Paper**: UI components.
- **Async Storage**: For data persistence in React Native.

### Prerequisites

- Node.js (version 14 or later)
- Expo CLI (installed globally using npm)
- Expo Go app installed on your mobile device (available on [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) and the [App Store](https://apps.apple.com/us/app/expo-go/id982107777))

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/crrenatact/shopping-list-app.git
  
  
 2. Navigate to the project directory:
 
   cd shopping

 3. Install the dependencies:

 npm install


4. Start the development server:

npm start


5. Running on Mobile

    To run the app on an Android device, use:

    npm run android

    To run the app on an iOS device, use:

    npm run ios

Project Structure

shopping/
├── App.js                   # Main application file
├── package.json             # Project metadata and dependencies
├── components/              # Reusable components
│   ├── ShoppingLists.js      # Shopping lists component
│   ├── Welcome.js            # Welcome screen component
├── assets/                  # Images and other assets
└── ...


Dependencies

"dependencies": {
  "@expo/vector-icons": "^14.0.3",
  "@react-native-async-storage/async-storage": "^1.24.0",
  "@react-navigation/native": "^6.1.18",
  "@react-navigation/native-stack": "^6.11.0",
  "expo": "~51.0.28",
  "expo-status-bar": "~1.12.1",
  "firebase": "^10.14.1",
  "react": "18.2.0",
  "react-native": "0.74.5",
  "react-native-paper": "^4.9.2",
  "react-native-safe-area-context": "4.10.5",
  "react-native-screens": "3.31.1"
}

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

    Inspired by various online tutorials and documentation.


### Key Changes Made:
1. **Consistency**: Ensured all headers and lists follow Markdown syntax consistently.
2. **Clarity**: Provided clear sections with appropriate headings for features, installation, project structure, and dependencies.
3. **Code Blocks**: Used triple backticks for code blocks for better readability.



