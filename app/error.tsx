'use client';

import { useEffect } from 'react';

import { Button } from '~/app/_components/ui/button';

interface ErrorProps {
	error: Error;
	reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<main className='grid min-h-dvh place-items-center'>
			<section>
				<div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
					<div className='mx-auto max-w-screen-sm text-center'>
						<h1 className='mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl'>
							500
						</h1>
						<p className='mb-4 text-3xl font-bold tracking-tight'>
							Internal Server Error
						</p>
						<p className='mb-4 text-lg font-light text-muted-foreground'>
							We are already working to solve the problem.
						</p>
						<Button
							onClick={() => reset()} // Attempt to recover by trying to re-render the segment
						>
							Try Again
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Error;
