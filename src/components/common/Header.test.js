import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

// Note with shallow render you search for the React Component tag
it("contains 3 NavLinks via shallow r", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

// Note with mount render you search for the final rendered HTML since it generates the final DOM
// We also need to pull in React Router's MemoryRouter for testing since the Header expects to have React
// Router's props passed in
it("contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;
  expect(numAnchors).toBe(3)
});
