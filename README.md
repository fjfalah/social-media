# social-media

Simple Social Media. UI & UX inspired by Twitter.

### Feature
- User can view profile
- User can view user's profile
- User can view list of users
- User can view list of posts of each user
- User can view list of albums of each user
- User can view the detail of each post and its comment
- User can view list of photos from an album
- User can view the detail of photo
- User can add, edit and delete post
- User can add, edit and delete comment

### Asumption
- User is already login with `userId = 10`
- User can Edit / Delete Post with `userId = 10`
- Because the API rule is fire and forget event (once event)
  1. User Event's Effect (Create, Edit, Delete) is reset if refresh browser
  2. User just can create once post / comment, refresh to create again
  3. User can't edit / remove New Post / Comment

### Main Dependencies
- React Js (View)
- Rx Js (Middleware)
- Styled Components (CSS)
- Reactstrap (CSS Framework)
- Axios (Fetch)
- Webpack (Bundler)
- Jest (Unit Test)
- API URL ([here](https://jsonplaceholder.typicode.com/))

### How to Run

```bash
# development mode
npm install
npm run dev
```

```bash
# production mode
npm install
npm start
```
