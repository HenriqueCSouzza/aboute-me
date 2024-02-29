"use client";
import React, { useState } from "react";

const withQSDialogFeatures = (WrappedComponent: React.FC) => {
  return function WithQSDialogFeaturesWrapper(props: any) {
    const { undoQueryString, ...rest } = props;
    const [open, setOpen] = useState(true);
    const handleOnExited = () => {
      undoQueryString();
    };
    const handleOnClose = () => {
      handleOnExited();
      setOpen(false);
    };

    return (
      <WrappedComponent
        {...rest}
        open={open}
        onClose={handleOnClose}
        onExited={() => {
          handleOnExited();
          props.onExited?.();
        }}
        onOpen={() => setOpen(true)}
      />
    );
  };
};

export default withQSDialogFeatures;
