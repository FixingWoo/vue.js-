import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import DataBindingInputNumber from "../views/DataBindingInputNumber.vue";
import DataBindingTextArea from "../views/DataBindingTextArea.vue";
import DataBindingSelect from "../views/DataBindingSelect.vue";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingCheckbox2 from "../views/DataBindingCheckbox2.vue";
import DataBindingRadio from "../views/DataBindingRadio.vue";
import DataBindingAttribute from "../views/DataBindingAttribute.vue";
import DataBindingButton from "../views/DataBindingButton.vue";
import DataBindingClass from "../views/DataBindingClass.vue";
import DataBindingClass2 from "../views/DataBindingClass2.vue";
import DataBindingStyle from "../views/DataBindingStyle.vue";
import DataBindingList from "../views/DataBindingList";
import RenderingVIf from "../views/RenderingVIf";
import EventClick from "../views/EventClick";
import EventChange from "../views/EventChange";
import MyComputed from "../views/MyComputed";
import MyWatch from "../views/MyWatch";
import DataBindingList2 from "../views/DataBindingList2";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/databinding",
    name: "databinding",
    component: DataBinding,
  },
  {
    path: "/databindingHtml",
    name: "databindingHtml",
    component: DataBindingHtml,
  },
  {
    path: "/databindingInputText",
    name: "databindingInputText",
    component: DataBindingInputText,
  },
  {
    path: "/databindingInputNumber",
    name: "databindingInputNumber",
    component: DataBindingInputNumber,
  },
  {
    path: "/databindingTextArea",
    name: "databindingTextArea",
    component: DataBindingTextArea,
  },
  {
    path: "/databindingSelect",
    name: "databindingSelect",
    component: DataBindingSelect,
  },
  {
    path: "/databindingCheckbox",
    name: "databindingCheckbox",
    component: DataBindingCheckbox,
  },
  {
    path: "/databindingCheckbox2",
    name: "databindingCheckbox2",
    component: DataBindingCheckbox2,
  },
  {
    path: "/databindingRadio",
    name: "databindingRadio",
    component: DataBindingRadio,
  },
  {
    path: "/databindingAttribute",
    name: "databindingAttribute",
    component: DataBindingAttribute,
  },
  {
    path: "/databindingButton",
    name: "databindingButton",
    component: DataBindingButton,
  },
  {
    path: "/databindingClass",
    name: "databindingClass",
    component: DataBindingClass,
  },
  {
    path: "/databindingClass2",
    name: "databindingClass2",
    component: DataBindingClass2,
  },
  {
    path: "/databindingStyle",
    name: "databindingStyle",
    component: DataBindingStyle,
  },
  {
    path: "/databindingList",
    name: "databindingList",
    component: DataBindingList,
  },
  {
    path: "/renderingVIf",
    name: "renderingVIf",
    component: RenderingVIf,
  },
  {
    path: "/eventClick",
    name: "eventClick",
    component: EventClick,
  },
  {
    path: "/eventChange",
    name: "eventChaneg",
    component: EventChange,
  },
  {
    path: "/myComputed",
    name: "myComputed",
    component: MyComputed,
  },
  {
    path: "/watch",
    name: "watch",
    component: MyWatch,
  },
  {
    path: "/databindingList2",
    name: "databindingList2",
    component: DataBindingList2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
