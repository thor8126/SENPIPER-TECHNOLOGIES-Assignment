import animationData from "./icon.json";
import Lottie from "react-lottie";

export default function SuccessPage({ onClose }) {
  const defaultOptions = {
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-100 overflow-hidden z-50 flex items-center justify-center">
        <div className="bg-white p-6 md:max-w-md mx-auto">
          {/* <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg> */}
          <Lottie options={defaultOptions} height={200} width={200} />
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Thank you for providing the Feedback!
            </h3>
            <p className="text-gray-600 my-2">
              We will work towards improving your experience.
            </p>
            <p>Have a great day!</p>
            <div className="py-10 text-center">
              <button
                onClick={onClose}
                className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
