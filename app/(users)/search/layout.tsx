import Search from "./Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Search Page",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h1>Search</h1>
      </div>
      <div className="flex-1 pl-5">
        {" "}
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
}
