import type { App } from 'vue';

import {
  ElTag,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElSubMenu,
  ElButton,
  ElCol,
  ElRow,
  ElDivider,
  ElDropdown,
  ElMenu,
  ElMenuItem,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElInput,
  ElPopover,
  ElPopper,
  ElTooltip,
  ElDrawer,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElBacktop,
  ElSwitch,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElAvatar,
  ElEmpty,
  ElCollapse,
  ElCollapseItem,
  ElDialog,
  ElCard,
  ElTable,
  ElTableColumn,
  ElTreeSelect,
  ElTree,
  ElSelect,
  ElAlert,
  ElLink,
  ElForm,
  ElFormItem,
  ElUpload,
  ElCheckbox,
  ElCheckTag,
  ElCheckboxGroup,
  ElCheckboxButton,
  ElImage,
  ElInputNumber,
  ElAside,
  ElMain,
  ElContainer,
  ElMenuItemGroup,
  ElHeader,
  // 指令
  ElLoading,
  ElInfiniteScroll,
} from 'element-plus';

const elementComponents = [
  ElInputNumber,
  ElHeader,
  ElMenuItemGroup,
  ElCheckbox,
  ElCheckTag,
  ElImage,
  ElCheckboxGroup,
  ElCheckboxButton,
  ElUpload,
  ElLink,
  ElForm,
  ElFormItem,
  ElTag,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElSubMenu,
  ElButton,
  ElCol,
  ElRow,
  ElDivider,
  ElDropdown,
  ElMenu,
  ElMenuItem,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElInput,
  ElPopover,
  ElPopper,
  ElTooltip,
  ElDrawer,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElBacktop,
  ElSwitch,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElAvatar,
  ElEmpty,
  ElCollapse,
  ElCollapseItem,
  ElDialog,
  ElCard,
  ElTable,
  ElTableColumn,
  ElTreeSelect,
  ElTree,
  ElSelect,
  ElAlert,
  ElAside,
  ElMain,
  ElContainer,
];

// 指令
const plugins = [ElLoading, ElInfiniteScroll];


export function registerGlobalComponents(app: App) {
  elementComponents.forEach((comp) => {
    app.component(comp.name, comp);
  });

  // 注册指令
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
}
