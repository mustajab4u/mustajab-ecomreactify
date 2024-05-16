import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Icon = ({ Icon }) => <Icon className='mr-1 inline text-violet-500' />;

const Stars = ({ stars }) => {
    return (
        <span>
            {Array.from({ length: 5 }, (_, index) => {
                const number = index + 0.5;
                return stars >= index + 1 ? (
                    <Icon Icon={BsStarFill} />
                ) : stars >= number ? (
                    <Icon Icon={BsStarHalf} />
                ) : (
                    <Icon Icon={BsStar} />
                );
            })}
        </span>
    );
};

export default Stars;
