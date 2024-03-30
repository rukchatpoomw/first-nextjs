import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { env } from "process";

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
    <div className="flex">
      <h1 className="text-cyan-100">Generate Staic Params</h1>
      <div>
        {data.map((user, index) => {
          return (
            <Link href={`/user/${user.id}`} key={index}>
              {user.name}
            </Link>
          );
        })}
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/blog/1">Blog</Link>
      </div>
    </div>
  );
}
