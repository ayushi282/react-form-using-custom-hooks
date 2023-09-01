

Conditional Logic Form with Redux and Custom Hooks
Objective: Create a form in React that displays fields based on conditional logic using Redux for state management and custom Hooks for logic encapsulation.

Features:

Form Interface:

Predefined Fields: Start with a predefined set of fields (e.g., Dropdown: "Are you employed?", Textbox: "Company Name").
Conditional Logic: The "Company Name" field should only appear if "Yes" is selected in the "Are you employed?" dropdown.
Validation: Validate fields based on rules (e.g., "Company Name" should not be empty if shown).
Submission: On submission, display an error if validation fails, or a summary of the data if successful.
State Management with Redux:

Form State: Store the form data and its visibility state in Redux.
Actions & Reducers: Implement actions for updating field values, toggling field visibility, and handling form submission.
Custom Hooks:

useConditionalLogic: A hook that determines the visibility of fields based on other field values.
useFormValidation: A hook that validates the form data based on predefined rules.
Challenge Elements:

Dynamic Component Rendering: Display components based on conditional logic.
State Management Complexity: Integrate Redux to handle form state, especially with dynamically shown/hidden fields.
Custom Hooks Creation: Design hooks for specific purposes, ensuring they are modular and reusable.
