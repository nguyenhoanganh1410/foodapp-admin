import { FC } from "react";
import { Spinner } from "..";

const LoadingPage: FC = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50">
      <Spinner />
    </div>
  )
}

export default LoadingPage;