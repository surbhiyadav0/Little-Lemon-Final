# Little Lemon Restaurant Web App

A modern, responsive web application for the Little Lemon Mediterranean restaurant in Chicago. Built with React and featuring semantic HTML, client-side validation, and comprehensive unit tests.

## Features

- **Responsive Design**: Optimized for both mobile and desktop devices
- **Semantic HTML**: Proper use of semantic tags for accessibility
- **Client-side Validation**: Comprehensive form validation with user feedback
- **State Management**: Parent component manages available times state
- **Unit Tests**: Full test coverage for form components and validation
- **Modern UI/UX**: Clean, professional design following modern design principles

## Project Structure

```
src/
├── Components/
│   ├── LittleLemon.js          # Main app component
│   ├── BookingForm.js          # Reservation form component
│   ├── Hero.js                 # Hero section component
│   ├── Specials.js             # Special dishes showcase
│   ├── Testimonials.js         # Customer reviews
│   ├── About.js                # Restaurant story
│   ├── Footer.js               # Footer with navigation
│   ├── __tests__/
│   │   └── BookingForm.test.js # Unit tests
│   └── *.css                   # Component stylesheets
├── App.js                      # Main app entry point
└── index.js                    # React root
```

## Technical Requirements Met

### ✅ UI/UX Design
- Modern, professional restaurant website design
- Responsive layout for all device sizes
- Consistent color scheme and typography

### ✅ Semantic HTML
- Proper use of `<section>`, `<article>`, `<nav>`, `<main>`, `<footer>`
- ARIA labels and roles for accessibility
- Semantic form structure with proper labels

### ✅ Responsive Design
- Mobile-first approach with CSS Grid and Flexbox
- Media queries for breakpoints at 768px and 480px
- Optimized layouts for mobile, tablet, and desktop

### ✅ Meta Tags & Open Graph Protocol
- Comprehensive meta tags for SEO
- Open Graph Protocol tags for social media sharing
- Twitter Card support
- Proper viewport and theme-color settings

### ✅ Component Architecture
- `BookingForm` is a child component
- Parent component (`LittleLemon`) manages available times state
- Props passed down for state management

### ✅ Form Validation
- Client-side validation for all form fields
- Real-time error feedback
- Validation for email, phone, date, and required fields
- User-friendly error messages

### ✅ Unit Testing
- Comprehensive test suite for `BookingForm` component
- Tests for form rendering, validation, and submission
- Mock functions for external dependencies
- High test coverage for all functionality

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests

```bash
npm test
```

This will run the test suite and show coverage information.

### Building for Production

```bash
npm run build
```

## Key Components

### LittleLemon (Parent Component)
- Manages the `availableTimes` state
- Provides `updateTimes` function to child components
- Coordinates all restaurant sections

### BookingForm (Child Component)
- Receives `availableTimes` and `updateTimes` as props
- Implements comprehensive client-side validation
- Handles form submission and success states
- Updates parent component when date changes

## Validation Rules

- **Date**: Required, cannot be in the past
- **Time**: Required, must be from available times
- **Guests**: Required, must be between 1-10
- **Name**: Required, minimum 2 characters
- **Email**: Required, must be valid email format
- **Phone**: Required, must be valid phone number format

## Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus indicators
- Screen reader friendly content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.
