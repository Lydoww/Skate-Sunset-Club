import React from "react";
import Loader from "@/ui/Loader/Loader";

interface LoadingWrapperProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const LoadingWrapper = ({ isLoading, children }: LoadingWrapperProps) => {
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-white z-50 h-full">
        <Loader />
      </div>
    );
  }
  return <>{children}</>;
};

export default LoadingWrapper;
