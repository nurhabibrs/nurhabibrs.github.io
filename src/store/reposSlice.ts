export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  archived: boolean;
}

interface ReposState {
  items: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRepos = createAsyncThunk<GitHubRepo[], void>(
  'repos/fetch',
  async () => {
    const res = await fetch('https://api.github.com/users/nurhabibrs/repos');
    if (!res.ok) throw new Error('Failed to fetch repos');
    return res.json();
  }
);

const initialState: ReposState = { items: [], loading: false, error: null };

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchRepos.pending, (s) => { s.loading = true; });
    b.addCase(fetchRepos.fulfilled, (s, a) => { s.items = a.payload; s.loading = false; });
    b.addCase(fetchRepos.rejected, (s, a) => { s.error = a.error.message ?? null; s.loading = false; });
  },
});
export default reposSlice.reducer;
