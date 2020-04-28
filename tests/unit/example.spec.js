import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("NavBar.vue", () => {
  it("renders props.msg when passed", () => {
    const name = "new message";
    const wrapper = shallowMount(NavBar, {
      propsData: { name }
    });
    expect(wrapper.text()).toMatch(name);
  });
});
