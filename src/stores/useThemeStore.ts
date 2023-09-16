import {defineStore} from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const sideBarOpen = ref(false)
  const dropDownOpen = ref(false)

  const isDropDownOpen = computed(() => dropDownOpen.value)
  const isSideBarOpen = computed(() => sideBarOpen.value)

  function toggleSidebar() {
    sideBarOpen.value = !sideBarOpen.value
  }

  function toggleDropDown() {
    dropDownOpen.value = !dropDownOpen.value
  }

  return {
    sideBarOpen,
    dropDownOpen,
    toggleSidebar,
    toggleDropDown,
    isDropDownOpen,
    isSideBarOpen,
  }
})
