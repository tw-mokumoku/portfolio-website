import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export function TechIconButtons(){
    return (
      <div className="flex justify-center gap-8">
        <Button variant="outline" size="icon">
          <Link href="https://github.com/tw-mokumoku">
            <FaGithub />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="https://www.linkedin.com/in/%E6%B8%A1%E9%82%8A-%E7%90%A2%E8%B3%87-731b63327/">
            <FaLinkedinIn />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="https://discord.gg/BF6z7Dw9">
            <FaDiscord />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="mailto:takushi.watanabe.work@gmail.com">
            <IoMail />
          </Link>
        </Button>
      </div>
    );
}