import CoffeeCup from '../../public/coffee.png';

export default function BuyMeCoffee() {
    return (
        <div className='absolute top-70 bg-[#fff] left-0 pr-10 border border-[#000]/20 h-10 flex justify-start pl-3 items-center rounded-r-3xl coffeecup'>
            <img src={CoffeeCup} className='w-5 h-5'/>
        </div>
    )
}
