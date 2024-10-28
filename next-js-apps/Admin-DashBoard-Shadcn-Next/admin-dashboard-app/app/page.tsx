import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5 flex-wrap grow shrink basis-0">
        <DashboardCard title={"Posts"} count={"100"} icon={<Newspaper className="text-slate-500" size={72} />}  />
        <DashboardCard title={"Category"} count={"12"} icon={<Folder className="text-slate-500" size={72} />}  />
        <DashboardCard title={"Users"} count={"777"} icon={<Users className="text-slate-500" size={72} />}  />
        <DashboardCard title={"Comments"} count={"1234"} icon={<MessageCircle className="text-slate-500" size={72} />}  />
      </div>
      <PostsTable/>
    </>
  );
}
