import welcome from '../assets/welcome.png';

const Start = ({ onNextPage }) => {
    return (
        <div className='justify-center'>
            <h1 className='font-bold text-xl py-5'>General English Test</h1>
            <div className='inline-block'>
                <div class="inline-flex mx-6 card w-64 bg-gray-100 shadow-md">
                    <div class="card-body">
                    <p>Total questions</p>
                    <h2 class="text-l font-bold">10 questions</h2>
                    </div>
                </div>
                <div class="inline-flex mx-6 card w-64  bg-gray-100 shadow-md">
                    <div class="card-body">
                    <p>Total duration</p>
                    <h2 class="text-l font-bold">5:00 min</h2>
                </div>
            </div>
            </div>

            <div className='flex justify-center'>
                <img src={welcome} className='' alt="Welcome" />
            </div>
            <div>
                <button onClick={onNextPage} className='btn btn-primary my-3'>Start the test</button>
            </div>
        </div>
    );
};

export default Start;
