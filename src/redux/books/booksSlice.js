import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'Book 1',
      author: 'Author 1',
      progress: '60%',
    },
    {
      id: uuidv4(),
      title: 'Book 2',
      author: 'Author 2',
      progress: '76%',
    },
  ]
};

const booksSlice = createSlice({
  name: "books",
  initialState,
});

export default booksSlice.reducer