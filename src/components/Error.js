import { ErrorNotice, ErrorText } from "./StyledComponents";

const ErrorAlert = () => {
  return (
    <ErrorNotice>
      <ErrorText>⚠️ The data is unavailable</ErrorText>
    </ErrorNotice>
  );
};

export default ErrorAlert;
