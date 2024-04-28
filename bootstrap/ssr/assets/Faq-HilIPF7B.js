import { computed, useSlots, mergeProps, useSSRContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "./SectionTitle-CZQPTZ98.js";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/vue/24/outline";
const _sfc_main$1 = {
  __name: "CardSection",
  __ssrInlineRender: true,
  emits: ["submitted"],
  setup(__props) {
    const hasActions = computed(() => !!useSlots().actions);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid mt-5" }, _attrs))}><div class="relative ml-3"><div class="flex items-center px-4 py-4 bg-gray-50 text-left sm:px-6 shadow sm:rounded-tl-md sm:rounded-tr-md"><h1 class="text-xl font-semibold">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</h1><p class="text-gray-900 text-normal ml-5">`);
      ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
      _push(`</p></div><form><div class="${ssrRenderClass([hasActions.value ? "sm:rounded-bl-md sm:rounded-br-md" : "sm:rounded-b-md", "bg-white sm:p-6 shadow"])}"><div class="grid gap-6">`);
      ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
      _push(`</div></div><div class="mt-3 float-right space-x-2">`);
      ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
      _push(`</div></form></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CardSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Faq",
  __ssrInlineRender: true,
  props: {
    faq: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-7xl py-24 sm:py-32 mt-10" }, _attrs))}><div class="mx-auto max-w-7xl divide-y divide-gray-900/10"><h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2><dl class="mt-5 space-y-6 divide-y divide-gray-900/10"><!--[-->`);
      ssrRenderList(__props.faq, (faq) => {
        _push(ssrRenderComponent(unref(Disclosure), {
          as: "div",
          key: faq.question,
          class: "pt-6"
        }, {
          default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<dt${_scopeId}>`);
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left text-gray-900" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-base font-semibold leading-7"${_scopeId2}>${ssrInterpolate(faq.question)}</span><span class="ml-6 flex h-7 items-center"${_scopeId2}>`);
                    if (!open) {
                      _push3(ssrRenderComponent(unref(PlusSmallIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(MinusSmallIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-base font-semibold leading-7" }, toDisplayString(faq.question), 1),
                      createVNode("span", { class: "ml-6 flex h-7 items-center" }, [
                        !open ? (openBlock(), createBlock(unref(PlusSmallIcon), {
                          key: 0,
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })) : (openBlock(), createBlock(unref(MinusSmallIcon), {
                          key: 1,
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        }))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</dt>`);
              _push2(ssrRenderComponent(unref(DisclosurePanel), {
                as: "dd",
                class: "mt-2 pr-12"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-base leading-7 text-gray-600"${_scopeId2}>${ssrInterpolate(faq.answer)}</p>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-base leading-7 text-gray-600" }, toDisplayString(faq.answer), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("dt", null, [
                  createVNode(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left text-gray-900" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-base font-semibold leading-7" }, toDisplayString(faq.question), 1),
                      createVNode("span", { class: "ml-6 flex h-7 items-center" }, [
                        !open ? (openBlock(), createBlock(unref(PlusSmallIcon), {
                          key: 0,
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })) : (openBlock(), createBlock(unref(MinusSmallIcon), {
                          key: 1,
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        }))
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode(unref(DisclosurePanel), {
                  as: "dd",
                  class: "mt-2 pr-12"
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "text-base leading-7 text-gray-600" }, toDisplayString(faq.answer), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></dl></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
