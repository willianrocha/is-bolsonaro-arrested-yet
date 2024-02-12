import Clock from '../components/clock/clock';
import './page.css';

export default function Page() {
    return <div className='container'>

        <span className='text-block'>
            <div>
                <h1 className='status'> Amanhã ainda não chegou </h1>
            </div>
        </span>
        <div>
            <span>
                <Clock />
            </span>
        </div>
    </div>
}

