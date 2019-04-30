import { shallowMount } from "@vue/test-utils";
import DescriptionComponent from "./../../../src/components/description.component.vue";

describe("Description component test", () => {
  it("Render default props when has no props", () => {
    const wrapper = shallowMount(DescriptionComponent);
    expect(wrapper.props().description).toMatch("");
  });
  it("Render passed props", () => {
    const wrapper = shallowMount(DescriptionComponent);
    expect(wrapper.props().description).toMatch("");
    const description = "Some text";
    wrapper.setProps({ description: description });
    expect(wrapper.props().description).toMatch(description);
  });
});
