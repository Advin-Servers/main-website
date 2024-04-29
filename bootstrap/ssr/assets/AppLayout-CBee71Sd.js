import { defineComponent, h, mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, computed, renderSlot, ref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderComponent, ssrRenderSlot, ssrRenderClass } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = {
      solutions: [
        { name: "Cloud Servers", route: "cloud" },
        { name: "Dedicated Servers", route: "dedicated" },
        { name: "Website Hosting", route: "website" }
      ],
      support: [
        { name: "Contact", href: "https://clients.advinservers.com/contact.php" },
        { name: "Documentation", href: "https://docs.advinservers.com" },
        { name: "Service Status", href: "https://status.advinservers.com" }
      ],
      services: [
        { name: "Client Area", href: "https://clients.advinservers.com" }
      ],
      legal: [
        { name: "Fair Use", href: "https://docs.advinservers.com/policies/fair-use" },
        { name: "Privacy", href: "https://docs.advinservers.com/policies/privacypolicy" },
        { name: "Terms", href: "https://docs.advinservers.com/policies/termsofservice" },
        { name: "SLA", href: "https://docs.advinservers.com/policies/sla" },
        { name: "Refund", href: "https://docs.advinservers.com/policies/refund" }
      ],
      social: [
        {
          name: "Facebook",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "Twitter",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              })
            ])
          })
        },
        {
          name: "GitHub",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                "clip-rule": "evenodd"
              })
            ])
          })
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "bg-black",
        "aria-labelledby": "footer-heading"
      }, _attrs))}><h2 id="footer-heading" class="sr-only">Footer</h2><div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32"><div class="xl:grid xl:grid-cols-3 xl:gap-8"><div class="space-y-8"><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"><img src="https://fro-images.b-cdn.net/bald-eagle-bird-golden-eagle-clip-art-icon-eagle-free-vectors-download.svg" class="h-7 invert" alt="Bald Eagle"><span class="self-center text-2xl font-semibold whitespace-nowrap font-bukhari-script text-white">Advin Servers</span></a><p class="text-sm leading-6 text-gray-300">High-performance cloud hosting for an affordable price, featuring lightning fast processors.</p><p class="text-sm leading-6 text-gray-300">Contact: company@advinservers.com<br>Address: Advin Services LLC<br> 3640 Concord Pike #1080 Wilmington, DE 19803 </p><p class="text-sm leading-6 text-gray-300">Advin Services LLC, registered in Delaware, United States under file number 5949002. </p><div class="flex space-x-6"><!--[-->`);
      ssrRenderList(navigation.social, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="text-gray-500 hover:text-gray-400"><span class="sr-only">${ssrInterpolate(item.name)}</span>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div></div><div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"><div class="md:grid md:grid-cols-2 md:gap-8"><div><h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3><ul role="list" class="mt-6 space-y-4"><!--[-->`);
      ssrRenderList(navigation.solutions, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route(item.route),
          class: "text-sm leading-6 text-gray-300 hover:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="mt-10 md:mt-0"><h3 class="text-sm font-semibold leading-6 text-white">Support</h3><ul role="list" class="mt-6 space-y-4"><!--[-->`);
      ssrRenderList(navigation.support, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-sm leading-6 text-gray-300 hover:text-white">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="md:grid md:grid-cols-2 md:gap-8"><div><h3 class="text-sm font-semibold leading-6 text-white">Services</h3><ul role="list" class="mt-6 space-y-4"><!--[-->`);
      ssrRenderList(navigation.services, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-sm leading-6 text-gray-300 hover:text-white">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="mt-10 md:mt-0"><h3 class="text-sm font-semibold leading-6 text-white">Legal</h3><ul role="list" class="mt-6 space-y-4"><!--[-->`);
      ssrRenderList(navigation.legal, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-sm leading-6 text-gray-300 hover:text-white">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"><p class="text-xs leading-5 text-gray-400">© 2024 Advin Services, LLC. All rights reserved.</p></div></div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "block py-2 px-3 text-white rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white" : "block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="bg-black fixed w-full z-20 top-0 border-b border-gray-900"><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a${ssrRenderAttr("href", _ctx.route("home"))} class="flex items-center space-x-3 rtl:space-x-reverse"><img src="https://fro-images.b-cdn.net/bald-eagle-bird-golden-eagle-clip-art-icon-eagle-free-vectors-download.svg" class="h-7 invert" alt="Bald Eagle"><span class="self-center text-2xl font-bold whitespace-nowrap text-white">Advin Servers</span></a><button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky"${ssrRenderAttr("aria-expanded", isOpen.value ? "true" : "false")}><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg></button><div class="${ssrRenderClass([{ "flex": isOpen.value, "hidden": !isOpen.value }, "hidden w-full md:flex md:w-auto md:order-1"])}" id="navbar-sticky"><ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 bg-black md:p-0"><li>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("home"),
        active: _ctx.route().current("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("cloud"),
        active: _ctx.route().current("cloud")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cloud Servers`);
          } else {
            return [
              createTextVNode("Cloud Servers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("dedicated"),
        active: _ctx.route().current("dedicated")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dedicated Servers`);
          } else {
            return [
              createTextVNode("Dedicated Servers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("website"),
        active: _ctx.route().current("website")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Web Hosting`);
          } else {
            return [
              createTextVNode("Web Hosting")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="hidden md:flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse"><a href="https://clients.advinservers.com/login" class="rounded-md text-white border border-solid hover:border-gray-400 focus:ring-4 border-gray-200 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center text-black">Client Area</a>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("cloud"),
        class: "rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Order Cloud`);
          } else {
            return [
              createTextVNode("Order Cloud")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="${ssrRenderClass([{ "block": isOpen.value, "hidden": !isOpen.value }, "md:hidden"])}" id="mobile-menu"><div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("home"),
        active: _ctx.route().current("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("cloud"),
        active: _ctx.route().current("cloud")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cloud Servers`);
          } else {
            return [
              createTextVNode("Cloud Servers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("dedicated"),
        active: _ctx.route().current("dedicated")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dedicated Servers`);
          } else {
            return [
              createTextVNode("Dedicated Servers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("website"),
        active: _ctx.route().current("website")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Web Hosting`);
          } else {
            return [
              createTextVNode("Web Hosting")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 ml-2 pb-3 border-t border-gray-700"><a href="https://clients.advinservers.com/login" class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white">Client Area</a>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("cloud")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Order Cloud`);
          } else {
            return [
              createTextVNode("Order Cloud")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
