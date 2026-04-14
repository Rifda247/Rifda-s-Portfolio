# /public — Static Assets

Place your images directly in this folder.
Vite serves everything in /public at the root URL automatically.

## Required images:

| File name          | Used in        | Recommended size     |
|--------------------|----------------|----------------------|
| profile.jpg        | About section  | 600×750px (4:5 ratio)|
| project-01.png     | Projects card  | 1200×750px (16:10)   |
| project-02.png     | Projects card  | 1200×750px (16:10)   |
| project-03.png     | Projects card  | 1200×750px (16:10)   |
| og-image.png       | SEO / social   | 1200×630px           |
| favicon.ico        | Browser tab    | 32×32px              |

## Tips:
- Use .jpg for photos (smaller file size)
- Use .png for screenshots with text (sharper)
- Compress images at tinypng.com before adding them
- Reference in code as: src="/profile.jpg" (leading slash, no /public prefix)
