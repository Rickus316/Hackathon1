# Hackathon1 Recipe Finder

# Overview

This is an updated version of our group project that I decided to play around with and see what I could come up with.

Recipe Finder is our first hackathon project implementing an interactive Front-End web application using HTML, CSS, and Javascipt as part of Code Institute's AI Augmented Full Stack Software Developer Bootcamp. Our project's main goal was to successfully connect to an API. We decided to make a recipe finder website and connect it to a Recipe API so that users can easily search and find recipes.

The live project can found here: <a href="https://emilyhugs.github.io/Hackathon1/" target="_blank">Live Project</a>

<h2 text-align="center" id="TOC">Table of Contents</h2>

- [Hackathon1 - Recipe Finder](#hackathon1-recipe-finder)
  - [Overview](#overview)
  - [Table of Contents](#TOC)
- [Project Planning](#project-planning)
  - [UX Design](#ux-design)
    - [User Stories](#user-stories)
    - [Colors](#colors)
    - [Fonts](#fonts)
    - [Wireframes](#wireframes)
- [Features](#features)
  - [Navbar](#navbar)
  - [Searchbar](#searchbar)
  - [Random Search Button](#random-search-button)
  - [Meal Cards](#meal-cards)
  - [Footer](#footer)
  - [Responsive Design](#responsive-design)
- [Deployment](#deployment)
- [Testing](#testing)
- [Content](#content)
- [Media](#media)
- [AI Implementation and Orchestration](#ai-implementation-and-orchestration)
- [Future Enhancements](#future-enhancements)
- [Collaborators](#collaborators)

<p align="right"><a href="#hackathon1-recipe-finder">Back To Top</a></p>
<br>

## Project Planning

To plan our project, we used a [miro board](https://miro.com/) where we could all visualise our ideas and slack for huddles/chatting via message.

<p align="right"><a href="#hackathon1-recipe-finder">Back To Top</a></p>
<br>

## UX Design

## User Stories

The user stories for this project as well as their acceptance criteria and tasks can be found in the <a href="https://github.com/users/Emilyhugs/projects/8/views/1" target="_blank">project board</a>.

- As a user, I want to access the website on any device (desktop, tablet, mobile) so that I can find recipes conveniently regardless of where I am.
- As a user, I want to search for meals by ingredients, meal name, or category so that I can quickly find recipes that match my preferences or available ingredients.
- As a user, I want to click on a meal and view more details (e.g., ingredients, instructions, meal image) so that I can understand how to prepare the meal.
- As a user, I want to save my favourite recipes so that I can easily find and access them later.
- As a user, I want a random recipe generator button so that I can explore new meal ideas without having to search for them.
- As a user, I want to rate and review recipes so I can provide feedback and see others' experiences.
- As a user, I want to create a shopping list based on the recipes so that I can easily get the ingredients I need to make them.
- As a user, I want to share recipes on social media so that I can show my friends and family what I'm cooking.
- As a user, I want to see nutritional information for each recipe, so that I can make informed dietary choices.
- As a user, I want to add a new recipe so that I can contribute my own recipes to the collection.

(Requires back-end development - future scope)

- As a user, I want to see a carousel of trending recipes so that I can see what is popular now.
- As a user who wants to use the website while I cook, I want to have tick boxes/ a progress tracker to keep track of what I've done and visually see how much progress I've made.

## Colors

We wanted the colours to be visually appealing, warm, and fresh.
To ensure the colour palette was accessible for our users, we checked with [Colour Contrast Checker](https://colourcontrast.cc/)(also available as extension on Chrome Web Store).

![Colour palette](assets/images/recipe-finder-color-palette.png)

# Fonts

As with the color palette, we wanted the font to be visually appealing and easily readable for the users to ensure they have a positive experience visiting the website.
For this project, we used Merriweather Sans and Open Sans fonts and implemented them via [Google Fonts](https://fonts.google.com) using a direct import code within the style.css file.

# Wireframes

The wireframes for this project have been created using [Balsamiq](https://balsamiq.com/). They show the key features that guided us in creating our website, ensuring responsiveness across different screen sizes.

**Mobile Wireframe**

These wireframes show the initial landing page, the recipe cards, and the random meal generator.

![Mobile Wireframe](assets/images/mobile-wireframe.png)

**Tablet Wireframe**

The tablet wireframes are similar to the desktop wireframes, except that the recipe cards show 3 in a row instead of 4.

![Tablet Wireframe](assets/images/tablet-wireframe.png)

**Desktop Wireframes**

These wireframes show the initial landing page, the recipe cards, and the random meal generator.

![Desktop Wireframe](assets/images/desktop-wireframe.png)

<p align="right"><a href="#hackathon1-recipe-finder">Back To Top</a></p>
<br>

## Features

# Navbar

The navigation bar is a Bootstrap component and it allows for easy navigation around (although at the moment it isn't functional - it will be more helpful after future features are in place). The navbar also encorporates the favicon/logo for the website.

## Searchbar

The User can enter the recipe they want to find. Once they click search, the recipe API will return relevant recipes.

## Random search Button

We included this button so that the user can find a new recipe and be inspired by it instead of having to type something in the search bar.

## Meal Cards

When the user presses search or enter, relevant recipes appear in cards that show brief information and an image of the

## Footer

Our footer includes links to social media and some links to pages that we would include if we had more time.

## Responsive Design

Some responsive features include:

- The meal cards adjust dynamically to different screen sizes.

- On the randomly generated meal section, the ingredient and instructions dynamically adjust so the screen space is used better.

- On smaller screens, the random recipe button moves under the searchbar.

Here is what the website looks like on different screens:
![Responsiveness](assets/images/responsive-screen-mock-up.png)

<p align="right"><a href="#hackathon1-recipe-finder">Back To Top</a></p>
<br>

## Deployment

Deploying fairly on is a good idea so you can regularly check if there are any bugs/obvious design flaws within a browser and test the website's responsiveness using Dev Tools.

The steps to deploy are as follows:

- Go to the Settings tab of your GitHub repo.
- On the left-hand sidebar, in the Code and automation section, select Pages.
- Make sure the source is set to 'Deploy from Branch'.
- Make sure the main branch is selected.
- Make sure the folder is set to / (root).
- Under Branch, click Save.
- Go back to the Code tab and wait a few minutes before refreshing.
- On the right-hand side in the Deployments section click on 'github-pages'.
- The latest deployed link will appear at the top of the page.

<p align="right"><a href="#hackathon1-recipe-finder">Back To Top</a></p>
<br>

## Testing

We tested and debugged the site regularly throughout the process, mainly using Chrome Dev Tools on the browser preview (but also on deployed website) to quickly identify errors.

### Validator Testing

[HTML Validation](https://validator.w3.org/)

![HTML testing](assets/images/html-testing.png)

[CSS Validation](https://jigsaw.w3.org/css-validator/)

![CSS testing](assets/images/css-validator.png)

[JS Validation](https://jshint.com/)

![JS testing]()

### Lighthouse

![Lighthouse testing]()

## Content

- API: We used the API [TheMealDB](https://www.themealdb.com/) to retreive recipe information for our website.

- Recipe API website tutorial: We referred to this [youtube video](https://www.youtube.com/watch?v=opikz5x_1ak) by GeekProbin to wrap our heads around the project.

- Programming Languages: HTML, CSS, Javascript.

- Extra elements: We used Google Fonts, Bootstrap & fontawesome

## Media

- The icons in the header and footer were taken from [Font Awesome](https://fontawesome.com/)

- The favicon was generated by [favicon.io](https://favicon.io/favicon-generator/)

## AI Implementation and Orchestration

AI played a key role in helping develop the Recipe Finder app. It provided guidance on:

Building the Framework: AI helped structure the app using HTML for layout, CSS for responsive styling, and JavaScript for logic, specifically integrating the external API, managing the logic of making requests to the API, and dynamically displaying the fetched data. It also assisted with the fetch requests and how to structure URLs for searching and fetching random recipes.

UI and Design: AI provided suggestions for a responsive layout using CSS flexbox and for designing recipe cards in a grid format. We requested it to make the design mobile-first and prioritise this in the UI design aspect.

Additionally, the clear and useful prompts we provided to AI played a significant role in the success of this project. By framing questions and requests in a precise manner, we were able to get focused and actionable responses, which saved us time and made the development process smoother.

This collaboration with AI ensured we could add more features as the skeleton of the API was completed, allowing us to concentrate on design, styling, and fixing any errors. The main benefit, however, was the time saved. Using AI in this way ensured the app functions smoothly and is styled responsively.

## Future Enhancements

### Favourites Button

In the navbar, there will be a Favourites button. This button will allow users to save their favourite meals for easy access later. When the user clicks the button, the app will display a list of previously saved favourite meals.

How It Will Work:

- User Interaction: When a user clicks on a meal they like, they can click the Favourites button to save it to their favourites list.

- Accessing Favourites: By clicking the Favourites button in the navbar, users can view their saved meals.
  [When the user clicks the Favourites button, call addFavorite() with the current meal name]

- Persistent Storage: The meal names will be saved in localStorage, ensuring the favourites list remains even if the user refreshes or revisits the page.
  [Data is stored in the browser using localStorage. Using localStorage makes the favourites persistent even after a page reload. localStorage.setItem() saves data in the browser; it can be retrieved with getItem(). So, there is no loss of data]

- Easy Re-access: Clicking on a meal in the favourites list will automatically search for and display its details, so users don’t need to search again.

Display the Favourites List:

In the HTML:

- Dropdown menu in the navbar (which is clickable).
- Simple sidebar or modal that appears when the user clicks the Favourites button in the navbar.

### Filter Meals by Category

This feature will allow users to filter meals based on their chosen category (e.g., Vegetarian, Seafood, Dessert). By selecting a category, the app will display meals that belong to that specific category.

How It Will Work:

- User Interaction: The user selects a category from a dropdown or a list of available categories. Once selected, the app will filter and display meals from that category.

- Displaying Meals: After a category is selected, the function getMealsByCategory(category) runs to fetch and display the meals.

- Easy Re-access: Once meals are filtered by category, users can click on any meal to view its details, just as they would with a normal search.

Display the Category Filter:

In the HTML:

- A dropdown menu or buttons in the navbar where users can select a category.
- A sidebar or modal displaying available categories for users to choose from.

## Collaborators

Our lovely collaborators

<br>

<p>
<ul>
<li>[@Rickus316](https://github.com/Rickus316)</li>
<li>[@samira-hussein](https://github.com/samira-hussein)</li>
<li>[@Emilyhugs](https://github.com/Emilyhugs)</li>
</ul>
