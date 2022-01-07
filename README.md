<img alt="GitHub Followers" src="https://img.shields.io/github/followers/N1cholasSmith"> <img alt="GitHub License" src="https://img.shields.io/apm/l/vim-mode">  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/N1cholasSmith/social-network-api">  <img alt="GitHub Commit Activity" src="https://img.shields.io/github/commit-activity/w/N1cholasSmith/social-network-api">

# Social-Network-API
## Table of Content 

* [Description](#description)
* [Technlogies](#technologies)
* [Usage](#usage)
* [Installation](#installation)
* [Contributors](#contributors)
* [License](#license)
* [Contribution](#contribution)
* [Questions](#questions)

<a name="description"></a>
## 📝 Description
This is a Social Network back end application which is configured with working Express API & Mongoose Object Data Modeling to interact with a MongoDB database.The aim of this application is to demonstrate my understanding of how to build and structure an API for a social network. 

https://user-images.githubusercontent.com/88865022/148537800-be96b27d-86da-4a01-9ea9-f56e1e678729.mp4


<a name="technologies"></a>
## 🕹 Technologies used 
- JavaScript
- node.js
- Express.js
- MongoDB
- Mongoose
- Mongoose validator
- Moment.js

<a name="installation"></a>
## ⚙️ Installation 

1. Git clone my Social-Network-API repository onto your local machine and navigate to the file on your terminal. This can be done via GitBash or inside the Visual Studio Code Terminal.

2. For this application to function correctly, please ensure you have the latest or most stable version of Node.js. Once this is confirmed, run `npm install` to download the required dependencies.

3. To start the application, type the following command into the intergrated terminal:
    - `npm run start`

<a name="usage"></a>
## 🖥 Usage 
This application allows you to navigate different link routes that display data from the database. I reccomend using Insomnia to run the Social Network API as seen in the demo above.

- GET/POST routes: <br>
    `http://localhost:3001/api/users` <br>
    `http://localhost:3001/api/thoughts`<br>

- PUT/DELETE routes: <br>
    `http://localhost:3001/api/users/:id`<br>
    `http://localhost:3001/api/thoughts/:id` <br>

- POST/DELETE routes: <br>
    `http://localhost:3001/api/users/:id/friends/:friendId` <br>
    `http://localhost:3001/api/thoughts/:id/reactions` <br>

    - Please note you can GET, POST, PUT or DELETE a user, thought or reaction by adding its `/id` at the end of the link respective to field you would like to GET, POST, PUT or DELETE.    

<a name="contributors"></a>
## 👥 Contributors

*[Nicholas Smith](https://github.com/N1cholasSmith)* <br>
*The Univserity of Sydney | Trilogy Education Services* <br>

<a name="license"></a>
## 🔖 License

MIT License
Copyright (c) [2022] [Social Network API]
Permission is herby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limiation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject following coditions: 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MECHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OF OTHER DEALINGS IN THE SOFTWARE.  

---
<a name="contribution"></a>
## 🤝 How to Contribute

For information on how to contribute, please follow the guidlelines listed in [Contributor Covenant](https://www.contributor-covenant.org/).

<a name="questions"></a>
## ❓ Questions
If you have any questions, contact me via [email](nicholassmithsoftwareengineer@gmail.com). You can also find more of my work [here](https://github.com/N1cholasSmith).
