import {Button} from './Button';
export const Header = ()=> {
    return(
        <header className="bg-background sticky top-0 z-50 border">
            <div className="flex justify-between p-4 items-center max-w-6xl mx-auto">
                <div className="flex items-center gap-3">
                    <div className='text-2xl'>🔐</div>
                    <h1 className='text-xl font-bold'>Emoji Auth</h1>
                </div>
                <nav>
                    <ul className="hidden md:flex gap-6">
                        <li>Problem</li>
                        <li>Solution</li>
                        <li>Research</li>
                        <li>About</li>
                    </ul>
                </nav>
                    <button className='bg-blue-500 p-2 rounded-lg text-sm text-background font-bold'>Try Demo</button>
            </div>
        </header>
    )
}