import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";
import { isTSAnyKeyword } from "@babel/types";
import { render } from "react-testing-library";

// factory function to call react components with default values

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
  return shallow(<CourseForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
  expect;
});

it("labels save button as 'Save' when not saving", () => {
    const wrapper = renderCourseForm();
    expect(wrapper.find("button").text()).toEqual("Save")
})

it("labels save button as 'Saving...' when saving", () => {
    const wrapper = renderCourseForm({saving: true});
    expect(wrapper.find("button").text()).toEqual("Saving...")
})
