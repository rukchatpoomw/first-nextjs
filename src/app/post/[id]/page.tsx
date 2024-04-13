import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { env } from "process";
import { cloneElement, useState } from "react";

type TPost = {
  [x: string]: any;
  id: number;
  title: string;
  content?: any;
  published: boolean;
  authorId: number;
};

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
async function generateStaticParams(id: number): Promise<TPost> {
  console.log(`${env.NEXT_PUBLIC_API}/post/${id}`);

  return await fetch(`${env.NEXT_PUBLIC_API}/post/${id}`).then((res) =>
    res.json()
  );
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: { id: string } }) {
  const id = +params.id;
  const post = await generateStaticParams(id);
  console.log(post);

  return <Box sx={{ m: 4 }}>{post.title}</Box>;
}
