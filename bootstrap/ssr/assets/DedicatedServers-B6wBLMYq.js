import { ref, watch, onMounted, reactive, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vModelRadio, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseEqual, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-CBee71Sd.js";
import "./SVGCheck-CvXhrTnC.js";
import { CpuChipIcon, WifiIcon, CloudIcon, BanknotesIcon, ServerStackIcon, HeartIcon } from "@heroicons/vue/24/outline";
import { CheckIcon } from "@heroicons/vue/20/solid/index.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Faq-0Pk9WOO1.js";
import "./ComputePlanSelector-B0TBxJUy.js";
import DedicatedPlanSelector from "./DedicatedPlanSelector-CXKeaSTL.js";
import { Head } from "@inertiajs/vue3";
import "./SectionTitle-CZQPTZ98.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "./SectionBorder-DyqoGRve.js";
const _sfc_main = {
  __name: "DedicatedServers",
  __ssrInlineRender: true,
  props: {
    productGroups: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const selectedProductGroup = ref(null);
    const selectedLocation = ref(null);
    const selectedPlan = ref(null);
    const availableLocations = ref([]);
    const availablePlans = ref([]);
    watch(() => props.productGroups, (newVal) => {
      if (newVal && newVal.length > 0) {
        selectedProductGroup.value = newVal[0].id;
        updateLocationsAndPlans(selectedProductGroup.value);
      }
    }, { deep: true });
    watch(selectedProductGroup, (newVal, oldVal) => {
      if (newVal !== oldVal) {
        updateLocationsAndPlans(newVal);
      }
    });
    watch(selectedLocation, (newVal, oldVal) => {
      if (newVal !== oldVal) {
        updatePlans(newVal);
      } else {
        availablePlans.value = [];
      }
    });
    function updateLocationsAndPlans(groupId) {
      const group = props.productGroups.find((g) => g.id === groupId);
      if (group && group.vps_plans) {
        availableLocations.value = group.vps_plans.map((plan) => plan.vps_compute_region).filter(
          (location, index, self) => index === self.findIndex((loc) => loc.id === location.id)
        );
        if (availableLocations.value.length > 0) {
          selectedLocation.value = availableLocations.value[0].id;
        } else {
          availableLocations.value = [];
          selectedLocation.value = null;
        }
      } else {
        availableLocations.value = [];
        availablePlans.value = [];
        selectedLocation.value = null;
        selectedPlan.value = null;
      }
    }
    function updatePlans(locationId) {
      const group = props.productGroups.find((g) => g.id === selectedProductGroup.value);
      if (group && group.vps_plans) {
        availablePlans.value = group.vps_plans.filter((plan) => plan.vps_compute_region.id === locationId);
      } else {
        availablePlans.value = [];
      }
    }
    onMounted(() => {
      if (props.productGroups && props.productGroups.length > 0) {
        selectedProductGroup.value = props.productGroups[0].id;
        updateLocationsAndPlans(selectedProductGroup.value);
      }
    });
    const isInStock = (locationId) => {
      const group = props.productGroups.find((g) => g.id === selectedProductGroup.value);
      if (group) {
        const plansInStock = group.vps_plans.filter((plan) => plan.vps_compute_region.id === locationId && plan.stock);
        return {
          available: plansInStock.length > 0,
          count: plansInStock.length
        };
      }
      return { available: false, count: 0 };
    };
    const faq = [
      {
        question: "Do you offer DDoS mitigation?",
        answer: "We offer basic L4 mitigation by default. The exact capacity of the mitigation can vary per location, but we do not list mitigation capacities at this time. Layer 7 or game DDoS mitigation and custom firewall filters are not available at the moment. If you do happen to get frequent or large DDoS attacks that may start impacting other users, we may have to ask you to move to a dedicated server or to different location with better DDoS mitigation. For this reason, if you get frequent DDoS attacks, we'd strongly recommend tunneling through a solution that specializes in high-capacity mitigation such as Cloudflare. We can tank the occasional attack, as long as it is not too large or sophisticated."
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept credit cards, PayPal, AliPay, Klarna, Amazon Pay, Google Pay, Apple Pay, 200+ cryptocurrencies (including XMR), and more!"
      },
      {
        question: "Do you have a refund policy?",
        answer: "Refunds are not offered on dedicated servers."
      }
    ];
    reactive({
      group: null,
      location: null,
      planbox: null,
      ssh_key: null,
      name: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Affordable Dedicated Servers</title><meta head-key="description" name="description" content="Get Ryzen 7950X3D or AMD EPYC 9004 series dedicated servers at an affordable price across global locations."${_scopeId}><meta head-key="keywords" name="keywords" content="Advin Servers, affordable hosting solutions, reliable hosting services, dedicated servers, 7950x3d servers, 7950x servers, epyc genoa servers, epyc milan servers, epyc servers, epyc dedicated servers"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Affordable Dedicated Servers"),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: "Get Ryzen 7950X3D or AMD EPYC 9004 series dedicated servers at an affordable price across global locations."
              }),
              createVNode("meta", {
                "head-key": "keywords",
                name: "keywords",
                content: "Advin Servers, affordable hosting solutions, reliable hosting services, dedicated servers, 7950x3d servers, 7950x servers, epyc genoa servers, epyc milan servers, epyc servers, epyc dedicated servers"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { title: "Dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-black"${_scopeId}><div class="relative py-12 isolate"${_scopeId}><div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"${_scopeId}><div class="relative left-[calc(50%-11rem)] aspect-[1155/878] w-[36.125rem] -translate-x-1/4 rotate-[10deg] bg-gradient-to-tr from-[#8086ff] to-[#8b89fc] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"${_scopeId}></div></div><div class="relative max-w-7xl mx-auto px-3 pt-20"${_scopeId}><div class="overflow-hidden sm:rounded-lg"${_scopeId}><div class="mt-20 mx-auto mb-20"${_scopeId}><h1 class="mb-4 font-bold text-6xl text-white"${_scopeId}> Dedicated Servers </h1><p class="font-normal text-white text-2xl mt-6"${_scopeId}> Bare metal cloud servers in 3 global locations. <br${_scopeId}> No contract, monthly billed. </p><ul class="list-disc text-white list-inside mt-5"${_scopeId}><li${_scopeId}>IPMI or KVM access provided</li><li${_scopeId}>Enterprise hardware with great support</li><li${_scopeId}>Global availability of servers, 99.99% SLA guarantee</li></ul></div></div></div></div></div><div class="relative max-w-7xl mx-auto pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Service Type `);
                } else {
                  return [
                    createTextVNode(" Service Type ")
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Choose your instance tier for your new dedicated server `);
                } else {
                  return [
                    createTextVNode(" Choose your instance tier for your new dedicated server ")
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="col-span-6 sm:col-span-4"${_scopeId2}><div class="grid lg:grid-cols-3"${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.productGroups, (group, index) => {
                    _push3(`<div class="relative w-72 lg:w-96"${_scopeId2}><input class="peer hidden" type="radio" name="group"${ssrIncludeBooleanAttr(index === 0) ? " checked" : ""}${ssrRenderAttr("value", group.id)}${ssrRenderAttr("id", "group_" + index)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedProductGroup.value, group.id)) ? " checked" : ""}${_scopeId2}><label${ssrRenderAttr("for", "group_" + index)} class="rounded-md shadow peer-checked:border-solid peer-checked:border-gray-500 flex cursor-pointer select-none border p-4 pr-20" for="radio_1"${_scopeId2}><div class="ml-2"${_scopeId2}><span class="mt-2 font-normal"${_scopeId2}>${ssrInterpolate(group.name)}</span><p class="text-slate-500 text-sm leading-6"${_scopeId2}>${ssrInterpolate(group.description)}</p><p class="text-slate-500 font-semibold text-xs leading-6"${_scopeId2}>${ssrInterpolate(group.subtext)}</p></div></label></div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                      createVNode("div", { class: "grid lg:grid-cols-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.productGroups, (group, index) => {
                          return openBlock(), createBlock("div", {
                            key: group.id,
                            class: "relative w-72 lg:w-96"
                          }, [
                            withDirectives(createVNode("input", {
                              class: "peer hidden",
                              type: "radio",
                              name: "group",
                              checked: index === 0,
                              value: group.id,
                              id: "group_" + index,
                              "onUpdate:modelValue": ($event) => selectedProductGroup.value = $event
                            }, null, 8, ["checked", "value", "id", "onUpdate:modelValue"]), [
                              [vModelRadio, selectedProductGroup.value]
                            ]),
                            createVNode("label", {
                              for: "group_" + index,
                              class: "rounded-md shadow peer-checked:border-solid peer-checked:border-gray-500 flex cursor-pointer select-none border p-4 pr-20"
                            }, [
                              createVNode("div", { class: "ml-2" }, [
                                createVNode("span", { class: "mt-2 font-normal" }, toDisplayString(group.name), 1),
                                createVNode("p", { class: "text-slate-500 text-sm leading-6" }, toDisplayString(group.description), 1),
                                createVNode("p", { class: "text-slate-500 font-semibold text-xs leading-6" }, toDisplayString(group.subtext), 1)
                              ])
                            ], 8, ["for"])
                          ]);
                        }), 128))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Compute Region `);
                } else {
                  return [
                    createTextVNode(" Compute Region ")
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Choose the region where you want to deploy your dedicated server, this will determine the physical location of it `);
                } else {
                  return [
                    createTextVNode(" Choose the region where you want to deploy your dedicated server, this will determine the physical location of it ")
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid lg:grid-cols-3 sm:lg:grid-cols-1 gap-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(availableLocations.value, (location, index) => {
                    _push3(`<div class="relative"${_scopeId2}><input class="peer hidden"${ssrRenderAttr("id", "location_" + index)} type="radio" name="location"${ssrIncludeBooleanAttr(index === 0) ? " checked" : ""}${ssrRenderAttr("value", location.id)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedLocation.value, location.id)) ? " checked" : ""}${_scopeId2}><label${ssrRenderAttr("for", "location_" + index)} class="border-gray-200 rounded-md shadow peer-checked:border-solid peer-checked:border-gray-400 flex cursor-pointer select-none border p-3"${_scopeId2}><img width="48" height="32"${ssrRenderAttr("src", location.flag_url)} alt="Flag"${_scopeId2}><div class="ml-5"${_scopeId2}><span class="font-normal"${_scopeId2}>${ssrInterpolate(location.display_name)}<br${_scopeId2}><span class="${ssrRenderClass([isInStock(location.id).available ? "text-green-600" : "text-red-600", "font-thin text-xs"])}"${_scopeId2}>${ssrInterpolate(isInStock(location.id).available ? "In Stock, " + isInStock(location.id).count + " available plan(s)" : "Out of Stock, 0 available plans")}</span></span></div></label></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid lg:grid-cols-3 sm:lg:grid-cols-1 gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(availableLocations.value, (location, index) => {
                        return openBlock(), createBlock("div", {
                          key: location.id,
                          class: "relative"
                        }, [
                          withDirectives(createVNode("input", {
                            class: "peer hidden",
                            id: "location_" + index,
                            type: "radio",
                            name: "location",
                            checked: index === 0,
                            value: location.id,
                            "onUpdate:modelValue": ($event) => selectedLocation.value = $event,
                            onChange: ($event) => updatePlans(location.id)
                          }, null, 40, ["id", "checked", "value", "onUpdate:modelValue", "onChange"]), [
                            [vModelRadio, selectedLocation.value]
                          ]),
                          createVNode("label", {
                            for: "location_" + index,
                            class: "border-gray-200 rounded-md shadow peer-checked:border-solid peer-checked:border-gray-400 flex cursor-pointer select-none border p-3"
                          }, [
                            createVNode("img", {
                              width: "48",
                              height: "32",
                              src: location.flag_url,
                              alt: "Flag"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ml-5" }, [
                              createVNode("span", { class: "font-normal" }, [
                                createTextVNode(toDisplayString(location.display_name), 1),
                                createVNode("br"),
                                createVNode("span", {
                                  class: ["font-thin text-xs", isInStock(location.id).available ? "text-green-600" : "text-red-600"]
                                }, toDisplayString(isInStock(location.id).available ? "In Stock, " + isInStock(location.id).count + " available plan(s)" : "Out of Stock, 0 available plans"), 3)
                              ])
                            ])
                          ], 8, ["for"])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Instance Plans `);
                } else {
                  return [
                    createTextVNode(" Instance Plans ")
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Choose the desired plan and pricing for your dedicated servers `);
                } else {
                  return [
                    createTextVNode(" Choose the desired plan and pricing for your dedicated servers ")
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(DedicatedPlanSelector, { availablePlans: availablePlans.value }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(DedicatedPlanSelector, { availablePlans: availablePlans.value }, null, 8, ["availablePlans"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative max-w-7xl mx-auto px-3"${_scopeId}><div class="pt-10 flex justify-center"${_scopeId}><p class="relative rounded-lg bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5"${_scopeId}><span class="hidden md:inline"${_scopeId}>Need a custom plan? Need a BGP session?</span><a href="https://clients.advinservers.com/contact.php" target="_blank" class="font-semibold text-indigo-600"${_scopeId}><span class="absolute inset-0" aria-hidden="true"${_scopeId}></span> Contact Us <span aria-hidden="true"${_scopeId}>→</span></a></p></div><div class="overflow-hidden sm:rounded-lg pt-10"${_scopeId}><div class="mt-5 mx-auto"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-14"${_scopeId}><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"${_scopeId}><div class="bg-white mr-5 ml-1 mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CpuChipIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Lightning Fast CPUs</h4><p class="text-gray-700"${_scopeId}> We only use some of the fastest and highest end CPUs in our servers, including AMD EPYC Genoa and Milan series of processors. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"${_scopeId}><div class="bg-white mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(WifiIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>BGP &amp; BYOIP</h4><p class="text-gray-700"${_scopeId}> BGP and BYOIP can be offered for free across our dedicated servers, contact us for more information on options. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"${_scopeId}><div class="bg-white mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CloudIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>All NVMe Storage</h4><p class="text-gray-700"${_scopeId}> Almost all of our servers contain lightning fast solid state storage, resulting in low latency access times to your data. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"${_scopeId}><div class="bg-white mr-5 ml-1 mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BanknotesIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Customizable</h4><p class="text-gray-700"${_scopeId}> Configurations are always customizable, allowing you to choose the exact amount of resources you need for your workload. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"${_scopeId}><div class="bg-white mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ServerStackIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Owned Infrastructure</h4><p class="text-gray-700"${_scopeId}> We own all of our hardware across nearly all of our dedicated server regions, allowing us to deliver high performance at an affordable price. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"${_scopeId}><div class="bg-white mt-5 mb-20"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(HeartIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Reliable</h4><p class="text-gray-700"${_scopeId}> All services come with a 99.9% uptime SLA policy by default. We use enterprise gear and redundant systems to ensure reliability. </p></div></div></div></div></div></div><div class="relative max-w-7xl mx-auto px-3 pt-10"${_scopeId}><div class="flex flex-wrap flex-row-reverse"${_scopeId}><div class="w-full lg:w-1/2"${_scopeId}><img class="m-1 rounded-lg border-gray-200 border mt-5" src="https://fro-images.b-cdn.net/IMG_20230807_034614.jpg" alt="VPS Panel"${_scopeId}></div><div class="w-full lg:w-5/12 mr-auto"${_scopeId}><p class="text-2xl pt-4 pb-3 font-semibold"${_scopeId}> Quality Hardware </p><p class="text-gray-700"${_scopeId}> We typically use quality hardware in our servers whenever possible, ensuring high performance and reliability. </p><ul class="mt-4"${_scopeId}><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>NVMe SSD Storage</span></li><li class="flex items-center mt-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Modern Hardware Platform</span></li><li class="flex items-center mt-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>NVIDIA Mellanox NICs</span></li><li class="flex items-center mt-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>DDR4 or DDR5 ECC Memory</span></li><li class="flex items-center mt-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Server Motherboards with IPMI</span></li></ul><p class="mt-4 text-gray-700"${_scopeId}> All servers are built with stability in mind. </p></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, { faq }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-black" }, [
                createVNode("div", { class: "relative py-12 isolate" }, [
                  createVNode("div", {
                    class: "absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",
                    "aria-hidden": "true"
                  }, [
                    createVNode("div", {
                      class: "relative left-[calc(50%-11rem)] aspect-[1155/878] w-[36.125rem] -translate-x-1/4 rotate-[10deg] bg-gradient-to-tr from-[#8086ff] to-[#8b89fc] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
                      style: { "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }
                    })
                  ]),
                  createVNode("div", { class: "relative max-w-7xl mx-auto px-3 pt-20" }, [
                    createVNode("div", { class: "overflow-hidden sm:rounded-lg" }, [
                      createVNode("div", { class: "mt-20 mx-auto mb-20" }, [
                        createVNode("h1", { class: "mb-4 font-bold text-6xl text-white" }, " Dedicated Servers "),
                        createVNode("p", { class: "font-normal text-white text-2xl mt-6" }, [
                          createTextVNode(" Bare metal cloud servers in 3 global locations. "),
                          createVNode("br"),
                          createTextVNode(" No contract, monthly billed. ")
                        ]),
                        createVNode("ul", { class: "list-disc text-white list-inside mt-5" }, [
                          createVNode("li", null, "IPMI or KVM access provided"),
                          createVNode("li", null, "Enterprise hardware with great support"),
                          createVNode("li", null, "Global availability of servers, 99.99% SLA guarantee")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "relative max-w-7xl mx-auto pt-10" }, [
                createVNode(_sfc_main$2, null, {
                  title: withCtx(() => [
                    createTextVNode(" Service Type ")
                  ]),
                  description: withCtx(() => [
                    createTextVNode(" Choose your instance tier for your new dedicated server ")
                  ]),
                  form: withCtx(() => [
                    createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                      createVNode("div", { class: "grid lg:grid-cols-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.productGroups, (group, index) => {
                          return openBlock(), createBlock("div", {
                            key: group.id,
                            class: "relative w-72 lg:w-96"
                          }, [
                            withDirectives(createVNode("input", {
                              class: "peer hidden",
                              type: "radio",
                              name: "group",
                              checked: index === 0,
                              value: group.id,
                              id: "group_" + index,
                              "onUpdate:modelValue": ($event) => selectedProductGroup.value = $event
                            }, null, 8, ["checked", "value", "id", "onUpdate:modelValue"]), [
                              [vModelRadio, selectedProductGroup.value]
                            ]),
                            createVNode("label", {
                              for: "group_" + index,
                              class: "rounded-md shadow peer-checked:border-solid peer-checked:border-gray-500 flex cursor-pointer select-none border p-4 pr-20"
                            }, [
                              createVNode("div", { class: "ml-2" }, [
                                createVNode("span", { class: "mt-2 font-normal" }, toDisplayString(group.name), 1),
                                createVNode("p", { class: "text-slate-500 text-sm leading-6" }, toDisplayString(group.description), 1),
                                createVNode("p", { class: "text-slate-500 font-semibold text-xs leading-6" }, toDisplayString(group.subtext), 1)
                              ])
                            ], 8, ["for"])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$2, null, {
                  title: withCtx(() => [
                    createTextVNode(" Compute Region ")
                  ]),
                  description: withCtx(() => [
                    createTextVNode(" Choose the region where you want to deploy your dedicated server, this will determine the physical location of it ")
                  ]),
                  form: withCtx(() => [
                    createVNode("div", { class: "grid lg:grid-cols-3 sm:lg:grid-cols-1 gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(availableLocations.value, (location, index) => {
                        return openBlock(), createBlock("div", {
                          key: location.id,
                          class: "relative"
                        }, [
                          withDirectives(createVNode("input", {
                            class: "peer hidden",
                            id: "location_" + index,
                            type: "radio",
                            name: "location",
                            checked: index === 0,
                            value: location.id,
                            "onUpdate:modelValue": ($event) => selectedLocation.value = $event,
                            onChange: ($event) => updatePlans(location.id)
                          }, null, 40, ["id", "checked", "value", "onUpdate:modelValue", "onChange"]), [
                            [vModelRadio, selectedLocation.value]
                          ]),
                          createVNode("label", {
                            for: "location_" + index,
                            class: "border-gray-200 rounded-md shadow peer-checked:border-solid peer-checked:border-gray-400 flex cursor-pointer select-none border p-3"
                          }, [
                            createVNode("img", {
                              width: "48",
                              height: "32",
                              src: location.flag_url,
                              alt: "Flag"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ml-5" }, [
                              createVNode("span", { class: "font-normal" }, [
                                createTextVNode(toDisplayString(location.display_name), 1),
                                createVNode("br"),
                                createVNode("span", {
                                  class: ["font-thin text-xs", isInStock(location.id).available ? "text-green-600" : "text-red-600"]
                                }, toDisplayString(isInStock(location.id).available ? "In Stock, " + isInStock(location.id).count + " available plan(s)" : "Out of Stock, 0 available plans"), 3)
                              ])
                            ])
                          ], 8, ["for"])
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$2, null, {
                  title: withCtx(() => [
                    createTextVNode(" Instance Plans ")
                  ]),
                  description: withCtx(() => [
                    createTextVNode(" Choose the desired plan and pricing for your dedicated servers ")
                  ]),
                  form: withCtx(() => [
                    createVNode(DedicatedPlanSelector, { availablePlans: availablePlans.value }, null, 8, ["availablePlans"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "relative max-w-7xl mx-auto px-3" }, [
                  createVNode("div", { class: "pt-10 flex justify-center" }, [
                    createVNode("p", { class: "relative rounded-lg bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5" }, [
                      createVNode("span", { class: "hidden md:inline" }, "Need a custom plan? Need a BGP session?"),
                      createVNode("a", {
                        href: "https://clients.advinservers.com/contact.php",
                        target: "_blank",
                        class: "font-semibold text-indigo-600"
                      }, [
                        createVNode("span", {
                          class: "absolute inset-0",
                          "aria-hidden": "true"
                        }),
                        createTextVNode(" Contact Us "),
                        createVNode("span", { "aria-hidden": "true" }, "→")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "overflow-hidden sm:rounded-lg pt-10" }, [
                    createVNode("div", { class: "mt-5 mx-auto" }, [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-14" }, [
                        createVNode("div", {
                          class: "aos-init aos-animate",
                          "data-aos": "fade-up",
                          "data-aos-delay": "100"
                        }, [
                          createVNode("div", { class: "bg-white mr-5 ml-1 mt-5" }, [
                            createVNode("div", { class: "mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center" }, [
                              createVNode(unref(CpuChipIcon), { class: "h-10 text-black" })
                            ]),
                            createVNode("h4", { class: "text-xl font-bold mb-2" }, "Lightning Fast CPUs"),
                            createVNode("p", { class: "text-gray-700" }, " We only use some of the fastest and highest end CPUs in our servers, including AMD EPYC Genoa and Milan series of processors. ")
                          ])
                        ]),
                        createVNode("div", {
                          class: "aos-init aos-animate",
                          "data-aos": "fade-up",
                          "data-aos-delay": "200"
                        }, [
                          createVNode("div", { class: "bg-white mt-5" }, [
                            createVNode("div", { class: "mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center" }, [
                              createVNode(unref(WifiIcon), { class: "h-10 text-black" })
                            ]),
                            createVNode("h4", { class: "text-xl font-bold mb-2" }, "BGP & BYOIP"),
                            createVNode("p", { class: "text-gray-700" }, " BGP and BYOIP can be offered for free across our dedicated servers, contact us for more information on options. ")
                          ])
                        ]),
                        createVNode("div", {
                          class: "aos-init aos-animate",
                          "data-aos": "fade-up",
                          "data-aos-delay": "300"
                        }, [
                          createVNode("div", { class: "bg-white mt-5" }, [
                            createVNode("div", { class: "mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center" }, [
                              createVNode(unref(CloudIcon), { class: "h-10 text-black" })
                            ]),
                            createVNode("h4", { class: "text-xl font-bold mb-2" }, "All NVMe Storage"),
                            createVNode("p", { class: "text-gray-700" }, " Almost all of our servers contain lightning fast solid state storage, resulting in low latency access times to your data. ")
                          ])
                        ]),
                        createVNode("div", {
                          class: "aos-init aos-animate",
                          "data-aos": "fade-up",
                          "data-aos-delay": "100"
                        }, [
                          createVNode("div", { class: "bg-white mr-5 ml-1 mt-5" }, [
                            createVNode("div", { class: "mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center" }, [
                              createVNode(unref(BanknotesIcon), { class: "h-10 text-black" })
                            ]),
                            createVNode("h4", { class: "text-xl font-bold mb-2" }, "Customizable"),
                            createVNode("p", { class: "text-gray-700" }, " Configurations are always customizable, allowing you to choose the exact amount of resources you need for your workload. ")
                          ])
                        ]),
                        createVNode("div", {
                          class: "aos-init aos-animate",
                          "data-aos": "fade-up",
                          "data-aos-delay": "200"
                        }, [
                          createVNode("div", { class: "bg-white mt-5" }, [
                            createVNode("div", { class: "mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center" }, [
                              createVNode(unref(ServerStackIcon), { class: "h-10 text-black" })
                            ]),
                            createVNode("h4", { class: "text-xl font-bold mb-2" }, "Owned Infrastructure"),
                            createVNode("p", { class: "text-gray-700" }, " We own all of our hardware across nearly all of our dedicated server regions, allowing us to deliver high performance at an affordable price. ")
                          ])
                        ]),
                        createVNode("div", {
                          class: "aos-init aos-animate",
                          "data-aos": "fade-up",
                          "data-aos-delay": "300"
                        }, [
                          createVNode("div", { class: "bg-white mt-5 mb-20" }, [
                            createVNode("div", { class: "mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center" }, [
                              createVNode(unref(HeartIcon), { class: "h-10 text-black" })
                            ]),
                            createVNode("h4", { class: "text-xl font-bold mb-2" }, "Reliable"),
                            createVNode("p", { class: "text-gray-700" }, " All services come with a 99.9% uptime SLA policy by default. We use enterprise gear and redundant systems to ensure reliability. ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "relative max-w-7xl mx-auto px-3 pt-10" }, [
                  createVNode("div", { class: "flex flex-wrap flex-row-reverse" }, [
                    createVNode("div", { class: "w-full lg:w-1/2" }, [
                      createVNode("img", {
                        class: "m-1 rounded-lg border-gray-200 border mt-5",
                        src: "https://fro-images.b-cdn.net/IMG_20230807_034614.jpg",
                        alt: "VPS Panel"
                      })
                    ]),
                    createVNode("div", { class: "w-full lg:w-5/12 mr-auto" }, [
                      createVNode("p", { class: "text-2xl pt-4 pb-3 font-semibold" }, " Quality Hardware "),
                      createVNode("p", { class: "text-gray-700" }, " We typically use quality hardware in our servers whenever possible, ensuring high performance and reliability. "),
                      createVNode("ul", { class: "mt-4" }, [
                        createVNode("li", { class: "flex items-center" }, [
                          createVNode(unref(CheckIcon), {
                            class: "h-6 w-5 flex-none text-black",
                            "aria-hidden": "true"
                          }),
                          createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "NVMe SSD Storage")
                        ]),
                        createVNode("li", { class: "flex items-center mt-1" }, [
                          createVNode(unref(CheckIcon), {
                            class: "h-6 w-5 flex-none text-black",
                            "aria-hidden": "true"
                          }),
                          createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Modern Hardware Platform")
                        ]),
                        createVNode("li", { class: "flex items-center mt-1" }, [
                          createVNode(unref(CheckIcon), {
                            class: "h-6 w-5 flex-none text-black",
                            "aria-hidden": "true"
                          }),
                          createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "NVIDIA Mellanox NICs")
                        ]),
                        createVNode("li", { class: "flex items-center mt-1" }, [
                          createVNode(unref(CheckIcon), {
                            class: "h-6 w-5 flex-none text-black",
                            "aria-hidden": "true"
                          }),
                          createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "DDR4 or DDR5 ECC Memory")
                        ]),
                        createVNode("li", { class: "flex items-center mt-1" }, [
                          createVNode(unref(CheckIcon), {
                            class: "h-6 w-5 flex-none text-black",
                            "aria-hidden": "true"
                          }),
                          createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Server Motherboards with IPMI")
                        ])
                      ]),
                      createVNode("p", { class: "mt-4 text-gray-700" }, " All servers are built with stability in mind. ")
                    ])
                  ]),
                  createVNode(_sfc_main$3, { faq })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DedicatedServers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
