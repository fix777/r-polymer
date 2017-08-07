export default function isEllipsisActive(el: HTMLElement | null | undefined) {
  if (!el) return false;
  const { offsetWidth, scrollWidth } = el;
  return offsetWidth < scrollWidth;
}
