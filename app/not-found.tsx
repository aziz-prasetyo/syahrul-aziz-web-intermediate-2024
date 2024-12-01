import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '~/app/_components/ui/button';

const NotFound = () => {
	return (
		<main className='grid min-h-dvh place-items-center'>
			<section>
				<div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
					<div className='mx-auto max-w-screen-sm text-center'>
						<h1 className='mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl'>
							404
						</h1>
						<p className='mb-4 text-3xl font-bold tracking-tight'>
							Page Not Found
						</p>
						<p className='mb-4 text-lg font-light text-foreground'>
							Sorry, we couldn&apos;t find the page you&apos;re
							looking for.
						</p>
						<div className='mt-12 flex items-center justify-center gap-x-6'>
							<Button asChild>
								<Link href='/'>
									<MoveLeft className='mr-2 h-4 w-4' /> Back
									to Home
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default NotFound;
