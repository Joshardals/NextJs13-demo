import TodosList from "./TodosList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Todos Page",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div>
        <TodosList />
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
}
