# Kiosk Service Dinkes

Repository for the Dinas Kesehatan Semarang self-service kiosk application. The backend is a Laravel app with Inertia.js rendering a React front-end from the `resources/js` tree.

## Overview

The kiosk provides patient registration and self-service health measurement flows (weight, glucose, blood pressure) through a guided UI. The V2 home screen is served by a controller that gathers the authenticated patient context and measurement state, then renders the `V2/Home` React page. The home view drives the popup-based flow for smart checkups, measurements, and tutorials.

## How it works

### Backend (Laravel controllers)

The main kiosk flow is orchestrated by the following controllers:

- **V2 home**: `App\Http\Controllers\v2\HomeController@index` loads the logged-in patient data, handles the `state` query param, and passes measurement context into the `V2/Home` page via Inertia. It also hydrates previous measurement data via `isGlucose`, `isBlood`, and `isConfirmation`.
- **Menu entry points**: `App\Http\Controllers\Home\MenuController@umum` renders the menu landing page for general patients, while `MenuController@index` drives the initial welcome page view.
- **Measurements**: `App\Http\Controllers\V2\Measure\PatientWeightController@store` persists weight/height measurements and redirects into the glucose flow. Similar controllers exist for glucose and tension.

Route bindings for these controllers live in `routes/web.php`, including the `/v2` kiosk entry point and the measurement endpoints.

### Front-end (resources/js)

The front-end is a React app mounted by Inertia. Key pieces:

- **Entry point**: `resources/js/app.jsx` wires up Inertia, resolves page components, and initializes the React root.
- **Kiosk home UI**: `resources/js/Pages/V2/Home.jsx` is the main kiosk screen. It imports popups for registration, measurement, confirmation, and guides, then renders the menu UI and manages popup state.
- **Shared UI**: Components and layout wrappers live under `resources/js/Components` and `resources/js/Layouts` for reuse across pages.

## Local development

1. Install PHP dependencies:
   ```bash
   composer install
   ```
2. Install JS dependencies:
   ```bash
   npm install
   ```
3. Run the Laravel server and Vite dev server:
   ```bash
   php artisan serve
   npm run dev
   ```

## Project structure

```
app/Http/Controllers/   # Laravel controllers
resources/js/           # Inertia + React front-end
routes/                 # Web route definitions
```

## Notes

- Environment variables for external services (e.g., OpenWeather key in the UI) should be configured in `.env` and referenced via Vite's `VITE_` prefixed variables.
