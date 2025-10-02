# Google Maps + TypeScript + Parcel Project

This project demonstrates how to integrate the **Google Maps JavaScript API** with **TypeScript** using **Parcel** as the bundler. It loads the Maps API dynamically, initializes a map, and adds markers for `User` and `Company` classes.

---

## 🚀 Features

* Built with **TypeScript** and **Parcel v2**.
* Environment variable support via `.env`.
* Dynamically loads **Google Maps API**.
* Example `User` and `Company` classes with random coordinates.
* Custom `CustomMap` wrapper class for managing markers.
* Uses `mapScriptLoader` utility to safely load the Google Maps API asynchronously.

---

## 📦 Installation

1.  Clone this repository:
    ```bash
    git clone [https://github.com/your-username/map-ts-parcel-project.git](https://github.com/your-username/map-ts-parcel-project.git)
    cd map-ts-parcel-project
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the project root:
    ```env
    API_KEY=YOUR_GOOGLE_MAPS_API_KEY
    ```
4.  Start the dev server:
    ```bash
    npm run start
    ```

By default, Parcel serves at `http://localhost:1234`.

---

## 🗺️ Project Structure

```bash
map-ts-parcel-project/
│
├── src/
│   ├── index.ts              # Entry point
│   ├── User.ts               # Example user class
│   ├── Company.ts            # Example company class
│   ├── CustomMap.ts          # Wrapper around google.maps.Map
│   ├── mapScriptLoader.ts    # Utility for loading Google Maps API
│
├── index.html                # Root HTML file
├── package.json
├── tsconfig.json
├── .env                      # Your Google Maps API Key (not committed)
└── README.md
