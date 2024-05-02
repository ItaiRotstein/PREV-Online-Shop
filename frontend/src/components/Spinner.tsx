import { ClipLoader } from "react-spinners";

const Spinner = ({ isLoading }: { isLoading: boolean; }) => {

    const override = {
        display: 'block',
        margin: '100px auto'
    };

    return (
        <>
            <ClipLoader
                color="#4338ca"
                loading={isLoading}
                cssOverride={override}
                size={100}
            />
        </>
    );
};
export default Spinner;