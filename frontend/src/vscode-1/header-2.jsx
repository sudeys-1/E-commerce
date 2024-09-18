import {Link} from "react-router-dom"

function Header2 (){
    return <div className=" fixed w-full font-primaryFont ">

<div className="flex justify-around bg-primaryColor   sm:h-[100px]  ">



        <h1 className="text-secondaryColor pt-[20px] pl-[30px] text-[40px] font-bold "> CART PAGE </h1>
        <ul className="flex pt-[30px] text-secondaryColor text-[25px] gap-[50px] ">

            <Link to="/"><li>Home</li></Link> 
            <Link to="/About"><li>About</li></Link> 

        </ul>
        
</div>





</div>

}

export default Header2 