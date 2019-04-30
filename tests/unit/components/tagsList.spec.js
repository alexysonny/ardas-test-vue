import { shallowMount } from "@vue/test-utils";
import TagsList from "./../../../src/components/tagsList.vue";

describe("Tags List components testing", () => {
  it("Renders default props", () => {
    const wrapper = shallowMount(TagsList);
    expect(wrapper.props().tags).toEqual([]);
  });
});
