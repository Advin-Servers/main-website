import { mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-Dy8sg2VP.js";
import "./Welcome-Bl6snZoX.js";
import "./SVGCheck-CgF4JDP-.js";
import { CpuChipIcon, WifiIcon, CloudIcon, BanknotesIcon, ServerStackIcon, HeartIcon } from "@heroicons/vue/24/outline";
import { CheckIcon } from "@heroicons/vue/20/solid/index.js";
import { Link } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Dashboard" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-black"${_scopeId}><div class="relative py-12 isolate"${_scopeId}><div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"${_scopeId}><div class="relative left-[calc(50%-11rem)] aspect-[1155/878] w-[36.125rem] -translate-x-1/4 rotate-[10deg] bg-gradient-to-tr from-[#8086ff] to-[#8b89fc] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"${_scopeId}></div></div><div class="relative max-w-7xl mx-auto px-3 pt-20"${_scopeId}><div class="overflow-hidden sm:rounded-lg"${_scopeId}><div class="mt-20 mx-auto mb-20"${_scopeId}><h1 class="mb-4 font-bold text-6xl"${_scopeId}><span class="text-white"${_scopeId}> High Performance Servers </span></h1><p class="font-normal text-white text-2xl mt-6"${_scopeId}> We&#39;re an affordable hosting provider based in the USA. <br${_scopeId}> We offer reliable and quality hosting solutions located across 6 global locations. </p><ul class="list-disc text-white list-inside mt-5"${_scopeId}><li${_scopeId}>Owned hardware across all cloud server regions</li><li${_scopeId}>Enterprise hardware with great support</li><li${_scopeId}>Global availability of servers, 99.99% SLA guarantee</li></ul></div></div></div></div></div><div class="relative max-w-7xl mx-auto px-3 pt-10"${_scopeId}><div class="overflow-hidden sm:rounded-lg"${_scopeId}><div class="mt-5 mx-auto"${_scopeId}><h1 class="mb-4 font-bold text-3xl"${_scopeId}><span class="text-black"${_scopeId}> Our Products </span><div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4"${_scopeId}><div class="w-full max-w-sm p-4 bg-white border rounded-lg shadow sm:p-8 mt-5"${_scopeId}><h5 class="mb-1 text-xl font-medium text-gray-500"${_scopeId}>Cloud Servers</h5><h5 class="mb-1 text-sm font-thin text-gray-400"${_scopeId}>Starting at</h5><div class="flex items-baseline text-gray-900"${_scopeId}><span class="text-3xl font-semibold"${_scopeId}>$</span><span class="text-5xl font-extrabold tracking-tight"${_scopeId}>6.99</span><span class="ms-1 text-xl font-normal text-gray-500"${_scopeId}>/month</span></div><ul role="list" class="md:space-y-2 my-4"${_scopeId}><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Starts with 8GB RAM &amp; 4 vCPU</span></li><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>AMD EPYC Processors</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Enterprise Gen4 NVMe</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>ECC Registered Memory</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Full Root Access</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>KVM &amp; Nested Virtualization</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>10 Gbps Network Connection</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Available in 6 Global Locations</span></li></ul>`);
            _push2(ssrRenderComponent(unref(Link), {
              type: "button",
              class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",
              href: _ctx.route("cloud")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Learn More`);
                } else {
                  return [
                    createTextVNode("Learn More")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5"${_scopeId}><h5 class="mb-1 text-xl font-medium text-gray-500"${_scopeId}>Dedicated Servers</h5><h5 class="mb-1 text-sm font-thin text-gray-400"${_scopeId}>Starting at</h5><div class="flex items-baseline text-gray-900"${_scopeId}><span class="text-3xl font-semibold"${_scopeId}>$</span><span class="text-5xl font-extrabold tracking-tight"${_scopeId}>199.99</span><span class="ms-1 text-xl font-normal text-gray-500"${_scopeId}>/month</span></div><ul role="list" class="md:space-y-2 my-4"${_scopeId}><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Bare Metal Servers</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Variety of Configurations</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Control Panel</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>24x7 KVM or IPMI Access</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Dedicated Hardware</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Nested Virtualization</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>10 Gbps Network Connection</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Available in 3 Global Locations</span></li></ul>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("dedicated"),
              type: "button",
              class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Learn More`);
                } else {
                  return [
                    createTextVNode("Learn More")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5"${_scopeId}><h5 class="mb-1 text-xl font-medium text-gray-500"${_scopeId}>Web Hosting</h5><h5 class="mb-1 text-sm font-thin text-gray-400"${_scopeId}>Starting at</h5><div class="flex items-baseline text-gray-900"${_scopeId}><span class="text-3xl font-semibold"${_scopeId}>$</span><span class="text-5xl font-extrabold tracking-tight"${_scopeId}>1.99</span><span class="ms-1 text-xl font-normal text-gray-500"${_scopeId}>/month</span></div><ul role="list" class="md:space-y-2 my-4"${_scopeId}><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Intel Xeon Processors</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>NVMe SSD Storage</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Daily Offsite Backups</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>cPanel or DirectAdmin Access</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>CloudLinux &amp; Softaculous</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Great for Small Websites</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>1 Gbps Network Connection</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Available in 3 Global Locations</span></li></ul>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("website"),
              type: "button",
              class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Learn More`);
                } else {
                  return [
                    createTextVNode("Learn More")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></h1></div><div class="relative max-w-7xl mx-auto px-3 pt-10"${_scopeId}><div class="overflow-hidden sm:rounded-lg"${_scopeId}><div class="mt-5 mx-auto"${_scopeId}><h1 class="mb-4 font-bold text-3xl"${_scopeId}><span class="text-black"${_scopeId}> Features </span></h1><div class="grid grid-cols-1 md:grid-cols-3 gap-14"${_scopeId}><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"${_scopeId}><div class="bg-white mr-5 ml-1 mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CpuChipIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Lightning Fast CPUs</h4><p class="text-gray-700"${_scopeId}> We only use some of the fastest and highest end CPUs in our servers, including AMD EPYC Genoa and Milan series of processors. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"${_scopeId}><div class="bg-white mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(WifiIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Network</h4><p class="text-gray-700"${_scopeId}> We offer up to 10 Gbit network uplinks in most of our locations, a massive upgrade from what is typically standard of cloud servers. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"${_scopeId}><div class="bg-white mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CloudIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>All NVMe Storage</h4><p class="text-gray-700"${_scopeId}> Almost all of our servers contain lightning fast solid state storage, resulting in low latency access times to your data. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"${_scopeId}><div class="bg-white mr-5 ml-1 mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BanknotesIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Affordable</h4><p class="text-gray-700"${_scopeId}> We are one of the cheapest cloud service providers in the market, offering high performance servers at a fraction of the cost. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"${_scopeId}><div class="bg-white mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ServerStackIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Owned Infrastructure</h4><p class="text-gray-700"${_scopeId}> We own all of our hardware across nearly all of our cloud server regions, allowing us to deliver high performance at an affordable price. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"${_scopeId}><div class="bg-white mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(HeartIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Reliable</h4><p class="text-gray-700"${_scopeId}> All services come with a 99.9% uptime SLA policy by default. We use enterprise gear and redundant systems to ensure reliability. </p></div></div></div></div></div></div></div><div class="bg-white py-16 sm:py-24"${_scopeId}><div class="mx-auto max-w-7xl lg:px-4"${_scopeId}><div class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20"${_scopeId}><img class="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0 bg-black"${_scopeId}><div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply"${_scopeId}></div><div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true"${_scopeId}><div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"${_scopeId}></div></div><div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl" aria-hidden="true"${_scopeId}><div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"${_scopeId}></div></div><div class="relative mx-auto max-w-2xl lg:mx-0"${_scopeId}><img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt=""${_scopeId}><figure${_scopeId}><blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8"${_scopeId}><p${_scopeId}>“You may expect from the pricing that their service will be lacking but I have not found this to be the case with Advin. I can highly recommend Advin Servers, I really doubt you will find a better value or quality provider out there. ”</p></blockquote><figcaption class="mt-6 text-base text-white"${_scopeId}><div class="font-semibold"${_scopeId}>Judith Black</div><div class="mt-1"${_scopeId}>CEO of Workcation</div></figcaption></figure></div></div></div></div></div>`);
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
                        createVNode("h1", { class: "mb-4 font-bold text-6xl" }, [
                          createVNode("span", { class: "text-white" }, " High Performance Servers ")
                        ]),
                        createVNode("p", { class: "font-normal text-white text-2xl mt-6" }, [
                          createTextVNode(" We're an affordable hosting provider based in the USA. "),
                          createVNode("br"),
                          createTextVNode(" We offer reliable and quality hosting solutions located across 6 global locations. ")
                        ]),
                        createVNode("ul", { class: "list-disc text-white list-inside mt-5" }, [
                          createVNode("li", null, "Owned hardware across all cloud server regions"),
                          createVNode("li", null, "Enterprise hardware with great support"),
                          createVNode("li", null, "Global availability of servers, 99.99% SLA guarantee")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "relative max-w-7xl mx-auto px-3 pt-10" }, [
                createVNode("div", { class: "overflow-hidden sm:rounded-lg" }, [
                  createVNode("div", { class: "mt-5 mx-auto" }, [
                    createVNode("h1", { class: "mb-4 font-bold text-3xl" }, [
                      createVNode("span", { class: "text-black" }, " Our Products "),
                      createVNode("div", { class: "grid md:grid-cols-3 sm:grid-cols-1 gap-4" }, [
                        createVNode("div", { class: "w-full max-w-sm p-4 bg-white border rounded-lg shadow sm:p-8 mt-5" }, [
                          createVNode("h5", { class: "mb-1 text-xl font-medium text-gray-500" }, "Cloud Servers"),
                          createVNode("h5", { class: "mb-1 text-sm font-thin text-gray-400" }, "Starting at"),
                          createVNode("div", { class: "flex items-baseline text-gray-900" }, [
                            createVNode("span", { class: "text-3xl font-semibold" }, "$"),
                            createVNode("span", { class: "text-5xl font-extrabold tracking-tight" }, "6.99"),
                            createVNode("span", { class: "ms-1 text-xl font-normal text-gray-500" }, "/month")
                          ]),
                          createVNode("ul", {
                            role: "list",
                            class: "md:space-y-2 my-4"
                          }, [
                            createVNode("li", { class: "flex items-center" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Starts with 8GB RAM & 4 vCPU")
                            ]),
                            createVNode("li", { class: "flex items-center" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "AMD EPYC Processors")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Enterprise Gen4 NVMe")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "ECC Registered Memory")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Full Root Access")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "KVM & Nested Virtualization")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "10 Gbps Network Connection")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Available in 6 Global Locations")
                            ])
                          ]),
                          createVNode(unref(Link), {
                            type: "button",
                            class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",
                            href: _ctx.route("cloud")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Learn More")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        createVNode("div", { class: "w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5" }, [
                          createVNode("h5", { class: "mb-1 text-xl font-medium text-gray-500" }, "Dedicated Servers"),
                          createVNode("h5", { class: "mb-1 text-sm font-thin text-gray-400" }, "Starting at"),
                          createVNode("div", { class: "flex items-baseline text-gray-900" }, [
                            createVNode("span", { class: "text-3xl font-semibold" }, "$"),
                            createVNode("span", { class: "text-5xl font-extrabold tracking-tight" }, "199.99"),
                            createVNode("span", { class: "ms-1 text-xl font-normal text-gray-500" }, "/month")
                          ]),
                          createVNode("ul", {
                            role: "list",
                            class: "md:space-y-2 my-4"
                          }, [
                            createVNode("li", { class: "flex items-center" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Bare Metal Servers")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Variety of Configurations")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Control Panel")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "24x7 KVM or IPMI Access")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Dedicated Hardware")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Nested Virtualization")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "10 Gbps Network Connection")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Available in 3 Global Locations")
                            ])
                          ]),
                          createVNode(unref(Link), {
                            href: _ctx.route("dedicated"),
                            type: "button",
                            class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Learn More")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        createVNode("div", { class: "w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5" }, [
                          createVNode("h5", { class: "mb-1 text-xl font-medium text-gray-500" }, "Web Hosting"),
                          createVNode("h5", { class: "mb-1 text-sm font-thin text-gray-400" }, "Starting at"),
                          createVNode("div", { class: "flex items-baseline text-gray-900" }, [
                            createVNode("span", { class: "text-3xl font-semibold" }, "$"),
                            createVNode("span", { class: "text-5xl font-extrabold tracking-tight" }, "1.99"),
                            createVNode("span", { class: "ms-1 text-xl font-normal text-gray-500" }, "/month")
                          ]),
                          createVNode("ul", {
                            role: "list",
                            class: "md:space-y-2 my-4"
                          }, [
                            createVNode("li", { class: "flex items-center" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Intel Xeon Processors")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "NVMe SSD Storage")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Daily Offsite Backups")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "cPanel or DirectAdmin Access")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "CloudLinux & Softaculous")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Great for Small Websites")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "1 Gbps Network Connection")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Available in 3 Global Locations")
                            ])
                          ]),
                          createVNode(unref(Link), {
                            href: _ctx.route("website"),
                            type: "button",
                            class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Learn More")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative max-w-7xl mx-auto px-3 pt-10" }, [
                    createVNode("div", { class: "overflow-hidden sm:rounded-lg" }, [
                      createVNode("div", { class: "mt-5 mx-auto" }, [
                        createVNode("h1", { class: "mb-4 font-bold text-3xl" }, [
                          createVNode("span", { class: "text-black" }, " Features ")
                        ]),
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
                              createVNode("h4", { class: "text-xl font-bold mb-2" }, "Network"),
                              createVNode("p", { class: "text-gray-700" }, " We offer up to 10 Gbit network uplinks in most of our locations, a massive upgrade from what is typically standard of cloud servers. ")
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
                              createVNode("h4", { class: "text-xl font-bold mb-2" }, "Affordable"),
                              createVNode("p", { class: "text-gray-700" }, " We are one of the cheapest cloud service providers in the market, offering high performance servers at a fraction of the cost. ")
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
                              createVNode("p", { class: "text-gray-700" }, " We own all of our hardware across nearly all of our cloud server regions, allowing us to deliver high performance at an affordable price. ")
                            ])
                          ]),
                          createVNode("div", {
                            class: "aos-init aos-animate",
                            "data-aos": "fade-up",
                            "data-aos-delay": "300"
                          }, [
                            createVNode("div", { class: "bg-white mt-5" }, [
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
                  ])
                ]),
                createVNode("div", { class: "bg-white py-16 sm:py-24" }, [
                  createVNode("div", { class: "mx-auto max-w-7xl lg:px-4" }, [
                    createVNode("div", { class: "relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20" }, [
                      createVNode("img", { class: "absolute inset-0 h-full w-full object-cover brightness-150 saturate-0 bg-black" }),
                      createVNode("div", { class: "absolute inset-0 bg-gray-900/90 mix-blend-multiply" }),
                      createVNode("div", {
                        class: "absolute -left-80 -top-56 transform-gpu blur-3xl",
                        "aria-hidden": "true"
                      }, [
                        createVNode("div", {
                          class: "aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]",
                          style: { "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }
                        })
                      ]),
                      createVNode("div", {
                        class: "hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl",
                        "aria-hidden": "true"
                      }, [
                        createVNode("div", {
                          class: "aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25",
                          style: { "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }
                        })
                      ]),
                      createVNode("div", { class: "relative mx-auto max-w-2xl lg:mx-0" }, [
                        createVNode("img", {
                          class: "h-12 w-auto",
                          src: "https://tailwindui.com/img/logos/workcation-logo-white.svg",
                          alt: ""
                        }),
                        createVNode("figure", null, [
                          createVNode("blockquote", { class: "mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8" }, [
                            createVNode("p", null, "“You may expect from the pricing that their service will be lacking but I have not found this to be the case with Advin. I can highly recommend Advin Servers, I really doubt you will find a better value or quality provider out there. ”")
                          ]),
                          createVNode("figcaption", { class: "mt-6 text-base text-white" }, [
                            createVNode("div", { class: "font-semibold" }, "Judith Black"),
                            createVNode("div", { class: "mt-1" }, "CEO of Workcation")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
