import { shallowMount } from "@vue/test-utils";
import EffortItem from "./../../../src/components/effortItem.vue";

describe("Effort item testing", () => {
  it("Render default props.", () => {
    const wrapper = shallowMount(EffortItem);
    expect(wrapper.props().title).toMatch("");
    expect(wrapper.props().time).toBe(0);
  });
  it("Render passed props.", () => {
    const wrapper = shallowMount(EffortItem);
    const effortObj = {
      title: "some title",
      time: 2
    };
    wrapper.setProps(effortObj);
    expect(wrapper.props().time).toBe(effortObj.time);
    expect(wrapper.props().title).toMatch(effortObj.title);
  });
});
