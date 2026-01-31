# IT3040 - ITPM Assignment 1

**Student Registration Number:** IT23861718  
**Submission Deadline:** 1st February 2026  
**Course:** BSc (Hons) in Information Technology - Year 3

---

## Project Overview

This project contains automated test cases for testing the **SwiftTranslator** system (https://www.swifttranslator.com/), which converts **Singlish input into Sinhala output**. The tests are implemented using **Playwright**.

### Objective (Option 1 - Sinhala Language)
To assess how accurately the SwiftTranslator system converts Singlish input into Sinhala output, and how stable and usable the user interface is under different conditions.

> **Note:** This assignment does not test backend APIs, performance, or security.

---

## Test Coverage Summary

| Category | Count |
|----------|-------|
| **Positive Functional Test Cases** | 26 (Pos_Fun_0001 - Pos_Fun_0026) |
| **Negative Functional Test Cases** | 11 (Neg_Fun_0001 - Neg_Fun_0011) |
| **UI Test Cases** | 1 (Pos_UI_0001) |
| **Total Test Cases** | **38** |

---

## Categories Covered (As Per Assignment Requirements)

### Sentence Structures
- ✅ Simple sentences
- ✅ Compound sentences (two ideas joined)
- ✅ Complex sentences (cause/effect, conditions)

### Interrogative and Imperative Forms
- ✅ Interrogative (questions)
- ✅ Imperative (commands)

### Positive and Negative Sentence Forms
- ✅ Positive forms
- ✅ Negative forms

### Daily Language Usage
- ✅ Common greetings, requests, and responses
- ✅ Polite vs informal phrasing
- ✅ Frequently used day-to-day expressions

### Word Combinations and Phrase Patterns
- ✅ Multi-word expressions and frequent collocations
- ✅ Joined vs segmented word variations

### Grammatical Forms
- ✅ Tense variations (past, present, future)
- ✅ Negation patterns
- ✅ Singular/plural usage and pronoun variations
- ✅ Request forms with varying politeness

### Input Length Variation
- ✅ Short inputs (S): ≤ 30 characters
- ✅ Medium inputs (M): 31–299 characters
- ✅ Long inputs (L): ≥ 300 characters

### Mixed Language Content (Singlish + English)
- ✅ English technical/brand terms embedded in Singlish
- ✅ Common English words that should remain unchanged
- ✅ English abbreviations and short forms

### Punctuation, Numeric Formats, and Text Formatting
- ✅ Inputs containing punctuation marks
- ✅ Currency, time formats, dates, and units
- ✅ Multiple spaces, line breaks, and paragraph inputs

### Informal Language
- ✅ Slang and colloquial phrasing

### UI Testing
- ✅ Real-time output updating behavior

---

## Test Case Naming Convention

| Prefix | Description |
|--------|-------------|
| `Pos_Fun_XXXX` | Positive functional test cases |
| `Neg_Fun_XXXX` | Negative functional test cases |
| `Pos_UI_XXXX` | Positive UI test cases |
| `Neg_UI_XXXX` | Negative UI test cases |

---

## Input Length Types

| Type | Character Count |
|------|-----------------|
| **S** (Short) | ≤ 30 characters |
| **M** (Medium) | 31–299 characters |
| **L** (Long) | ≥ 300 characters |

---

## Standard Execution Steps (Functional Tests)

1. Navigate to https://www.swifttranslator.com/
2. Enter the Singlish text in the "Singlish" input field
3. Observe that the Sinhala output is generated **automatically in real-time**
4. Record the generated Sinhala output as the **Actual Output**

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/umeshanethmi/ITPM__Assignment.git
   cd ITPM__Assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

---

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

### Run only positive functional tests
```bash
npx playwright test --grep "Positive Functional"
```

### Run only negative functional tests
```bash
npx playwright test --grep "Negative Functional"
```

### Run only UI tests
```bash
npx playwright test --grep "UI Tests"
```

### View test report
```bash
npx playwright show-report
```

---

## Project Structure

```
IT23861718/
├── tests/
│   └── assignment.spec.js    # All test cases (26 Positive + 11 Negative + 1 UI)
├── playwright-report/        # HTML test reports (auto-generated)
├── test-results/             # Test execution results
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
├── IT23861718_GitHub_Link.txt # GitHub repository link
└── README.md                 # This file
```

---

## Excel Template Metadata (Appendix 2)

Each test case includes the following metadata for filling the Excel template:

1. **Input Type / Domain** (choose ONE):
   - Daily language usage
   - Greeting / request / response
   - Word combination / phrase pattern
   - Mixed Singlish + English
   - Slang / informal language
   - Typographical error handling
   - Names / places / common English words
   - Punctuation / numbers
   - Formatting (spaces / line breaks / paragraph)
   - Empty/cleared input handling

2. **Sentence / Grammar Focus** (choose ONE):
   - Simple sentence
   - Compound sentence
   - Complex sentence
   - Interrogative (question)
   - Imperative (command)
   - Present tense / Past tense / Future tense
   - Negation (negative form)
   - Pronoun variation
   - Plural form

3. **Input Length Type** (choose ONE):
   - S (≤30 characters)
   - M (31–299 characters)
   - L (≥300 characters)

4. **Quality Focus** (choose ONE):
   - Accuracy validation
   - Robustness validation
   - Formatting preservation
   - Real-time output update behavior

---

## Author

**IT23861718**

---

## Repository Link

🔗 **GitHub:** https://github.com/umeshanethmi/ITPM__Assignment
