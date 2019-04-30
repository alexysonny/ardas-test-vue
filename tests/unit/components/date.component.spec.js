import { shallowMount } from "@vue/test-utils";
import DateComponent from "./../../../src/components/date.component.vue";

describe("Date component test", () => {
  it("Render default props.", () => {
    const wrapper = shallowMount(DateComponent);
    expect(wrapper.props().date).toMatch("");
  });
  it("Render passed props", () => {
    const wrapper = shallowMount(DateComponent);
    const date = "2015-04-19T06:50:27";
    expect(wrapper.props().date).toMatch("");
    const dateString = new Date(date).toDateString();
    wrapper.setProps({ date });
    expect(wrapper.vm.getDate).toMatch(dateString);
  });
});
