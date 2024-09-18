import { SuspenseProps, Suspense } from "react";
import { FullScreenLoader } from "./full-screen-loader";

export const Loadable = <T,>(Component: React.ComponentType<T>) => {
  return (props: SuspenseProps & T) => (
    <Suspense fallback={<FullScreenLoader />}>
      <Component {...props} />
    </Suspense>
  );
};
