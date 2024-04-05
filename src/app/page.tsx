import { Metadata } from "next";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { env } from "process";
import {
  Button,
  Autocomplete,
  TextField,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ButtonUsage from "@/components/Button";

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

export default async function Page() {
  const data: TUsers[] = await fetch(`${env.NEXT_PUBLIC_API}/users`).then(
    (res) => res.json()
  );

  return (
    <main className="flex flex-col justify-items-center items-center gap-4 p-4">
      <h1 className=" font-bold text-2xl">Generate Staic Params</h1>
      <div className="grid gap-4">
        {data.map((user, index) => {
          return (
            <Link
              className=" hover:text-red-400"
              href={`/user/${user.id}`}
              key={index}
            >
              <Button className="w-full" variant="contained">
                {user.name}
              </Button>
            </Link>
          );
        })}
        <div className="grid gap-4 rounded p-4 bg-slate-200 ">
          <Link href="/dashboard">
            <Button className=" bg-orange-400 w-full" variant="contained">
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className=" bg-gray-300 w-full" variant="contained">
              Blog
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
