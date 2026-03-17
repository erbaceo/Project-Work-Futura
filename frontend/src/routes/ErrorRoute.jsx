import { useRouteError } from 'react-router';

export default function ErrorRoute() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="container mt-5 pt-5">
            <div className="text-center">
                <h1 className="mb-4">Error</h1>
                <p className="lead mb-3">
                    {error?.status === 404
                        ? 'Page not found.'
                        : error?.statusText || 'An unexpected error occurred.'}
                </p>
                <p className="mb-4">
                    {error?.data || 'Please check the URL and try again.'}
                </p>
                <a href="/" className="btn btn-primary">
                    Return Home
                </a>
            </div>
        </div>
    );
}