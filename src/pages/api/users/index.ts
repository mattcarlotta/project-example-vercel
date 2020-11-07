import { axios } from "~utils/axiosConfig";
import { NextApiRequest, NextApiResponse } from "~types";

const getUsers = async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    await new Promise(resolve => setTimeout(() => resolve(), 1500));

    res.status(200).json({ users: response.data });
  } catch (err) {
    res.status(400).json({ err: err.toString() });
  }
};

export default getUsers;
