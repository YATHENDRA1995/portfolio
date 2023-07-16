// Navigating to corresponding section
export const scrollToComp = (id) => {
  // document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  let element = document.getElementById(id);
  let headerOffset = 58;
  let elementPosition = element.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.scrollY - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const openNewLink = (link) => {
  if (link) {
    window.open(link, '_blank')
  }
}