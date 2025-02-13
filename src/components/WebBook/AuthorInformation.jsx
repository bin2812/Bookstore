import BookOfAuthor from "./BookOfAuthor";

const AuthorInformation = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-8 p-8 px-[15%]">
      <div className="flex-1 flex gap-y-6 flex-col text-right">
        <p className="text-red-600 font-semibold text-sm uppercase">
          FEATURED AUTHOR
        </p>
        <h2 className="text-4xl font-bold">
          Hailey <br /> Nguyen
        </h2>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="w-1/3">
        <img
          className="object-cover w-full"
          src="https://lh3.googleusercontent.com/BxRNSLEenedtHgbQXEc0WkR-YzJXWFo-emOAn-7el1kxHtwFBQETTcQhcOXoboUHDTYttKzI0Afre1RvJd5TfVzacSpVgIoiBg"
        />
      </div>
      <BookOfAuthor />
    </div>
  );
};

export default AuthorInformation;
