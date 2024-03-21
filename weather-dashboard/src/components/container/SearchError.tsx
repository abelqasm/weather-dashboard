interface Props {
  error: string;
}

const Error = ({ error }: Props) => {
  return (
    <div className="w-full h-full p-20 text-center rounded-xl shadow-lg shadow-gray-700">
      <p className="font-black text-xl md:text-3xl">
        your Request failed because of the following reason
      </p>
      <span className="text-red-900 text-lg md:text-2xl">{error} </span>
    </div>
  );
};

export default Error;
