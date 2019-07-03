import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";
import { isTSAnyKeyword } from "@babel/types";

describe("createCourseSucces", () => {
  it("should create a CREATE_COURSE_SUCCESS action", () => {
    // arrange
    const course = courses[0];
    const expectedActions = {
      type: types.CREATE_COURSE_SUCCESS,
      course
    };

    // act
    const action = courseActions.createCourseSuccess(course);

    // expect
    expect(action).toEqual(expectedActions);
  });
});
