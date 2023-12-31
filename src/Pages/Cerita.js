import fotoone from '../img/badut.jpg'
import CardBulet from '../components/CardBulet'
import CardDefault from '../components/CardDefault'
import DarkMode from '../components/DarkMode/DarkMode'

export default function Cerita() {


    return (
        <>

            <h2 className=" gap-4">Home Page</h2>
            <div className=' grid grid-cols-3 gap-5'>
                <CardDefault imageUrl={fotoone} />
                <CardDefault imageUrl={fotoone} />
                <CardDefault imageUrl={fotoone} />

            </div>


            
            <DarkMode/>


        </>
    )
}