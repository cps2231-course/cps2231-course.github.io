# CPS 2231 · Computer Programming

Unofficial course companion for CPS 2231, Spring 2025, Sections 02 & 09, maintained by Songlin Shang. The site does not present itself as an official university website.

## Preview and edit

No package installation or build is required. Open `index.html`, or run `python3 -m http.server 8000 --bind 127.0.0.1` from the repository and visit `http://127.0.0.1:8000`.

- `index.html`: course overview, learning outcomes, topic coverage and teaching team.
- `syllabus.html`: syllabus summary, expectations and student support.
- `calendar.html`: confirmed weekly class meetings and deadline guidance.
- `lab.html`: original tutorial, six lab PDFs and code quality guide.
- `office-hours.html`: contact information and the existing TA timetable.
- `home.html`: backwards-compatible redirect to the overview.
- `archive/calendar-2024.html`: the original calendar table, explicitly marked historical.
- `assets/site.css`: shared responsive styles and print layout.
- `assets/site.js`: mobile navigation, lab filters and course search.
- `assets/search-index.js`: search data for course sections, loaded as a regular script so search works when opening HTML files directly. Update this index when changing searchable content.

Without JavaScript, the full navigation and course content remain visible; interactive search and filters are hidden.

Navigation and footer markup is static in each full page; update all pages if changing shared labels or links. All local URLs are relative so the website works under a GitHub Pages repository subpath.

## Content sources and decisions

The supplied nine-page **Simple Syllabus.pdf** identifies CPS 2231 W02, Spring 2025 (25/SPWZ), CPS 1231 as the prerequisite, and Monday/Wednesday meetings in Gehekai Hall C103. The two consecutive time blocks, 08:30–09:15 and 09:15–10:15, are displayed as 8:30–10:15 a.m.; the separate blocks are documented on the schedule page. Times are labeled China Standard Time because the course meets at the Wenzhou campus.

Learning outcomes, Canvas usage, the SI requirement, communication expectations and summarized university policies come from that syllabus. Four credits and the expanded topic list come from the course catalog screenshot supplied alongside it. This is a course guide, not a replacement for the full instructor-provided syllabus. The original PDF has not been copied into the public website.

The syllabus provides no assessment percentages, exam dates or weekly assignment calendar; none have been invented. Students are directed to instructor-provided details in Canvas.

The original `calendar.html` has 2024 dates despite a 2025 course heading. Its table and resource URLs are preserved in the clearly labeled archive. These dates have not been shifted or reused as Spring 2025 deadlines.

Teacher and TA names, course roles, email addresses and external course-resource URLs are retained from the existing site. Names use given-name-first order consistently. The homepage uses a compact contact table, without institutional affiliations or school branding. The existing TA schedule is explicitly marked for confirmation: Monday/Wednesday hours overlap W02 class meetings and are not confirmed by the supplied syllabus.

## Layout and identity

The design follows the course-site structure of the supplied CS 61A reference: a fixed left navigation, top search and service links, and a white reading area. Typography uses Arial/Helvetica, regular-weight page titles and conventional bold section headings. The layout adapts to mobile screens and does not depend on downloaded fonts. The structure was informed by the publicly accessible [Berkeley CS 61A](https://cs61a.org/fa26/), [Stanford CS106B](https://web.stanford.edu/class/cs106b/), and [Cornell CS 2110](https://www.cs.cornell.edu/courses/cs2110/2025fa/) course pages. Their branding, content, graphics and code were not copied.

The university/department masthead, homepage maintainer notice and shared footer have been removed from all pages at the site owner’s request. Factual campus and policy references remain in the syllabus and schedule. The school's name or seal is not used as the site's visual identity. Institutional authorization has not been established; confirm any future institutional branding with the appropriate university contact.

## Before publishing a new term

Confirm the intended semester/section, Canvas and Gradescope course URLs, teaching-team details, resource availability and TA office hours. Update actual assessment and deadline information only from the instructor's confirmed materials. This local redesign has not changed the repository's deployment settings.
