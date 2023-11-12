import React from "react";
import { useState } from "react";
import { Label, Textarea, Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import axios from "axios";
export default function Comment() {
  const [name, setName] = useState("");
  const [comments, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Comments: comments,
    };
    console.log(data);
    axios
      .post(
        "https://sheet.best/api/sheets/1afbe746-5400-45b5-8e9d-605c76ca84cc",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setComment("");
      });
  };

  return (
    <div className="flex items-center  justify-center h-56 mt-0">
      <form onSubmit={handleSubmit} className="w-3/4">
        <div className="block">
          <Label
            htmlFor="comment"
            value="Your Comment"
            className="text-fuchsia-400"
          />
        </div>
        <Textarea
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name..."
          required
          rows={1}
        />
        <Textarea
          id="comment"
          type="text"
          value={comments}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
          required
          rows={2}
        />
        <Button outline gradientDuoTone="purpleToPink" type="submit">
          <HiOutlineArrowRight className="h-10 w-6" />
        </Button>
      </form>
    </div>
    
  );
}
