import { unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-CBee71Sd.js";
import "./SVGCheck-CvXhrTnC.js";
import { BuildingStorefrontIcon, WifiIcon, BanknotesIcon } from "@heroicons/vue/24/outline";
import { CheckIcon } from "@heroicons/vue/20/solid/index.js";
import { Head } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "WebsiteHosting",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Website Hosting</title><meta head-key="description" name="description" content="Get cPanel or DirectAdmin website hosting starting at just $1.99/month on high-performance hardware."${_scopeId}><meta head-key="keywords" name="keywords" content="Advin Servers, affordable hosting solutions, reliable hosting services, cpanel hosting, website hosting, directadmin hosting"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Website Hosting"),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: "Get cPanel or DirectAdmin website hosting starting at just $1.99/month on high-performance hardware."
              }),
              createVNode("meta", {
                "head-key": "keywords",
                name: "keywords",
                content: "Advin Servers, affordable hosting solutions, reliable hosting services, cpanel hosting, website hosting, directadmin hosting"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { title: "Dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-black"${_scopeId}><div class="relative py-12 isolate"${_scopeId}><div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"${_scopeId}><div class="relative left-[calc(50%-11rem)] aspect-[1155/878] w-[36.125rem] -translate-x-1/4 rotate-[10deg] bg-gradient-to-tr from-[#8086ff] to-[#8b89fc] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"${_scopeId}></div></div><div class="relative max-w-7xl mx-auto px-3 pt-20"${_scopeId}><div class="overflow-hidden sm:rounded-lg"${_scopeId}><div class="mt-20 mx-auto mb-20"${_scopeId}><h1 class="mb-4 font-bold text-6xl"${_scopeId}><span class="text-white"${_scopeId}> Website Hosting </span></h1><p class="font-normal text-white text-2xl mt-6"${_scopeId}> Choose between panels: cPanel or DirectAdmin. <br${_scopeId}> Availability across 3 global locations. </p><ul class="list-disc text-white list-inside mt-5"${_scopeId}><li${_scopeId}>High performance website hosting</li><li${_scopeId}>Great support and reliability</li><li${_scopeId}>Global availability of servers, 99.99% SLA guarantee</li></ul></div></div></div></div></div><div class="relative max-w-7xl mx-auto px-3 pt-10"${_scopeId}><div class="overflow-hidden sm:rounded-lg"${_scopeId}><div class="mt-5 mx-auto"${_scopeId}><h1 class="mb-4 font-bold text-3xl"${_scopeId}><span class="text-black"${_scopeId}> Our Products </span><div class="grid gap-4 lg:grid-cols-3 sm:grid-cols-1"${_scopeId}><div class="w-full max-w-sm p-4 bg-white border rounded-lg shadow sm:p-8 mt-5"${_scopeId}><h5 class="mb-1 text-xl font-medium text-gray-500"${_scopeId}>Canada cPanel Hosting</h5><h5 class="mb-1 text-sm font-thin text-gray-400"${_scopeId}>Starting at</h5><div class="flex items-baseline text-gray-900"${_scopeId}><span class="text-3xl font-semibold"${_scopeId}>$</span><span class="text-5xl font-extrabold tracking-tight"${_scopeId}>1.99</span><span class="ms-1 text-xl font-normal text-gray-500"${_scopeId}>/month</span></div><ul role="list" class="space-y-2 my-4"${_scopeId}><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Intel Xeon Processor</span></li><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>20GB NVMe SSD Storage</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Fair Use Domains</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Fair Use Databases</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Fair Use File Inodes</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Powered by cPanel</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>1GB RAM &amp; 1 CPU thread</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Located in Beauharnois, CA</span></li></ul><a class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" href="https://clients.advinservers.com/store/website-hosting/cpanel-website-hosting-1"${_scopeId}>Learn More</a></div><div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5"${_scopeId}><h5 class="mb-1 text-xl font-medium text-gray-500"${_scopeId}>Las Vegas DirectAdmin Hosting</h5><h5 class="mb-1 text-sm font-thin text-gray-400"${_scopeId}>Starting at</h5><div class="flex items-baseline text-gray-900"${_scopeId}><span class="text-3xl font-semibold"${_scopeId}>$</span><span class="text-5xl font-extrabold tracking-tight"${_scopeId}>1.99</span><span class="ms-1 text-xl font-normal text-gray-500"${_scopeId}>/month</span></div><ul role="list" class="space-y-2 my-4"${_scopeId}><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>AMD Ryzen Processor</span></li><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Fair Use NVMe SSD Storage</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Fair Use Domains</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Fair Use Databases</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Fair Use File Inodes</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Powered by DirectAdmin</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>1GB RAM &amp; 1 CPU thread</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Located in Las Vegas, NV</span></li></ul><a class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" href="https://clients.advinservers.com/store/website-hosting/basic-plan-las-vegas"${_scopeId}>Learn More</a></div><div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5"${_scopeId}><h5 class="mb-1 text-xl font-medium text-gray-500"${_scopeId}>Singapore cPanel Hosting</h5><h5 class="mb-1 text-sm font-thin text-gray-400"${_scopeId}>Starting at</h5><div class="flex items-baseline text-gray-900"${_scopeId}><span class="text-3xl font-semibold"${_scopeId}>$</span><span class="text-5xl font-extrabold tracking-tight"${_scopeId}>3.99</span><span class="ms-1 text-xl font-normal text-gray-500"${_scopeId}>/month</span></div><ul role="list" class="space-y-2 my-4"${_scopeId}><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Intel Xeon Processor</span></li><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Fair Use NVMe SSD Storage</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Fair Use Domains</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Fair Use Databases</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>500,000 File Inodes</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Powered by cPanel</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>1GB RAM &amp; 1 CPU thread</span></li><li class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckIcon), {
              class: "h-6 w-5 flex-none text-black",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-base font-normal leading-tight text-gray-500 ms-3"${_scopeId}>Located in Singapore</span></li></ul><a class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" href="https://clients.advinservers.com/store/website-hosting/unmetered-plan-singapore"${_scopeId}>Learn More</a></div></div></h1></div><div class="relative max-w-7xl mx-auto pt-10"${_scopeId}><div class="overflow-hidden sm:rounded-lg"${_scopeId}><div class="pt-10 mx-auto"${_scopeId}><div class="grid md:grid-cols-3 sm:grid-cols-1 gap-14"${_scopeId}><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"${_scopeId}><div class="bg-white mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BuildingStorefrontIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Softaculous App Installer</h4><p class="text-gray-700"${_scopeId}> Choose a library of 200+ website applications to host on your website hosting, including WordPress, Joomla, WHMCS, and more. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"${_scopeId}><div class="bg-white mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(WifiIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>Backups</h4><p class="text-gray-700"${_scopeId}> All services offer daily backups, with a 7 day retention period. You can restore your website to any point in time within the last 7 days. </p></div></div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"${_scopeId}><div class="bg-white mt-5"${_scopeId}><div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BanknotesIcon), { class: "h-10 text-black" }, null, _parent2, _scopeId));
            _push2(`</div><h4 class="text-xl font-bold mb-2"${_scopeId}>CloudLinux</h4><p class="text-gray-700"${_scopeId}> Select PHP versions, extensions, and more through our CloudLinux interface. You can also install Node.js apps and more. </p></div></div></div></div></div></div></div><div class="mb-32"${_scopeId}></div></div>`);
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
                          createVNode("span", { class: "text-white" }, " Website Hosting ")
                        ]),
                        createVNode("p", { class: "font-normal text-white text-2xl mt-6" }, [
                          createTextVNode(" Choose between panels: cPanel or DirectAdmin. "),
                          createVNode("br"),
                          createTextVNode(" Availability across 3 global locations. ")
                        ]),
                        createVNode("ul", { class: "list-disc text-white list-inside mt-5" }, [
                          createVNode("li", null, "High performance website hosting"),
                          createVNode("li", null, "Great support and reliability"),
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
                      createVNode("div", { class: "grid gap-4 lg:grid-cols-3 sm:grid-cols-1" }, [
                        createVNode("div", { class: "w-full max-w-sm p-4 bg-white border rounded-lg shadow sm:p-8 mt-5" }, [
                          createVNode("h5", { class: "mb-1 text-xl font-medium text-gray-500" }, "Canada cPanel Hosting"),
                          createVNode("h5", { class: "mb-1 text-sm font-thin text-gray-400" }, "Starting at"),
                          createVNode("div", { class: "flex items-baseline text-gray-900" }, [
                            createVNode("span", { class: "text-3xl font-semibold" }, "$"),
                            createVNode("span", { class: "text-5xl font-extrabold tracking-tight" }, "1.99"),
                            createVNode("span", { class: "ms-1 text-xl font-normal text-gray-500" }, "/month")
                          ]),
                          createVNode("ul", {
                            role: "list",
                            class: "space-y-2 my-4"
                          }, [
                            createVNode("li", { class: "flex items-center" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Intel Xeon Processor")
                            ]),
                            createVNode("li", { class: "flex items-center" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "20GB NVMe SSD Storage")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Fair Use Domains")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Fair Use Databases")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Fair Use File Inodes")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Powered by cPanel")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "1GB RAM & 1 CPU thread")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Located in Beauharnois, CA")
                            ])
                          ]),
                          createVNode("a", {
                            class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",
                            href: "https://clients.advinservers.com/store/website-hosting/cpanel-website-hosting-1"
                          }, "Learn More")
                        ]),
                        createVNode("div", { class: "w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5" }, [
                          createVNode("h5", { class: "mb-1 text-xl font-medium text-gray-500" }, "Las Vegas DirectAdmin Hosting"),
                          createVNode("h5", { class: "mb-1 text-sm font-thin text-gray-400" }, "Starting at"),
                          createVNode("div", { class: "flex items-baseline text-gray-900" }, [
                            createVNode("span", { class: "text-3xl font-semibold" }, "$"),
                            createVNode("span", { class: "text-5xl font-extrabold tracking-tight" }, "1.99"),
                            createVNode("span", { class: "ms-1 text-xl font-normal text-gray-500" }, "/month")
                          ]),
                          createVNode("ul", {
                            role: "list",
                            class: "space-y-2 my-4"
                          }, [
                            createVNode("li", { class: "flex items-center" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "AMD Ryzen Processor")
                            ]),
                            createVNode("li", { class: "flex items-center" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Fair Use NVMe SSD Storage")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Fair Use Domains")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Fair Use Databases")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Fair Use File Inodes")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Powered by DirectAdmin")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "1GB RAM & 1 CPU thread")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Located in Las Vegas, NV")
                            ])
                          ]),
                          createVNode("a", {
                            class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",
                            href: "https://clients.advinservers.com/store/website-hosting/basic-plan-las-vegas"
                          }, "Learn More")
                        ]),
                        createVNode("div", { class: "w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-5" }, [
                          createVNode("h5", { class: "mb-1 text-xl font-medium text-gray-500" }, "Singapore cPanel Hosting"),
                          createVNode("h5", { class: "mb-1 text-sm font-thin text-gray-400" }, "Starting at"),
                          createVNode("div", { class: "flex items-baseline text-gray-900" }, [
                            createVNode("span", { class: "text-3xl font-semibold" }, "$"),
                            createVNode("span", { class: "text-5xl font-extrabold tracking-tight" }, "3.99"),
                            createVNode("span", { class: "ms-1 text-xl font-normal text-gray-500" }, "/month")
                          ]),
                          createVNode("ul", {
                            role: "list",
                            class: "space-y-2 my-4"
                          }, [
                            createVNode("li", { class: "flex items-center" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Intel Xeon Processor")
                            ]),
                            createVNode("li", { class: "flex items-center" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Fair Use NVMe SSD Storage")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Fair Use Domains")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Fair Use Databases")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "500,000 File Inodes")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Powered by cPanel")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "1GB RAM & 1 CPU thread")
                            ]),
                            createVNode("li", { class: "flex" }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-6 w-5 flex-none text-black",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-base font-normal leading-tight text-gray-500 ms-3" }, "Located in Singapore")
                            ])
                          ]),
                          createVNode("a", {
                            class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",
                            href: "https://clients.advinservers.com/store/website-hosting/unmetered-plan-singapore"
                          }, "Learn More")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative max-w-7xl mx-auto pt-10" }, [
                    createVNode("div", { class: "overflow-hidden sm:rounded-lg" }, [
                      createVNode("div", { class: "pt-10 mx-auto" }, [
                        createVNode("div", { class: "grid md:grid-cols-3 sm:grid-cols-1 gap-14" }, [
                          createVNode("div", {
                            class: "aos-init aos-animate",
                            "data-aos": "fade-up",
                            "data-aos-delay": "100"
                          }, [
                            createVNode("div", { class: "bg-white mt-5" }, [
                              createVNode("div", { class: "mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center" }, [
                                createVNode(unref(BuildingStorefrontIcon), { class: "h-10 text-black" })
                              ]),
                              createVNode("h4", { class: "text-xl font-bold mb-2" }, "Softaculous App Installer"),
                              createVNode("p", { class: "text-gray-700" }, " Choose a library of 200+ website applications to host on your website hosting, including WordPress, Joomla, WHMCS, and more. ")
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
                              createVNode("h4", { class: "text-xl font-bold mb-2" }, "Backups"),
                              createVNode("p", { class: "text-gray-700" }, " All services offer daily backups, with a 7 day retention period. You can restore your website to any point in time within the last 7 days. ")
                            ])
                          ]),
                          createVNode("div", {
                            class: "aos-init aos-animate",
                            "data-aos": "fade-up",
                            "data-aos-delay": "100"
                          }, [
                            createVNode("div", { class: "bg-white mt-5" }, [
                              createVNode("div", { class: "mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center" }, [
                                createVNode(unref(BanknotesIcon), { class: "h-10 text-black" })
                              ]),
                              createVNode("h4", { class: "text-xl font-bold mb-2" }, "CloudLinux"),
                              createVNode("p", { class: "text-gray-700" }, " Select PHP versions, extensions, and more through our CloudLinux interface. You can also install Node.js apps and more. ")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-32" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/WebsiteHosting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
