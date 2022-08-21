const Navbar = () => {
    return ( 
        <div className="nav">

            <div className="container justify-between border">

                <div className="row">

                    <div className="col-sm-3">
                    <h3 className='text-4xl font-bold text-purple-400'>Happy Toes</h3>
                    </div>

                    <div className="col-sm-9 border flex justify-end">

                        <ul className='flex-li'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        </ul>

                    </div>

                </div>

            </div>
            
        </div>
     
     );
}
 
export default Navbar;