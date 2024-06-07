import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "File Organization Guidelines",
    content:
      "A file consists of sections that should be separated by blank lines and an optional comment identifying each section.",
    date: sub(new Date(), { minutes: 30 }).toISOString(),
    reactions: {
      thumbsUp: 0,
    },
  },
  {
    id: "2",
    title: "Indentation",
    content:
      "Four spaces should be used as the unit of indentation. The exact construction of the indentation",
    date: sub(new Date(), { minutes: 50 }).toISOString(),
    reactions: {
      thumbsUp: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, categoryId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            categoryId,
            reactions: {
              thumbsUp: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },

  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchPosts.pending, (state, action) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchPosts.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       Adding date and reactions
  //       let min = 1;
  //       const loadedPosts = action.payload.map((post) => {
  //         post.date = sub(new Date(), { minutes: min++ }).toISOString();
  //         post.reactions = {
  //           thumbsUp: 0,
  //           wow: 0,
  //           heart: 0,
  //           rocket: 0,
  //           coffee: 0,
  //         };
  //         return post;
  //       });

  //       Add any fetched posts to the array
  //       state.posts = state.posts.concat(loadedPosts);
  //     })
  //     .addCase(fetchPosts.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     })
  //     .addCase(addNewPost.fulfilled, (state, action) => {
  //       Fix for API post IDs:
  //       Creating sortedPosts & assigning the id
  //       would be not be needed if the fake API
  //       returned accurate new post IDs
  //       const sortedPosts = state.posts.sort((a, b) => {
  //         if (a.id > b.id) return 1;
  //         if (a.id < b.id) return -1;
  //         return 0;
  //       });
  //       action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
  //       End fix for fake API post IDs

  //       action.payload.userId = Number(action.payload.userId);
  //       action.payload.date = new Date().toISOString();
  //       action.payload.reactions = {
  //         thumbsUp: 0,
  //         wow: 0,
  //         heart: 0,
  //         rocket: 0,
  //         coffee: 0,
  //       };
  //       console.log(action.payload);
  //       state.posts.push(action.payload);
  //     })
  //     .addCase(updatePost.fulfilled, (state, action) => {
  //       if (!action.payload?.id) {
  //         console.log("Update could not complete");
  //         console.log(action.payload);
  //         return;
  //       }
  //       const { id } = action.payload;
  //       action.payload.date = new Date().toISOString();
  //       const posts = state.posts.filter((post) => post.id !== id);
  //       state.posts = [...posts, action.payload];
  //     })
  //     .addCase(deletePost.fulfilled, (state, action) => {
  //       if (!action.payload?.id) {
  //         console.log("Delete could not complete");
  //         console.log(action.payload);
  //         return;
  //       }
  //       const { id } = action.payload;
  //       const posts = state.posts.filter((post) => post.id !== id);
  //       state.posts = posts;
  //     });
  // },
});

export const selectPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
