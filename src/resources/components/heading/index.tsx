import { useHistory } from "react-router-dom";
import { HeadingOptions } from "./types";

const Heading: React.FC<HeadingOptions> = ({
  title,
  buttonTitle,
  buttonActionRoute,
  onClick,
  buttonIcon,
}) => {
  const history = useHistory();

  const replaceRoute = () => {
    if (buttonActionRoute) history.replace(buttonActionRoute);
  };

  return (
    <>
      <div className="text-center flex justify-between">
        <h1 className="text-3xl text-black pb-6">{title}</h1>

        {buttonTitle && (
          <button
            type="button"
            className="bg-gray-700 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-1 rounded"
            onClick={onClick ?? replaceRoute}
          >
            <i className={buttonIcon}></i> <span>{` ${buttonTitle}`}</span>
          </button>
        )}
      </div>
    </>
  );
};

export default Heading;
