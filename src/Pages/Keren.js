import React from "react";
import {Link } from "react-router-dom"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import CardFlip from '../components/CardFlip'

export default function Keren() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className=" bg-pink-100">
                <div className="flex flex-col justify-center items-center gap-4 ">
                    <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className={`border-b-0 transition-colors ${open === 1 ? "text-pink-500 hover:!text-pink-700" : ""
                                }`}
                        >
                            First Impression Arya ke Elvira
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            Nyambung sama cerita aku sebelumnya karena pertama kali aku menyadari keberadaan kamu waktu zoom yang kamu pakai filter jenggot, 
                            jadi saat itu first impression kamu adalah cewe barbar gitu. 
                            Tapi kalo first impression setelah kita interaksi itu saat kita sekelompok PKN, 
                            saat itu first impression aku ke kamu itu kamu cewe ambis, entah kenapa itu otomatis muncul di kepala aku.
                            Oiya kamu itu keliatan judes HUUUUU, tapi sekarang lucu sih sayang akuu.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className={`border-b-0 transition-colors ${open === 2 ? "text-pink-500 hover:!text-pink-700" : ""
                                }`}
                        >
                            Yang Arya Kaget Setelah Kenal Elvira DORRR! 🎉
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            Diluar ekspektasi awal aku, kamu itu baikkkkkkk bangetttttt, mulai dari kamu suka kasih aku susu, apel, dan coklat, 
                            yang bikin spesial adalah kamu selalu kasih surat setiap ngasih sesuatu ke aku wkwk (kecuali apel sih),
                            btw aku masih simpan beberapa suratnya hehe.  <strong>MAKASIH YA SAYANGG!</strong>.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className={`border-b-0 transition-colors ${open === 3 ? "text-pink-500 hover:!text-pink-700" : ""
                                }`}
                        >
                            Apa yang paling berkesan dari Elpiruy
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                        TIAP HARIKU BERSAMAMUPUN BERKESANN ELLLL, <strong>SLEBEW!</strong> walaupun sekarang cuma chatting 24/7.
                        Tadi itu serius, tapi kalo ditanya yang berkesan dari kita adalah, setiap kita pergi kemanapun, 
                        entah ke blok m entah ke UI atau hanya sekadar ke kantin dan feb, aku suka momen itu. Jadi, kapan kita jalan sayang? hhe
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 4} className="rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(4)}
                            className={`border-b-0 transition-colors ${open === 4 ? "text-pink-500 hover:!text-pink-700" : ""
                                }`}
                        >
                            Kenapa akhirnya aku mau komitmen
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                        Kamu pun tahu bahwa ini bukan rencana awal aku el di kuliah ini. Rencana aku adalah fokus kuliah, karir, baru percintaan. 
                        But, setelah aku kenal kamu lebih dalam, aku yakinnnnn 99% karena kesempurnaan hanya milik Allah aku yakin kamu perempuan yang aku ingin selama ini
                        Segala hal ada di diri kamu. Dengan berkomitmen seperti ini, aku ingin mencintaimu seutuhnya anjay, gabisa aku kata kata gini wkwk. Tapi kalo kamu mau
                        mengapa ini disarankan, berikut adalah sumbernya:<br/>
                        https://www.alodokter.com/ini-dia-berbagai-manfaat-pacaran-untuk-kesehatan 
                        <br/>
                        https://manfaat.co.id/manfaat-pacaran <br/>
                        https://living.aahs.org/heart-vascular/love-relationships-and-health-the-surprising-benefits-of-being-in-love/
                        
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 5} className="rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(5)}
                            className={`border-b-0 transition-colors ${open === 5 ? "text-pink-500 hover:!text-pink-700" : ""
                                }`}
                        >
                            Tantangan terbesar dalam hubungan ini
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                        Diawal adalah aku belum memahami sifat kamu itu kayak gimana, jadi perlu adaptasi dulu dengan sifat sifat kamu. Selain itu,
                        Ini adalah first time aku benar benar cinta dan komitmen dengan orang, jadi aku pun perlu mengerti gimana caranya aku menyikapi sesuatu beda dari biasanya.
                        Tantangan saat ini adalah karena kamu suka tiba tiba nanya kamu sayang aku ga? Jadi aku harus tetap sabar menjawab <strong>IYAA SAYANG AKU SAYANG KAMUUU POREPER ❤️</strong>
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 6} className="rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(6)}
                            className={`border-b-0 transition-colors ${open === 6 ? "text-pink-500 hover:!text-pink-700" : ""
                                }`}
                        >
                            Momen paling bahagia
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            Lah ini mah mirip, momen paling bahagia aku setiap kali kita bareng, entah jalan, makan bareng, ngewarnet di perpus bareng, atau hanya sekadar ngobrol di kelas.
                            Maybe saat ini aku sadar, bahwa aku selalu senang ketika menghabiskan waktu bersama walaupun itu hanya sekadar ngobrol
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 7} className="rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(7)}
                            className={`border-b-0 transition-colors ${open === 7 ? "text-pink-500 hover:!text-pink-700" : ""
                                }`}
                        >
                            Perasaan aku
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            Kalo bulan bisa ngomong, bulan juga gabisa ungkapin perasaan aku saat ini cuy. SENENG BANGETTT, SAYANG BANGETTT, KANGEN BANGETTT HEHEHE. Jadi, kapan?mwehe
                        </AccordionBody>
                    </Accordion>    
                </div>
            </div>
            <div className=" flex items-center ">

                <CardFlip 
                textFront={"KESAN"} 
                textBack={
                    "Sebelum nulis ini aku sempat searching dulu apa itu kesan pesan. Sekarang aku paham kesan ini adalah sesuatu yang aku rasain selama ini. Seperti yang aku jelasin sebelumnya, terima kasih banyak banyak el, dengan aku sama kamu hatiku tenang entah kenapa, aku bangun setiap harinya dengan perasaan senang dan maybe semangat karena tiap hari aku harus berhadapan dengan orang cantik, gajelas, dan yang utama ANEH. Aku selalu suka setiap kita ngobrol soal hal gajelas sekalipun, sampai ke funfact funfactan. Aku juga seneng setiap kamu nanya KAMU SAYANG AKU GA? walaupun jawaban aku selalu sama IYA SAYANGGG, maybe next aku harus buat if(elvira nanya aku sayang kamu){jawab iya sayang}, aku juga senang ketika kamu semangatin aku setiap segala hal yang aku lakukan. Aku juga suka kalo kamu ngabarin aku dengan kirim foto atau bahkan vn aku. Aku juga suka kalo kamu marah. WKWKWK KAYAKNYA AKU SUKA SEMUA DARI KAMU DEH. Oiya aku gasuka kalo kamu tiba tiba ajak aku putus HUH, KOMUNIKASI NUMERO UNO"
                }
                />
                <CardFlip 
                textFront={"PESAN"} 
                textBack={
                    "Sayang, kalau nanti kita ada masalah, ngomong, kalau nanti salah satu dari kita bosen, ngomong, kalo ada yang kamu gasuka dari aku, ngomong. Dari situ aku berharap kita bisa introspeksi diri kita jadi lebih baik lagi. Pesan aku selanjutnya adalah AKU SAYANG KAMUUUUUU CANTIKKKKKKK ❤️❤️❤️❤️❤️❤️"
                }
                />
            </div>

            <Link to="/newyear"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
              KLIK DISINI BUAT KE COUNTDOWN TAHUN BARU
            </button>
            </Link>



        </>
    );
}