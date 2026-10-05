# Intro Stats design guide

Working draft for discussion and incremental pull requests. This records the
book's existing visual identity and the conventions introduced by the first
cleanup. Ideas under “Open decisions” are proposals, not approved changes.

## Visual identity

The cover is intended as **a William Blake vision of introductory statistics**.
It provides an expressive entrance to a calm, readable instructional book.
The current blue-and-gold Stats 1101 logo, cover image, sans-serif typography,
white reading surface, chapter navigation, and section contents are the starting
point for this guide.

The first cleanup preserves the cover, logo, fonts, navigation, course content,
and the existing meaning of colors. Future artwork should be considered alongside
the current cover before choosing a replacement.

## Callouts and exercises

- Keep explicit titles and distinct icons: readers should not need color alone
  to recognize a callout's purpose.
- Preserve the established roles: green for readings, orange for important
  notices, blue for exercises, and purple for optional external practice.
- Use flat callouts with colored borders and restrained title bands. Exercise
  bodies use the theme's neutral surface so long exercises do not become large
  colored panels.
- Scope exercise-specific selectors to exercises. Reading, warning, note,
  solution, and dropdown icons retain their own meaning.
- Use theme colors for text and surfaces, and check changes in both light and
  dark mode. Keep dropdown and solution behavior intact.

## Figures and captions

- Use consistent vertical spacing: 1.5rem around figures and 0.75rem between a
  figure and its caption. Captions use 0.95rem text, 1.5 line height, and the
  theme's muted text color.
- Preserve intentionally different figure widths, aspect ratios, axis ranges,
  labels, and scales. A multi-panel figure may need more room than a simple
  diagram.
- Retain figure numbers, captions, and cross-references. Captions should state
  the point that the surrounding discussion asks the reader to notice.
- Avoid overriding interactive plotting-library layout or controls with broad
  image or figure styling.
- Check plots at the actual reading width. Labels must remain legible, and
  important distinctions should also use labels, line styles, or markers.

## Image descriptions

- Supply descriptive alt text for meaningful images. Use `:alt:` in MyST figure
  directives and descriptive text in Markdown image brackets.
- For charts, identify the variables, units when relevant, and the main visual
  relationship. For diagrams, describe the relationships between elements.
- In exercises, describe the information available to a sighted reader without
  adding a solution or inference the exercise asks students to make.
- Keep substantive explanations and detailed data in the surrounding prose or a
  table rather than packing them all into alt text.
- Describe the cover as Blake-inspired; do not attribute the image to Blake.

The initial pass covers the two homepage images and every figure in the
histogram chapter. Other chapters remain candidates for a later accessibility
pass; this is not a claim that the whole book has been audited.

## Reviewing visual changes

Use the homepage, histogram figures and exercises, and regression chapter as
representative pages. Include a page with a dropdown or solution when changing
callout styles. Compare before and after at desktop and narrow widths, and in
light and dark modes. Check that titles, icons, figure captions, links, equations,
and plot controls remain readable and usable.

For presentation-only changes, a local build using stored notebook outputs is a
useful rendering check. Record whether notebooks were executed and any build
limitations in the PR; do not alter the production execution configuration just
to make a local preview easier.

## Open decisions

- Cover direction: an illuminated frontispiece with an ornamental border, or a
  visionary painting with a central figure.
- Whether a revised cover and the logo should share a tighter blue-and-gold
  palette.
- Whether serif chapter headings improve the book's character and readability.
- A common plotting style for static and interactive figures, including fonts,
  label sizes, line weights, and color choices.
- Teaching, writing, and chapter-structure principles to develop with the author.

Resolve these through discussion and concrete examples before applying them
across the book.
