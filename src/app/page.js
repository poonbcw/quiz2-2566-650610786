"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          profileImg="/profileImages/me.jpg"
          userName="Poon Boonchoowit 650610786"
          postText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum="100 คน"
        />

        {/* Comment Example */}
        {comments.map((comment) => (
          <Comment
            key={comment.username}
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum > 0 ? comment.likeNum : ""}
            replies={
              comment.replies !== []
                ? comment.replies.map((reply) => {
                    <Reply
                      key={reply.username}
                      userImagePath={reply.userImagePath}
                      username={reply.username}
                      replyText={reply.replyText}
                      likeNum={reply.likeNum}
                    />;
                  })
                : ""
            }
          />
        ))}

        {/* Reply Example */}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
