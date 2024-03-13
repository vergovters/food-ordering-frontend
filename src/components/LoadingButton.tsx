import { Loader2 } from "lucide-react";

const LoadingButton = () => {
  return (
    <button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading
    </button>
  );
};

export default LoadingButton;