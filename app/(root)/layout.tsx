import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full h-screen  ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
