import { NavLink, Outlet, useLocation } from 'react-router-dom';

const pages = [
    { name: 'HomePage', path: '/' },
    { name: 'Cart', path: '/cart' },
    { name: 'Market', path: '/market' },
    { name: 'Settings', path: '/settings' },
    { name: 'Logout', path: '/logout' },
];

const Home = () => {
  const location = useLocation();
  console.log(location)
  const isHome = location.pathname === '/';
  // console.log(isHome);

    return (
        <div className="flex min-h-screen bg-gray-200 gap-1">
            <div className="flex flex-col gap-1 w-1/6">
                {/* <h1 className="text-3xl font-bold underline">HI MOM</h1> */}

              {pages.map((page) => {
                    return (
                        <>
                            <div className="h-15 p-10 flex justify-center items-center bg-white">
                                <NavLink key={page.name} to={page.path} className={({isActive}) => {
                                  return isActive ? 'font-bold' : ''
                                }}>
                                    {page.name}
                                </NavLink>
                            </div>
                        </>
                    );
                })}
            </div>
            
            <div className="flex-1">
                <Outlet />
            </div>
            {isHome && <h1 className='fixed left-1/2 ml-10 font-bold text-3xl text-capitalize'>HomePage</h1>}
        </div>
    );
};

export default Home;
