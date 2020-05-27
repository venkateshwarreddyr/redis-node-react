import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

beforeEach(()=>{
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
    status: 200,
    response:[{body:'abcdef'}, {body:'efghti'}]
  })
})
afterEach(()=>{
  moxios.uninstall()
})
it("can fetch list and display items", (done) => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  wrapper.find('.fetch-comments').simulate('click');
  //tiny pause
  moxios.wait(()=>{
    wrapper.update()
    expect(wrapper.find('li').length).toEqual(2);
    wrapper.unmount();
    done();
  })
});
