import { env } from "process";

type TUserParam = {
  id: string;
};

interface TParams {
  params: TUserParam;
  searchParams: SearchParams;
}

interface SearchParams {}

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

// Return a list of `params` to populate the [slug] dynamic segment
async function getData(id: string) {
  const url = `${env.NEXT_PUBLIC_EXTERNAL_API}/users/${id}`;
  const user: TUsers = await fetch(url).then((res) => res.json());
  return user;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: TParams) {
  const { id } = params;
  const data: any = await getData(id);
  const keys = Object.keys(data);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {keys.map((key, index) => {
        return (
          <span key={index}>
            {typeof data[key] !== "object" ? data[key] : undefined}
          </span>
        );
      })}
    </div>
  );
}
