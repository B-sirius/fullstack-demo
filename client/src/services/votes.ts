import customAxios from "./customAxios";

type VoteRes = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
  likeCount: number;
  liked: boolean;
};
export const getVotes = async () =>
  (await customAxios.get<VoteRes[]>("/votes")).data;

export const upvote = async (voteId: number) =>
  (
    await customAxios.post("/likes/add", {
      voteId,
    })
  ).data;

export const unvote = async (voteId: number) =>
  (
    await customAxios.post("/likes/delete", {
      voteId,
    })
  ).data;

export const createVote = async (title: string, description: string) => {
  await customAxios.post("/votes/create", {
    title,
    description,
  });
}

export const getVoteDetail = async (voteId: number) => {
  return (await customAxios.get<VoteRes>(`/votes/${voteId}`)).data;
}