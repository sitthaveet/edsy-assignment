import thankyou from '../assets/thankyou.png';

const Finish = () => {
    return (
        <div className='my-7'>
            <h1 className='font-bold text-xl py-5'>Great Job!</h1>
            <p className='text-m font-semibold'>You have completed the test. Your test result will be sent to your registered email.</p>

            <div className='flex justify-center'>
                <img src={thankyou} className='' alt="Welcome" />
            </div>
        </div>
    );
};

export default Finish;
