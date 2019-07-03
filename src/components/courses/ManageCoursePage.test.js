import React from "react";
import { mount } from "enzyme";
import { authors, courses, newCourse } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";

// factory function to render our component

function render(args) {
  const defaultProps = {
    authors,
    courses,
    // Passed from react router in real app, so just stubbing in for test
    // Could also use to use MemoryRouter as shown in Header.test.js
    // or even wrap within react router, depending on whether
    // need to test React Router related behaviour
    history: {},
    saveCourse: jest.fn(),
    loadCourses: jest.fn(),
    loadAuthors: jest.fn(),
    course: newCourse,
    match: {}
  };

  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursePage {...props} />);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required");
});
