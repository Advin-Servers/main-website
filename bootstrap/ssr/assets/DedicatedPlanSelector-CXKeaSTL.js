import { S as SectionTitle } from "./SectionTitle-CZQPTZ98.js";
import { S as SectionBorder } from "./SectionBorder-DyqoGRve.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  components: { SectionBorder, SectionTitle },
  props: {
    availablePlans: {
      type: Array
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-md overflow-x-auto" }, _attrs))}><table class="w-full divide-y divide-gray-300"><thead class="text-xs text-gray-700 bg-gray-50"><tr><th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th><th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">CPU</th><th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Memory</th><th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Storage</th><th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Bandwidth</th><th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Deployment Time</th><th scope="col" class="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Price</th><th scope="col" class="relative py-2 pl-3 pr-4 sm:pr-6"><span class="sr-only">Purchase</span></th></tr></thead><tbody class="divide-y divide-gray-200 bg-white"><!--[-->`);
  ssrRenderList($props.availablePlans, (plan, index) => {
    _push(`<tr><td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"><div class="font-normal text-gray-900">${ssrInterpolate(plan.name)}</div></td><td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"><div class="font-normal text-gray-900">${ssrInterpolate(plan.vcpu_cores)}</div></td><td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"><div class="font-normal text-gray-900">${ssrInterpolate(parseFloat(plan.memory / 1e3).toFixed(0))}GB DDR4 </div></td><td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"><div class="font-normal text-gray-900">${ssrInterpolate(parseFloat(plan.disk).toFixed(0))}GB NVMe SSD Storage </div></td><td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"><div class="font-normal text-gray-900">${ssrInterpolate(parseFloat(plan.bandwidth).toFixed(0) / 1e3)}TB Bandwidth </div></td><td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"><div class="font-normal text-gray-900">${ssrInterpolate(plan.deployment_time)}</div></td><td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"><div class="font-normal text-gray-900"> $${ssrInterpolate(parseFloat(plan.price))}/month </div></td><td class="relative pl-3 pr-4 text-right text-sm font-medium sm:pr-6">`);
    if (plan.stock) {
      _push(`<button class="text-blue-600 hover:text-blue-900"${ssrRenderAttr("href", plan.whmcs_url)}>Purchase</button>`);
    } else {
      _push(`<span class="text-red-600">Out of Stock</span>`);
    }
    _push(`</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Partials/DedicatedPlanSelector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DedicatedPlanSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  DedicatedPlanSelector as default
};
