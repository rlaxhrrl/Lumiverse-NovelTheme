import { install } from './theme'

// Applies the theme to the current page only (nothing is saved). Run again to remove.
const w = window as unknown as { __ntRemove?: () => void }
if (w.__ntRemove) { w.__ntRemove(); w.__ntRemove = undefined }
else {
  w.__ntRemove = install((css) => {
    const s = document.createElement('style')
    s.id = 'nt-preview-style'
    s.textContent = css
    document.head.append(s)
    return () => s.remove()
  })
}
