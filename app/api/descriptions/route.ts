import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { content, postId, categoryId } = req.body;

    if (!content || !postId || categoryId === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const newDescription = await prisma.description.create({
        data: {
          content,
          postId,
          categoryId,
        },
      });
      return res.status(201).json(newDescription);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create description" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
