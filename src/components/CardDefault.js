export default function CardDefault({ imageUrl, judulCard, isiCard }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
        <img className="rounded-t-lg" src={imageUrl} alt="" />
      <div className="p-8">
      
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{judulCard}</h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{isiCard}</p>
      </div>
    </div>
  );
}