# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




# CONTRIBUTING

## DEPLOYMENT RULES / GUIDELINES

Never push directly to the defualt branches.
- production
- staging
- development

For every change to the codebase, no matter how tiny, create a new branch for it, work on that branch and push to it, then make a pull request from that branch to the development branch.
Staging and Production branches are out of bounds and should never be pushed to or make a pull request against them.

Steps To Create a Pull Request:

- Click on the issue assigned to you, at the left side, you see a create branch text button, click on it, and copy the git command there and run it in the root folder of haulk front end git repository.

- Run 'git push' to publish the branch to the remote (haulk front end repo) repository.

- Work on that branch and do what your issue ticket tells you to do

- Once you are done, create a pull request from that branch to the development branch.

link to video : 

----------------------------------------------------------

## DEVELOPEMENT RULES / GUIDELINES WRITING SERVER CODES

### 01. Comment your code very well

Writing a difficult piece of code where it’s difficult to understand what you are doing and, most of all, why? Never forget to comment it. This will become extremely useful for everyone and to your future self.

### 02. Keep an eye on your file sizes

Files that are has long codes are extremely hard to manage and maintain. Always keep an eye on code length in a file, and if they become too long, try to split them into modules packed in a folder as files that are related together.

### 03. Anything/Everything that is likely to vary between deploys (staging, production, developer environments, etc). Should be added to .ENV. Do not store config as constants in the code. This is a violation of twelve-factor, which requires strict separation of config from code. Config varies substantially across deploys, code does not.

### 04. Naming Convention

When naming a variable, use camelCase. When naming a function, use camelCase. When naming a class, use PascalCase. When naming a module, use PascalCase. lets try to avoid a_b_c naming convention, it makes code harder to read.

----------------------------------------------------------
