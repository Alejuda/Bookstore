import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    "item_id": uuidv4(),
    "title": "The Great Gatsby",
    "author": "John Smith",
    "category": "Fiction"
  },
  {
    "item_id": uuidv4(),
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "category": "Fiction"
  },
  {
    "item_id": uuidv4(),
    "title": "The Selfish Gene",
    "author": "Richard Dawkins",
    "category": "Nonfiction"
  }
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        "item_id": action.payload.item_id,
        "title": action.payload.title,
        "author": action.payload.author,
        "category": "N/A",
      };
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const itemId = state.findIndex((book) => book.item_id === action.payload);
      if (itemId !== -1) {
        state.splice(itemId, 1);
      }
    }
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
