"use client";
import { useEffect, useRef, useState } from "react";
import Avatar from "../ui/Avatar";
import { fromNow } from "@/utils/helpers";
import dynamic from "next/dynamic";

const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});
const Comment = ({ review, isModal, innerRef = null }) => {
  const [isLongComment, setIsLongComment] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setIsLongComment(contentRef.current.clientHeight >= 80);
    }
  }, []);

  return (
    <div className="space-y-2 mb-10 mr-[8%]" ref={innerRef}>
      <div className="flex items-center gap-4">
        <div>
          {/* TODO */}
          <Avatar src="/images/placeholder.jpg" />
        </div>
        <div>
          <div>{review.userName}</div>
          <div className="text-xs text-neutral-500 font-light">
            {review.nation}
          </div>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <div className="text-xs">{fromNow(review.writeDate)}</div>
        <StarRatings
          rating={review.totalScore}
          starDimension="10px"
          starSpacing="3px"
          starRatedColor="#008489"
        />
      </div>
      <p
        ref={contentRef}
        className={`leading-5 font-light ${
          isModal ? "" : "max-h-20 text-overflow"
        } `}
      >
        {review.content}
      </p>
      {/* TODO - comment modal */}
      {!isModal && isLongComment && (
        <p className="underline text-sm cursor-pointer mt-2 font-semibold">
          더 보기
        </p>
      )}
    </div>
  );
};

export default Comment;
