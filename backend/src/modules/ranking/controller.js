import { getClassRanking } from "./ranking.service.js";

export const classRankingController = async (req, res) => {
  try {
    const { classId } = req.params;

    const ranking = await getClassRanking(classId);

    res.status(200).json({
      success: true,
      data: ranking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};