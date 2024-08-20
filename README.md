# Getting Started with Job Info website


## Technologies used:

- React (frontend framework).
- React Router Dom (for project navigation).
- TypeScript (for type safety).
- Material UI (as UI library).
- Material Icons.
- Axios (to handle api integrations).
- i18next (to handle translations).

## File Structure:

I have made sure that all files are categorized in a reasonable manner.
Here is the list of the folders inside src and the reason for them:

- ### helpers: 
  - contains the types folder which contains all the types related to that api, the response and the results etc...
  - contains the file job.ts which contains the class that calls that api.

- ### utils:
  - contains the functions which containing logic that might be redundant.

- ### translation: 
  - inside it you'll find all the handling related to the translations of the page, including the JSON files and the i18n setup.

- ### pages:
  - All pages that are called in the App.tsx file will be there.

- ### components:
  - All the components which used in the pages files are included there and categorized, As well as the Navigation folder which contains the header and footer which used directly in the App.tsx file.

## What I made in this project:

- Created 2 pages:
  - The home page:
    - includes the jobs list, with a functional pagination that will save the behavior even if you refresh the page (used searchParams for this).
    - a filter to search for jobs by their title, it will also prevent the search from resetting when user refresh the page (also used searchParam to handle that).

  - Job information page:
    - includes the specific job information which user clicked on.
    - includes the jobs list section on the right which contains a functional pagination which is connected to the searchParams.

- I have made sure that the page is fully responsive and appropriate for small and large screen sizes.

- Added the translation functionality and connect it with the local storage so the behavior of the user will be saved.

- **Extra work:** I have added a custom theme and provided the dark theme to the project, and connected it to local storage so the behavior of the user will be saved.


## Important notes to mention:

- because the project scale is small, I didn't have to use state management tools (ex: `Redux`), the local states was more than enough.

- I have Added extra functionality which is the dark theme, and for that I have used the theme feature provided by MUI, and I had to use context for that so I can apply the theme on the whole project.

- I have made all the components to be reusable and you will notice that I'm modifying the props of the MUI elements outside of the component (In the parent component).

- I was thinking about using the useQuery to cache the data of the API, but regarding the the small scale of the project, I have made the default calls.

## **To run the project on your local machine, you'll need to add the .env.local file in the project repo, I will provide you with the env variables in the email**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



**Note: this is a one-way operation. Once you `eject`, you can’t go back!**



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
