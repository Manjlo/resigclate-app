import Logo from "../../assets/icons/logo.png";

function CreatePointForm() {
    return (
        <div className='w-full bg-transparent h-full grid grid-rows-5'>
            <div className='flex justify-between m-4 mr-6 ml-6'>
                <span>←</span>
                <img className='w-[25px] h-[25px]' src={Logo} alt="Logo" />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default CreatePointForm;