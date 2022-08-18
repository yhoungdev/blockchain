const DashboardLay =({children }) => {

    return (
        <>
        
            <div>


                {/* divide this div */}
                <div className={'sidebar'} >
                    this is the bar 
                </div>

                {/* main bar */}
                <div className={'main'} >
                     {children}
                </div>


            </div>
        
        </>
    )

}

export default DashboardLay