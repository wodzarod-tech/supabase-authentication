import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"
//import { createSupabaseServerClient } from "@/lib/supabase/server-client"
import { User } from "@supabase/supabase-js";
import UserMenu from "./UserMenu";

type Props = {
  user: User | null;
};

export default function Navbar({ user }: Props) {
  //const supabase = await createSupabaseServerClient();
  /*
  const {
    data: { user },
  } = await supabase.auth.getUser();
  */
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white border-b border-gray-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
      <Link href="/" className="flex items-center gap-3">
        <Image
            src="/images/logo.png"
            alt="logo"
            width={46}
            height={44}
            //priority
        />
        <span className="text-2xl font-semibold">
            EasyExam
        </span>
      </Link>

      <div className="flex items-center gap-6">
        {/*<NavItems />*/}

        {!user ? (
          <Link 
            href="/login"
            className="btn-signin"
            >
            Start Free Now
            {/*<button className="btn-signin">Start Free Now</button>*/}
          </Link>
        ) : (
          <UserMenu user={user} />
        )}
      </div>
    </div>
    </nav>
  );
}