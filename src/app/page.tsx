import { Metadata } from "next";
import Link from "next/link";
import { env } from "process";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";

export const metadata: Metadata = {
  title: "Next.js",
};

type TUsers = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  phone: string;
  website: string;
  company: TCompany;
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: any;
};

const BoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
  gap: 2,
  my: 4,
};

export default async function Home() {
  const data: TUsers[] = await fetch(
    `${env.NEXT_PUBLIC_EXTERNAL_API}/users`
  ).then((res) => res.json());

  return (
    <Container maxWidth="lg">
      <Box sx={BoxStyle}>
        <Typography className=" font-bold text-2xl">
          Route by Open-API
        </Typography>
        <Box sx={BoxStyle}>
          {data.map((user, index) => {
            return (
              <Link href={`/user/${user.id}`} key={index} className=" w-full">
                <Button
                  sx={{ ":hover": { background: "red" }, width: "100%" }}
                  variant="contained"
                >
                  {user.name}
                </Button>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          ...BoxStyle,
          backgroundColor: "Background",
          p: 2,
          borderRadius: 1,
        }}
        component={"form"}
        noValidate
      >
        {/* <Link href="/dashboard" className=" w-full">
          <Button
            className="w-full bg-orange-400 hover:bg-orange-700"
            variant="contained"
          >
            Dashboard
          </Button>
        </Link>
        <Link href="/blog/1">
          <Button className=" bg-gray-300 w-full" variant="contained">
            Blog
          </Button>
        </Link> */}
        {/* <TextField variant="outlined" /> */}

        <Link href="/post/">
          <Button className=" bg-yellow-700 w-full" variant="contained">
            Post
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
