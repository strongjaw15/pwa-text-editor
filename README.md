# <Your-Project-Title>

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

Like this:

https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

![](https://img.shields.io/badge/License-MIT-green)

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Features

If your project has a lot of features, list them here.

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Visuals

## Links

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

MIT License

Copyright 2023 Corin Wenger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

Contributions will be considered case-by-case. If one submits a contribution, it will have a comment inculding the identity and credentials of the contributor, and a detailed message explaining the why, what, and how of the contribution.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

------------------------------------------------

------------------------------------------------

------------------------------------------------

# Unit 19 PWA Homework: Text Editor (Modified Edition)

## Before anything else

Do NOT include this README file in your submission! Also, you are supposed clone this repo for reference purposes only. Create a brand new repo for the homework, and then copy the files here into it (except for Assets, which isn't needed).

## Instructions

The web application from which the PWA will be created has already been built for you (and was intended to be). The main goal of this homework assignment is to properly set up and configure the web app so it can function as a PWA.

Make sure you post your final work to Heroku. You can use the [Heroku Deployment Guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide) if needed. There is no database component. 

Don't forget to make sure your root package.json file is set up for Heroku.

You will be modifying the files listed below. These are the same files that would need to be modified in the original homework, I've just tried to make things a bit easier to understand. None of the server files need to be touched.

In each file you will see TODO items in the comments. I've tried to give some added texture to each item to help as well.

## Files To Edit

- client/src-sw.js
- client/webpack.config.js
- client/src/database.js
- client/src/install.js

## Things To Note

- There is a package.json file in the root, and also in both the server and client directories. This is intentional, as we want each environment to have its own dependencies.

- Take a look at the package.json file in the root of the project, and at the scripts object inside it. You will see some new things going on. First, there is an "install" script. When you run `npm install` from the command line, this script will make sure that both of the interior package.json files have their dependencies installed. You'll see this approach used later when we build full MERN apps.

- Notice also a script named "start:dev". It uses a node package called concurrently to start up both your server and client environments at the same time when you are in development. So to test locally, just run `npm start:dev`.

- When you want to test how this will work in production, run `npm start`. Notice that this script then runs a build script in the client environment. In the client/package.json file, you'll see that the build script invokes webpack, and from there Webpack does its thing.

## How to Test

As you develop, you can run things using `npm start:dev`. When you think you have everything completed, then run `npm start`. This will initiate the build process. The app will then be running on port 3000. You'll see a button in the header of the app where you can install it as a PWA. Try it out!

Once everything works locally, deploy to Heroku and test again. You can even test on a mobile device if you want.

If you need to start from scratch and remove the existing PWA:

- Close the standalone browser window containing the PWA
- Delete the PWA from your hard drive 
- Kill the server session running in VS Code 
- In Chrome, go to localhost:3000, the app may or may not open again. If it does, open up the dev console, go to Application -> Service Works and click the Unregister Worker link.

## Mock-Up

The following animation demonstrates the application functionality:

![Demonstration of the finished Unit 19 Homework being used in the browser and then installed.](./Assets/00-demo.gif)

The following image shows the application's `manifest.json` file:

![Demonstration of the finished Unit 19 Homework with a manifest file in the browser.](./Assets/01-manifest.png)

The following image shows the application's registered service worker:

![Demonstration of the finished Unit 19 Homework with a registered service worker in the browser.](./Assets/02-service-worker.png)

The following image shows the application's IndexedDB storage:

![Demonstration of the finished Unit 19 Homework with a IndexedDB storage named 'jate' in the browser.](./Assets/03-idb-storage.png)


## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
