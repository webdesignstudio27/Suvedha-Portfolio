# Suvedha — Software Developer Portfolio

A responsive React + Vite portfolio with a dark cinematic visual style and your supplied profile photo.

## Project structure

- `frontend/` — React website (deploy this folder to Vercel)
- `backend/contact.php` — optional PHP contact endpoint starter

## Publish using GitHub website + Vercel

1. Extract `Suvedha-Portfolio-Updated.zip`.
2. Create a GitHub repository.
3. In the repository choose **Add file → Upload files**.
4. Upload the extracted contents (the `frontend`, `backend`, and `README.md` items), not the ZIP file itself.
5. On Vercel choose **Add New → Project** and import the GitHub repository.
6. Set **Root Directory** to `frontend`.
7. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`. Install command: `npm install`.
8. Click **Deploy**.

## Contact form

The contact form currently opens the visitor's email app using `mailto:sivasuvedha@gmail.com`. This works without a backend deployment. `backend/contact.php` is an optional starter endpoint; deploy it separately on PHP hosting if you later want server-side form handling.

## Update your details

Edit `frontend/src/App.jsx` to update profile text, projects, education, links, or phone/email. Replace `frontend/public/images/profile.jpg` to change your profile photo.
