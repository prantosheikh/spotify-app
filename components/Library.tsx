"use client";
import useAuthModal from "@/hooks/useAuthModal";
import useOnPlay from "@/hooks/useOnPlay";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const { user } = useUser();
  const onPlay = useOnPlay(songs);
  const uploadModal = useUploadModal();
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    //  ToDo Chak and subscription
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div
        className="
        flex 
        items-center
        justify-between
        px-5
        pt-4
    "
      >
        <div
          className="
        inline-flex
        items-center
        gap-x-2

        "
        >
          <TbPlaylist size={26} className="text-neutral-400 " />
          <p
            className="
            text-neutral-400
            font-medium
            text-md
            "
          >
            Your Library
          </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
          text-neutral-400 cursor-pointer
          hover:text-white
          transition
          "
        />
      </div>
      <div
        className="
      flex
      flex-col
      mt-4
      px-3
      "
      >
        {songs.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
