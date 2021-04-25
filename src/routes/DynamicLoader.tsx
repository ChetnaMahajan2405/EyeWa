import React, { lazy, Suspense } from "react";
import { PageLoader } from "./index";

const DynamicLoader = (path: () => Promise<any>): React.FC => {
  const AsyncComponent: React.FC = lazy(path);

  return (props) => {
    return (
      <Suspense fallback={<PageLoader />}>
        <AsyncComponent {...props} />
      </Suspense>
    );
  };
};

export default DynamicLoader;
