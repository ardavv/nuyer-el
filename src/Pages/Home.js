import foto1 from '../img/badut.jpg'
import CardBulet from '../components/CardBulet'
import CardDefault from '../components/CardDefault'
import DarkMode from '../components/DarkMode/DarkMode'
import {Link } from "react-router-dom"

export default function Home() {


    return (
        <>
            <div className=' grid grid-cols-3 gap-5'>
                <CardDefault 
                imageUrl={foto1}
                judulCard={"Foto bareng pertama kita"} 
                isiCard={"Lorem ipsum"}
                />
                <CardDefault imageUrl={foto1} />
                <CardDefault imageUrl={foto1} />

            </div>

            <Link to="/kespes"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
              KLIK DISINI BUAT LIAT KESAN PESAN
            </button>
            </Link>


            
            <DarkMode/>


        </>
    )
}