"use client";
import useAuthModal from "@/hooks/useAuthModal";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();

  const handleLogout = () => {
    // Handle Logout in the future
  };
  return (
    <div
      className={twMerge(
        `
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6 
    `,
        className
      )}
    >
      <div
        className="
    w-full
    mb-4
    flex
    items-center
    justify-between

    "
      >
        {/* back and forword button start */}
        <div
          className="
            hidden
            md:flex
            gap-x-2
            items-center
        "
        >
          <button
            onClick={() => router.back()}
            className="
          rounded-full
          bg-black
          flex
          items-center
          justify-center
          hover:opacity-75
          transition
          "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="
          rounded-full
          bg-black
          flex
          items-center
          justify-center
          cursor-pointer
          hover:opacity-75
          transition
          "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        {/* back and forward button end */}

        {/* mobile device sidebar button start */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="
            rounded-full
            p-2
            bg-white
            md:flex
            items-center
            justify-center
            hover:opacity-75
            transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            className="
            rounded-full
            p-2
            bg-white
            flex
            items-center
            justify-center
            hover:opacity-75
            transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        {/* mobile device sidebar button end */}

        {/* login and logout button element start */}
        <div
          className="
                 flex
                 justify-between
                 items-center
                 gap-x-4
                "
        >
          <>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="
                bg-transparent
                text-neutral-300
                font-medium
                "
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="
                px-6
                py-2
                bg-white
                
                "
              >
                Log in
              </Button>
            </div>
          </>
        </div>
        {/* login and logout button element end */}
      </div>
      {children}
    </div>
  );
};

export default Header;