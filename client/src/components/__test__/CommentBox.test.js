import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("contains text area and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
});

describe("", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "latest comment" },
    });
    wrapper.update();
  });

  it("can user type the in textarea", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("latest comment");
  });

  it("can submit the form", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
