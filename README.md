# Covindex

This project is to showcase the spread of Covid-19, show news about covid and display a map to make comparisons between countries.

This project is available at https://covindex-dh2642-project.web.app/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

The project is set up with React and Redux for state-management. We've also implemented Material UI for the layout/design.

The main views of the application are these 5 pages.

/Pages/Homepage.js - Landing page, displaying global stats, News and Twitterfeed(todo).
/Pages/DetailPage.js - Detailed view with a graph and local news for selected country.
/Pages/ComparePage.js - A page where you can compare countries in a list, graphs(todo).
/Pages/MapPage.js - A page displaying a map where you can pick countrie from the interactive map.
/Pages/AccountPage.js - A page for login/signup.

---

/Components

We made different componenents that makes up the different pages and placed them in a separate folder.

---

/Redux/actions - This where we've placed all action-creators to change the application-state.

/Redux/reducers - This is where we've placed all the reducers that make up the application-state.

### Done

- Implemented Covid-API
- Implemented News-API
- Comparison Page
- Login/Sign Up
- Started implementing Material UI
- Interactable Map
- Added redux state-management with actions and reducers
- Firebase-deployment
- Added react-redux connection to Firebase
- Started using Trello to track different tasks

### Todo

- Overall design
- Design Logn/Sign up
- Implement Twitter-API
- Clean-up code, duplicate code etc.
- Show user-specific content
- Implement persistent-state for data in general
- Add a spinner-image/loading placerholder when waiting for data.
- Iterate on user-feeback.

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
