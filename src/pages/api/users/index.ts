import axios from "axios";
import { NextApiRequest, NextApiResponse } from "~types";

const getUsers = async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    res.status(200).json({ users: response.data });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

export default getUsers;
