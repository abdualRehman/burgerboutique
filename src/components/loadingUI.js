import { CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

const LoadingIndicator = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <Stack
        sx={{
          width: "100%",
          height: "100vh",
        }}
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Stack>
    );
  }

  // Loading complete, you can render your content here
  return <div>Loading complete!</div>;
};

export default LoadingIndicator;
