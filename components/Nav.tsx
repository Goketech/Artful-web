import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className='flex flex-row items-center justify-between p-4'>
                <h1 className='font-snell text-5xl pl-6'>Artful</h1>
                <div className='font-sans text-lg font-bold flex gap-3'>
                    <span>About us</span>
                    <span>Discover</span>
                </div>
                {/* <div>
                <button>Log In</button>
                <button>Sign Up</button>
                </div> */}
            </nav>
            <hr />
        </>
    )
}

export default Nav