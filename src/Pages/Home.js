import foto1 from '../img/ucokbadut.jpg'
import foto2 from '../img/kebakar.jpg'
import foto3 from '../img/blokm.jpg'
import foto4 from '../img/feb.jpg'
import foto5 from '../img/ucok.jpg'
import foto6 from '../img/febbagol.jpg'
import foto7 from '../img/febwarnawarni.jpg'
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
                judulCard={"UCOK"} 
                isiCard={"EDISI BADUT"}
                />
                <CardDefault 
                imageUrl={foto2} 
                judulCard={"FEB VIBE"} 
                isiCard={"EDISI KEBAKAR"}
                />
                <CardDefault 
                imageUrl={foto3} 
                judulCard={"BLOK M VIBE"} 
                isiCard={"Lorem ipsum"}
                />
                <CardDefault 
                imageUrl={foto4} 
                judulCard={"FEB VIBE"} 
                isiCard={"Lorem ipsum"}
                />
                <CardDefault 
                imageUrl={foto5} 
                judulCard={"UCOK VIBE"} 
                isiCard={"LAGI"}
                />
                <CardDefault 
                imageUrl={foto6} 
                judulCard={"FEB VIBE"} 
                isiCard={"edisi bagol"}
                />
                <CardDefault 
                imageUrl={foto7} 
                judulCard={"FEB VIBE"} 
                isiCard={"edisi warna warni"}
                />

            </div>

            <Link to="/kespes"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
              KLIK DISINI BUAT LIAT KESAN PESAN
            </button>
            </Link>


            
            <DarkMode/>


        </>
    )
}