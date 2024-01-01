import foto1 from '../img/ucokbadut.jpg'
import foto2 from '../img/kebakar.jpg'
import foto3 from '../img/blokm.jpg'
import foto4 from '../img/feb.jpg'
import foto5 from '../img/ucok.jpg'
import foto6 from '../img/febbagol.jpg'
import foto7 from '../img/febwarnawarni.jpg'
import foto8 from '../img/pjbl.JPG'
import foto9 from '../img/hitamputih.jpg'
import CardDefault from '../components/CardDefault'
import { Link } from "react-router-dom"
import bg from '../img/bubududu.jpg'
import '../index.css'

export default function Home() {


    return (
        <>
            <div className="justify-center items-center h-screen bg-cover" style={{ backgroundImage: `url(${bg})` }}>
                <Link to="/kespes"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-4 place-items-center'>
                    KLIK DISINI BUAT LIAT KESAN PESAN
                </button>
                </Link>

                <h2 className="text-3xl font-semibold mb-4 text-center font-sans">OUR GALLERY</h2>

                <div className=' grid grid-cols-3 gap-5 justify-center items-center'>
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
                        isiCard={"First time Arya jalan sama Elvira"}
                    />
                    <CardDefault
                        imageUrl={foto4}
                        judulCard={"FEB VIBE"}
                        isiCard={"FEB Date"}
                    />
                    <CardDefault
                        imageUrl={foto5}
                        judulCard={"UCOK VIBE"}
                        isiCard={"Arya mode poni"}
                    />
                    <CardDefault
                        imageUrl={foto6}
                        judulCard={"FEB VIBE"}
                        isiCard={"FEB Date edisi bagol"}
                    />
                    <CardDefault
                        imageUrl={foto7}
                        judulCard={"FEB VIBE"}
                        isiCard={"edisi warna warni"}
                    />
                    <CardDefault
                        imageUrl={foto8}
                        judulCard={"PJBL"}
                        isiCard={"DAY 1, hari dimana Arya makin fallin in love dengan elvira (KOK BISA KEBETULAN COUPLE YAK)"}
                    />
                    <CardDefault
                        imageUrl={foto9}
                        judulCard={"FEB VIBE"}
                        isiCard={"FEB, LAGI, tapi edisi 1800an"}
                    />

                </div>
            </div>


        </>
    )
}