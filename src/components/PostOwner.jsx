export const PostOwner = ({ profileImg, userName, postText, likeNum }) => {
  return (
    <div>
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src={profileImg}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5">{userName}</span>
        </div>

        <span>{postText}</span>

        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span className="text-muted">{likeNum}</span>
        </div>
        <hr className="m-0 border" />
      </div>
    </div>
  );
};
