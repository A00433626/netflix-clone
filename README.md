This project utilizes themoviedb.org API, which can be accessed here: https://www.themoviedb.org/documentation/api. A live version of the project can be viewable here: https://a00433626.github.io/netflix-clone/

To run this application locally, you can also fork and clone this repository. To install dependencies, navigate to the source directory:

npm install --save Startup the React application:

cd src/ && npm start

This will take you to the local server mostly 3000|5000.

The three components for this project are:

Banner.js Nav.js Row.js

I decided not to use Redux for this project because it was fairly small in scale, and managing state was not an issue with only three components.

Dependencies A quick rundown of some dependencies I used for this project:

react-router: React Router was implemented so that I could render a “detailed view” for movies. With a larger scale project, it would be more useful in rendering additional views. Axios: Promise based HTTP client for the browser and node.js.

Final Thoughts This was a FUN project, and I learned a lot from doing it. I ended up using DOM manipulation for some of the effects/animations.
