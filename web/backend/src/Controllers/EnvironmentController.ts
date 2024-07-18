import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export async const getValueAnswers = async (req: Request, res: Response) => {
  try {
    const { questionID, userID, content, impact, effort } = req.body

    const valueAnswers = await prisma.answer.create({
      data: {
        questionID: Number(questionID),
        userID: Number(userID),
        content: content,
        impact: Number(impact),
        effort: Number(effort)
      }
    })

  } catch (error) {
    console.error(error)
  }
}

values String?
  mission String?
  vision String?

  strengths String?
  problems String?
  opportunities String?
  threats String?