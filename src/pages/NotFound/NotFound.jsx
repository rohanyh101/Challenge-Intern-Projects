import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='flex flex-col gap-3 items-center justify-center h-screen'>
            <h1 className='font-bold mb-3 text-3xl'>Oops!</h1>
            <p className='text-black'>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

            <Link className='text-sm text-blue-600' to="/">return to the main page...</Link>
        </div>
    );
};

export default NotFound;
