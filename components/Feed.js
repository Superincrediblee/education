'use client';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Box } from '@mui/material';
import Post from './Post';

export default function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
