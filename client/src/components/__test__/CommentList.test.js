import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import CommentList from "components/CommentList";
let wrapper;
beforeEach(() => {
  const initialState = { comments: ["a comment", "b comment"] };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
it("Display all comments list", () => {
  expect(wrapper.find('li').length).toEqual(2);
});
it("Display all comments with text", () => {
  expect(wrapper.render().text()).toContain('a comment');
  expect(wrapper.render().text()).toContain('b comment');
});
