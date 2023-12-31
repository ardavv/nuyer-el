import badut from '../img/ucokbadut.jpg'



export default function CardDefault({ imageUrl, judulCard, isiCard }) {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
      <a href="#">
        <img class="rounded-t-lg" src={imageUrl} alt="" />
      </a>
      <div class="p-8">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{judulCard}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{isiCard}</p>
      </div>
    </div>
  );
}