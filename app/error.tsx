'use client';

import { useEffect } from 'react';
import { Button } from './_components/ui/button';

interface ErrorProps {
	error: Error;
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);
	return (
		<main className='pt-15 flex min-h-screen flex-col items-center justify-center'>
			<div className='text-center'>
				<p className='text-7xl font-extrabold text-primary lg:text-9xl'>
					500
				</p>
				<h1 className='mt-3 text-4xl font-bold tracking-tight'>
					Something went wrong
				</h1>
				<p className='mt-3 text-lg leading-7 text-black-600'>
					There was an error processing your request.
				</p>
				<div className='mt-3 flex justify-center gap-x-6'>
					<Button
						onClick={() => reset()}
						variant={'default'}
					>
						Try Again
					</Button>
				</div>
			</div>
		</main>
	);
}
