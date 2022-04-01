# Exercism User's Testimonials Project

## Description

- This project is for Exercism's project for hiring.
- The task is to create a page which lists all the testimonials the user has given.

## Functionality

- The functionality is implemented using React and vanilla JavaScript. As the states and props of components are not too complicated, Redux or context are not being applied for the sake of simplicity.
- The functionality of the header or main navigation bar is not supposed to be expected in this project as per project description.

## Styling

- Styling is done using only plain CSS without styled components, Tailwind 3 or other technologies. Due to this reason and the purpose of achieving the design that is exactly the same as the one shown in Figma, a lot of hard coding and custom class names are being used. Class names are carefully chosen to make them easier to follow. Responsiveness is neglected as more procedures on its own UI design are necessary.

## Notes

- Axios is used to fetch all the API data.
- Moment is used to manipulate time.
- API calls are tested using Jest unit testing as most of the components are updated mainly from server-side data.
