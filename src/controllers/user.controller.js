import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  console.log(fullName);

  if (
    [fullName, email, username, password].some((field) => field.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  res.status(200).json({
    message: "ok12",
  });
});

export { registerUser };
