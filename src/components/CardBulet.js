export default function CardBulet({imageUrl}){
    return(
    
                        <div
                            className="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
                            <div className="flex flex-row px-2 py-3 mx-3">
        
                                <div className="flex flex-col mt-1 mb-2 ml-4">
                                    <div className="text-sm text-gray-600">Garlic Butter Steak Bites</div>
                                    <div className="flex w-full mt-1">
                                        <div className="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                                            New York
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            • By 7th corner
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
                                <img className="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                                    src={imageUrl}/>
        
                            </div>
        
                            <div className="mb-5 border-t border-gray-50">
                                <div className="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                                    <div className="flex mb-2 mr-4 font-normal text-gray-700 ">Sales:<div
                                            className="ml-1 text-gray-500 text-ms"> 30k</div>
                                    </div>
                                    <div className="flex mb-2 mr-4 font-normal text-gray-700 ">Recipies: <div
                                            className="ml-1 text-gray-500 text-ms"> 60k</div>
                                    </div>
                                    <div className="flex mb-2 mr-4 text-gray-700 ">Customers: <div
                                            className="ml-1 text-gray-500 text-ms"> 120k</div>
                                    </div>
                                </div>
        
                            </div>
        
                        </div>
            
    )
}