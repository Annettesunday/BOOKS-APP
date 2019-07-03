import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup);
function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render the Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it('should label submit buttton as "Save" when not saving', () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it('should label submit button as "Saving..." when saving', () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});


// Components are always mounted in React Testing Library - refer to React Testing Library docs
// Adv: you dont have to explicitly call expect
// Focus is on what the user sees
