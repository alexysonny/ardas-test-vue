import { shallowMount } from "@vue/test-utils";
import HeaderComponent from "./../../../src/components/header.component.vue";

describe("Header component testing", () => {
  it("Not show Back button", () => {
    const $route = {
      name: ""
    };
    const wrapper = shallowMount(HeaderComponent, {
      mocks: {
        $route
      }
    });
    expect(wrapper.vm.isShowBackBtn).toBe(false);
  });
  it("Show Back button", () => {
    const $route = {
      name: "edit"
    };
    const wrapper = shallowMount(HeaderComponent, {
      mocks: {
        $route
      },
      stubs: ["router-link"]
    });
    expect(wrapper.vm.isShowBackBtn).toBe(true);
  });
});
