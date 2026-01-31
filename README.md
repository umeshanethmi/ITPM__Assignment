# IT3040 - ITPM Assignment 1

**Student Registration Number:** IT23861718

## Project Overview

This project contains automated test cases for testing the SwiftTranslator system (https://www.swifttranslator.com/), which converts Singlish input into Sinhala output. The tests are implemented using Playwright.

## Test Coverage

- **26 Positive Functional Test Cases** (Pos_Fun_0001 - Pos_Fun_0026)
- **11 Negative Functional Test Cases** (Neg_Fun_0001 - Neg_Fun_0011)
- **1 UI Test Case** (Pos_UI_0001)

### Categories Covered

- Sentence structures (simple, compound, complex)
- Interrogative and imperative forms
- Positive and negative sentence forms
- Daily language usage and greetings
- Word combinations and phrase patterns
- Tense variations (past, present, future)
- Mixed Singlish + English content
- Punctuation, currency, time formats
- Slang and informal language
- Input length variations (short, medium, long)

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd IT23861718-ITPM-Assignment-1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running the Tests

### Run all tests
```bash
npx playwright test
```

### Run tests with UI mode
```bash
npx playwright test --ui
```

### Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

### Run a specific test file
```bash
npx playwright test tests/assignment.spec.js
```

### View test report
```bash
npx playwright show-report
```

## Project Structure

```
IT23861718-ITPM-Assignment-1/
├── tests/
│   └── assignment.spec.js    # All test cases
├── playwright-report/        # HTML test reports
├── test-results/             # Test execution results
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## Test Case Naming Convention

- `Pos_Fun_XXXX` - Positive functional test cases
- `Neg_Fun_XXXX` - Negative functional test cases
- `Pos_UI_XXXX` - Positive UI test cases
- `Neg_UI_XXXX` - Negative UI test cases

## Author

IT23861718
