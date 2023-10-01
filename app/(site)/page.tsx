import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <div
      className="
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
    "
    >
      <Header>
        <div>
          <h1
            className="
           text-white
           text-3xl
           font-semibold
           "
          >
            Welcome back
          </h1>
          {/* List items start */}
          <div
            className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-3
          mt-4
          "
          >
            <ListItem
              image="/images/liked.png"
              name="Liked song"
              href="Liked"
            />
          </div>
          {/* List items end */}
        </div>
      </Header>
      {/* newest song start */}

      <div
        className="
      mt-2 mb-7 px-6
     "
      >
        <div
          className="
        flex justify-between items-center
      "
        >
          <h1
            className="
            text-white text-2xl font-semibold
          "
          >
            Newest song
          </h1>
        </div>
        <div>List of Song!</div>
      </div>

      {/* newest song end */}
    </div>
  );
}
