import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRepos = createAsyncThunk('repos/fetch', async () => {
  const res = await fetch('https://api.github.com/users/nurhabibrs/repos');
  if (!res.ok) throw new Error('Failed to fetch repos');
  return res.json();
});

const reposSlice = createSlice({
  name: 'repos',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchRepos.pending, (s) => { s.loading = true; });
    b.addCase(fetchRepos.fulfilled, (s, a) => { s.items = a.payload; s.loading = false; });
    b.addCase(fetchRepos.rejected, (s, a) => { s.error = a.error.message; s.loading = false; });
  },
});
export default reposSlice.reducer;
